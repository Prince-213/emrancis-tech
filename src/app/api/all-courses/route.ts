import prisma from "@/lib/db/prisma";

export async function GET() {
  try {
    const data = await prisma.courses.findMany();

    return Response.json({ data });
  } catch (error) {
    
  }
}
