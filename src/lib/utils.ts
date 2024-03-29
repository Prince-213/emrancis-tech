import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { cache } from 'react'
import prisma from "./db/prisma"
 
export const getCourses = cache(async () => {
  const courses = await prisma.courses.findMany()
  return courses
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
