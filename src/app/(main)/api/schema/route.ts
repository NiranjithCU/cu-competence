import { prisma } from "@db";

export async function GET(request: Request) {
  const choices = await prisma.choice.createMany({
    data: [
    //   {
    //     name: "I can find diﬀerent examples of challenges that need solutions.",
    //     levelId: 1,
    //     themeId: 2,
    //   },
    //   {
    //     name: "I can recognise challenges in my community and surroundings that I can contribute to solving.",
    //     levelId: 2,
    //     themeId: 2,
    //   },
    //   {
    //     name: "I can identify opportunities to solve problems in alternative ways.",
    //     levelId: 3,
    //     themeId: 2,
    //   },
    //   {
    //     name: "I can identify opportunities to solve problems in alternative ways.",
    //     levelId: 4,
    //     themeId: 2,
    //   },
    //   {
    //     name: "I can take apart established practices and challenge mainstream thought to create opportunities and look at challenges in diﬀerent ways.",
    //     levelId: 5,
    //     themeId: 2,
    //   },
    //   {
    //     name: "I can judge the right time to take an opportunity to create value.",
    //     levelId: 6,
    //     themeId: 2,
    //   },
    //   {
    //     name: "I can cluster diﬀerent opportunities or identify synergies among diﬀerent opportunities to make the most out of them.",
    //     levelId: 7,
    //     themeId: 2,
    //   },
    //   {
    //     name: "I can define opportunities where I can maintain a competitive advantage.",
    //     levelId: 8,
    //     themeId: 2,
    //   },
    ],
  });

  return Response.json({ choices });
}
