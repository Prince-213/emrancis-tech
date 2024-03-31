import React from "react";
import { unstable_noStore } from "next/cache";
import Image from "next/image";
import { Blog, BlogData, TopBlog, TopBlogs } from "@/types";
import { dateFormat } from "../utils";
import Slide from "./Slide";

const GetFeaturedBlog = async (blogId: string): Promise<BlogData> => {
  unstable_noStore();

  const res = await fetch(
    `https://emrancis-tech.vercel.app/api/get-blog/${blogId}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data: Blog = await res.json();
  return data.data;
};

const BlogDetail = async ({ blogId }: { blogId: string }) => {
  unstable_noStore();

  const blogDetail = await GetFeaturedBlog(blogId);

  console.log(blogDetail);

  return (
    <div className=" w-full bg-gradient-to-r from-[#F2F5F8] to-[#F0F0F0] pt-[10vh] pb-[15vh]">
      <div className=" w-[85%] text-center flex flex-col justify-center items-center  mx-auto">
        <div className=" lg:w-[75%] mx-auto space-y-5 ">
          <p className=" text-base">
            {dateFormat(blogDetail.date)} / {blogDetail.category}
          </p>
          <h1 className=" font-bold text-4xl lg:text-6xl ">
            {blogDetail.title}
          </h1>
        </div>

        <div className=" min-h-fit w-full mb-auto mt-10 lg:mt-20 flex overflow-hidden shadow-2xl shadow-[#00000021] rounded-2xl bg-white ">
          <div className=" w-full ">
            <div className=" full">
              <Image
                src={blogDetail.cover_photo_url}
                height="1000"
                width="1000"
                className=" h-[40vh] lg:h-[90vh] w-full object-cover  group-hover/card:shadow-xl"
                alt="thumbnail"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {blogDetail.description.map((item, idx) => {
          return (
            <Slide key={idx}>
              <div
                key={idx}
                className=" space-y-5  w-[80%] mx-auto flex flex-col justify-start items-start text-left mt-8 lg:mt-14"
              >
                <h3 className=" text-2xl lg:text-4xl font-bold text-left">
                  {item.heading}
                </h3>
                {item.content.map((item, idx) => {
                  return (
                    <Slide delay={idx / 10} key={idx}>
                      <p className=" leading-normal mb-4 lg:text-lg">{item}</p>
                    </Slide>
                  );
                })}
              </div>
            </Slide>
          );
        })}

        <div className=" w-[80%]">
          <Slide>
          <p className=" mt-5 text-left lg:text-lg">
            {blogDetail.conclusion}
          </p>
        </Slide>
        </div>
        
      </div>
    </div>
  );
};

export default BlogDetail;
