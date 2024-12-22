// "use client";
// import { usersDemoData } from "@/config/data";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { FiEdit } from "react-icons/fi";
// import { RiDeleteBin6Fill } from "react-icons/ri";
// import ClientDeletedModal from "../shared/ui/Modal/ClientDeletedModal";

// const CategoryList = () => {
//   const [clientDeletedModal, setClientDeletedModal] = useState(false);
//   const router = useRouter();

//   return (
//     <div className="mt-4">
//       <form className="my-7">
//         <div className="flex items-center space-x-4">
//           <div className="w-full">
//             <label
//               htmlFor="name-icon"
//               className="block mb-2 text-lg font-normal text-gray-900"
//             >
//               Category Name<span className="text-primary">*</span>
//             </label>

//             <input
//               autoComplete="off"
//               type="text"
//               id="email-address-icon"
//               className="bg-[#eeeeee] border border-gray-300 text-lg rounded-lg focus:ring-primary focus:border-primary block w-full pl-4 py-2 placeholder-gray-400  active:border-primary outline-none"
//               placeholder=""
//             />
//           </div>
//           <div className="w-full ">
//             <label
//               htmlFor="name-icon"
//               className="block mb-2 text-lg font-normal text-gray-900"
//             >
//               Slug
//             </label>

//             <input
//               autoComplete="off"
//               type="text"
//               id="email-address-icon"
//               className="bg-[#eeeeee] border border-gray-300 text-lg rounded-lg focus:ring-primary focus:border-primary block w-full pl-4 py-2 placeholder-gray-400  active:border-primary outline-none"
//               placeholder=""
//             />
//           </div>
//         </div>
//         <button className="px-4 py-2.5 text-white rounded-md font-medium text-base bg-[#383E54] hover:bg-[#2b3041] hover:text-white flex items-center mt-6">
//           Add New Category
//         </button>
//       </form>
//       <div className="relative overflow-x-auto bg-white pb-10">
//         <table className="w-full text-left text-gray-500 ">
//           <thead className="text-[16px] font-medium text-white text-center bg-[#383E54]">
//             <tr>
//               <th scope="col" className="px-4 py-3 border-r-1 border-gray-300">
//                 CATEGORY NAME
//               </th>
//               <th scope="col" className="px-6 py-3 border-r-1 border-gray-300">
//                 CATEGORY SLUG
//               </th>

//               <th scope="col" className="px-6 py-3 ">
//                 ACTION
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {usersDemoData?.map((el: any, index: number) => (
//               <tr
//                 key={index}
//                 className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b text-[16px] font-medium text-gray-800 text-center "
//               >
//                 <td className="px-6 py-4 ">{el?.phone}</td>
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

// export default CategoryList;

"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Fill } from 'react-icons/ri';

type Category = {
  id: number;
  name: string;
  description: string;
  itemCount: number;
  createdAt: string;
  status: 'active' | 'inactive';
};

export default function CategoryList() {
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([
    { id: 1, name: 'Electronics', description: 'Gadgets and devices', itemCount: 150, createdAt: '2023-05-15', status: 'active' },
    { id: 2, name: 'Clothing', description: 'Apparel and accessories', itemCount: 300, createdAt: '2023-05-10', status: 'active' },
    { id: 3, name: 'Books', description: 'Literature and textbooks', itemCount: 200, createdAt: '2023-05-05', status: 'inactive' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCategory, setNewCategory] = useState({ name: '', description: '' });

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (newCategory.name && newCategory.description) {
      setCategories([...categories, {
        ...newCategory,
        id: Date.now(),
        itemCount: 0,
        createdAt: new Date().toISOString().split('T')[0],
        status: 'active'
      }]);
      setNewCategory({ name: '', description: '' });
      setIsModalOpen(false);
    }
  };

  const handleDeleteCategory = (id: number) => {
    setCategories(categories.filter(category => category.id !== id));
  };

  const toggleCategoryStatus = (id: number) => {
    setCategories(categories.map(category =>
      category.id === id ? { ...category, status: category.status === 'active' ? 'inactive' : 'active' } : category
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100 ">
      <div className="">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Category Management</h1>
          <button
           onClick={() => router.push(`/category/add-category`)}
            className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add New Category
          </button>
        </div>

        {/* Category List */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {categories.map((category) => (
                <tr key={category.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{category.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{category.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{category.itemCount}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{category.createdAt}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${category.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
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
        </div>
      </div>
    </div>
  );
}


