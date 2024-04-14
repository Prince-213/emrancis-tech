"use client";

import clsx from "clsx";
import {
  ChevronUp,
  Home,
  Mail,
  ClipboardList,
  Users2Icon,
  CalendarIcon,
  ClipboardIcon,
  ArrowDownRight,
  UsersRound,
  Search,
  Sun,
  Bell,
  Settings,
  User,
  ChevronDown,
  LucideMenu,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import animationData from "@/lib/commentwave.json";
import { CustomLottie } from "../_lib/ui/lottie";
import { PopoverDemo } from "../_lib/ui/dashboard/profile-popover";

export default function Layout({ children }: { children: React.ReactNode }) {
  const activePath = usePathname();

  const links = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: (
        <Home
          fill={activePath ? "white" : ""}
          className={clsx(" w-5 h-5", {
            " text-black": activePath == "/dashboard",
          })}
        />
      ),
    },
    {
      name: "Message",
      href: "/dashboard/message",
      icon: <Mail className=" w-5 h-5" />,
    },
    {
      name: "My Tasks",
      href: "/dashboard/tasks",
      icon: <ClipboardIcon className=" w-5 h-5" />,
    },
    {
      name: "Collegues",
      href: "/dashboard/friends",
      icon: <UsersRound className=" w-5 h-5" />,
    },

    {
      name: "Calendar",
      href: "/dashboard/calendar",
      icon: <CalendarIcon className=" w-5 h-5" />,
    },
  ];

  return (
    <div className=" w-full relative bg-white flex justify-between">
      <div className=" hidden lg:block w-[25%] fixed top-0 left-0 p-5 pt-8 h-screen ">
        <h1 className=" text-3xl font-semibold">Emrancis.</h1>
        <h1 className="text-[40px] relative font-semibold mt-[5vh]  mb-[3vh]">
          Start your day & be productive{" "}
          <motion.div className=" absolute -bottom-2 -right-2">
            <CustomLottie animation={animationData} />
          </motion.div>
        </h1>
        <div>
          <span className=" w-full flex justify-between items-center ">
            <h2
              style={{ letterSpacing: "3px" }}
              className=" text-sm font-bold  text-gray-700 uppercase"
            >
              menu
            </h2>
            <ChevronUp />
          </span>

          <div className=" mt-4 space-y-[18px] flex flex-col">
            {links.map((link, index) => {
              return (
                <div
                  key={index}
                  className={clsx(
                    " rounded-full cursor-pointer flex justify-between transition-all duration-100 ease-in-out delay-75 items-center text-gray-500 p-2  w-full ",
                    {
                      " text-white hover:shadow-md hover:shadow-[#0000004e] bg-[#141414]  ":
                        link.href == activePath,
                      " hover:text-black": link.href != activePath,
                    }
                  )}
                >
                  <div className=" flex items-center pl-3 space-x-[8px]  text-base">
                    <div className="">{link.icon}</div>{" "}
                    <p className=" font-medium">{link.name}</p>
                  </div>
                  {link.href == activePath && (
                    <div className=" h-[40px] flex items-center justify-center rounded-[50%] w-[40px] bg-[#3a3a3a]">
                      <ArrowDownRight className=" text-white" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className=" lg:ml-[25%] w-full lg:w-[75%]  h-fit lg:h-[125vh] px-5 lg:pr-5 ">
        <div className=" w-full flex justify-between items-center gap-x-2 py-5">
          <LucideMenu className=" w-8 h-8" />
          <div className=" w-[60%] shadow-sm hidden shadow-gray-200 text-gray-600 lg:flex items-center px-6 bg-[#f5f5f5] rounded-full h-14">
            <Search className=" text-gray-500 mr-4" />
            <input
              type="text"
              placeholder="Start searching here..."
              className=" w-[90%] bg-transparent h-full outline-none border-none"
            />
          </div>
          <button className=" w-[5%] hidden lg:flex items-center shadow-sm shadow-gray-200 justify-center h-14 bg-[#f5f5f5] rounded-[50%]">
            <Sun />
          </button>
          <button className=" shadow-sm shadow-gray-200 w-[5%] hidden lg:flex items-center justify-center h-14 bg-[#f5f5f5] rounded-[50%]">
            <Bell />
          </button>
          <button className=" w-[5%] hidden lg:flex items-center shadow-sm shadow-gray-200 justify-center h-14 bg-[#f5f5f5] rounded-[50%]">
            <Settings />
          </button>
          <div className=" flex items-center space-x-10 lg:hidden">
            <Search className=" w-8 h-8" />
            <Image
              src={
                "https://source.unsplash.com/a-woman-wearing-glasses-and-a-suit-geTGVJsR6EA"
              }
              width={50}
              height={50}
              className=" w-16 h-16 rounded-[50%]"
              alt=""
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
          <div className=" hidden lg:w-[20%] lg:flex items-center justify-between space-x-3">
            <button className=" w-[25%] relative overflow-hidden p-1 flex items-center justify-center h-14 bg-[#f5f5f5] rounded-[50%]">
              <Image
                src={
                  "https://source.unsplash.com/a-woman-wearing-glasses-and-a-suit-geTGVJsR6EA"
                }
                fill
                alt=""
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </button>

            <PopoverDemo />
          </div>
        </div>
        <div className=" w-full min-h-fit">{children}</div>
        <div className=" h-20"></div>
      </div>
    </div>
  );
}
