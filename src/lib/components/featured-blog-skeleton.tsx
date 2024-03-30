import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const FeaturedBlogSkeleton = () => {
  return (
    <div className=" min-h-fit w-full mb-auto mt-10 lg:mt-14 flex lg:flex-row flex-col  ">
      <div className=" flex lg:flex-row flex-col w-full justify-between">
        <Skeleton className=" lg:w-[50%] bg-gray-300 min-h-[60vh] rounded-xl" />

        <div className=" lg:w-[50%] p-6 lg:p-0  flex flex-col justify-center  text-left text-pretty ">
          <div className=" lg:w-[80%] mx-auto  space-y-8">
            <Skeleton className=" w-[30%] h-4 bg-gray-300" />
            <div className=" space-y-2">
              <Skeleton className=" w-[80%] h-4 bg-gray-300" />
              <Skeleton className=" w-[60%] h-4 bg-gray-300" />
            </div>

            <div className=" space-y-2">
              <Skeleton className=" w-[70%] h-4 bg-gray-300" />
                <Skeleton className=" w-[50%] h-4 bg-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogSkeleton;
