import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@db";

export async function POST(request: NextRequest) {
  const data = await request.json();

  if (!data) {
    return NextResponse.json({ error: "no data" });
  }

  const profile = await prisma.assesment.create({
    data: {
      ...data,
    },
  });

  return NextResponse.json(profile);
}
