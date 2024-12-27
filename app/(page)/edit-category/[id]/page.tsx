import { getProductCategory } from "@/app/action/category";
import EditCategory from "@/components/category/EditCategory";
import WorldRealTimeClock from "@/components/shared/WorldRealTImeClock";

const page = async ({ params }: any) => {
  const categories = await getProductCategory();
  const { id } = params;

  const category = categories?.categories.find(
    (category) => category._id === id
  );

  if (!category) {
    throw new Error(`Category with id ${id} not found`);
  }

  return (
    <div className="bg-[#f8f8f8] !mx-10 ">
      <div className="bg-white py-6 px-6 mt-6 mb-3 flex items-center justify-between">
        <h1 className="text-4xl font-semibold ">Category Update</h1>
        <div className="">
          <WorldRealTimeClock />
        </div>
      </div>
      <EditCategory category={category} id={id} />
    </div>
  );
};

export default page;
