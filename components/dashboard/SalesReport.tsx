// import Image from "next/image";
// import SalesStatisticsChart from "../shared/SalesStatisticsChart";

// const SalesReport = () => {
//   return (
//     <div className=" flex items-stretch justify-between gap-6">
//       <div className="bg-white py-6 px-6 my-3 w-[65%]">
//         <div className="flex justify-between">
//           <h1 className="text-2xl font-semibold my-6">Sales Statistics</h1>
//         </div>
//         <SalesStatisticsChart />
//       </div>
//       <div className="bg-white py-6 px-6 my-3 w-[35%]">
//         <h1 className="text-2xl font-semibold mt-6 mb-2">Total Report</h1>
//         <h2 className="text-lg font-normal mb-6">
//           All Priods Per 12/02/2023 - 25-01-24
//         </h2>
//         <div className="space-y-5">
//           <div className="flex items-center justify-between px-4 gap-x-3 bg-gray-100 rounded-md border py-2">
//             <Image
//               src="/assets/coin.png"
//               width={500}
//               height={500}
//               alt="Picture of the author"
//               className="w-[50px] h-auto"
//             />
//             <h2 className="text-xl font-semibold my-6">Revenue</h2>
//             <p className="text-lg font-normal">82,2563</p>
//             <p className="text-lg font-font-normal text-green-500">+45.85%</p>
//           </div>
//           <div className="flex items-center justify-between px-4 gap-x-3 bg-gray-100 rounded-md border py-2">
//             <Image
//               src="/assets/wallet.png"
//               width={500}
//               height={500}
//               alt="Picture of the author"
//               className="w-[50px] h-auto"
//             />
//             <h2 className="text-xl font-semibold my-6">Expense</h2>
//             <p className="text-lg font-normal">42,2563</p>
//             <p className="text-lg font-font-normal text-red-500">+45.85%</p>
//           </div>
//           <div className="flex items-center justify-between px-4 gap-x-3 bg-gray-100 rounded-md border py-2">
//             <Image
//               src="/assets/interest-rate.png"
//               width={500}
//               height={500}
//               alt="Picture of the author"
//               className="w-[50px] h-auto"
//             />
//             <h2 className="text-xl font-semibold my-6">Profit</h2>
//             <p className="text-lg font-normal">85,256</p>
//             <p className="text-lg font-font-normal text-green-500">+45.85%</p>
//           </div>
//           <div className="text-lg font-font-normal bg-[#0B213F] text-white py-3 rounded-full text-center">
//             More Details
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SalesReport;




import React from 'react';
import { LineChart } from '../shared/LineChart/LineChart';
import { Card } from '@nextui-org/react';
import { CircularProgress } from './CircularProgress';

const SalesReport = () => {
  return (
    <div>
      <div className="grid gap-4 p-4 md:grid-cols-3">
        {/* Net Sales Card */}
        <Card className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-medium text-muted-foreground">NET SALES</h2>
            <button className="text-sm text-muted-foreground hover:text-primary">•••</button>
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

        {/* Earlybird Ticket Card */}
        <Card className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-medium text-muted-foreground">EARLYBIRD TICKET</h2>
            <button className="text-sm text-muted-foreground hover:text-primary">•••</button>
          </div>
          <div className="flex flex-col items-center justify-center space-y-6">
            <CircularProgress value={78} />
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="text-center">
                <div className="text-sm text-muted-foreground">Gross</div>
                <div className="text-xl font-bold">$2300</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-muted-foreground">Online</div>
                <div className="text-xl font-bold">$7500</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Gross Sells Card */}
        <Card className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-medium text-muted-foreground">GROSS SELLS</h2>
            <button className="text-sm text-muted-foreground hover:text-primary">•••</button>
          </div>
          <div className="space-y-8">
            <div>
              <div className="text-3xl font-bold text-primary">$2,300</div>
              <div className="h-[60px] mt-2">
                <LineChart
                  data={[2000, 2500, 3250, 2800, 2300]}
                  minimal
                  color="#f1f5f9"
                />
              </div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">ONLINE SELLS</div>
              <div className="text-2xl font-bold">$7,500</div>
              <div className="h-[60px] mt-2">
                <LineChart
                  data={[7000, 7800, 7200, 7500, 7300]}
                  minimal
                  color="#f1f5f9"
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SalesReport;