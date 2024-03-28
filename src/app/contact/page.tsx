"use client";


import React from "react";

import { Clock, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

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
            <h1 className=" font-bold text-4xl lg:text-6xl ">Contact Us</h1>
            <p className=" text-lg">
              {"We're"} constantly pushing the boundaries of {"what's"} possible and
              seeking new ways to improve our services.
            </p>
          </div>

          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
            className=" min-h-fit justify-between flex flex-col lg:flex-row space-y-8 lg:space-y-0  items-start w-full mb-auto mt-8 lg:mt-14  "
          >
            <div className=" lg:w-[45%]">
              <h3 className=" lg:max-w-[70%] text-center lg:text-left text-2xl font-bold">
                {"We're"} happy to discuss your project and answer any question
              </h3>
              <div className=" mt-10 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-y-10">
                <div className=" text-left flex flex-col space-y-5 justify-start">
                  <div className=" flex items-center space-x-4">
                    <Phone className=" text-blue-500" />

                    <p className=" font-bold text-lg">Toll Free Number</p>
                  </div>
                  <p>+234 9066211183</p>
                </div>
                <div className=" text-left flex flex-col space-y-5 justify-start">
                  <div className=" flex items-center space-x-4">
                    <Mail className=" text-blue-500" />

                    <p className=" font-bold text-lg">Email Address</p>
                  </div>
                  <p>princolosh@gmail.com</p>
                </div>
                <div className=" text-left flex flex-col space-y-5 justify-start">
                  <div className=" flex items-center space-x-4">
                    <Phone className=" text-blue-500" />

                    <p className=" font-bold text-lg">Working Hours</p>
                  </div>
                  <p className=" max-w-[50%]">Mon To Fri, 9:00 AM to 8:00 PM</p>
                </div>
                <div className=" text-left flex flex-col space-y-5 justify-start">
                  <div className=" flex items-center space-x-4">
                    <Clock className=" text-blue-500" />

                    <p className=" font-bold text-lg">Office Address</p>
                  </div>
                  <p>77408 Satterfield Motorway Suite 469 New York, USA.</p>
                </div>
              </div>
            </div>
            <div className=" bg-white text-left p-8 rounded-xl shadow-2xl lg:w-[45%]">
              <h1 className=" text-xl lg:text-2xl mb-3 font-bold">Send Us A Message</h1>
              <p className=" lg:text-lg lg:max-w-[80%]">
                Feel free to fill up the form and our team will get back to you
                within 24 hours.
              </p>
              <div className=" mt-8 lg:mt-16 gap-5 grid grid-cols-2">
                <input
                  type="text"
                  placeholder="Name"
                  className=" p-3 lg:p-5 rounded-lg bg-[#F2F5F8]"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className=" p-3 lg:p-5 rounded-lg bg-[#F2F5F8]"
                />
                <textarea
                  className=" p-3 lg:p-5 col-span-2 rounded-lg bg-[#F2F5F8] h-[12rem] lg:h-[15rem]"
                  placeholder="Message"
                />
                <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] col-span-2 hover:bg-[rgb(0,119,255)] px-8 py-4 font-semibold bg-blue-500 rounded-md text-white  transition duration-200 ease-linear">
                  Send Message
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
