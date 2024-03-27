"use client";

import Image from "next/image";
import Link from "next/link";
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
        <div className=" w-[85%] text-center flex flex-col justify-center items-center  mx-auto">
          <div className=" lg:w-[50%] mx-auto space-y-5 ">
            <h1 className=" font-bold text-4xl lg:text-6xl ">Our Blog</h1>
            <p className=" lg:text-lg">
              We're constantly pushing the boundaries of what's possible and
              seeking new ways to improve our services.
            </p>
          </div>

          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
            className=" min-h-fit w-full mb-auto mt-10 lg:mt-14 flex lg:flex-row flex-col overflow-hidden shadow-2xl shadow-[#00000021] rounded-2xl bg-white "
          >
            <div className=" flex lg:flex-row flex-col w-full justify-between">
              <div className=" lg:w-[50%]">
                <Image
                  src="/pexels-jimmy-jimmy-1484806.jpg"
                  height="1000"
                  width="1000"
                  className=" h-[30vh] lg:h-[70vh] w-full object-cover  group-hover/card:shadow-xl"
                  alt="thumbnail"
                  loading="lazy"
                />
              </div>

              <div className=" lg:w-[50%] p-6 lg:p-0  flex flex-col justify-center  text-left text-pretty ">
                <div className=" lg:w-[80%] mx-auto  space-y-8">
                  <p className=" text-base font-medium text-gray-500">
                    May 20, 2023
                  </p>
                  <h1 className=" text-4xl lg:text-5xl font-bold">
                    5 reasons why Techty is the go-to choice for small business.
                  </h1>
                  <p className=" text-gray-700">
                    Let us manage your IT for you so that you can get back to
                    doing what you do best.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <section className=" w-full  min-h-screen py-[5vh] lg:py-[15vh]">
        <div className=" w-[85%] mx-auto">
          <motion.h1
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
            initial="hidden"
            whileInView={"visible"}
            className=" clip text-4xl lg:text-5xl lg:max-w-[50%] mx-auto  font-bold text-center"
          >
            Read All Articles
          </motion.h1>
          <p className=" text-lg mt-5 text-center lg:w-[50%] mx-auto">
            We're constantly pushing the boundaries of what's possible and
            seeking new ways to improve our services.
          </p>

          <motion.div
            variants={{
              hidden: { opacity: 1, scale: 0 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  delayChildren: 0.2,
                  staggerChildren: 0.3,
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                },
              },
            }}
            initial="hidden"
            whileInView={"visible"}
            viewport={{}}
            className=" w-full gap-6 mt-8 lg:mt-16  grid grid-cols-1 lg:grid-cols-3 "
          >
            {[1, 2, 3, 4, 5, 6].map((item, idx) => {
              return (
                <Link href={`/blog/test`} key={idx}>
                  <motion.div
                    variants={{
                      hidden: { y: 20, opacity: 0 },
                      visible: {
                        y: 0,
                        opacity: 1,
                      },
                    }}
                    key={idx}
                    className=" min-h-fit mb-auto mt-0 overflow-hidden shadow-2xl shadow-[#00000021] rounded-2xl bg-white "
                  >
                    <div className=" space-y-5">
                      <Image
                        src="/pexels-jimmy-jimmy-1484806.jpg"
                        height="1000"
                        width="1000"
                        className=" h-[30vh] w-full object-cover  group-hover/card:shadow-xl"
                        alt="thumbnail"
                        loading="lazy"
                      />

                      <div className=" items-center p-5 space-y-4">
                        <p className=" text-base font-medium text-gray-500">
                          May 20, 2023
                        </p>
                        <h1 className=" text-2xl font-bold">
                          5 reasons why Techty is the go-to choice for small
                          business.
                        </h1>
                        <p className=" text-gray-700">
                          Let us manage your IT for you so that you can get back
                          to doing what you do best.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}
