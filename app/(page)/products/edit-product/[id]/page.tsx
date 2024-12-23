import EditProduct from "@/components/products/EditProduct";
import WorldRealTimeClock from "@/components/shared/WorldRealTImeClock";
interface Params {
    id: string;
  }
const page = ({ params }: { params: Params }) => {
    const { id } = params;
    return (
        <div className="bg-[#f8f8f8] mx-10 ">
            <div className="bg-white py-6 px-6 mt-6 mb-3 flex items-center justify-between">
                <h1 className="text-4xl font-semibold ">Edit Product</h1>
                <div className="">
                    <WorldRealTimeClock />
                </div>
            </div>
            <EditProduct />
        </div>
    );
};

export default page;