import { NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma";
import { NextApiRequest } from "next";

export async function GET(req: NextApiRequest) {
  if (req.url === undefined) {
    const users = await prisma.user.findMany();
    return NextResponse.json({ users });
  }

  // NOTE: get query string
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name");

  if (name === null) {
    const users = await prisma.user.findMany();
    return NextResponse.json({ users });
  }

  const users = await prisma.user.findMany({
    where: {
      name: name,
    },
  });

  return NextResponse.json({ users });
}
