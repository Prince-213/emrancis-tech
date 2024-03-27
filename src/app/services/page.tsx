"use client";

import Image from "next/image";
import React, {
  LegacyRef,
  useEffect,
  useRef,
  useState,
  useLayoutEffect,
  Component,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Lenis from "@studio-freight/lenis";
import {
  Tv,
  ArrowRight,
  BriefcaseBusiness,
  Speaker,
  BarChart4,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  params: {
    id: string;
  };
}

export default function Page({ params }: Props) {
  const { id } = params;

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
              We're constantly pushing the boundaries of what's possible and
              seeking new ways to improve our services and help our clients
              achieve their goals.
            </p>
          </div>
          <motion.div
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,

                transition: {
                  delayChildren: 0.1,
                  staggerChildren: 0.2,
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            className=" gap-y-6 lg:gap-x-6 mt-10 grid md:grid-cols-2 grid-cols-1  lg:grid-cols-4"
          >
            {[1, 2, 3, 4].map((item, idx) => {
              return (
                <motion.div
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                    },
                  }}
                  key={idx}
                  className=" bg-white px-6 group  py-10 rounded-lg"
                >
                  <div className=" space-y-5 overflow-hidden">
                    <div className=" w-20 h-20 text-white bg-blue-500 rounded-[50%] flex justify-center items-center font-semibold ">
                      <Tv width={"26px"} height={"25px"} />
                    </div>
                    <h2 className=" font-bold text-2xl">Online Marketing</h2>
                    <p className=" text-lg">
                      In the new era of technology we look in the future with
                      certainty and pride
                    </p>
                    <div className=" -translate-x-[6rem] peer transition-all duration-200 ease-linear group-hover:translate-x-0 flex items-center space-x-3 text-blue-500 ">
                      <p className=" text-base font-semibold ">Contact Us</p>
                      <ArrowRight />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
      <div className=" w-full bg-white py-[5vh] lg:py-[15vh]">
        <div className=" w-[85%] mx-auto">
          <h1 className=" font-bold mb-[5vh] lg:mb-[10vh] text-4xl lg:text-5xl text-center lg:max-w-[50%] mx-auto">
            We have the best <span className=" text-blue-500">pricing</span>{" "}
            package for you
          </h1>

          {[1, 2].map((item, idx) => {
            return (
              <div key={idx}>
                <div className=" mb-10 flex lg:flex-row flex-col lg:h-[50vh] items-center justify-between w-full rounded-xl p-10 bg-gradient-to-r from-[#F2F5F8] to-[#F0F0F0]">
                  <div className=" lg:w-[50%] space-y-6 lg:space-y-0 h-full flex flex-col justify-between items-between">
                    <div>
                      <h1 className=" text-5xl font-bold">On-demand</h1>
                      <p className=" text-lg mt-2">
                        Get all these features when you are learning FrontEnd
                        Development.
                      </p>
                    </div>
                    <div className=" grid lg:grid-cols-2 justify-between gap-y-4">
                      {[1, 2, 3, 4, 5, 6].map((item, idx) => {
                        return (
                          <div
                            key={idx}
                            className=" flex items-center space-x-2"
                          >
                            <CheckCircle />
                            <p>Unlimited projects</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className=" w-full py-8 mt-8 lg:mt-0 lg:py-0 lg:w-[25%] space-y-10 flex flex-col items-center justify-center h-full rounded-lg bg-white">
                    <h2 className=" font-bold text-xl lg:text-2xl">
                      FrontEnd Dev
                    </h2>
                    <h2 className=" font-bold text-4xl lg:text-6xl">
                      $50k{" "}
                      <span className=" font-normal text-base lg:text-lg">
                        /month
                      </span>
                    </h2>
                    <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgb(0,119,255)] px-8 py-4 font-semibold bg-blue-500 rounded-md text-white  transition duration-200 ease-linear">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
