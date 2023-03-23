import { prisma } from "@db";

import Nav from "../../components/Nav";
import Report from "../../components/Report";

async function getRecords(id: any) {
  const areas = await prisma.area.findMany({
    include: {
      competences: {
        include: {
          themes: true,
        },
      },
    },
  });

  const answers = await prisma.answers.findMany({
    where: {
      assesmentId: +id,
    },
    include: {
      choice: true,
    },
  });

  const report: any = [...areas];

  report.map((area: any) => {
    area.competences.map((competence: any) => {
      competence.themes.map((theme: any) => {
        const themeAnswer = answers.filter((answer) => {
          return answer.themeId === theme.id;
        });
        if (themeAnswer[0]?.choice?.levelId) {
          theme.score = (theme.weight / 8) * themeAnswer[0].choice.levelId;
        }
      });
      competence.score =
        (competence.themes.reduce(
          (n: any, { score }: any) => n + Number(score),
          0
        ) /
          100) *
        competence.weight;
    });
    area.score = area.competences.reduce(
      (n: any, { score }: any) => n + Number(score),
      0
    );
  });

  return report;
}

export default async function Page({ params }: any) {
  const report = await getRecords(params?.id);

  return (
    <div className="isolate bg-white">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />s
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <main>
        <Nav />
        <div className="sm:pt-22 lg:py-30 mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <h1 className="text-2xl font-bold uppercase leading-10 tracking-tight text-gray-900">
            Assessments Report
          </h1>
          <Report report={report} />
        </div>
      </main>
    </div>
  );
}

export const dynamic = "force-dynamic";
