"use client";

import { useAnimationControls } from "framer-motion";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

const HeaderNav = () => {
  const burger = useRef<any>();
  const controls = useAnimationControls();

  const route = useRouter();

  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!open);
    console.log(open);
    controls.start({ height: open ? `0em` : "14.5rem" });
  };
  return (
    <header className=" w-full  bg-gradient-to-r from-[#F2F5F8] to-[#F0F0F0]">
      <nav className=" relative w-[85%] flex justify-between   mx-auto py-8">
        <div className=" w-full">
          <h1 className=" font-bold text-4xl">Emrancis</h1>
          <motion.ul
            ref={burger}
            animate={controls}
            initial={{ height: 0 }}
            transition={{
              type: "spring",
              stiffness: 600,
              damping: 100,
            }}
            className={` z-50 overflow-hidden  rounded-md flex transition-all duration-100 ease-linear absolute flex-col mt-5 bg-white  w-full lg:hidden text-left font-semibold`}
          >
            <div className=" flex flex-col p-6 space-y-4 ">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/services">Services</a>
              <a href="/blog">Blog</a>
              <a href="/contact">Contact</a>
              <a href="#"></a>
            </div>
          </motion.ul>
        </div>

        <ul className=" hidden lg:flex items-center space-x-12 font-semibold">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
          <a href="#"></a>

          <Link href={"/login"}>
            <button className="inline-flex h-12 min-w-[10em]  animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-100 transition-colors  font-space focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:outline-none hover:ring-2 hover:ring-slate-400 hover:ring-offset-2 hover:ring-offset-slate-50">
              Get Started
            </button>
          </Link>
        </ul>

        <svg
          className=" cursor-pointer lg:hidden"
          width="35"
          height="35"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={openMenu}
        >
          <path
            d="M2.5 4C2.22386 4 2 4.22386 2 4.5C2 4.77614 2.22386 5 2.5 5H12.5C12.7761 5 13 4.77614 13 4.5C13 4.22386 12.7761 4 12.5 4H2.5ZM2 7.5C2 7.22386 2.22386 7 2.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM2 10.5C2 10.2239 2.22386 10 2.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H2.5C2.22386 11 2 10.7761 2 10.5Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </nav>
    </header>
  );
};

export default HeaderNav;
