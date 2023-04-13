import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma";

// TODO: validation
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name } = body;
  console.log(name);

  return NextResponse.json({ msg: "success to login" });
}
