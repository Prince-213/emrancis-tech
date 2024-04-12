import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";

import Slide from "@/lib/components/Slide";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import type { Metadata } from "next";
import FeaturedBlog from "@/lib/components/featuredBlog";
import FeaturedBlogSkeleton from "@/lib/components/featured-blog-skeleton";
import AllBlogs from "@/lib/components/all-blogs";

export const metadata: Metadata = {
  title: "Blog",
  description: "Get engaged in some of the latest news ",
};

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
              {"We're"} constantly pushing the boundaries of {"what's"} possible
              and seeking new ways to improve our services.
            </p>
          </div>

          <Suspense fallback={<FeaturedBlogSkeleton />}>
            <FeaturedBlog />
          </Suspense>
        </div>
      </div>
      <section className=" w-full  min-h-screen py-[5vh] lg:py-[15vh]">
        <div className=" w-[85%] mx-auto">
          <h1 className=" clip text-4xl lg:text-5xl lg:max-w-[50%] mx-auto  font-bold text-center">
            Read All Articles
          </h1>
          <p className=" text-lg mt-5 text-center lg:w-[50%] mx-auto">
            {"We're"} constantly pushing the boundaries of {"what's"} possible
            and seeking new ways to improve our services.
          </p>

          <AllBlogs />
        </div>
      </section>
    </>
  );
}
