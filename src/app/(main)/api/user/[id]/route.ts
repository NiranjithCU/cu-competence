import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@db";
import sha256 from "crypto-js/sha256";

// GET /api/user/:id
export async function POST(request: NextRequest) {
  const data = await request.json();

  if (!data) {
    return NextResponse.json({ error: "no data" });
  }

  const user = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (user && user.password == hashPassword(data.password)) {
    return NextResponse.json(user);
  } else {
    return NextResponse.json("Invalid credentials");
  }
}

const hashPassword = (password: string) => {
  return sha256(password).toString();
};
