// "use client";
// import { usersDemoData } from "@/config/data";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { FiEdit } from "react-icons/fi";
// import { RiDeleteBin6Fill } from "react-icons/ri";
// import ClientDeletedModal from "../shared/ui/Modal/ClientDeletedModal";

// const CustomersList = () => {
//   const [clientDeletedModal, setClientDeletedModal] = useState(false);
//   const router = useRouter();

//   return (
//     <div className="mt-4">
//       <div className="relative overflow-x-auto bg-white pb-10">
//         <table className="w-full text-left text-gray-500 ">
//           <thead className="text-[16px] font-medium text-white text-center bg-[#383E54]">
//             <tr>
//               <th scope="col" className="px-4 py-3 border-r-1 border-gray-500">
//                 ORDERS
//               </th>
//               <th scope="col" className="px-6 py-3 border-r-1 border-gray-500">
//                 PRODUCT
//               </th>
//               <th scope="col" className="px-6 py-3 border-r-1 border-gray-500">
//                 SKU
//               </th>
//               <th scope="col" className="px-6 py-3 border-r-1 border-gray-500">
//                 CATEGORY
//               </th>
//               <th scope="col" className="px-6 py-3 border-r-1 border-gray-500">
//                 PAYMENT
//               </th>
//               <th scope="col" className="px-6 py-3 border-r-1 border-gray-500">
//                 ORDER STATUS
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

// export default CustomersList;

"use client"

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

export default function CustomerAnalytics() {
  const COLORS = ['#0A2647', '#0066FF', '#FF6B7A', '#FFD700']
  const pieData = [
    { name: 'New Customers', value: 27153, percentage: 63 },
    { name: 'Frequent Customers', value: 7587, percentage: 18 },
    { name: 'Idle Users', value: 5937, percentage: 14 },
    { name: 'Cart Abandoners', value: 2309, percentage: 5 }
  ]

  const ageData = [
    { age: 'Age 18-25', value: 6680 },
    { age: 'Age 25-45', value: 15234 },
    { age: 'Age 45-65', value: 2034 },
    { age: 'Age over 65', value: 792 }
  ]

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="text-xl font-semibold mb-6">Customer Retention Rate</div>
        <div className="flex flex-col gap-5">
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space">
            <div>
              <div className="text-lg font-semibold">Total Customers - 42,986 in 2023</div>
              <p className="text-sm text-gray-500 mt-2">
                Donec placerat, ipsum et bibendum blandit, ligula lectus ullamcorper lorem, in 
                viverra nisl elit viverra massa.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Vestibulum vitae aliquet felis, at iaculis metus
              </p>
            </div>
            <div className="space-y-4">
              {pieData.map((item, index) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }} />
                  <div className="text-sm text-gray-600">
                    {item.name} - {item.percentage}%, which is {item.value.toLocaleString()} visitors
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="space-y-8">
          <div>
            <div className="text-xl font-semibold mb-6">Demographic segmentation by Age</div>
            <div className="space-y-4">
              {ageData.map(item => (
                <div key={item.age} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{item.age}</span>
                    <span className="font-medium">{item.value.toLocaleString()}</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div 
                      className="h-full bg-[#0A2647] rounded-full" 
                      style={{ 
                        width: `${(item.value / 15234) * 100}%`
                      }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xl font-semibold mb-6">Segmentation by Gender</div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="text-2xl font-bold">65%</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="text-2xl font-bold">32%</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="text-2xl font-bold">3%</div>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              Nullam sodales rutrum arcu. Maecenas sed lorem ut dolor tincidunt mattis
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


