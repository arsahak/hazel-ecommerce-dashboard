import { getProductCategory } from "@/app/action/category";
import CategoryViews from "@/components/category/CategoryViews";

const page = async () => {
  const categories = await getProductCategory();

  return (
    <div className="bg-[#f8f8f8] mx-10 ">
      <CategoryViews categories={categories} />
    </div>
  );
};

export default page;
