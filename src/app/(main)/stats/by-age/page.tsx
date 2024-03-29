import { prisma } from "@db";

async function getRecords() {
  const competences = await prisma.competence.findMany({
    select: {
      id: true,
      name: true,
      results: {
        include: {
          assesment: {
            select: {
              age: true,
            },
          },
        },
        orderBy: {
          score: "asc",
        },
      },
    },
  });

  function sortResultsByAgeAndScore(results: any) {
    const resultsByAge = results.reduce((acc: any, result: any) => {
      const age = result.assesment.age;
      if (!acc[age]) {
        acc[age] = [];
      }
      acc[age].push(result);
      return acc;
    }, {});

    // Sort ages in ascending order
    const ages = Object.keys(resultsByAge).sort();

    // Sort results for each age by score in ascending order
    for (const age in resultsByAge) {
      resultsByAge[age].sort((a: any, b: any) => a.score - b.score);
    }

    // Get the min and max score for each age
    const ageScores = ages.map((age) => {
      const ageResults = resultsByAge[age];
      const minScore = ageResults[0].score;
      const maxScore = ageResults[ageResults.length - 1].score;
      const sumScore = ageResults.reduce(
        (acc: number, result: any) => acc + result.score,
        0
      );
      const meanScore = sumScore / ageResults.length;
      const medianIndex = Math.floor(ageResults.length / 2);
      const medianScore =
        ageResults.length % 2 === 0
          ? (ageResults[medianIndex - 1].score +
              ageResults[medianIndex].score) /
            2
          : ageResults[medianIndex].score;
      const scoreCounts = ageResults.reduce((acc: any, result: any) => {
        if (!acc[result.score]) {
          acc[result.score] = 0;
        }
        acc[result.score]++;
        return acc;
      }, {});
      const scores = ageResults.map((result: any) => result.score);
      const modeScore = Object.keys(scoreCounts).reduce(
        (a: string, b: string) => (scoreCounts[a] > scoreCounts[b] ? a : b)
      );
      const variance =
        scores.reduce(
          (acc: number, score: number) => acc + Math.pow(score - meanScore, 2),
          0
        ) / scores.length;
      const stdDev = Math.sqrt(variance);
      return {
        age: age,
        minScore,
        maxScore,
        meanScore: meanScore.toFixed(2),
        medianScore,
        modeScore,
        stdDev: stdDev.toFixed(2),
        variance: variance.toFixed(2),
      };
    });

    // Return the final array sorted by age
    return ageScores;
  }

  const report: { id: number; name: string | null; ages: {} }[] = [];
  competences.forEach((competence) => {
    report.push({
      id: competence.id,
      name: competence.name,
      ages: sortResultsByAgeAndScore(competence.results),
    });
  });

  return report;
}

export default async function Page() {
  const records: any[] = await getRecords();

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
        <div className="sm:pt-22 lg:py-30 mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="mt-8 flow-root">
              <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-300">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Competence
                          </th>
                          {records[0].ages.map((age: any) => (
                            <>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Min ({age.age})
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Max ({age.age})
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Mean ({age.age})
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Median ({age.age})
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Mode ({age.age})
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                SD ({age.age})
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Variance ({age.age})
                              </th>
                            </>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {records.map((competence) => (
                          <tr key={competence.id}>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {competence.name}
                            </td>
                            {competence.ages.map((age: any) => (
                              <>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  {age.minScore}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  {age.maxScore}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  {age.meanScore}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  {age.medianScore}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  {age.modeScore}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  {age.stdDev}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  {age.variance}
                                </td>
                              </>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export const dynamic = "force-dynamic";
