
// "use client"
// import { useRouter } from 'next/navigation';
// import React, { useState } from 'react';
// import { FiEdit } from 'react-icons/fi';
// import { RiDeleteBin6Fill } from 'react-icons/ri';

// type Category = {
//   id: number;
//   name: string;
//   description: string;
//   itemCount: number;
//   createdAt: string;
//   status: 'active' | 'inactive';
// };

// export default function CategoryList() {
//   const router = useRouter();
//   const [categories, setCategories] = useState<Category[]>([
//     { id: 1, name: 'Electronics', description: 'Gadgets and devices', itemCount: 150, createdAt: '2023-05-15', status: 'active' },
//     { id: 2, name: 'Clothing', description: 'Apparel and accessories', itemCount: 300, createdAt: '2023-05-10', status: 'active' },
//     { id: 3, name: 'Books', description: 'Literature and textbooks', itemCount: 200, createdAt: '2023-05-05', status: 'inactive' },
//   ]);

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [newCategory, setNewCategory] = useState({ name: '', description: '' });

//   const handleAddCategory = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (newCategory.name && newCategory.description) {
//       setCategories([...categories, {
//         ...newCategory,
//         id: Date.now(),
//         itemCount: 0,
//         createdAt: new Date().toISOString().split('T')[0],
//         status: 'active'
//       }]);
//       setNewCategory({ name: '', description: '' });
//       setIsModalOpen(false);
//     }
//   };

//   const handleDeleteCategory = (id: number) => {
//     setCategories(categories.filter(category => category.id !== id));
//   };

//   const toggleCategoryStatus = (id: number) => {
//     setCategories(categories.map(category =>
//       category.id === id ? { ...category, status: category.status === 'active' ? 'inactive' : 'active' } : category
//     ));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 ">
//       <div className="">
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-3xl font-bold text-gray-800">Category Management</h1>
//           <button
//             onClick={() => router.push(`/category/add-category`)}
//             className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//           >
//             Add New Category
//           </button>
//         </div>

//         {/* Category List */}
//         <div className="bg-white rounded-lg shadow overflow-hidden">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {categories.map((category) => (
//                 <tr key={category.id}>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm font-medium text-gray-900">{category.name}</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-500">{category.description}</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-500">{category.itemCount}</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-500">{category.createdAt}</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${category.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
//                       }`}>
//                       {category.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
//                     <button
//                       className="bg-yellow-100 hover:bg-yellow-200 p-1.5 rounded-lg mr-2"
//                       // onClick={() => router.push(`/client-edit`)}
//                       onClick={() => router.push(`/category/edit-category/${category.id}`)}
//                     >
//                       <FiEdit className="text-[#D5AD45] size-4" />
//                     </button>
//                     <button
//                       className="bg-red-100 hover:bg-red-200 p-1.5 rounded-lg"
//                     // onClick={() => setClientDeletedModal(!clientDeletedModal)}
//                     >
//                       <RiDeleteBin6Fill className="text-red-500 size-4" />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";
import { categories } from '@/config/categories';
import { RiDeleteBin6Fill } from "react-icons/ri"
import { FiEdit } from "react-icons/fi"
import { Pagination } from '../shared/Pagination/Pagination';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CategoryList() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 2

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Here you would typically fetch data for the new page
  }

  return (
    <div>
      <div className="flex justify-between items-center my-8 bg-white p-4">
      <form className="lg:w-[30%]">
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500  cursor-pointer"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-3 ps-10 text-lg text-gray-900 border border-gray-200 rounded-lg bg-white focus:ring-border-none focus:border-none"
            placeholder="Searching category"
            required
          />
        </div>
      </form>
        <button
          onClick={() => router.push(`/category/add-category`)}
          className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/60 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Add New Category
        </button>
      </div>
      <div className="bg-white w-full overflow-x-auto mt-10">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left">
              <th className="py-4 px-4 font-medium">NAME</th>
              <th className="py-4 px-4 font-medium">ITEMS</th>
              <th className="py-4 px-4 font-medium">DESCRIPTION</th>
              <th className="py-4 px-4 font-medium">Created At</th>
              <th className="py-4 px-4 font-medium">STATUS</th>
              <th className="py-4 px-4 font-medium">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id} className="border-t border-gray-100">
                <td className="py-4 px-4 text-gray-600">
                  {category.name}
                </td>
                <td className="py-4 px-4">
                  <div className=''>
                    <span>{category.itemCount}</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div>
                    <div className="">{category.description}</div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div>
                    <div className="">{category.createdAt}</div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${category.status === 'active' ? 'bg-blue-600 text-white' :
                    category.status === 'CONFIRMED' ? 'bg-emerald-500 text-white' :
                      'bg-red-500 text-white'
                    }`}>
                    {category.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
                  <button
                    className="bg-yellow-100 hover:bg-yellow-200 p-1.5 rounded-lg mr-2"
                    // onClick={() => router.push(`/client-edit`)}
                    onClick={() => router.push(`/category/edit-category/${category.id}`)}
                  >
                    <FiEdit className="text-[#D5AD45] size-4" />
                  </button>
                  <button
                    className="bg-red-100 hover:bg-red-200 p-1.5 rounded-lg"
                  // onClick={() => setClientDeletedModal(!clientDeletedModal)}
                  >
                    <RiDeleteBin6Fill className="text-red-500 size-4" />
                  </button>
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
  )
}