"use client";
import React from "react";
import { PinContainer } from "./ace/3d-pin";
import Image from "next/image";

export function AnimatedPinDemo() {
  return (
    <div className="lg:h-[90vh] hidden  h-[40vh]  w-full lg:flex items-center justify-center ">
      <PinContainer title="Dive Into Tech" href="">
        <div className="basis-full  tracking-tight text-slate-100/50 sm:basis-1/2 w-[40vw] h-fit ">
          <Image
            src="/pexels-fauxels-3183150.jpg"
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
