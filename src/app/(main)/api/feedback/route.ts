import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@db";

export async function POST(request: NextRequest) {
  const data = await request.json();

  if (!data) {
    return NextResponse.json({ error: "no data" });
  }

  const assesment = await prisma.assesment.update({
    where: {
      id: +data.id,
    },
    data: {
      feedback: {
        create: data.feedback,
      }
    },
  });

  return NextResponse.json(assesment);
}
