import { useSession } from "next-auth/react";

const scoreLevel = (score: number, weight: number) => {
  const percentage = Math.round((score / weight) * 100);

  if (percentage <= 100 && percentage > 75) {
    return {
      percentage: percentage + " / 100",
      level: "Expert",
      badge: {
        icon: "text-green-400",
        text: "text-green-800",
        bg: "bg-green-100",
      },
    };
  }

  if (percentage <= 75 && percentage > 45) {
    return {
      percentage: percentage + " / 100",
      level: "Advanced",
      badge: {
        icon: "text-sky-400",
        text: "text-sky-800",
        bg: "bg-sky-100",
      },
    };
  }

  if (percentage <= 45 && percentage > 25) {
    return {
      percentage: percentage + " / 100",
      level: "Intermediate",
      badge: {
        icon: "text-yellow-400",
        text: "text-yellow-800",
        bg: "bg-yellow-100",
      },
    };
  }

  return {
    percentage: percentage + " / 100",
    level: "Foundation",
    badge: {
      icon: "text-red-400",
      text: "text-red-800",
      bg: "bg-red-100",
    },
  };
};

export default function Report({ report }: any) {
  return (
    <>
      {report.map((area: any) => (
        <>
          <div className="mt-10 overflow-hidden bg-white shadow sm:rounded-md">
            <div className="border-b border-gray-200 bg-gray-100 px-3 py-4 sm:px-5">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                {area.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{area.type}</p>
            </div>
            <ul role="list" className="divide-y divide-gray-200">
              {area.competences.map((competence: any) => (
                <li key={competence.id}>
                  <a href="#" className="block hover:bg-gray-50">
                    <div className="flex items-center px-2 py-2 sm:px-4">
                      <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                        <div className="truncate">
                          <div className="flex text-sm">
                            <p className="truncate font-medium text-indigo-600">
                              {competence.name}
                            </p>
                          </div>
                          <div className="mt-2 flex">
                            <div className="flex items-center text-sm text-gray-500">
                              <p>
                                Level:{" "}
                                {
                                  scoreLevel(
                                    competence.score,
                                    competence.weight
                                  ).level
                                }
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
                          <div className="flex -space-x-1 overflow-hidden">
                            <span
                              className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-sm font-medium  ${
                                scoreLevel(competence.score, competence.weight)
                                  .badge.text
                              }
                              ${
                                scoreLevel(competence.score, competence.weight)
                                  .badge.bg
                              }`}
                            >
                              <>
                                <svg
                                  className={`-ml-0.5 mr-1.5 h-2 w-2 ${
                                    scoreLevel(
                                      competence.score,
                                      competence.weight
                                    ).badge.icon
                                  }`}
                                  fill="currentColor"
                                  viewBox="0 0 8 8"
                                >
                                  <circle cx={4} cy={4} r={3} />
                                </svg>
                                {
                                  scoreLevel(
                                    competence.score,
                                    competence.weight
                                  ).percentage
                                }
                              </>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      ))}
    </>
  );
}
