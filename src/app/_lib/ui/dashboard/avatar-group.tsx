import Image from "next/image";

export function AvatarGroup() {
  return (
    <div className="flex -space-x-4 rtl:space-x-reverse">
      <Image
        className="w-14 h-14 border-2 border-white rounded-full dark:border-gray-800"
        src="https://source.unsplash.com/a-woman-wearing-glasses-and-a-suit-geTGVJsR6EA"
        width={50}
        height={50}
        alt=""
      />
      <Image
        className="w-14 h-14 border-2 border-white rounded-full dark:border-gray-800"
        src="https://source.unsplash.com/a-woman-wearing-glasses-and-a-suit-geTGVJsR6EA"
        width={50}
        height={50}
        alt=""
      />
      <Image
        className="w-14 h-14 border-2 border-white rounded-full dark:border-gray-800"
        src="https://source.unsplash.com/a-woman-wearing-glasses-and-a-suit-geTGVJsR6EA"
        width={50}
        height={50}
        alt=""
      />
      <a
        className="flex items-center justify-center w-14 h-14 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
        href="#"
      >
        +99
      </a>
    </div>
  );
}
