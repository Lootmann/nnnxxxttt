import { NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma";
import { NextApiRequest } from "next";

export async function GET(req: NextApiRequest) {
  const posts = await prisma.post.findMany();

  return NextResponse.json({ posts });
}
