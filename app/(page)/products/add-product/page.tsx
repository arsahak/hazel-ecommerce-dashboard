import AddProduct from "@/components/AddProduct/AddProduct";
import ProductView from "@/components/products/ProductView";
import WorldRealTimeClock from "@/components/shared/WorldRealTImeClock";

const page = () => {
  return (
    <div className="bg-[#f8f8f8] mx-10 ">
      <div className="bg-white py-6 px-6 mt-6 mb-3 flex items-center justify-between">
        <h1 className="text-4xl font-semibold ">Add New Product</h1>
        <div className="">
          <WorldRealTimeClock />
        </div>
      </div>
      <AddProduct />
    </div>
  );
};

export default page;
