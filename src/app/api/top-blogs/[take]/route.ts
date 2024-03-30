import prisma from "@/lib/db/prisma";
import { unstable_noStore as noStore } from "next/cache";
import { NextApiRequest } from "next/types";

interface Prop {
  take: string
}


export async function GET( request: NextApiRequest, context: { params: Prop } ) {
  noStore()

  const { take } = context.params
  
  try {
    const data = await prisma.blogs.findMany({ take: parseInt(take) });

    return Response.json({ data });
  } catch (error) {
    
  }
}
