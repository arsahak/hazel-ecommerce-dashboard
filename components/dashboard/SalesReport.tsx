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



import { EmailCampaign } from "./EmailCampaign";
import { EventGoals } from "./EventGoals";
import RecentSells from "./RecentSells";

const SalesReport = () => {
  return (

    <div className="grid gap-4 md:grid-cols-6">
      <div className="col-span-3"><RecentSells /></div>
      <div className="col-span-3">
        {/* <div className="flex gap-4 w-full h-full"> */}
          <EventGoals />
          {/* <EmailCampaign /> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default SalesReport;