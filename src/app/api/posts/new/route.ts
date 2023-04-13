import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma";

// TODO: validation
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { authorId, title, content } = body;

  const res = await prisma.post.create({
    data: {
      authorId: Number(authorId),
      title: title,
      content: content,
    },
  });

  return NextResponse.json({ res });
}
