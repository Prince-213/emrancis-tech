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
      className={` ${space.className}  w-full flex justify-between overflow-hidden h-screen `}
    >
      <div className=" w-[45%] pt-10 h-screen">{children}</div>

      <div className=" relative overflow-hidden   w-[55%] h-full">
        <SpotlightPreview />
      </div>
    </div>
  );
}
