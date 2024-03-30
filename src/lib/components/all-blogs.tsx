import React from "react";
import Slide from "./Slide";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { unstable_noStore as noStore} from "next/cache";
import { TopBlog, TopBlogs } from "@/types";
import { dateFormat } from "../utils";

const GetAllBlogs = async (): Promise<TopBlog[]> => {
  noStore();

  const res = await fetch("https://emrancis-tech.vercel.app/api/top-blogs/7", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data: TopBlogs = await res.json();
  return data.data;
};

const AllBlogs = async () => {
  noStore();

  const allBlogs = await GetAllBlogs();

  return (
    <div className=" w-full gap-6 mt-8 lg:mt-16  grid grid-cols-1 lg:grid-cols-3 ">
      {allBlogs.map((item, idx) => {
        return (
          <Slide key={idx} delay={idx / 10}>
            <Link href={`/blog/${item.id}`} key={idx}>
              <div
                key={idx}
                className=" min-h-fit mb-auto mt-0 overflow-hidden shadow-2xl shadow-[#00000021] rounded-2xl bg-white "
              >
                <div className=" ">
                  <Image
                    src={item.cover_photo_url}
                    height="1000"
                    width="1000"
                    className=" h-[30vh] w-full object-cover  group-hover/card:shadow-xl"
                    alt="thumbnail"
                    loading="lazy"
                    placeholder="empty"
                  />

                  <div className=" items-center p-5 space-y-4">
                    <p className=" text-base font-medium text-gray-500">
                      {dateFormat(item.date)}
                    </p>
                    <h1 className=" line-clamp-4 text-2xl font-bold">
                      {item.title}
                    </h1>
                    <p className=" text-gray-700 line-clamp-3">
                      {item.conclusion}
                    </p>
                  </div>

                  <div className=" p-5 flex items-center space-x-2">
                    <Avatar>
                      <AvatarImage sizes="lg" src={item.cover_photo_url} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    <div>
                      <div className=" text-lg font-semibold">
                        {item.author_name}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </Slide>
        );
      })}
    </div>
  );
};

export default AllBlogs;
