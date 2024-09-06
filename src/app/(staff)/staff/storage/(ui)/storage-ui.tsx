import FadeUpIntro from "@/app/_lib/animations/fadeupintro";
import UnveilAnimation from "@/app/_lib/animations/unveil-animation";
import {
  ChevronDown,
  File,
  Grid,
  ListEndIcon,
  Mail,
  Search
} from "lucide-react";

import Image from "next/image";

export default function StorageUI() {
  return (
    <div className="  h-full bg-other-gray w-full">
      <div className=" px-10 pb-5 pt-5">
        <h1 className=" font-medium text-4xl mb-10">Storage</h1>
        <UnveilAnimation>
          <div className=" flex items-center space-x-4">
            <h1 className=" text-xl font-semibold">Folders</h1>
            <ChevronDown />
          </div>
        </UnveilAnimation>

        {/* <div className=" mt-12">
          <UnveilAnimation>
            <h1 className=" text-2xl font-semibold">
              Templates to Get Started
            </h1>
          </UnveilAnimation>

          <UnveilAnimation delay={0.1}>
            <p className=" text-gray-400 text-lg font-medium mt-2">
              Keep up the good work! You have generated{" "}
              <span className=" text-slat-green">1,562 words</span>{" "}
            </p>
          </UnveilAnimation>
        </div> */}
        <div className=" mt-4 grid grid-cols-8 gap-3">
          {[1, 3].map((item, index) => {
            return (
              <div
                key={index}
                className=" shadow-sm rounded-md p-2 bg-white space-y-1 border border-gray-500/20 shadow-slat-green/10 hover:shadow-lg transition-all duration-150 ease-in cursor-pointer "
              >
                <div className=" w-full h-[8rem] mb-2 rounded-md bg-gray-200/50 flex items-center justify-center">
                  <Image
                    src={"/icons8-folder-96.png"}
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>

                <FadeUpIntro>
                  <h1 className=" font-semibold text-lg">Dan Folder</h1>
                </FadeUpIntro>
                <FadeUpIntro delay={0.3}>
                  <span className=" flex items-center space-x-2 text-gray-500">
                    <File className=" " size={18} />
                    <p className=" font-medium">12</p>
                  </span>
                </FadeUpIntro>
              </div>
            );
          })}
        </div>

        <br />

        <UnveilAnimation>
          <div className=" flex items-center space-x-4">
            <h1 className=" text-xl font-semibold">Files</h1>
            <ChevronDown />
          </div>
        </UnveilAnimation>

        <div className=" mt-4 grid grid-cols-8 gap-3">
          {[1, 3].map((item, index) => {
            return (
              <div
                key={index}
                className=" shadow-sm rounded-md p-2 bg-white space-y-1 border border-gray-500/20 shadow-slat-green/10 hover:shadow-lg transition-all duration-150 ease-in cursor-pointer "
              >
                <div className=" w-full h-[8rem] mb-2 rounded-md bg-gray-200/50 flex items-center justify-center">
                  <Image src={"/pdf.png"} alt="" width={50} height={50} />
                </div>

                <FadeUpIntro>
                  <h1 className=" font-semibold text-lg">documents</h1>
                </FadeUpIntro>
                <FadeUpIntro delay={0.3}>
                  <span className=" flex items-center space-x-2">
                    <p className=" font-medium text-gray-500">12.0 MB</p>
                  </span>
                </FadeUpIntro>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
