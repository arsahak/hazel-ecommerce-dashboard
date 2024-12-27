"use client";
import {
  getProductCategory,
  productCategoryDelete,
} from "@/app/action/category";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { toast } from "react-toastify";

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  createdAt: string;
  status: string;
}

interface Pagination {
  totalPages: number;
  currentPage: number;
  pageSize: number;
  totalItems: number;
}

const CategoryList: React.FC = () => {
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const fetchCategories = async (search = "", page = 1, limit = 5) => {
    setLoading(true);
    setError(null);
    try {
      const result = await getProductCategory(search, page, limit);
      if (result.ok) {
        setCategories(result.categories);
        setPagination(result.pagination);
      } else {
        setError(result.error || "Failed to fetch categories.");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories(searchTerm, currentPage, 5);
  }, [searchTerm, currentPage]);

  const handlePageChange = (page: number) => {
    if (pagination && page >= 1 && page <= pagination.totalPages) {
      setCurrentPage(page);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  const getPageNumbers = () => {
    if (!pagination) return [];
    return Array.from({ length: pagination.totalPages }, (_, i) => i + 1);
  };

  const categoryDeleteHandler = async (id: string) => {
    setLoading(true);

    try {
      const result = await productCategoryDelete(id);

      if (result.ok) {
        toast.success("Category deleted successfully!");
      } else {
        setError(result.error || "Failed to delete category");
        toast.error("Failed to delete category");
      }
    } catch (err) {
      console.error("Error during deletion:", err);
      setError("An unexpected error occurred.");
      toast.error("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center bg-white p-4">
        <form className="lg:w-[30%]">
          <div className="relative">
            <input
              type="search"
              value={searchTerm}
              onChange={handleSearch}
              className="block w-full p-3 ps-10 text-lg text-gray-900 border border-gray-200 rounded-lg bg-white focus:ring-border-none focus:border-none"
              placeholder="Search category"
            />
          </div>
        </form>
        <button
          onClick={() => router.push(`/category/add-category`)}
          className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/60 focus:outline-none"
        >
          Add New Category
        </button>
      </div>

      <div className="bg-white w-full border overflow-x-auto mt-4 text-sm">
        {loading ? (
          <div className="p-4 text-center">Loading categories...</div>
        ) : error ? (
          <div className="p-4 text-red-600">{error}</div>
        ) : categories.length > 0 ? (
          <table className="w-full border-collapse">
            <thead className="bg-gray-50">
              <tr className="text-left">
                <th className="py-4 px-4 text-sm font-medium">NAME</th>
                <th className="py-4 px-4 text-sm font-medium">SLUG</th>
                <th className="py-4 px-4 text-sm font-medium">DESCRIPTION</th>
                <th className="py-4 px-4 text-sm font-medium">Created At</th>
                <th className="py-4 px-4 text-sm font-medium">STATUS</th>
                <th className="py-4 px-4 text-sm font-medium">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category._id} className="border-t hover:bg-gray-50">
                  <td className="py-4 px-4">{category.name}</td>
                  <td className="py-4 px-4">{category.slug}</td>
                  <td className="py-4 px-4">{category.description}</td>
                  <td className="py-4 px-4">{category.createdAt}</td>
                  <td className="py-4 px-4">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                        "active" === "active"
                          ? "bg-blue-600 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      active
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      className="bg-yellow-100 hover:bg-yellow-200 p-1.5 rounded-lg mr-2"
                      onClick={() =>
                        router.push(`/category/edit-category/${category._id}`)
                      }
                    >
                      <FiEdit className="text-[#D5AD45]" />
                    </button>
                    <button
                      type="button"
                      onClick={() => categoryDeleteHandler(category._id)}
                      className="bg-red-100 hover:bg-red-200 p-1.5 rounded-lg"
                    >
                      <RiDeleteBin6Fill className="text-red-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="p-4 text-center my-48">No categories found.</div>
        )}

        {/* Pagination */}
        <div className="mb-5">
          {" "}
          {pagination && (
            <nav
              className="flex justify-end mt-8 px-12"
              aria-label="Pagination"
            >
              <ul className="inline-flex -space-x-px text-base h-10">
                <li>
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg ${
                      currentPage === 1
                        ? "cursor-not-allowed opacity-50"
                        : "hover:bg-gray-100 hover:text-gray-800"
                    }`}
                  >
                    Previous
                  </button>
                </li>
                {getPageNumbers().map((page) => (
                  <li key={page}>
                    <button
                      onClick={() => handlePageChange(page)}
                      className={`flex items-center justify-center px-5 h-10 leading-tight ${
                        currentPage === page
                          ? "text-white bg-primary border-primary"
                          : "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                      }`}
                    >
                      {page}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === pagination.totalPages}
                    className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg ${
                      currentPage === pagination.totalPages
                        ? "cursor-not-allowed opacity-50"
                        : "hover:bg-gray-100 hover:text-gray-800"
                    }`}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
