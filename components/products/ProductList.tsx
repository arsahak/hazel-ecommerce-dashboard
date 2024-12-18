// "use client";
// import { usersDemoData } from "@/config/data";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { FiEdit } from "react-icons/fi";
// import { GoSearch } from "react-icons/go";
// import { RiDeleteBin6Fill } from "react-icons/ri";
// import ClientDeletedModal from "../shared/ui/Modal/ClientDeletedModal";

// const ProductList = () => {
//   const [clientDeletedModal, setClientDeletedModal] = useState(false);
//   const router = useRouter();

//   return (
//     <div className="">
//       <div className="flex items-center justify-between py-4">
//         <div className="flex items-center space-x-4">
//           <button className="px-4 py-2.5 text-white rounded-md font-medium text-base bg-[#383E54] hover:bg-[#2b3041] hover:text-white flex items-center ">
//             Add New Product
//           </button>
//           <button className="px-4 py-2.5 text-white rounded-md font-medium text-base bg-[#383E54] hover:bg-[#2b3041] hover:text-white flex items-center ">
//             Export CSV
//           </button>
//         </div>
//         <form className="w-[40%] flex justify-center items-center mx-0 relative">
//           <input
//             autoComplete="off"
//             type="text"
//             id="email-address-icon"
//             className="bg-white border-1 border-[#383E54] text-lg focus:ring-[#383E54] focus:border-[#383E54] block pl-12 py-2 placeholder-[#383E54] active:border-[#383E54] outline-none rounded-full placeholder:text-lg text-black w-full placeholder:text-gray-400"
//             placeholder="Search for something..."
//           />
//           {/* Search Icon */}
//           <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
//             <GoSearch className="size-5" />
//           </div>
//         </form>
//       </div>
//       <div className="relative overflow-x-auto bg-white pb-10">
//         <table className="w-full text-left text-gray-500 ">
//           <thead className="text-[16px] font-medium text-white text-center bg-[#383E54]">
//             <tr>
//               <th scope="col" className="px-4 py-3 border-r-1 border-gray-500">
//                 IMAGE
//               </th>
//               <th scope="col" className="px-6 py-3 border-r-1 border-gray-500">
//                 PRODUCT NAME
//               </th>
//               <th scope="col" className="px-6 py-3 border-r-1 border-gray-500">
//                 SKU
//               </th>
//               <th scope="col" className="px-6 py-3 border-r-1 border-gray-500">
//                 STOCK
//               </th>
//               <th scope="col" className="px-6 py-3 border-r-1 border-gray-500">
//                 PRICE
//               </th>
//               <th scope="col" className="px-6 py-3 border-r-1 border-gray-500">
//                 CATEGORY
//               </th>
//               <th scope="col" className="px-6 py-3 border-r-1 border-gray-500">
//                 DATE
//               </th>
//               <th scope="col" className="px-6 py-3 ">
//                 Action
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {usersDemoData?.map((el: any, index: number) => (
//               <tr
//                 key={index}
//                 className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b text-[16px] font-medium text-gray-800 text-center "
//               >
//                 <td className="px-6 py-4 flex items-center space-x-2">
//                   <Image
//                     src="/assets/user-image/user-image.png"
//                     alt="User Picture"
//                     width={100}
//                     height={100}
//                     className="w-[20px] h-[20px]"
//                   />
//                 </td>
//                 <td className="px-6 py-4">{el?.phone}</td>
//                 <td className="px-6 py-4">{el?.email}</td>
//                 <td className="px-6 py-4">{el?.address}</td>
//                 <td className="px-6 py-4">{el?.email}</td>
//                 <td className="px-6 py-4">{el?.address}</td>
//                 <td className="px-6 py-4">{el?.subscriptionsDate}</td>
//                 <td className="px-6 py-4 flex justify-center items-center space-x-3">
//                   <button
//                     className="bg-yellow-100 hover:bg-yellow-200 p-1.5 rounded-lg"
//                     onClick={() => router.push(`/client-edit`)}
//                   >
//                     <FiEdit className="text-[#D5AD45] size-4" />
//                   </button>
//                   <button
//                     className="bg-red-100 hover:bg-red-200 p-1.5 rounded-lg"
//                     onClick={() => setClientDeletedModal(!clientDeletedModal)}
//                   >
//                     <RiDeleteBin6Fill className="text-red-500 size-4" />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         <nav
//           aria-label="Page navigation example "
//           className="flex justify-end mt-8 px-12"
//         >
//           <ul className="inline-flex -space-x-px text-base h-10">
//             <Link
//               href="#"
//               className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-800"
//             >
//               Previous
//             </Link>

//             <Link
//               href="#"
//               className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
//             >
//               1
//             </Link>

//             <Link
//               href="#"
//               className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
//             >
//               2
//             </Link>

//             <Link
//               href="#"
//               className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
//             >
//               ...
//             </Link>

//             <Link
//               href="#"
//               className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 "
//             >
//               Next
//             </Link>
//           </ul>
//         </nav>
//       </div>
//       <ClientDeletedModal
//         clientDeletedModal={clientDeletedModal}
//         setClientDeletedModal={setClientDeletedModal}
//       />
//     </div>
//   );
// };

// export default ProductList;

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FiEdit, FiMoreVertical, FiSearch, FiStar } from "react-icons/fi";
import { Pagination } from "../shared/Pagination/Pagination";

type Product = {
  id: number;
  name: string;
  sku: string;
  stock: number;
  price: number;
  type: string;
  statistics?: string; // Optional field
  tags: string[];
  image?: string; // Optional field
  lastModified: string;
};

export default function ProductList() {
  const [activeTab, setActiveTab] = useState<
    "all" | "published" | "drafts" | "trash"
  >("all");
  const [viewCount, setViewCount] = useState<number>(8);
  const [totalCount, setTotalCount] = useState<number>(16);
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(totalCount / viewCount);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/products.json");
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts =
    activeTab === "all"
      ? products
      : products.filter((product) =>
          activeTab === "published"
            ? product.stock > 0
            : activeTab === "drafts"
            ? product.stock === 0
            : product.stock < 0
        );

  const handleExportCSV = () => {
    console.log("Exporting CSV...");
  };

  const handleAddNewProduct = () => {
    console.log("Adding new product...");
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Searching...");
  };

  const handleApplyFilters = () => {
    console.log("Applying filters...");
  };

  const handleClearFilters = () => {
    console.log("Clearing filters...");
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
        <div className="flex flex-col lg:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
          <button
            onClick={handleAddNewProduct}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <span className="text-xl">+</span> Add new product
          </button>
          <button
            onClick={handleExportCSV}
            className="text-blue-600 border border-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md w-full sm:w-auto text-center"
          >
            Export CSV
          </button>
        </div>
        <form onSubmit={handleSearch} className="relative w-full sm:w-80">
          <input
            type="search"
            placeholder="Search Product"
            className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            <FiSearch className="w-4 h-4 text-gray-500" />
          </button>
        </form>
      </div>

      <div className="mb-6 overflow-x-auto">
        <nav className="flex gap-6 text-sm whitespace-nowrap">
          {["all", "published", "drafts", "trash"].map(
            (tab: any, index: number) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${
                  activeTab === tab ? "text-gray-900" : "text-gray-500"
                } capitalize`}
              >
                {tab === "all" ? "Products: All" : tab}
                <span className="text-gray-400">
                  (
                  {tab === "all"
                    ? 16
                    : tab === "published"
                    ? 7
                    : tab === "drafts"
                    ? 5
                    : 4}
                  )
                </span>
              </button>
            )
          )}
        </nav>
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        {[
          "Stock Status",
          "Product Category",
          "Product Seller",
          "Product Type",
          "Additional Options",
        ].map((filter) => (
          <div key={filter} className="relative w-full sm:w-48">
            <select className="w-full appearance-none border border-gray-300 rounded-md py-2 px-4 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">{filter}</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        ))}

        <div className="flex gap-4 w-full sm:w-auto mt-4 sm:mt-0">
          <button
            onClick={handleApplyFilters}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex-1 sm:flex-none"
          >
            Apply
          </button>
          <button
            onClick={handleClearFilters}
            className="border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded-md flex-1 sm:flex-none"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 space-y-4 sm:space-y-0">
        <div className="text-sm text-gray-500">
          View products: {viewCount}/{totalCount}
        </div>
        <div className="w-full sm:w-48">
          <select className="w-full appearance-none border border-gray-300 rounded-md py-2 px-4 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Select Action</option>
            <option value="delete">Delete</option>
            <option value="archive">Archive</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-lg border overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4 text-left">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </th>
              <th className="p-4 text-left font-medium text-xs uppercase text-gray-500">
                Product Name
              </th>
              <th className="p-4 text-left font-medium text-xs uppercase text-gray-500">
                SKU
              </th>
              <th className="p-4 text-left font-medium text-xs uppercase text-gray-500">
                Stock
              </th>
              <th className="p-4 text-left font-medium text-xs uppercase text-gray-500">
                Price
              </th>
              <th className="p-4 text-left font-medium text-xs uppercase text-gray-500">
                Type
              </th>
              <th className="p-4 text-left font-medium text-xs uppercase text-gray-500">
                Statistics
              </th>
              <th className="p-4 text-left font-medium text-xs uppercase text-gray-500">
                Tags
              </th>
              <th className="p-4 text-left font-medium text-xs uppercase text-gray-500">
                Rate
              </th>
              <th className="p-4 text-left font-medium text-xs uppercase text-gray-500">
                Date
              </th>
              <th className="p-4 text-left font-medium text-xs uppercase text-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id} className="border-b">
                <td className="p-4">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src={product?.image || "/placeholder.svg"}
                      alt={product?.name}
                      width={40}
                      height={40}
                      className="rounded-lg"
                    />
                    <span>{product.name}</span>
                  </div>
                </td>
                <td className="p-4">{product.sku}</td>
                <td className="p-4">
                  <span
                    className={`text-${
                      product.stock > 0 ? "emerald" : "red"
                    }-600`}
                  >
                    {product.stock > 0
                      ? `In stock (${product.stock})`
                      : "Out of stock"}
                  </span>
                </td>
                <td className="p-4">${product.price.toFixed(2)}</td>
                <td className="p-4">{product.type}</td>
                <td className="p-4">{product.statistics}</td>
                <td className="p-4">
                  <div className="flex flex-wrap gap-1">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="p-4">
                  <FiStar className="w-5 h-5 text-blue-600 fill-current" />
                </td>
                <td className="p-4">
                  <div className="text-sm">
                    Last modified:
                    <br />
                    {product.lastModified}
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <button className="text-gray-500 hover:text-gray-700">
                      <FiEdit className="w-4 h-4" />
                    </button>
                    <button className="text-gray-500 hover:text-gray-700">
                      <FiMoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-4 border-t">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}
