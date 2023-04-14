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

  let [msg, statusCode] = ["", 200];

  if (user) {
    msg = "Success to Login";
    statusCode = 200;
  } else {
    msg = "Fail to login";
    statusCode = 401;
  }

  return NextResponse.json(
    { msg: msg },
    {
      status: statusCode,
      headers: {
        "content-type": "application/json",
      },
    }
  );
}
