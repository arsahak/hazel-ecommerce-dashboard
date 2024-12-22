import EditOrder from "@/components/orders/EditOrder";
import WorldRealTimeClock from "@/components/shared/WorldRealTImeClock";

const page = ({params}) => {
    const {id} = params;
    return (
        <div className="bg-[#f8f8f8] mx-10">
            <div className="bg-white py-6 px-6 mt-6 mb-3 flex items-center justify-between">
                <h1 className="text-4xl font-semibold ">Edit Order</h1>
                <div className="">
                    <WorldRealTimeClock />
                </div>
            </div>
            <EditOrder />
        </div>
    );
};

export default page;