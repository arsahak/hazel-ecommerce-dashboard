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

import { useState, useEffect } from 'react'
import { BiChevronDown, BiChevronLeft, BiChevronRight, BiChevronUp } from 'react-icons/bi'
import { Pagination } from '../shared/Pagination/Pagination'
// import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react'

interface Customer {
  id: number
  name: string
  email: string
  status: 'active' | 'inactive'
  dateJoined: string
  orders: number
}

const mockCustomers: Customer[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active', dateJoined: '2023-01-15', orders: 5 },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'inactive', dateJoined: '2023-02-20', orders: 2 },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'active', dateJoined: '2023-03-10', orders: 8 },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', status: 'active', dateJoined: '2023-04-05', orders: 3 },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', status: 'inactive', dateJoined: '2023-05-12', orders: 1 },
  // Add more mock data as needed
]

export default function CustomerList() {
  const [customers, setCustomers] = useState<Customer[]>([])
  const [sortColumn, setSortColumn] = useState<keyof Customer>('name')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(5)

  useEffect(() => {
    // In a real application, you would fetch data from an API here
    setCustomers(mockCustomers)
  }, [])

  const sortedCustomers = [...customers].sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1
    if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1
    return 0
  })

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentCustomers = sortedCustomers.slice(indexOfFirstItem, indexOfLastItem)

  const totalPages = Math.ceil(customers.length / itemsPerPage)

  const handleSort = (column: keyof Customer) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(column)
      setSortDirection('asc')
    }
  }

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className="py-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Customer List</h1>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {['Name', 'Email', 'Status', 'Date Joined', 'Orders'].map((header, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort(header.toLowerCase().replace(' ', '') as keyof Customer)}
                >
                  <div className="flex items-center">
                    {header}
                    {sortColumn === header.toLowerCase().replace(' ', '') && (
                      sortDirection === 'asc' ? <BiChevronUp className="w-4 h-4 ml-1" /> : <BiChevronDown className="w-4 h-4 ml-1" />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentCustomers.map((customer) => (
              <tr key={customer.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{customer.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${customer.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                    {customer.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {customer.dateJoined}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {customer.orders}
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
      {/* <div className="flex items-center justify-between mt-4">
        <div className="flex items-center">
          <span className="text-sm text-gray-700">
            Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to <span className="font-medium">{Math.min(indexOfLastItem, customers.length)}</span> of{' '}
            <span className="font-medium">{customers.length}</span> results
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded-md bg-white text-gray-500 border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <BiChevronLeft className="w-5 h-5" />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 rounded-md ${
                currentPage === page
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-500 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded-md bg-white text-gray-500 border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <BiChevronRight className="w-5 h-5" />
          </button>
        </div>
        
      </div> */}
    </div>
  )
}


// "use client"

// import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

// export default function CustomerAnalytics() {
//   const COLORS = ['#0A2647', '#0066FF', '#FF6B7A', '#FFD700']
//   const pieData = [
//     { name: 'New Customers', value: 27153, percentage: 63 },
//     { name: 'Frequent Customers', value: 7587, percentage: 18 },
//     { name: 'Idle Users', value: 5937, percentage: 14 },
//     { name: 'Cart Abandoners', value: 2309, percentage: 5 }
//   ]

//   const ageData = [
//     { age: 'Age 18-25', value: 6680 },
//     { age: 'Age 25-45', value: 15234 },
//     { age: 'Age 45-65', value: 2034 },
//     { age: 'Age over 65', value: 792 }
//   ]

//   return (
//     <div className="grid gap-6 lg:grid-cols-2">
//       <div className="bg-white rounded-lg shadow-sm p-6">
//         <div className="text-xl font-semibold mb-6">Customer Retention Rate</div>
//         <div className="flex flex-col gap-5">
//           <div className="h-[300px]">
//             <ResponsiveContainer width="100%" height="100%">
//               <PieChart>
//                 <Pie
//                   data={pieData}
//                   cx="50%"
//                   cy="50%"
//                   outerRadius={120}
//                   fill="#8884d8"
//                   dataKey="value"
//                 >
//                   {pieData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                 </Pie>
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//           <div className="space">
//             <div>
//               <div className="text-lg font-semibold">Total Customers - 42,986 in 2023</div>
//               <p className="text-sm text-gray-500 mt-2">
//                 Donec placerat, ipsum et bibendum blandit, ligula lectus ullamcorper lorem, in
//                 viverra nisl elit viverra massa.
//               </p>
//               <p className="text-sm text-gray-500 mt-2">
//                 Vestibulum vitae aliquet felis, at iaculis metus
//               </p>
//             </div>
//             <div className="space-y-4">
//               {pieData.map((item, index) => (
//                 <div key={item.name} className="flex items-center gap-2">
//                   <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }} />
//                   <div className="text-sm text-gray-600">
//                     {item.name} - {item.percentage}%, which is {item.value.toLocaleString()} visitors
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white rounded-lg shadow-sm p-6">
//         <div className="space-y-8">
//           <div>
//             <div className="text-xl font-semibold mb-6">Demographic segmentation by Age</div>
//             <div className="space-y-4">
//               {ageData.map(item => (
//                 <div key={item.age} className="space-y-2">
//                   <div className="flex justify-between text-sm">
//                     <span className="text-gray-600">{item.age}</span>
//                     <span className="font-medium">{item.value.toLocaleString()}</span>
//                   </div>
//                   <div className="h-2 bg-gray-100 rounded-full">
//                     <div
//                       className="h-full bg-[#0A2647] rounded-full"
//                       style={{
//                         width: `${(item.value / 15234) * 100}%`
//                       }}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div>
//             <div className="text-xl font-semibold mb-6">Segmentation by Gender</div>
//             <div className="grid grid-cols-3 gap-4 mb-4">
//               <div className="flex flex-col items-center">
//                 <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-2">
//                   <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
//                   </svg>
//                 </div>
//                 <div className="text-2xl font-bold">65%</div>
//               </div>
//               <div className="flex flex-col items-center">
//                 <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-2">
//                   <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                   </svg>
//                 </div>
//                 <div className="text-2xl font-bold">32%</div>
//               </div>
//               <div className="flex flex-col items-center">
//                 <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-2">
//                   <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
//                   </svg>
//                 </div>
//                 <div className="text-2xl font-bold">3%</div>
//               </div>
//             </div>
//             <p className="text-sm text-gray-500">
//               Nullam sodales rutrum arcu. Maecenas sed lorem ut dolor tincidunt mattis
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


