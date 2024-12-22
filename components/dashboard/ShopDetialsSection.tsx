
import React from 'react';
import { LineChart } from '../shared/LineChart/LineChart';
import { Card } from '@nextui-org/react';
import { CircularProgress } from './CircularProgress';
import { BiChevronDown } from 'react-icons/bi';
import { CgMoreVertical } from 'react-icons/cg';
import { HiOutlineDotsVertical } from 'react-icons/hi';

const ShopDetailsSection = () => {
  return (
    <div>
      <div className="grid gap-4 py-4 grid-cols-1 lg:grid-cols-6">
        {/* Net Sales Card */}
        <Card className="p-6 lg:col-span-3">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-medium text-muted-foreground">NET SALES</h2>
            <button className="text-sm text-muted-foreground text-gray-400 hover:text-primary"><HiOutlineDotsVertical /></button>
          </div>
          <div className="space-y-1">
            <div className="space-y-0.5">
              <div className="text-2xl font-bold text-primary">$ 28 745</div>
              <div className="text-sm text-muted-foreground">This week:</div>
            </div>
            <div className="text-sm text-muted-foreground">
              Previous week: $ 12 980
            </div>
          </div>
          <div className="h-[200px] mt-4">
            <LineChart
              data={[4000, 9000, 6000, 9000, 4000, 15000, 13000]}
              labels={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
              previousData={[3000, 7000, 5000, 8000, 3000, 12000, 11000]}
            />
          </div>
        </Card>

        <div className="grid gap-5 md:grid-cols-2 lg:col-span-3">
          {/* Earlybird Ticket Card */}
          <Card className="p-6 col-span-1">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500" />
                <h2 className="text-sm font-medium">EARLYBIRD TICKET</h2>
              </div>
              {/* <button className="text-gray-400 hover:text-gray-600">
                <CgMoreVertical className="h-5 w-5" />
              </button> */}
              <button className="text-sm text-muted-foreground text-gray-400 hover:text-primary"><HiOutlineDotsVertical /></button>
            </div>

            <div className="flex flex-col items-center space-y-8">
              <CircularProgress value={78} />

              <div className="grid grid-cols-2 gap-8 w-full">
                <div>
                  <div className="text-sm text-blue-500 mb-1">Gross</div>
                  <div className="text-2xl font-semibold">$2300</div>
                </div>
                <div>
                  <div className="text-sm text-blue-500 mb-1">Online</div>
                  <div className="text-2xl font-semibold">$7500</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Gross Sells Card */}
          <div className="space-y-4 col-span-1">
            <Card className="p-6 bg-blue-400 text-white">
              <div className=" mb-4">
                <div className="flex items-center gap-2">
                  <h2 className="text-sm font-medium">GROSS SELLS</h2>
                  <BiChevronDown className="h-4 w-4" />
                </div>
                <div className="text-xl font-semibold">$2,300</div>
              </div>
              <div className="h-[60px]">
                <LineChart
                  data={[5000, 10200, 9250, 20800, 5300]}
                  previousData={[3000, ,3000, 34000, 2000]}
                  color="#FAFAFA"
                  className="text-white"
                  minimal
                />
              </div>
            </Card>

            <Card className="p-6">
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-500 mb-1">ONLINE SELLS</div>
                  <div className="text-xs text-blue-500">Rough cost</div>
                  <div className="text-xl font-semibold">$7,500</div>
                  
                </div>
                <div className="h-[60px]">
                  <LineChart
                    data={[7000, 7800, 7200, 7500, 7300]}
                    color="#007BFF"
                    minimal
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetailsSection;



// <div className=" flex items-stretch justify-between gap-6">
//   <div className="bg-white py-6 px-6 my-3 w-[65%]">
//     <div className="flex items-start space-x-4">
//       <div className="bg-gray-100 border p-6 h-[250px] flex items-center w-[200px]">
//         <Image
//           src="/assets/site-logo/hazle-logo-main.png"
//           width={500}
//           height={500}
//           alt="Picture of the author"
//           className="w-[150px] h-auto"
//         />
//       </div>
//       <div className="">
//         <h1 className="text-3xl font-semibold ">Shopping Point - Retial</h1>
//         <p className="text-base font-light mt-2">
//           By default, all toasts will inherit ToastContainer's props.
//         </p>

//         <h1 className="text-2xl font-semibold mt-6">Average Rate - 2024</h1>
//         <div className="grid grid-cols-3 items-center justify-between gap-12 mt-8">
//           <div className="">
//             <div className="flex items-start space-x-3">
//               <div className="p-4 bg-green-500  rounded-lg">
//                 <FaGetPocket className="size-10 text-white" />
//               </div>
//               <div className="">
//                 <h2 className="text-2xl font-semibold ">$58,425</h2>
//                 <p className="text-base font-light">Income</p>
//                 <p className="text-base font-light mt-1 text-green-500">
//                   +45.85%
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="">
//             <div className="flex items-start space-x-3">
//               <div className="p-4 bg-red-600 rounded-lg">
//                 <GiExpense className="size-10 text-white" />
//               </div>
//               <div className="">
//                 <h2 className="text-2xl font-semibold ">$923,25</h2>
//                 <p className="text-base font-light">Expnese</p>
//                 <p className="text-base font-light mt-1 text-red-600">
//                   -15.14%
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="">
//             <div className="flex items-start space-x-3">
//               <div className="p-4 bg-green-500 rounded-lg">
//                 <MdOutlineLocalPrintshop className="size-10 text-white" />
//               </div>
//               <div className="">
//                 <h2 className="text-2xl font-semibold ">4,272</h2>
//                 <p className="text-base font-light">New Order</p>
//                 <p className="text-base font-light mt-1 text-green-500">
//                   +45.36%
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="bg-gradient-to-r from-cyan-100 to-blue-50 py-6 px-6 my-3 w-[35%] flex items-center space-x-10">
//     <Image
//       src="/assets/balance.webp"
//       width={500}
//       height={500}
//       alt="Picture of the author"
//       className="w-[240px] h-auto"
//     />
//     <div className="">
//       <h1 className="text-4xl font-semibold ">$24,154K</h1>
//       <h6 className="text-xl font-semibold mt-6">Total Balance</h6>
//     </div>
//   </div>
// </div>