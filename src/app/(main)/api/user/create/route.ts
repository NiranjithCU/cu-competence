import { NextRequest, NextResponse } from "next/server";
import sha256 from "crypto-js/sha256";
import { prisma } from "@db";

// GET /api/user/:id
export async function GET(request: NextRequest) {
  const data = await request.json();

  if (!data) {
    return NextResponse.json({ error: "no data" });
  }

  const user = await prisma.user.findUnique({
    where: {
      id: data.id,
    },
  });

  return NextResponse.json(user);
}

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

// DELETE /api/user/:id
export async function DELETE(request: NextRequest) {
  const data = await request.json();

  if (!data) {
    return NextResponse.json({ error: "no data" });
  }

  const user = await prisma.user.delete({
    where: {
      id: data.id,
    },
  });

  return NextResponse.json(user);
}
