import WorldRealTimeClock from "../shared/WorldRealTImeClock";
import CategoryList from "./CategoryList";

const CategoryViews = () => {
  return (
    <div className="">
      <div className="bg-white py-6 px-6 mt-6 mb-3 flex items-center justify-between">
        <h1 className="text-4xl font-semibold ">Category </h1>
        <div className="">
          <WorldRealTimeClock />
        </div>
      </div>
      <CategoryList />
    </div>
  );
};

export default CategoryViews;
