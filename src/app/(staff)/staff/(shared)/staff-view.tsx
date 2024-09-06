import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow
} from "flowbite-react";
import { MoreVertical, SeparatorHorizontalIcon } from "lucide-react";
import Image from "next/image";
import profile from "@/app/_lib/asset/image/aiony-haust-3TLl_97HNJo-unsplash.jpg";
import UnveilAnimation from "@/app/_lib/animations/unveil-animation";
import FadeUpIntro from "@/app/_lib/animations/fadeupintro";
import FadeLeftIntro from "@/app/_lib/animations/fade-left";

const workingDays = [
  {
    name: "Sunday",
    work: false
  },
  {
    name: "Monday",
    work: true
  },
  {
    name: "Tuesday",
    work: false
  },
  {
    name: "Wednesday",
    work: true
  },
  {
    name: "Thursday",
    work: false
  },
  {
    name: "Friday",
    work: false
  },
  {
    name: "Sunday",
    work: true
  }
];

export function StaffComponentTable() {
  return (
    <div className=" w-[96%] mx-auto">
      <Table hoverable>
        <TableHead className=" ">
          <TableHeadCell className="p-4">
            <Checkbox />
          </TableHeadCell>
          <TableHeadCell className=" space-x-10 font-normal text-lg text-gray-500 ">
            <div className=" flex items-center space-x-5">
              <h1>Personnel Name</h1>
              <SeparatorHorizontalIcon />
            </div>
          </TableHeadCell>
          <TableHeadCell className=" space-x-10 font-normal text-lg text-gray-500">
            Contact
          </TableHeadCell>
          <TableHeadCell className=" space-x-10 font-normal text-lg text-gray-500">
            Working Days{" "}
          </TableHeadCell>
          <TableHeadCell className=" space-x-10 font-normal text-lg text-gray-500">
            Department
          </TableHeadCell>
          <TableHeadCell className=" space-x-10 font-normal text-lg text-gray-500">
            Status
          </TableHeadCell>
          <TableHeadCell>
            <span className="sr-only">Edit</span>
          </TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="p-4">
              <Checkbox />
            </TableCell>
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              <div className=" flex items-center space-x-4">
                <div className=" w-12 h-12 rounded-[50%] relative overflow-hidden">
                  <Image
                    src={profile}
                    fill
                    alt=""
                    className=" object-cover object-center"
                  />
                </div>
                <div className=" ">
                  <UnveilAnimation delay={0.2}>
                    <h2 className=" font-[500] text-base ">Darren Steward</h2>
                  </UnveilAnimation>

                  <FadeUpIntro delay={0.4}>
                    <p className=" font-normal text-sm text-gray-400">
                      Super Admin
                    </p>
                  </FadeUpIntro>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div>
                <FadeUpIntro delay={0.2}>
                  <h2 className=" font-medium text-black text-base">
                    90888999-6677
                  </h2>
                </FadeUpIntro>

                <FadeUpIntro delay={0.4}>
                  <p className=" font-semibold text-site-blue">
                    test-rep@gmail.com
                  </p>
                </FadeUpIntro>
              </div>
            </TableCell>
            <TableCell>
              <ul className=" flex items-center space-x-2">
                {workingDays.map((day, index) => {
                  return (
                    <FadeLeftIntro delay={index * 0.2} key={day.name}>
                      <li
                        key={day.name}
                        className={` w-6 h-6  rounded-[50%] uppercase font-medium ${
                          day.work
                            ? " text-white bg-blue-400"
                            : " text-black bg-gray-200"
                        } flex items-center justify-center text-center`}
                      >
                        <p>{day.name[0]}</p>{" "}
                      </li>
                    </FadeLeftIntro>
                  );
                })}
              </ul>
            </TableCell>
            <TableCell className=" text-lg font-medium text-black">
              <UnveilAnimation delay={0.4}>
                <p>Chair Executive Organizer</p>
              </UnveilAnimation>
            </TableCell>
            <TableCell className=" text-lg font-medium text-black">
              <FadeUpIntro delay={0.2}>
                <button className=" font-medium px-4 py-2 bg-emerald-500/20 text-emerald-600 rounded-md">
                  Active
                </button>
              </FadeUpIntro>
            </TableCell>
            <TableCell>
              <MoreVertical />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
