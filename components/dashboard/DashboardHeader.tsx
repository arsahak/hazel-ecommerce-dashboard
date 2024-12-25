// import WorldRealTImeClock from "../shared/WorldRealTImeClock";

import WorldRealTimeClock from "../shared/WorldRealTImeClock";

const DashboardHeader = () => {
  return (
    <div className="bg-white py-6 px-6 mt-6 mb flex items-center justify-between">
      <h1 className="text-2xl lg:text-4xl font-semibold ">Sales Analysis </h1>
      <div className="">
        <WorldRealTimeClock />
      </div>
    </div>
  );
};

export default DashboardHeader;
