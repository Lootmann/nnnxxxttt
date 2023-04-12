import { NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma";
import { NextApiRequest } from "next";

export async function GET(
  req: NextApiRequest,
  { params }: { params: { postId: number } }
) {
  console.log(params.postId);

  const post = await prisma.post.findFirst({
    where: {
      id: Number(params.postId),
    },
  });

  return NextResponse.json({ post });
}
