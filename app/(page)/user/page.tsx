import WorldRealTimeClock from '@/components/shared/WorldRealTImeClock';
import Users from '@/components/users/Users';
import React from 'react';

const page = () => {
    return (
        <div className="bg-[#f8f8f8] mx-10 ">
            <div className="bg-white py-6 px-6 mt-6 mb-4 flex items-center justify-between">
                <h1 className="text-2xl lg:text-4xl font-semibold ">Setting Management </h1>
                <div className="">
                    <WorldRealTimeClock />
                </div>
            </div>
            <Users />
        </div>
    );
};

export default page;