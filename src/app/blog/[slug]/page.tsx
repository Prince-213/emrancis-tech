
import { motion } from "framer-motion";
import Image from "next/image";
import type { Metadata } from "next";

interface Props {
  params: {
    slug: string;
  };
}

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `${params.slug}`,
  };
};

export default function Page({ params }: Props) {
  const { slug } = params;

  return (
    <>
      <div className=" w-full bg-gradient-to-r from-[#F2F5F8] to-[#F0F0F0] pt-[10vh] pb-[15vh]">
        <div className=" w-[85%] text-center flex flex-col justify-center items-center  mx-auto">
          <div className=" lg:w-[75%] mx-auto space-y-5 ">
            <p className=" text-base">May 30, 2023 / Technology</p>
            <h1 className=" font-bold text-4xl lg:text-6xl ">
              5 reasons why Techty is the go-to choice for small business.
            </h1>
          </div>

          <div
           
            className=" min-h-fit w-full mb-auto mt-10 lg:mt-20 flex overflow-hidden shadow-2xl shadow-[#00000021] rounded-2xl bg-white "
          >
            <div className=" w-full ">
              <div className=" full">
                <Image
                  src="/pexels-jimmy-jimmy-1484806.jpg"
                  height="1000"
                  width="1000"
                  className=" h-[40vh] lg:h-[90vh] w-full object-cover  group-hover/card:shadow-xl"
                  alt="thumbnail"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className=" space-y-5  w-[80%] mx-auto flex flex-col justify-start items-start text-left mt-8 lg:mt-14">
            <h3 className=" text-2xl lg:text-4xl font-bold text-left">What is AI</h3>
            <p className=" lg:text-lg">
              At Techty, we understand how frustrating it can be to deal with a
              leaky faucet or pipe. That's why we offer reliable and efficient
              faucet and leak repair services to help you save money on your
              water bills and prevent further damage to your property.
            </p>
            <p className=" lg:text-lg">
              At Techty, we understand how frustrating it can be to deal with a
              leaky faucet or pipe. That's why we offer reliable and efficient
              faucet and leak repair services to help you save money on your
              water bills and prevent further damage to your property.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
