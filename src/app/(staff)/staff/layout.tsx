import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import SideBar from "./(shared)/sidebar";
import FadeLeftIntro from "@/app/_lib/animations/fade-left";
import FadeUpIntro from "@/app/_lib/animations/fadeupintro";
import UnveilAnimation from "@/app/_lib/animations/unveil-animation";

import {
  Search,
  Plus,
  ShieldQuestion,
  PieChartIcon,
  Settings,
  Flag,
  ChevronDown
} from "lucide-react";
import profile from "@/app/_lib/asset/image/aiony-haust-3TLl_97HNJo-unsplash.jpg";
import Image from "next/image";

const inter = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full overflow-hidden h-screen`}>
        <div className=" w-full h-screen flex">
          <SideBar />

          <div className=" w-[85%] bg-site-white h-full">
            <header className=" w-full py-4  border-b-[2px] border-b-gray-200/80 ">
              <div className=" flex justify-between items-center w-full  border-b-gray-200 px-8 ">
                <h1 className=" font-[500] text-3xl">Staff List</h1>
                <div className=" w-fit flex items-center space-x-8 ">
                  <div className=" flex items-center space-x-3">
                    <FadeLeftIntro delay={1}>
                      <div className="  w-[20rem] p-2 rounded-full flex bg-site-grey space-x-4 border border-gray-300">
                        <Search className=" text-gray-400 w-6 h-6" />
                        <input
                          placeholder="Search for anything here..."
                          className=" bg-transparent text-sm outline-transparent w-full border-none focus:border-none  "
                        />
                      </div>
                    </FadeLeftIntro>
                    <button className=" w-10 h-10 rounded-[50%] bg-site-blue flex items-center justify-center">
                      <Plus className=" text-white" />
                    </button>
                  </div>
                  <div className=" flex items-center divide-x">
                    <div className=" flex items-center space-x-3 text-gray-400 px-5">
                      <FadeLeftIntro delay={0.3}>
                        <ShieldQuestion className="w-5 h-5 " />
                      </FadeLeftIntro>

                      <FadeLeftIntro delay={0.6}>
                        <PieChartIcon className="w-5 h-5 " />
                      </FadeLeftIntro>

                      <FadeLeftIntro delay={0.9}>
                        <Settings className="w-5 h-5 " />
                      </FadeLeftIntro>
                    </div>
                    <FadeUpIntro delay={0.3}>
                      <div className=" flex items-center space-x-3 px-5">
                        <div className=" w-8 h-8 rounded-[50%] flex items-center justify-center bg-green-300/50">
                          <Flag className=" w-4 h-4 text-green-700" />
                        </div>
                        <p className=" font-semibold text-sm">1/4</p>
                      </div>
                    </FadeUpIntro>
                    <div className=" flex items-center space-x-3 pl-5">
                      <div className=" w-10 h-10 overflow-hidden rounded-[50%] relative">
                        <Image
                          src={profile}
                          fill
                          alt=""
                          className=" object-cover object-center"
                        />
                      </div>
                      <div>
                        <UnveilAnimation>
                          <h2 className=" font-[500] text-base ">
                            Darren Steward
                          </h2>
                        </UnveilAnimation>

                        <FadeUpIntro delay={0.3}>
                          <p className=" font-normal text-sm text-gray-400">
                            Super Admin
                          </p>
                        </FadeUpIntro>
                      </div>
                      <ChevronDown className=" w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            </header>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
