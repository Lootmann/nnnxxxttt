import { NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma";
import { NextApiRequest } from "next";

export async function POST(req: NextApiRequest) {
  const { id, title, content } = req.body;
  console.log(id, title, content);

  return NextResponse.json({ msg: "hello world" });
}
