import { NextRequest, NextResponse } from "next/server";
import sha256 from "crypto-js/sha256";
import { prisma } from "@db";

// POST /api/user/:id
export async function POST(request: NextRequest) {
  const data = await request.json();

  if (!data) {
    return NextResponse.json({ error: "no data" });
  }

  const hashPassword = (password: string) => {
    return sha256(password).toString();
  };

  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashPassword(data.password),
    },
  });

  return NextResponse.json(user);
}
