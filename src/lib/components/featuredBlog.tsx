import React from "react";
import { unstable_noStore } from "next/cache";
import Image from "next/image";
import { TopBlog, TopBlogs } from "@/types";
import { dateFormat } from "../utils";
import Link from "next/link";
import { CardItem } from "./ace/3d-card";

const GetFeaturedBlog = async (): Promise<TopBlog[]> => {
  unstable_noStore();

  const res = await fetch("https://emrancis-tech.vercel.app/api/top-blogs", {
    next: {
      revalidate: 10,
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data: TopBlogs = await res.json();
  return data.data;
};

const FeaturedBlog = async () => {
  unstable_noStore();

  const featuredBlog = await GetFeaturedBlog();

  return (
    <div className=" min-h-fit w-full mb-auto mt-10 lg:mt-14 flex lg:flex-row flex-col overflow-hidden shadow-2xl shadow-[#00000021] rounded-2xl bg-white ">
      <Link
        href={`/blog/${featuredBlog[0].id}`}
        className=" flex lg:flex-row flex-col w-full justify-between"
      >
        <div className=" lg:w-[50%]">
          <Image
            src={featuredBlog[0].cover_photo_url}
            height="1000"
            width="1000"
            className=" h-[30vh] lg:h-[70vh] w-full object-cover  group-hover/card:shadow-xl"
            alt="thumbnail"
            loading="lazy"
            placeholder="empty"
          />
        </div>

        <div className=" lg:w-[50%] p-6 lg:p-0  flex flex-col justify-center  text-left text-pretty ">
          <div className=" lg:w-[80%] mx-auto  space-y-8">
            <p className=" text-base font-medium text-gray-500">
              {dateFormat(featuredBlog[0].date)}
            </p>

            <h1 className=" text-3xl line-clamp-4 lg:text-[2.5rem] leading-[1em] font-bold">
              {featuredBlog[0].title}
            </h1>
            <p className=" line-clamp-2 text-gray-700">
              {featuredBlog[0].conclusion}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FeaturedBlog;
