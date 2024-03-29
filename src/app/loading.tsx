import Image from "next/image";

export default function Loading() {
  return (
    <div className=" relative h-screen overflow-hidden bg-white">
      <Image
        src="/simplistic-startup-launch-and-business-idea.gif"
        width={"200"}
        height={"200"}
        alt=""
        unoptimized={true}
        className=" absolute left-[50%] top-[50%] h-[15ren] w-[15rem] -translate-x-[50%] -translate-y-[50%]"
      />
    </div>
  );
}
