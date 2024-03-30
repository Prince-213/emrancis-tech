import Image from "next/image";
import React, { Suspense } from "react";
import Link from "next/link";
import { Tv, ArrowRight, CheckCircle, Clock2 } from "lucide-react";
import prisma from "@/lib/db/prisma";



import Slide from "@/lib/components/Slide";
import { Loading } from "@/lib/components/loading";
import { Courses, Course } from '@/types/index';
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  {  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  
 
  // optionally access and extend (rather than replace) parent metadata

 
  return {
    title: "Services",
    
  }
}



export const getCourses = async (): Promise<Course[]> => {
  const res = await fetch("http://localhost:3000/api/all-courses", { cache: "force-cache" });
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data: Courses = await res.json();
  return data.data;
};



interface Props {
  params: {
    id: string;
  };
}

const services = [
  {
    icon: "devicon.svg",
    title: "Front End Development",
    description:
      "Front end development focuses on creating the user interface and user experience of a website or web application. This involves coding in languages like HTML, CSS, and JavaScript to design and implement visually appealing and interactive web pages.",
  },
  {
    icon: "icons8-react.svg",
    title: "Full Stack Development",
    description:
      "Full stack development encompasses both front end and back end development, allowing developers to work on all aspects of a web application. From designing the user interface to managing databases and servers, full stack developers have a comprehensive skill set to create dynamic and scalable web solutions.",
  },
  {
    icon: "icons8-python.svg",
    title: "AI Engineering",
    description:
      "AI engineering involves the development and implementation of artificial intelligence and machine learning algorithms to solve complex problems and automate tasks. From natural language processing to computer vision, AI engineers use data and algorithms to create intelligent systems that can learn and adapt over time.",
  },
  {
    icon: "icons8-node-js.svg",
    title: "Back End Development",
    description:
      "Back end development focuses on the server-side logic and database management of a web application. Back end developers work with languages like Python, Ruby, Java, or Node.js to build the behind-the-scenes functionality that powers the front end of the application, ensuring smooth performance and data management.",
  },
  {
    icon: "icons8-flutter.svg",
    title: "Mobile Software Development",
    description:
      "Mobile software development involves creating applications specifically tailored for mobile devices such as smartphones and tablets. Developers use platforms like iOS (using Swift or Objective-C) or Android (using Java or Kotlin) to build mobile apps that offer unique experiences optimized for smaller screens and touch interactions.",
  },
];

export default async function Page({ params }: Props) {
  const { id } = params;

  const courses = await getCourses();

  console.log(courses);

  return (
    <>
      <div className=" w-full bg-gradient-to-r from-[#F2F5F8] to-[#F0F0F0] pt-[10vh] pb-[15vh]">
        <div className=" w-[85%]  mx-auto">
          <div className=" flex lg:flex-row flex-col text-center lg:text-left justify-between items-end">
            <h1 className=" text-4xl lg:text-6xl font-bold lg:w-[50%]">
              We provide the best{" "}
              <span className=" text-blue-500">service</span> solutions.
            </h1>
            <p className=" lg:w-[45%] lg:text-lg">
              {"We're"} constantly pushing the boundaries of {"what's"} possible
              and seeking new ways to improve our services and help our clients
              achieve their goals.
            </p>
          </div>
          <div className=" gap-y-6 lg:gap-x-6 mt-10 grid md:grid-cols-2 grid-cols-1  ">
            {services.map((item, idx) => {
              return (
                <Link className=" h-full" key={idx} href={"/contact"}>
                  <div
                    key={idx}
                    className=" bg-white px-6 group  py-10 rounded-lg"
                  >
                    <div className=" space-y-5 h-full overflow-hidden">
                      <Image
                        src={`/${item.icon}`}
                        height="48"
                        width="48"
                        alt="http://icons8.com/icons"
                      />
                      <h2 className=" font-bold text-2xl">{item.title}</h2>
                      <p className=" text-lg">{item.description}</p>
                      <div className=" -translate-x-[6rem] peer transition-all duration-200 ease-linear group-hover:translate-x-0 flex items-center space-x-3 text-blue-500 ">
                        <p className=" text-base font-semibold ">Contact Us</p>
                        <ArrowRight />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className=" w-full bg-white py-[5vh] lg:py-[15vh]">
        <div className=" w-[85%] mx-auto">
          <h1 className=" font-bold mb-[5vh] lg:mb-[10vh] text-4xl lg:text-5xl text-center lg:max-w-[50%] mx-auto">
            We have the best <span className=" text-blue-500">pricing</span>{" "}
            package for you
          </h1>

          <Suspense fallback={<p className="">Loading...</p>}>
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
                            <h1 className=" font-semibold mb-3">
                              You Will Learn
                            </h1>
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
                              <div
                                key={idx}
                                className=" flex items-center space-x-2"
                              >
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
          </Suspense>
        </div>
      </div>
    </>
  );
}
