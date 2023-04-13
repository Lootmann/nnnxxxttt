import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma";

// TODO: validation
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name } = body;

  const user = await prisma.user.findUnique({
    where: {
      name: name,
    },
  });

  if (user) {
    return NextResponse.json(
      { msg: "success to login" },
      {
        status: 200,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  } else {
    return NextResponse.json(
      { msg: "fail to login" },
      {
        status: 401,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  }
}
