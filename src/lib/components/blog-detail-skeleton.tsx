import { Skeleton } from "@/components/ui/skeleton";

const BlogDetailSkeleton = async () => {
  return (
    <div className=" w-full bg-gradient-to-r from-[#F2F5F8] to-[#F0F0F0] pt-[10vh] pb-[15vh]">
      <div className=" w-[85%] text-center flex flex-col justify-center items-center  mx-auto">
        <div className=" lg:w-[75%] mx-auto space-y-5 ">
          <Skeleton className={" w-[70%] mx-auto h-4 bg-gray-300"} />
          <div className=" flex flex-col space-y-3 items-center justify-center">
            <Skeleton className={" w-[80%] mx-auto h-4 bg-gray-300"} />
            <Skeleton className={" w-[60%] mx-auto h-4 bg-gray-300"} />
          </div>
        </div>

        <div className=" min-h-fit w-full mb-auto mt-10 lg:mt-20 flex overflow-hidden shadow-2xl shadow-[#00000021] rounded-2xl bg-white ">
          <div className=" w-full ">
            <div className=" full">
              <Skeleton className=" w-full h-[40vh] lg:h-[90vh] bg-gray-300" />
            </div>
          </div>
        </div>

        <div className=" space-y-3">
            <Skeleton className="w-full h-4 bg-gray-300" />
            <Skeleton className="w-full h-4 bg-gray-300" />
            <Skeleton className="w-full h-4 bg-gray-300" />
        </div>

        <Skeleton className="w-[70%] h-4 bg-gray-300" />
      </div>
    </div>
  );
};

export default BlogDetailSkeleton;
