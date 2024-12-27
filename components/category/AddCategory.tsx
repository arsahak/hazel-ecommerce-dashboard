"use client";

import { addProductCategory } from "@/app/action/category";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { generateSlug } from "../shared/GenerateSlug";

interface FormData {
  name: string;
  description: string;
  slug: string;
}

interface User {
  id: string;
  name: string;
  email: string;
}

export default function AddCategory() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    description: "",
    slug: "",
  });

  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null); // User state

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updatedFormData = { ...prev, [name]: value };

      // Automatically generate slug from name
      if (name === "name") {
        updatedFormData.slug = generateSlug(value);
      }

      return updatedFormData;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await addProductCategory(formData);

      if (response.ok) {
        toast.success("Successfully Category Add");
        router.push("/category");
      } else {
        console.error("Error adding category:", response.error);
        setError("Error adding category");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      setError("Unexpected error");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="mt-10 p-6 bg-white rounded-lg shadow">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Title
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div>
            <label
              htmlFor="slug"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Slug
            </label>
            <input
              type="text"
              id="slug"
              name="slug"
              value={formData.slug}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
        </div>

        <div className="pt-3 ml-6">
          {error && <p className="text-red-500 text-base">{error}</p>}
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => router.push("/category")}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={loading} // Disable when loading
          >
            Cancel
          </button>
          <button
            type="submit"
            className={`px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/85 focus:outline-none focus:ring-2 focus:ring-primary ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center space-x-2">
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 text-gray-300 animate-spin fill-white"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </div>
                <p>Adding..</p>
              </div>
            ) : (
              <p>Add Category</p>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
