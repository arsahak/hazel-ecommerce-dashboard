"use client";
import { usersDemoData } from "@/config/data";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import ClientDeletedModal from "../shared/ui/Modal/ClientDeletedModal";

const CategoryList = () => {
  const [clientDeletedModal, setClientDeletedModal] = useState(false);
  const router = useRouter();

  return (
    <div className="mt-4">
      <form className="my-7">
        <div className="flex items-center space-x-4">
          <div className="w-full">
            <label
              htmlFor="name-icon"
              className="block mb-2 text-lg font-normal text-gray-900"
            >
              Category Name<span className="text-primary">*</span>
            </label>

            <input
              autoComplete="off"
              type="text"
              id="email-address-icon"
              className="bg-[#eeeeee] border border-gray-300 text-lg rounded-lg focus:ring-primary focus:border-primary block w-full pl-4 py-2 placeholder-gray-400  active:border-primary outline-none"
              placeholder=""
            />
          </div>
          <div className="w-full ">
            <label
              htmlFor="name-icon"
              className="block mb-2 text-lg font-normal text-gray-900"
            >
              Slug
            </label>

            <input
              autoComplete="off"
              type="text"
              id="email-address-icon"
              className="bg-[#eeeeee] border border-gray-300 text-lg rounded-lg focus:ring-primary focus:border-primary block w-full pl-4 py-2 placeholder-gray-400  active:border-primary outline-none"
              placeholder=""
            />
          </div>
        </div>
        <button className="px-4 py-2.5 text-white rounded-md font-medium text-base bg-[#383E54] hover:bg-[#2b3041] hover:text-white flex items-center mt-6">
          Add New Category
        </button>
      </form>
      <div className="relative overflow-x-auto bg-white pb-10">
        <table className="w-full text-left text-gray-500 ">
          <thead className="text-[16px] font-medium text-white text-center bg-[#383E54]">
            <tr>
              <th scope="col" className="px-4 py-3 border-r-1 border-gray-300">
                CATEGORY NAME
              </th>
              <th scope="col" className="px-6 py-3 border-r-1 border-gray-300">
                CATEGORY SLUG
              </th>

              <th scope="col" className="px-6 py-3 ">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {usersDemoData?.map((el: any, index: number) => (
              <tr
                key={index}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b text-[16px] font-medium text-gray-800 text-center "
              >
                <td className="px-6 py-4 ">{el?.phone}</td>
                <td className="px-6 py-4">{el?.subscriptionsDate}</td>
                <td className="px-6 py-4 flex justify-center items-center space-x-3">
                  <button
                    className="bg-yellow-100 hover:bg-yellow-200 p-1.5 rounded-lg"
                    onClick={() => router.push(`/client-edit`)}
                  >
                    <FiEdit className="text-[#D5AD45] size-4" />
                  </button>
                  <button
                    className="bg-red-100 hover:bg-red-200 p-1.5 rounded-lg"
                    onClick={() => setClientDeletedModal(!clientDeletedModal)}
                  >
                    <RiDeleteBin6Fill className="text-red-500 size-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <nav
          aria-label="Page navigation example "
          className="flex justify-end mt-8 px-12"
        >
          <ul className="inline-flex -space-x-px text-base h-10">
            <Link
              href="#"
              className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-800"
            >
              Previous
            </Link>

            <Link
              href="#"
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
            >
              1
            </Link>

            <Link
              href="#"
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
            >
              2
            </Link>

            <Link
              href="#"
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
            >
              ...
            </Link>

            <Link
              href="#"
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 "
            >
              Next
            </Link>
          </ul>
        </nav>
      </div>
      <ClientDeletedModal
        clientDeletedModal={clientDeletedModal}
        setClientDeletedModal={setClientDeletedModal}
      />
    </div>
  );
};

export default CategoryList;
