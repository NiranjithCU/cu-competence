import { NextRequest, NextResponse } from "next/server";
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

  const user = await prisma.user.update({
    where: {
      id: data.id,
    },
    data: {
      ...data,
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
