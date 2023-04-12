import { NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma";
import { NextApiRequest } from "next";

export async function GET(
  req: NextApiRequest,
  { params }: { params: { userId: number } }
) {
  console.log(params.userId);

  const user = await prisma.user.findFirst({
    where: {
      id: Number(params.userId),
    },
  });

  return NextResponse.json({ user });
}
