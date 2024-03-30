import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { cache } from 'react'
import prisma from "./db/prisma"
import { Course, Courses } from "@/types"
 


export const getBlogs = cache(async () => {
  const blogs = await prisma.blogs.findMany({
    include: {
      description: true
    }
  })
  return blogs
})

export const getTopBlogs = cache(async ( take: number ) => {
  const topBlogs = await prisma.blogs.findMany({
    skip: 0,
    take: take,
    include: {
      description: true
    }
  })
  return topBlogs
})

export const getSpecificBlog = cache(async ( id: string ) => {
  const courses = await prisma.courses.findUnique({
    where: {
      id: id,
    }
  })
  return courses
})





export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
