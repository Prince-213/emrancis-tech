import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { cache } from "react";
import prisma from "./db/prisma";
import { Course, Courses } from "@/types";

export const getBlogs = cache(async () => {
  const blogs = await prisma.blogs.findMany({
    include: {
      description: true
    }
  });
  return blogs;
});

export const getTopBlogs = cache(async (take: number) => {
  const topBlogs = await prisma.blogs.findMany({
    skip: 0,
    take: take,
    include: {
      description: true
    }
  });
  return topBlogs;
});

export const getSpecificBlog = cache(async (id: string) => {
  const courses = await prisma.courses.findUnique({
    where: {
      id: id
    }
  });
  return courses;
});

export const dateFormat = (dateString: string): string => {
  const date = new Date(dateString);

  // Define months array
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  // Get day, month, and year
  const day = date.getUTCDate();
  const monthIndex = date.getUTCMonth();
  const year = date.getUTCFullYear();

  // Format the date
  const formattedDate = day + " " + months[monthIndex] + " " + year;
  return formattedDate;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const links = [
  {
    name: "Dashboard",
    href: "/staff",
    icon: "dashboard.png"
  },

  {
    name: "Storage",
    href: "/staff/storage",
    icon: "storage.png"
  },
  {
    name: "Meetings",
    href: "/staff/meetings",
    icon: "zoom.png"
  },
  {
    name: "Chat",
    href: "/staff/chat",
    icon: "chat.png"
  },
  {
    name: "Events",
    href: "/staff/events",
    icon: "event.png"
  },
  {
    name: "Chat Bot",
    href: "/staff/bot",
    icon: "chat-bot.png"
  }
];
