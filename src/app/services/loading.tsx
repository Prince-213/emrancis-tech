import { ScrollDown } from "@/lib/components/scroll";
import Image from "next/image";

export default function Loading() {
  return (
    <div className=" relative w-full bg-blue-100 h-screen overflow-hidden ">
      <ScrollDown />
    </div>
  );
}
