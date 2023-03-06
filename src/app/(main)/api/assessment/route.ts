import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@db";

export async function POST(request: NextRequest) {
  const data = await request.json();

  if (!data) {
    return NextResponse.json({ error: "no data" });
  }
  
  const assesment = await prisma.assesment.create({
    data: {
      profileId: 3,
      answers: {
        create: data,
      },
    },
  });

  return NextResponse.json(assesment);
}
