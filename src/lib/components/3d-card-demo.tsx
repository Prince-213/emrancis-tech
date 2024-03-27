"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 shadow-2xl cursor-pointer relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full lg:w-[40vw] sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Become a professional programmer
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
            Making your programming dreams come alive
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="https://source.unsplash.com/woman-in-black-top-using-surface-laptop-glRqyWJgUeY"
            height="1000"
            width="1000"
            className=" h-[22rem] w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
            loading="lazy"
            />
        </CardItem>
        
      </CardBody>
    </CardContainer>
  );
}
