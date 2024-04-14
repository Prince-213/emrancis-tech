import React from "react";
import { Calendar, ClipboardList, DownloadCloud, File } from "lucide-react";
import { AvatarGroup } from "../_lib/ui/dashboard/avatar-group";
import TaskCard from "../_lib/ui/dashboard/task-card";

import Image from "next/image";

const DashboardPage = () => {
  return (
    <div className=" text-4xl grid gap-5 grid-cols-1 lg:grid-cols-2 w-full min-h-fit rounded-3xl p-5 bg-[#f5f5f5]">
      <div className=" bg-white w-full lg:w-[120%] flex flex-col items-between justify-between rounded-3xl shadow-sm p-5 min-h-[50vh]">
        <div>
          <div className="flex items-center space-x-3">
            <h1 className=" mb-2 lg:mb-0 text-xl font-semibold">
              Upcoming Classes
            </h1>
          </div>
        </div>
        <div className=" grid gap-5 grid-cols-1 lg:grid-cols-2">
          <TaskCard />
          <TaskCard />
        </div>
      </div>
      <div className=" min-h-[50vh] bg-white lg:ml-[20%] p-5 w-full lg:w-[80%] shadow-sm rounded-3xl ">
        <div className=" w-full flex items-center justify-between">
          <div className="flex items-end justify-between w-full">
            <h1 className=" text-xl font-semibold">Meeting</h1>
            <p className=" text-sm font-semibold">Aug 3, 2021 - Aug 7, 2021</p>
          </div>
        </div>
        <div className=" w-full mt-5 gap-x-5 lg:gap-x-10 grid grid-cols-3">
          <div className=" w-full space-y-2 p-2">
            <div className=" bg-[#f5f5f5] rounded-2xl p-5 space-y-2 flex flex-col justify-center items-center">
              <p className=" text-sm">Mon</p>
              <p className=" text-base font-semibold">3</p>
            </div>
            <div className=" space-y-10">
              <p className=" font-medium text-base text-gray-400 text-center">
                9:00 AM
              </p>
              <p className=" font-medium text-base text-gray-400 text-center">
                3:00 PM
              </p>
              <p className=" font-medium text-base text-gray-400 text-center">
                6:00 PM
              </p>
            </div>
          </div>

          <div className=" w-full space-y-2 border-2 rounded-2xl p-2 border-black">
            <div className=" bg-transparent rounded-2xl p-5 space-y-2 flex flex-col justify-center items-center">
              <p className=" text-sm">Tue</p>
              <p className=" text-base font-semibold">3</p>
            </div>
            <div className=" space-y-10">
              <p className=" font-medium text-base text-gray-400 text-center">
                9:00 AM
              </p>
              <p className=" font-medium text-base text-gray-400 text-center">
                3:00 PM
              </p>
              <p className=" font-medium text-base text-gray-400 text-center">
                6:00 PM
              </p>
            </div>
          </div>

          <div className=" w-full space-y-2 p-2">
            <div className=" bg-[#f5f5f5] rounded-2xl p-5 space-y-2 flex flex-col justify-center items-center">
              <p className=" text-sm">Mon</p>
              <p className=" text-base font-semibold">3</p>
            </div>
            <div className=" space-y-10">
              <p className=" font-medium text-base text-gray-400 text-center">
                9:00 AM
              </p>
              <p className=" font-medium text-base text-gray-400 text-center">
                3:00 PM
              </p>
              <p className=" font-medium text-base text-gray-400 text-center">
                6:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white shadow-sm  rounded-3xl h-[50vh]">
        <div className=" w-full p-5 border-b-2 border-gray-100 flex justify-between items-center">
          <p className=" text-lg text-black font-medium">Trending articles</p>
          <p className=" text-base font-medium text-gray-500 underline">
            See all articles
          </p>
        </div>
        <div className=" p-5">
          <div className=" max-h-fit bg-[#f5f5f5] p-3 flex  space-x-5 w-full rounded-lg">
            <Image
              src={
                "https://source.unsplash.com/turned-on-monitoring-screen-qwtCeJ5cLYs"
              }
              alt=""
              width={70}
              height={70}
              style={{ borderRadius: "5px" }}
            />
            <div className=" max-h-fit space-y-0 tracking-tighter lg:tracking-normal">
              <h1 className=" line-clamp-1 text-lg font-medium">
                Bill Walsh leadership lessons
              </h1>
              <span className=" text-sm lg:text-base text-gray-500">
                Willis Harris - 23 Feb 2023
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white shadow-sm  rounded-3xl h-[50vh]">
        <div className=" w-full p-5 border-b-2 border-gray-100 flex justify-between items-center">
          <p className=" text-lg text-black font-medium">Files</p>
          <p className=" text-base font-medium text-gray-500 underline">
            View all
          </p>
        </div>
        <div className=" p-5">
          <div className=" w-full tracking-tighter lg:tracking-normal justify-between border-2 border-black rounded-lg p-3 flex items-center">
            <div className="  flex items-center space-x-5 w-full ">
              <File />
              <div>
                <h1 className=" text-base lg:text-lg font-medium">
                  git-cheat.pdf
                </h1>
                <span className=" text-sm lg:text-base text-gray-500">
                  Aug 5, 2021 at 9:50 AM
                </span>
              </div>
            </div>

            <span className=" space-x-5 flex items-center ">
              <p className=" text-base text-gray-500 font-semibold">0.8KB</p>
              <DownloadCloud className=" text-black" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
