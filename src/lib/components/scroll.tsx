"use client";
import gif from "./simplistic-startup-launch-and-business-idea.gif";
import Image from "next/image";

export const ScrollDown = () => {
  return (
    <div className=" w-full h-screen flex items-center justify-center">
      <Image
        src={"/simplistic-startup-launch-and-business-idea.gif"}
        width={200}
        height={200}
        unoptimized
        alt=""
      />
    </div>
  );
};
