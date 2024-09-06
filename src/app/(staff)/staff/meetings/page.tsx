import RetroGrid from "@/app/_lib/ui/magicui/retro-grid";
import React from "react";

const Page = () => {
  return (
    <div className=" w-full h-screen">
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
          Active !
        </span>

        <RetroGrid />
      </div>
    </div>
  );
};

export default Page;
