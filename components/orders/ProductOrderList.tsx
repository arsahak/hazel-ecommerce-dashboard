// "use client";
// import { usersDemoData } from "@/config/data";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { FiEdit } from "react-icons/fi";
// import { RiDeleteBin6Fill } from "react-icons/ri";
// import ClientDeletedModal from "../shared/ui/Modal/ClientDeletedModal";

// import { useState } from "react"
// import { Pagination } from "../shared/Pagination/Pagination"

// const ProductOrderList = () => {
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

// export default ProductOrderList;


// import { orders } from "@/config/orders"
// import { RiDeleteBin6Fill } from "react-icons/ri"
// import Image from "next/image"
// import { FiEdit } from "react-icons/fi"
// export default function ProductOrderTable() {
//   const [currentPage, setCurrentPage] = useState(1)
//   const totalPages = 2

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page)
//     // Here you would typically fetch data for the new page
//   }

//   return (
//     <div className="bg-white w-full overflow-x-auto mt-10">
//       <table className="w-full border-collapse">
//         <thead>
//           <tr className="text-left">
//             <th className="py-4 px-4 font-medium text-blue-600"># ORDER</th>
//             <th className="py-4 px-4 font-medium">PRODUCT</th>
//             <th className="py-4 px-4 font-medium">SKU</th>
//             <th className="py-4 px-4 font-medium">CATEGORY</th>
//             <th className="py-4 px-4 font-medium">PAYMENT</th>
//             <th className="py-4 px-4 font-medium">ORDER STATUS</th>
//             <th className="py-4 px-4 font-medium">RATE</th>
//             <th className="py-4 px-4 font-medium">ACTIONS</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order) => (
//             <tr key={order.id} className="border-t border-gray-100">
//               <td className="py-4 px-4">
//                 <a href="#" className="text-blue-600 hover:underline">
//                   {order.orderNumber}
//                 </a>
//               </td>
//               <td className="py-4 px-4">
//                 <Image
//                   src={order?.product?.image}
//                   alt="Product"
//                   width={50}
//                   height={50}
//                   className="w-12 h-12 object-cover rounded-lg border border-gray-200"
//                 />
//               </td>
//               <td className="py-4 px-4 text-gray-600">
//                 {order.product.sku}
//               </td>
//               <td className="py-4 px-4">
//                 <div className="flex items-center gap-2">
//                   <div className={`w-8 h-8 rounded flex items-center justify-center ${order.category.type === 'electronics' ? 'bg-blue-100' :
//                     order.category.type === 'fashion' ? 'bg-pink-100' :
//                       'bg-yellow-100'
//                     }`}>
//                     {order.category.type === 'electronics' && (
//                       <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                       </svg>
//                     )}
//                     {order.category.type === 'fashion' && (
//                       <svg className="w-4 h-4 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                       </svg>
//                     )}
//                     {order.category.type === 'services' && (
//                       <svg className="w-4 h-4 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                       </svg>
//                     )}
//                   </div>
//                   <span>{order.category.name}</span>
//                 </div>
//               </td>
//               <td className="py-4 px-4">
//                 <div>
//                   <div className="font-medium">{order.payment.amount}</div>
//                   {order.payment.totalAmount && (
//                     <div className="text-sm text-gray-500">
//                       from {order.payment.totalAmount}
//                     </div>
//                   )}
//                   <div className="text-sm text-gray-500">{order.payment.status}</div>
//                 </div>
//               </td>
//               <td className="py-4 px-4">
//                 <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${order.orderStatus === 'COMPLETED' ? 'bg-blue-600 text-white' :
//                   order.orderStatus === 'CONFIRMED' ? 'bg-emerald-500 text-white' :
//                     'bg-red-500 text-white'
//                   }`}>
//                   {order.orderStatus}
//                 </span>
//               </td>
//               <td className="py-4 px-4">
//                 <div className="flex gap-1">
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <svg
//                       key={star}
//                       className={`w-5 h-5 ${star <= order.rating ? 'text-yellow-400' :
//                         star - order.rating < 1 ? 'text-yellow-400' : 'text-gray-200'
//                         }`}
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>
//                   ))}
//                 </div>
//               </td>
//               <td className="py-4 px-4">
//                 <div className="flex items-center gap-2">
//                   <button
//                     className="bg-yellow-100 hover:bg-yellow-200 p-1.5 rounded-lg "
//                   // onClick={() => router.push(`/client-edit`)}
//                   >
//                     <FiEdit className="text-[#D5AD45] size-4" />
//                   </button>
//                   <button
//                     className="bg-red-100 hover:bg-red-200 p-1.5 rounded-lg"
//                   // onClick={() => setClientDeletedModal(!clientDeletedModal)}
//                   >
//                     <RiDeleteBin6Fill className="text-red-500 size-4" />
//                   </button>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="p-4 border-t">
//         <Pagination
//           currentPage={currentPage}
//           totalPages={totalPages}
//           onPageChange={handlePageChange}
//         />
//       </div>
//     </div>
//   )
// }


"use client"

import { useState } from "react"
import { orders } from "@/config/orders"
import { RiDeleteBin6Fill } from "react-icons/ri"
import Image from "next/image"
import { FiEdit } from "react-icons/fi"
// import { ChevronDown, ChevronUp } from 'lucide-react'
import { Pagination } from "../shared/Pagination/Pagination"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"
import { useRouter } from "next/navigation"

export default function ProductOrderTable() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1)
  const [expandedRows, setExpandedRows] = useState<string[]>([])
  const totalPages = 2

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Here you would typically fetch data for the new page
  }

  const toggleRow = (orderId: string) => {
    setExpandedRows(prev => 
      prev.includes(orderId) 
        ? prev.filter(id => id !== orderId)
        : [...prev, orderId]
    )
  }

  const isRowExpanded = (orderId: string) => expandedRows.includes(orderId)

  return (
    <div className="bg-white w-full overflow-x-auto mt-10">
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left">
            <th className="py-4 px-4 font-medium text-blue-600"># ORDER</th>
            <th className="py-4 px-4 font-medium">PRODUCT</th>
            <th className="py-4 px-4 font-medium">SKU</th>
            <th className="py-4 px-4 font-medium">CATEGORY</th>
            <th className="py-4 px-4 font-medium">PAYMENT</th>
            <th className="py-4 px-4 font-medium">ORDER STATUS</th>
            <th className="py-4 px-4 font-medium">RATE</th>
            <th className="py-4 px-4 font-medium">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <>
              <tr 
                key={order.id} 
                className={`border-t border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                  isRowExpanded(order.id) ? 'bg-gray-50' : ''
                }`}
                onClick={() => toggleRow(order.id)}
              >
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    {isRowExpanded(order.id) ? (
                      <BiChevronUp className="w-4 h-4 text-gray-500" />
                    ) : (
                      <BiChevronDown className="w-4 h-4 text-gray-500" />
                    )}
                    <a href="#" className="text-blue-600 hover:underline">
                      {order.orderNumber}
                    </a>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <Image
                    src={order?.product?.image}
                    alt="Product"
                    width={50}
                    height={50}
                    className="w-12 h-12 object-cover rounded-lg border border-gray-200"
                  />
                </td>
                <td className="py-4 px-4 text-gray-600">
                  {order.product.sku}
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded flex items-center justify-center ${
                      order.category.type === 'electronics' ? 'bg-blue-100' :
                      order.category.type === 'fashion' ? 'bg-pink-100' :
                      'bg-yellow-100'
                    }`}>
                      {order.category.type === 'electronics' && (
                        <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      )}
                      {order.category.type === 'fashion' && (
                        <svg className="w-4 h-4 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      )}
                      {order.category.type === 'services' && (
                        <svg className="w-4 h-4 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      )}
                    </div>
                    <span>{order.category.name}</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div>
                    <div className="font-medium">{order.payment.amount}</div>
                    {order.payment.totalAmount && (
                      <div className="text-sm text-gray-500">
                        from {order.payment.totalAmount}
                      </div>
                    )}
                    <div className="text-sm text-gray-500">{order.payment.status}</div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                    order.orderStatus === 'COMPLETED' ? 'bg-blue-600 text-white' :
                    order.orderStatus === 'CONFIRMED' ? 'bg-emerald-500 text-white' :
                    'bg-red-500 text-white'
                  }`}>
                    {order.orderStatus}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`w-5 h-5 ${
                          star <= order.rating ? 'text-yellow-400' :
                          star - order.rating < 1 ? 'text-yellow-400' : 'text-gray-200'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <button
                      className="bg-yellow-100 hover:bg-yellow-200 p-1.5 rounded-lg"
                      onClick={() => router.push(`/orders/edit-order/${order.id}`)}
                    >
                      <FiEdit className="text-[#D5AD45] size-4" />
                    </button>
                    <button
                      className="bg-red-100 hover:bg-red-200 p-1.5 rounded-lg"
                      onClick={(e) => {
                        e.stopPropagation()
                        // setClientDeletedModal(!clientDeletedModal)
                      }}
                    >
                      <RiDeleteBin6Fill className="text-red-500 size-4" />
                    </button>
                  </div>
                </td>
              </tr>
              {isRowExpanded(order.id) && (
                <tr>
                  <td colSpan={8} className="bg-gray-50 border-t border-b border-gray-100">
                    <div className="p-4 space-y-4 animate-fadeIn">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                          <div className="text-sm font-medium text-gray-500">Customer Details</div>
                          <div className="mt-1">
                            <div className="font-medium">John Doe</div>
                            <div className="text-sm text-gray-500">john.doe@example.com</div>
                            <div className="text-sm text-gray-500">+1 234 567 890</div>
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-500">Shipping Address</div>
                          <div className="mt-1">
                            <div className="text-sm text-gray-500">
                              123 Main St,<br />
                              Apt 4B<br />
                              New York, NY 10001
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-500">Order Timeline</div>
                          <div className="mt-1 space-y-1">
                            <div className="text-sm">
                              <span className="text-gray-500">Ordered:</span> Mar 15, 2024
                            </div>
                            <div className="text-sm">
                              <span className="text-gray-500">Processed:</span> Mar 16, 2024
                            </div>
                            <div className="text-sm">
                              <span className="text-gray-500">Shipped:</span> Mar 17, 2024
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-500">Payment Details</div>
                          <div className="mt-1 space-y-1">
                            <div className="text-sm">
                              <span className="text-gray-500">Method:</span> Credit Card
                            </div>
                            <div className="text-sm">
                              <span className="text-gray-500">Card:</span> **** 1234
                            </div>
                            <div className="text-sm">
                              <span className="text-gray-500">Status:</span>{" "}
                              <span className="text-green-600">Paid</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </>
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
  )
}


