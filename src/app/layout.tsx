import type { Metadata } from "next";
import { Suspense } from "react";

import { Space_Grotesk } from "next/font/google";

const space = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap"
});

import "./globals.css";

import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon
} from "@radix-ui/react-icons";
import { ScrollDown } from "@/lib/components/scroll";

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "Emrancis Tech" // a default is required when creating a template
  },
  description:
    "Welcome to your gateway to comprehensive programming education. Whether you are a beginner or an experienced developer.",
  icons: {
    icon: "/favicon.ico" // /public path
  },
  twitter: {
    card: "summary_large_image"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${space.className}`}>
        <Suspense
          fallback={
            <div className=" w-full h-screen flex items-center justify-center">
              {" "}
              <ScrollDown />{" "}
            </div>
          }
        >
          <div className=" w-full overflow-x-hidden overflow-y-hidden">
            {children}
          </div>
        </Suspense>
      </body>
    </html>
  );
}
