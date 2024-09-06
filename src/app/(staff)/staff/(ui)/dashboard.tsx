import React from "react";
import {
  PieChartIcon,
  ChevronDown,
  Flag,
  Home,
  ListFilterIcon,
  MapPin,
  Plus,
  Search,
  Settings,
  ShieldQuestion,
  SquareGanttChart
} from "lucide-react";

import profile from "@/asset/image/aiony-haust-3TLl_97HNJo-unsplash.jpg";
import Image from "next/image";

import { StaffComponentTable } from "../(shared)/staff-view";
import UnveilAnimation from "@/app/_lib/animations/unveil-animation";
import FadeUpIntro from "@/app/_lib/animations/fadeupintro";
import FadeLeftIntro from "@/app/_lib/animations/fade-left";

const DashboardUI = () => {
  return (
    <div className=" w-full ">
      <div className=" w-full">
        <div className=" px-8 border-b-2 pb-4 mb-10">
          <div className=" mt-5 w-fit flex items-center space-x-10 relative after:w-[50%] after:h-[2px] after:bg-site-blue after:absolute after:-bottom-[60%] after:shadow-2xl after:shadow-site-blue after:left-0 ">
            <FadeUpIntro delay={0.3}>
              <button>
                <h1 className=" font-medium text-lg text-site-blue">
                  Executive Staff
                </h1>
              </button>
            </FadeUpIntro>

            <FadeUpIntro delay={0.6}>
              <button>
                <h1 className=" font-medium text-lg text-gray-400/60">
                  General Staff
                </h1>
              </button>
            </FadeUpIntro>
          </div>
        </div>
        <div className=" w-[96%] mt-5 mb-10 mx-auto flex items-center justify-between">
          <div className=" flex items-center space-x-4">
            <div className=" p-2 rounded-lg bg-gray-300/50 w-fit">
              <Image src={"/meeting.png"} alt="" width={25} height={25} />
            </div>
            <span className=" flex items-center space-x-3">
              <h1 className=" text-4xl font-medium">10</h1>
              <UnveilAnimation delay={0.3}>
                <p className=" text-gray-400 text-lg ">Executives</p>
              </UnveilAnimation>
            </span>
          </div>
          <div className=" flex items-center space-x-5">
            <FadeUpIntro delay={0.3}>
              <button className=" flex items-center space-x-2 border border-gray-200 px-4 py-2 rounded-lg">
                <ListFilterIcon />
                <h1 className=" font-medium">Filters</h1>
              </button>
            </FadeUpIntro>

            <FadeUpIntro delay={0.6}>
              <button className=" flex items-center bg-site-blue space-x-2  px-4 py-2 rounded-lg">
                <h1 className=" font-medium text-white">Add Staff</h1>
              </button>
            </FadeUpIntro>
          </div>
        </div>

        <StaffComponentTable />
      </div>
    </div>
  );
};

export default DashboardUI;
