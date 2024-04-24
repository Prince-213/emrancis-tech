import type { Metadata } from "next";
import Image from "next/image";
import "../globals.css";
import { Space_Grotesk } from "next/font/google";
import { SpotlightPreview } from "@/lib/components/sparkle-preview";

const space = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description:
    "Create Next App with TypeScript, Tailwind CSS, NextAuth, Prisma, tRPC, and more.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={` ${space.className} relative  w-full flex justify-between overflow-hidden h-screen `}
    >
      <div className=" w-[90%] mx-auto lg:mx-0 lg:w-[45%] flex flex-col h-screen">{children}</div>

      <div className=" sticky top-0 overflow-hidden lg:block hidden lg:w-[55%] h-screen">
        <SpotlightPreview />
      </div>
    </div>
  );
}
