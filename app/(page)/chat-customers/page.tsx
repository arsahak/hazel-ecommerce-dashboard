import ChatInterface from "@/components/ChatCustomer/ChatCustomer";
import WorldRealTimeClock from "@/components/shared/WorldRealTImeClock";

const page = () => {
    return (
        <div className="bg-[#f8f8f8] mx-10 ">
            <div className="bg-white py-6 px-6 mt-6 mb-4 flex items-center justify-between">
                <h1 className="text-2xl lg:text-4xl font-semibold ">Chat customers</h1>
                <div className="">
                    <WorldRealTimeClock />
                </div>
            </div>
            <ChatInterface />
        </div>
    );
};

export default page;