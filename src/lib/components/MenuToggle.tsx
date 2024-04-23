"use client"

import React from "react";
import { useState } from "react";

const MenuToggle = () => {
  const [open, setOpen] = useState(false);

  const burger = () => {
    setOpen(!open);
  };
  return (
    <ul
      className={` z-50 overflow-hidden ${
        open ? "h-fit" : "h-0"
      } transition-all duration-100 ease-linear flex absolute flex-col mt-5 bg-white  w-full lg:hidden text-left font-semibold`}
    >
      <div className=" flex flex-col p-6 space-y-4 ">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
        <a href="#"></a>
      </div>
    </ul>
  );
};

export default MenuToggle;
