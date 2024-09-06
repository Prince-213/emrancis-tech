import FadeLeftIntro from "@/app/_lib/animations/fade-left";
import FadeUpIntro from "@/app/_lib/animations/fadeupintro";
import UnveilAnimation from "@/app/_lib/animations/unveil-animation";
import { Clock, MapPin } from "lucide-react";
import React from "react";

const cats = ["upcoming", "pending", "recurring", "past", "cancelled"];

const current = "upcoming";

const Page = () => {
  return (
    <div className=" pt-5 w-[95%] mx-auto">
      <h1 className=" font-medium text-4xl">Events</h1>
      <p className=" text-lg font-medium text-gray-400 my-4">
        The schedules and upcoming events status of the team
      </p>

      <ul className=" my-10 flex items-center space-x-10 bg-gray-100/60 w-fit p-2 rounded-lg">
        {cats.map((item, index) => {
          return (
            <FadeLeftIntro key={index} delay={index * 0.2}>
              <button
                key={index}
                className={` ${
                  item == current ? " rounded-md bg-white shadow-md" : ""
                } px-6 py-3  hover:px-6 hover:py-3 rounded-md hover:bg-white hover:shadow-md transition-all duration-150`}
              >
                <p className=" text-xl font-medium capitalize">{item}</p>
              </button>
            </FadeLeftIntro>
          );
        })}
      </ul>

      <div className=" w-full">
        <div className=" w-full border-2 border-gray-300/50 rounded-xl px-6 py-3 flex justify-between items-center hover:shadow-xl hover:shadow-gray-100 transition-all duration-200">
          <div className=" flex space-x-10 items-center">
            <div className=" flex flex-col text-center justify-center items-center">
              <FadeUpIntro delay={0.2}>
                <h3 className=" font-medium text-lg ">Wed</h3>
              </FadeUpIntro>
              <FadeUpIntro delay={0.4}>
                <h1 className=" font-semibold text-6xl">28</h1>
              </FadeUpIntro>
            </div>
            <div className=" space-y-5">
              <span className=" flex items-center space-x-2">
                <Clock className=" text-gray-500" />
                <FadeLeftIntro delay={0.2}>
                  <p className=" font-medium text-gray-500">09:00 - 09:30</p>
                </FadeLeftIntro>
              </span>

              <span className=" flex items-center space-x-2">
                <MapPin className=" text-gray-500" />
                <FadeLeftIntro delay={0.4}>
                  <p className=" font-medium text-gray-500">
                    British College Enugu
                  </p>
                </FadeLeftIntro>
              </span>
            </div>
            <div className=" space-y-5">
              <UnveilAnimation delay={0.4}>
                <h3 className=" font-medium texlt">
                  30mins Seminar propsal meeting
                </h3>
              </UnveilAnimation>

              <div className=" flex items-center">
                <FadeLeftIntro delay={0.2}>
                  <div className=" w-8 h-8 bg-emerald-500 border-2 border-white rounded-[50%]"></div>
                </FadeLeftIntro>
                <FadeLeftIntro delay={0.4}>
                  <div className=" w-8 h-8 -translate-x-3 bg-emerald-500 border-2 border-white rounded-[50%]  "></div>
                </FadeLeftIntro>
              </div>
            </div>
          </div>
          <button className=" text-white bg-black py-2 px-6 font-medium text-lg rounded-lg">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
