import Image from "next/image";
import { FaGetPocket } from "react-icons/fa";
import { GiExpense } from "react-icons/gi";
import { MdOutlineLocalPrintshop } from "react-icons/md";

const ShopDetialsSection = () => {
  return (
    <div className=" flex items-stretch justify-between gap-6">
      <div className="bg-white py-6 px-6 my-3 w-[65%]">
        <div className="flex items-start space-x-4">
          <div className="bg-gray-100 border p-6 h-[250px] flex items-center w-[200px]">
            <Image
              src="/assets/site-logo/hazle-logo-main.png"
              width={500}
              height={500}
              alt="Picture of the author"
              className="w-[150px] h-auto"
            />
          </div>
          <div className="">
            <h1 className="text-3xl font-semibold ">Shopping Point - Retial</h1>
            <p className="text-base font-light mt-2">
              By default, all toasts will inherit ToastContainer's props.
            </p>

            <h1 className="text-2xl font-semibold mt-6">Average Rate - 2024</h1>
            <div className="grid grid-cols-3 items-center justify-between gap-12 mt-8">
              <div className="">
                <div className="flex items-start space-x-3">
                  <div className="p-4 bg-green-500  rounded-lg">
                    <FaGetPocket className="size-10 text-white" />
                  </div>
                  <div className="">
                    <h2 className="text-2xl font-semibold ">$58,425</h2>
                    <p className="text-base font-light">Income</p>
                    <p className="text-base font-light mt-1 text-green-500">
                      +45.85%
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex items-start space-x-3">
                  <div className="p-4 bg-red-600 rounded-lg">
                    <GiExpense className="size-10 text-white" />
                  </div>
                  <div className="">
                    <h2 className="text-2xl font-semibold ">$923,25</h2>
                    <p className="text-base font-light">Expnese</p>
                    <p className="text-base font-light mt-1 text-red-600">
                      -15.14%
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex items-start space-x-3">
                  <div className="p-4 bg-green-500 rounded-lg">
                    <MdOutlineLocalPrintshop className="size-10 text-white" />
                  </div>
                  <div className="">
                    <h2 className="text-2xl font-semibold ">4,272</h2>
                    <p className="text-base font-light">New Order</p>
                    <p className="text-base font-light mt-1 text-green-500">
                      +45.36%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-cyan-100 to-blue-50 py-6 px-6 my-3 w-[35%] flex items-center space-x-10">
        <Image
          src="/assets/balance.webp"
          width={500}
          height={500}
          alt="Picture of the author"
          className="w-[240px] h-auto"
        />
        <div className="">
          <h1 className="text-4xl font-semibold ">$24,154K</h1>
          <h6 className="text-xl font-semibold mt-6">Total Balance</h6>
        </div>
      </div>
    </div>
  );
};

export default ShopDetialsSection;
