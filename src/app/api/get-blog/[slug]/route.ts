import prisma from "@/lib/db/prisma";
import { unstable_noStore as noStore } from "next/cache";
import type NextRequest from "next/server.js";

import type { NextApiRequest, NextApiResponse } from "next";

type Params = {
  slug: string;
};

export const GET = async (
  request: NextApiRequest,
  context: { params: Params }
) => {
  noStore();

  const { slug } = context.params;

  try {
    const data = await prisma.blogs.findUnique({
      where: {
        id: slug,
      },
      include: {
        description: true,
      },
    });

    return Response.json( { data });
  } catch (err) {
    return Response.json({ data: null })
  } finally {
  }

  
};
