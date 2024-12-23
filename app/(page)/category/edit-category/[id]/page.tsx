import EditCategory from "@/components/category/EditCategory";
import WorldRealTimeClock from "@/components/shared/WorldRealTImeClock";

interface Params {
    id: string;
  }

const page = ({ params }: { params: Params }) => {
    const { id } = params;
    return (
        <div className="bg-[#f8f8f8] !mx-10 ">
            <div className="bg-white py-6 px-6 mt-6 mb-3 flex items-center justify-between">
                <h1 className="text-4xl font-semibold ">Edit Category</h1>
                <div className="">
                    <WorldRealTimeClock />
                </div>
            </div>
            <EditCategory />
        </div>
    );
};

export default page;