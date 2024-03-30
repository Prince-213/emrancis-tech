import prisma from "@/lib/db/prisma";

export async function GET() {
  try {
    const data = await prisma.blogs.findMany({ take: 3 });

    return Response.json({ data });
  } catch (error) {
    
  }
}
