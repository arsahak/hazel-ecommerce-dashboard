"use client";
import { Avatar, Badge } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { IoNotifications } from "react-icons/io5";
import { TbMessageFilled } from "react-icons/tb";

const TopNavBar = () => {
  const [isInvisible, setIsInvisible] = React.useState(false);

  return (
    <div className="mx-10 mt-6 flex items-center justify-between gap-x-16">
      <form className="w-[50%]">
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500  cursor-pointer"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-3 ps-10 text-lg text-gray-900 border border-gray-200 rounded-lg bg-white focus:ring-border-none focus:border-none"
            placeholder="Searching..."
            required
          />
        </div>
      </form>

      <div className="flex items-center gap-x-5">
        <div className="cursor-pointer">
          <Badge
            color="warning"
            content={2}
            isInvisible={isInvisible}
            shape="circle"
          >
            <IoNotifications className="fill-current" size={30} />
          </Badge>
        </div>
        <div className="cursor-pointer">
          <Badge
            color="success"
            content={5}
            isInvisible={isInvisible}
            shape="circle"
          >
            <TbMessageFilled size={30} />
          </Badge>
        </div>
        <div className="cursor-pointer">
          <Link href={"/user"}>
            <Badge
              content=""
              color="success"
              shape="circle"
              placement="bottom-right"
            >
              <Avatar
                radius="full"
                src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
              />
            </Badge>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
