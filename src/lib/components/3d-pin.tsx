"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";

export function AnimatedPinDemo() {
  return (
    <div className="lg:h-[90vh] hidden  h-[40vh]  w-full lg:flex items-center justify-center ">
      <PinContainer
        title="Get Started"
        href="https://twitter.com/mannupaaji"
      >
        <div className="basis-full  tracking-tight text-slate-100/50 sm:basis-1/2 w-[40vw] h-fit ">
          
          <Image
            src="https://source.unsplash.com/black-flat-screen-computer-monitor-turned-on-displaying-website-koOdUvfGr4c"
            height="1000"
            width="1000"
            className=" h-[30vh] lg:h-[56vh] w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
            loading="lazy"
          />
        </div>
      </PinContainer>
    </div>
  );
}
