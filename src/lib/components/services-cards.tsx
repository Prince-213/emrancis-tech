import { Course, Courses } from "@/types";
import React, { Suspense } from "react";
import Slide from "./Slide";
import { Clock2, CheckCircle } from "lucide-react";
import { CourseCardSkeleton } from "./skeleton";

const GetCourses = async (): Promise<Course[]> => {
  const res = await fetch("https://emrancis-tech.vercel.app/api/all-courses", {
    next: { revalidate: 5 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data: Courses = await res.json();
  return data.data;
};

const CourseCard = async () => {
  const courses = await GetCourses();

  console.log(courses)

  return (
    <div className=" w-full">
      {courses.map((item: Course, idx) => {
        return (
          <Slide key={idx} delay={idx / 10}>
            <div key={idx}>
              <div className=" mb-10 flex lg:flex-row flex-col lg:h-fit items-center justify-between w-full rounded-xl p-10 bg-gradient-to-r from-[#F2F5F8] to-[#F0F0F0]">
                <div className=" lg:w-[60%]  space-y-6 lg:space-y-10 h-fit flex flex-col justify-between items-between">
                  <div>
                    <h1 className=" text-5xl font-bold">On-demand</h1>
                    <p className=" text-lg mt-2">{item.description}</p>
                  </div>
                  <div className=" text-base w-full lg:flex justify-between">
                    <div className=" w-[60%]">
                      <h1 className=" font-semibold mb-3">You Will Learn</h1>
                      <div className=" grid lg:grid-cols-2 gap-4">
                        {item.learn.map((item, idx) => {
                          return (
                            <div
                              key={idx}
                              className=" flex items-center space-x-2"
                            >
                              <CheckCircle />
                              <p>{item}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className=" w-[40%]">
                      <h1 className=" font-semibold mb-3">Requirement</h1>
                      <div className=" grid  gap-4">
                        {item.required.map((item, idx) => {
                          return (
                            <div
                              key={idx}
                              className=" flex items-center space-x-2"
                            >
                              <CheckCircle />
                              <p className=" text-sm">{item}</p>
                            </div>
                          );
                        })}
                      </div>
                      <div className=" mt-5">
                        <h1 className=" font-semibold">Duration</h1>
                        <div key={idx} className=" flex items-center space-x-2">
                          <Clock2 />
                          <p>{item.duration}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" w-full py-10 mt-8 lg:mt-0 lg:py-6 lg:w-[25%] space-y-5 flex flex-col items-center justify-center h-full rounded-lg bg-white">
                  <h2 className=" font-bold text-xl lg:text-2xl">
                    {item.title}
                  </h2>
                  <h2 className=" font-bold text-4xl lg:text-6xl">
                    ₦
                    {Intl.NumberFormat("en-US", {
                      notation: "compact",
                    }).format(item.price)}
                  </h2>
                  <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgb(0,119,255)] px-8 py-4 font-semibold bg-blue-500 rounded-md text-white  transition duration-200 ease-linear">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </Slide>
        );
      })}
    </div>
  );
};

export default CourseCard;
