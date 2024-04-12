import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ace/spotlight";

export function SpotlightPreview() {
  return (
    <div className="h-full w-full  flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.5] relative overflow-hidden">
      <Spotlight
        className="-top-10 -left-20 md:left-20 md:-top-10"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Empowering <br /> future developers .
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-xl text-center mx-auto">
          At CodeCrafters Academy, we believe that coding is more than just
          syntax and algorithms—it’s a superpower waiting to be harnessed. Our
          mission is to empower aspiring programmers, young and old, to become
          confident creators in the digital world.
        </p>
      </div>
    </div>
  );
}
