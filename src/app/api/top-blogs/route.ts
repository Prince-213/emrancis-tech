import prisma from "@/lib/db/prisma";
import { unstable_noStore as noStore } from "next/cache";

export async function GET() {
  noStore()
  
  try {
    const data = await prisma.blogs.findMany({ take: 3 });

    return Response.json({ data });
  } catch (error) {
    
  }
}
