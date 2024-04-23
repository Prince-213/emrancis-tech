import React from "react";
import { unstable_noStore } from "next/cache";
import Image from "next/image";
import { Blog, BlogData, TopBlog, TopBlogs } from "@/types";
import { dateFormat } from "../utils";
import Slide from "./Slide";
import { QuoteIcon } from "@radix-ui/react-icons";

const GetFeaturedBlog = async (blogId: string): Promise<BlogData> => {
  unstable_noStore();

  const res = await fetch(
    `https://emrancis-tech.vercel.app/api/get-blog/${blogId}`,
    {
      next: {
        revalidate: 10,
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
    <div className=" w-full bg-gradient-to-r from-[#F2F5F8] to-[#F0F0F0] pt-[5vh] pb-[15vh]">
      <div className=" w-[70%] flex flex-col  mx-auto">
        <div className="  space-y-5 ">
          <div className=" flex  space-x-6">
            <div className=" flex items-center space-x-1">
              <p className=" text-lg font-medium text-blue-800">
                {blogDetail.category}
              </p>
              <div className=" w-8 h-[3px] rounded-3xl bg-blue-800" />
            </div>
            <p className=" text-base">Posted {dateFormat(blogDetail.date)}</p>
          </div>

          <h1 className="w-full font-semibold text-4xl lg:text-6xl ">
            {blogDetail.title}
          </h1>
        </div>

        <div
          id="trap-poster"
          className=" h-[40vh] lg:h-[80vh] w-full mb-auto mt-5 lg:mt-8 flex overflow-hidden shadow-2xl shadow-[#00000021]   "
        >
          <Image
            src={blogDetail.cover_photo_url}
            width={1000}
            height={400}
            className=" w-full h-full"
            alt="thumbnail"
            loading="lazy"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>

        <div className="">
          {blogDetail.description.map((item, idx) => {
            return (
              <div key={idx} className=" w-full">
                <div
                  key={idx}
                  className=" relative mt-10 w-full grid grid-cols-2 lg:gap-x-10 gap-x-5"
                >
                  <div className=" flex space-x-4 items-start  font-semibold max-h-fit ">
                    <QuoteIcon className=" w-32 h-32 rotate-180 -translate-y-10 text-blue-800" />
                    <h1 className=" lg:text-5xl text-3xl text-pretty leading-[3rem]  lg:leading-[5rem]">
                      {item.heading}
                    </h1>
                  </div>

                  <div className=" pt-1">
                    <p
                      key={idx}
                      className=" text-pretty lg:text-xl  text-gray-600 text-base lg:leading-[2.5rem]"
                    >
                      {item.content[0]}
                    </p>
                  </div>
                </div>
                <div className=" mt-10 pt-1 space-y-6">
                  {item.content.slice(1).map((item, idx) => {
                    return (
                      <p
                        key={idx}
                        className=" mb-5 leading-[2rem] text-pretty text-base lg:text-xl  text-gray-600 lg:leading-[2.5rem]"
                      >
                        {item}
                      </p>
                    );
                  })}

                  <p className=" mb-5 leading-[2rem] text-pretty text-base lg:text-xl  text-gray-600 lg:leading-[2.5rem]">
                    {blogDetail.conclusion}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* {blogDetail.description.map((item, idx) => {
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
        })} */}

        {/* <div className=" w-[80%]">
          <Slide>
            <p className=" mt-5 text-left lg:text-lg">
              {blogDetail.conclusion}
            </p>
          </Slide>
        </div> */}
      </div>
    </div>
  );
};

export default BlogDetail;
