'use client'
import { useState } from "react";
import { Dropdown } from "../shared/Dropdown";
import DateRangePicker from "../shared/ui/DateRangePicker";
import WorldRealTimeClock from "../shared/WorldRealTImeClock";
import TransactionTable from "./TransactionTable";


const Transactions = () => {
    const [selected, setSelected] = useState('Recent')

    const sortOptions = ['Recent', 'Amount: Low to High', 'Amount: High to Low', 'Oldest']

    return (
        <div>
            <div className="bg-white py-6 px-6 mt-6 mb-4 flex items-center justify-between">
                <h1 className="text-2xl lg:text-4xl font-semibold ">Transactions</h1>
                <div className="">
                    <WorldRealTimeClock />
                </div>
            </div>

            <div className="mb-4">
                <div className="flex items-center justify-between">
                    <DateRangePicker topTitle={'Transaction date form'} />
                    <div className="">
                        <div className="flex flex-wrap gap-5 items-center ">
                            <Dropdown
                                options={sortOptions}
                                value={selected}
                                onChange={setSelected}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <TransactionTable />
        </div>
    );
};

export default Transactions;