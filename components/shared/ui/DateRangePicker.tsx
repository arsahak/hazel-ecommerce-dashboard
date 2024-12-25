// "use client";
// import { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const DateRangePicker = () => {
//   // Explicitly typing the state as Date or null
//   const [startDate, setStartDate] = useState<Date | null>(null);
//   const [endDate, setEndDate] = useState<Date | null>(null);

//   return (
//     <div id="date-range-picker" className="flex items-center">
//       <div className="relative">
//         <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//           <svg
//             className="w-4 h-4 text-gray-500 dark:text-gray-400"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//           >
//             <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
//           </svg>
//         </div>
//         <DatePicker
//           id="datepicker-range-start"
//           selected={startDate}
//           onChange={(date) => setStartDate(date)} // TypeScript knows `date` is Date | null
//           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//           placeholderText="Select date start"
//         />
//       </div>
//       <span className="mx-4 text-gray-500">to</span>
//       <div className="relative">
//         <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//           <svg
//             className="w-4 h-4 text-gray-500 "
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//           >
//             <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
//           </svg>
//         </div>
//         <DatePicker
//           id="datepicker-range-end"
//           selected={endDate}
//           onChange={(date) => setEndDate(date)} // TypeScript knows `date` is Date | null
//           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//           placeholderText="Select date end"
//         />
//       </div>
//     </div>
//   );
// };

// export default DateRangePicker;

"use client";

import { useState } from "react";

import { FiCalendar } from "react-icons/fi";
import { Calendar } from "../Calender/Calender";

export default function DateRangePicker({ topTitle }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState("01/01/2024 - 18/12/2024");

  return (
    <div className="">
      <div className=" flex items-center gap-5">
        <h2 className="!text-2xl font-semibold text-[#0f172a]">{topTitle}</h2>
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2 border rounded-lg hover:border-primary focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <span>{selectedRange}</span>
          <FiCalendar className="text-gray-500" />
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Calendar
            selectedRange={selectedRange}
            onClose={() => setIsOpen(false)}
            onSelect={(range) => {
              setSelectedRange(range);
              setIsOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
}
