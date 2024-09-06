"use client";

import React from "react";

import Link from "next/link";
import profile from "@/asset/image/aiony-haust-3TLl_97HNJo-unsplash.jpg";
import Image from "next/image";
import { links } from "@/lib/utils";
import { usePathname } from "next/navigation";
import FadeUpIntro from "@/app/_lib/animations/fadeupintro";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <div className=" p-5 w-[15%] bg-site-grey border-r-2 border-r-gray-200/50  h-full">
      <div className=" mb-5">
        <h1 className=" font-semibold text-3xl">Emrancis</h1>
      </div>
      <div className=" border rounded-xl p-3 class flex items-center space-x-3">
        <Image src={"/location.png"} alt="" width={30} height={30} />
        <div>
          <h1 className=" font-semibold text-base">Staff Report</h1>
          <p className=" text-sm text-gray-400">Esut Gate Imt</p>
        </div>
      </div>
      <nav className=" my-8">
        <ul className=" flex flex-col space-y-10">
          {links.map((item, index) => {
            return (
              <Link
                href={`${item.href}`}
                key={index}
                className={` flex flex-row items-center hover:bg-site-blue/10 transition-all duration-150 space-x-3 ${
                  item.href == pathname ? "bg-site-blue/10" : " bg-transparent"
                } px-4 py-3 rounded-xl`}
              >
                <Image src={`/${item.icon}`} alt="" width={30} height={30} />
                <FadeUpIntro delay={index * 0.2}>
                  <p className=" capitalize font-medium">{item.name}</p>
                </FadeUpIntro>
              </Link>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
