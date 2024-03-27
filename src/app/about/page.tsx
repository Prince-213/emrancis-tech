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
      <div className=" w-full bg-gradient-to-r from-[#F2F5F8] to-[#F0F0F0] py-[10vh]">
        <motion.div
          variants={{
            hidden: { opacity: 1, scale: 0 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                delayChildren: 0.1,
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          animate="visible"
          className=" w-[85%] flex lg:flex-row flex-col space-y-8 lg:space-y-0 justify-between items-center mx-auto"
        >
          <Image
            src="https://source.unsplash.com/black-flat-screen-computer-monitor-turned-on-displaying-website-koOdUvfGr4c"
            height="1000"
            width="1000"
            className=" h-[30vh] lg:h-[75vh] lg:w-[45%] object-cover  group-hover/card:shadow-xl"
            alt="thumbnail"
            loading="lazy"
          />
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
            initial="hidden"
            animate="visible"
            className=" lg:w-[48%] space-y-5 lg:space-y-10"
          >
            <div>
              <h1 className=" font-bold text-4xl lg:text-6xl">
                About <span className=" text-blue-500">Emrancis</span>{" "}
              </h1>
              <p className=" mt-4 font-medium lg:text-lg">
                We're constantly pushing the boundaries of what's possible and
                seeking new ways to improve our services and help our clients
                achieve their goals.
              </p>
            </div>
            <div className=" "></div>
            <div>
              <h3 className=" text-xl lg:text-2xl font-bold">Vision</h3>
              <p className=" lg:text-lg font-medium">
                Our vision is to create a better financial future for everyone.
                We believe that everyone deserves access to financial services
                and resources that empower them to achieve their goals.
              </p>
            </div>
            <div>
              <h3 className=" text-xl lg:text-2xl font-bold">Mission</h3>
              <p className=" lg:text-lg font-medium">
                We're on a mission to empower people to take control of their
                finances and achieve their goals. We believe that everyone
                should have access to the tools and resources they have and make
                smart financial decisions.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className=" w-full py-[5vh] lg:py-[15vh]">
        <div className=" w-[85%] flex lg:flex-row-reverse flex-col space-y-5 lg:space-y-0 justify-between items-center mx-auto">
          <Image
            src="/pexels-jimmy-jimmy-1484806.jpg"
            height="1000"
            width="1000"
            className=" h-[30vh] lg:h-[90vh] lg:w-[45%] rounded-xl object-cover  group-hover/card:shadow-xl"
            alt="thumbnail"
            loading="lazy"
          />
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
            initial="hidden"
            whileInView="visible"
            className=" lg:w-[48%] space-y-4 lg:space-y-8"
          >
            <div>
              <h1 className=" font-bold text-4xl lg:text-5xl">
                Message from <span className=" text-blue-500">manager</span>{" "}
              </h1>
            </div>
            <p className=" mt-4 font-medium lg:text-lg">
              I would like to take a moment to express my sincere gratitude for
              choosing our IT services. As the founder of this company, I am
              proud to say that we are committed to providing the best possible
              solutions for your business needs.
            </p>
            <p className=" mt-4 font-medium lg:text-lg">
              We understand the challenges that come with managing an enterprise
              in the digital age, and we are dedicated to delivering innovative
              and reliable IT services to help you navigate these challenges
              with ease.
            </p>
            <p className=" mt-4 font-medium lg:text-lg">
              Our team of experts is constantly working to improve our services
              and stay up-to-date with the latest technological advancements. We
              strive to provide personalized solutions that cater to your
              specific requirements, ensuring that your business operations run
              smoothly and efficiently.
            </p>
            <div>
              <h1 className=" font-bold text-lg">Prince Jonathan</h1>
              <h2>ICT Manager</h2>
            </div>
          </motion.div>
        </div>
      </div>
      <div className=" w-full   ">
        <div className=" w-[85%] border-t-2 py-[5vh] lg:py-[15vh]  justify-between items-center mx-auto">
          <h1 className=" text-4xl lg:text-5xl font-bold lg:max-w-[50%] text-center mx-auto">
            Our <span className=" text-blue-500">team</span> behind the
            organization
          </h1>

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
            className=" mt-[5vh] lg:mt-[10vh] gap-y-5 lg:gap-y-0 lg:gap-x-5 grid grid-cols-1 lg:grid-cols-4"
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
                >
                  <Image
                    src="/pexels-jimmy-jimmy-1484806.jpg"
                    height="1000"
                    width="1000"
                    className=" h-[25vh] lg:h-[45vh] w-full rounded-xl object-cover  group-hover/card:shadow-xl"
                    alt="thumbnail"
                    loading="lazy"
                  />
                  <div className=" mt-4">
                    <h1 className=" font-bold text-lg">Prince Jonathan</h1>
                    <h2>ICT Manager</h2>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </>
  );
}
