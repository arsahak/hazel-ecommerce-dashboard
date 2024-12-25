import WorldRealTimeClock from "../shared/WorldRealTImeClock";
import CustomerMetrics from "./CustomerMetrics";
import CustomerAnalytics from "./CustomersList";
import CustomersList from "./CustomersList";

const CustomersViews = () => {
  return (
    <div className="">
      <div className="bg-white py-6 px-6 mt-6 mb-4 flex items-center justify-between">
        <h1 className="text-2xl lg:text-4xl font-semibold ">Customers</h1>
        <div className="">
          <WorldRealTimeClock />
        </div>
      </div>
      <CustomerMetrics/>
      <CustomerAnalytics/>
    </div>
  );
};

export default CustomersViews;
