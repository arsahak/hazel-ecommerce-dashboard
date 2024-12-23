// "use client";
// import { useState } from "react";
// import DateRangePicker from "../shared/ui/DateRangePicker";
// import WorldRealTimeClock from "../shared/WorldRealTImeClock";
// import ProductOrderList from "./ProductOrderList";

// const OrderView = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen((prev) => !prev);
//   };
//   return (
//     <div className="">
//       <div className="bg-white py-6 px-6 mt-6 mb-3 flex items-center justify-between">
//         <h1 className="text-4xl font-semibold ">Orders</h1>
//         <div className="">
//           <WorldRealTimeClock />
//         </div>
//       </div>
//       <div className="">
//         <h1 className="text-2xl font-semibold my-6">Sales Period</h1>
//         <div className="flex items-center justify-between">
//           <DateRangePicker />
//           <div className="">
//             <div className="">
//               <div className="relative inline-block">
//                 <button
//                   id="dropdownDefaultButton"
//                   onClick={toggleDropdown}
//                   className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                   type="button"
//                 >
//                   Dropdown button
//                   <svg
//                     className="w-2.5 h-2.5 ms-3"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 10 6"
//                   >
//                     <path
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="m1 1 4 4 4-4"
//                     />
//                   </svg>
//                 </button>

//                 {/* Dropdown menu */}
//                 {isOpen && (
//                   <div
//                     id="dropdown"
//                     className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
//                   >
//                     <ul
//                       className="py-2 text-sm text-gray-700 dark:text-gray-200"
//                       aria-labelledby="dropdownDefaultButton"
//                     >
//                       <li>
//                         <a
//                           href="#"
//                           className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                         >
//                           Dashboard
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="#"
//                           className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                         >
//                           Settings
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="#"
//                           className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                         >
//                           Earnings
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="#"
//                           className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                         >
//                           Sign out
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <ProductOrderList />
//     </div>
//   );
// };

// export default OrderView;


"use client";
import { useEffect, useRef, useState } from "react";
import DateRangePicker from "../shared/ui/DateRangePicker";
import WorldRealTimeClock from "../shared/WorldRealTImeClock";
import ProductOrderList from "./ProductOrderList";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Dropdown } from "../shared/Dropdown";

const OrderView = () => {

  const [selectedProduct, setSelectedProduct] = useState('All Products')
  const [selectedSort, setSelectedSort] = useState('Default sorting')

  const productOptions = ['All Products', 'Electronics', 'Clothing', 'Books']
  const sortOptions = ['Default sorting', 'Price: Low to High', 'Price: High to Low', 'Newest First']
  const dropdownRef = useRef<HTMLDivElement>(null)

  return (
    <div className="">
      <div className="bg-white py-6 px-6 mt-6 mb-3 flex items-center justify-between">
        <h1 className="text-2xl lg:text-4xl font-semibold ">Orders</h1>
        <div className="">
          <WorldRealTimeClock />
        </div>
      </div>
      <div className="">
        <div className="flex items-center justify-between">
          <DateRangePicker topTitle={'Sales period:'}/>
          <div className="">
            <div className="flex flex-wrap gap-5 items-center ">
              <Dropdown
                options={productOptions}
                value={selectedProduct}
                onChange={setSelectedProduct}
              />
              <Dropdown
                options={sortOptions}
                value={selectedSort}
                onChange={setSelectedSort}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap gap-5 items-center">
        {/* Average Rate Section */}
        <div className="bg-white w-full md:w-[40%] xl:w-[30%] rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Average Rate (%)</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Product Views</span>
                <span className="text-sm font-medium">87%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div className="h-full w-[87%] bg-blue-600 rounded-full" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Cart Abandonment Rate</span>
                <span className="text-sm font-medium">23%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div className="h-full w-[23%] bg-blue-600 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* orders info card */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> */}
          {/* Completed Card */}
          <div className="bg-white w-full md:w-[40%] xl:w-[15%]  rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start">
              <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-blue-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </div>
              <button className="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="12" cy="19" r="1" />
                </svg>
              </button>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Completed</h3>
              <p className="text-3xl font-bold mt-2">2,345</p>
            </div>
          </div>

          {/* Confirmed Card */}
          <div className="bg-white w-full md:w-[40%] xl:w-[15%] rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start">
              <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-emerald-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 6h13" />
                  <path d="M8 12h13" />
                  <path d="M8 18h13" />
                  <path d="M3 6h.01" />
                  <path d="M3 12h.01" />
                  <path d="M3 18h.01" />
                </svg>
              </div>
              <button className="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="12" cy="19" r="1" />
                </svg>
              </button>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Confirmed</h3>
              <p className="text-3xl font-bold mt-2">323</p>
            </div>
          </div>

          {/* Canceled Card */}
          <div className="bg-white w-full md:w-[40%] xl:w-[15%] rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start">
              <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-red-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                </svg>
              </div>
              <button className="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="12" cy="19" r="1" />
                </svg>
              </button>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Canceled</h3>
              <p className="text-3xl font-bold mt-2">17</p>
            </div>
          </div>

          {/* Refunded Card */}
          <div className="bg-white w-full md:w-[40%] xl:w-[15%] rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start">
              <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 2v6h6" />
                  <path d="M3 13a9 9 0 1 0 3-7.7L3 8" />
                </svg>
              </div>
              <button className="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="12" cy="19" r="1" />
                </svg>
              </button>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Refunded</h3>
              <p className="text-3xl font-bold mt-2">2</p>
            </div>
          </div>
        {/* </div> */}
      </div>
      <ProductOrderList />
    </div>
  );
};

export default OrderView;

