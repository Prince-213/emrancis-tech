import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const TopBlogSkeleton = () => {
  return (
    <div className=" mt-10 w-full lg:grid lg:grid-cols-3 gap-x-20">
      {[1, 2, 3].map((item, idx) => {
        return (
          <div key={idx} className=" w-full ">
            <div className="flex mb-4  flex-col space-y-3">
              <Skeleton className="h-[125px] bg-gray-400 w-full rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[80%] bg-gray-400" />
                <Skeleton className="h-4 w-[80%] bg-gray-400" />
              </div>
            </div>

            <div className="flex w-full items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full bg-gray-400" />
              <div className="space-y-2 w-[80%]">
                <Skeleton className="h-4 w-[50%] bg-gray-400" />
                <Skeleton className="h-4 w-[50%] bg-gray-400" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TopBlogSkeleton;
