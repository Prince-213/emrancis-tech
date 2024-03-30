import prisma from "@/lib/db/prisma";
import { unstable_noStore as noStore } from "next/cache";

export async function GET() {
  noStore()
  
  try {
    const data = await prisma.courses.findMany();

    return Response.json({ data });
  } catch (error) {
    
  }
}
