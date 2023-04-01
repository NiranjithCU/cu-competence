"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Form, Field, Formik } from "formik";
import { useSession } from "next-auth/react";
export interface AssesmentProps {
  records: any;
  assessmentId: string;
}

export default function Assessment({ records, assessmentId }: AssesmentProps) {
  const router = useRouter();
  const { data: session } = useSession();

  const [question, setQuestion] = useState(45);
  const record = records[question];

  const nextQuestion = (q: number) => {
    setQuestion(q + 1);
  };

  const pastQuestion = (q: number) => {
    setQuestion(q - 1);
  };

  const QA = () => {
    const initial: any = {};

    records.forEach((record: any) => {
      initial[`theme_${record.id}`] = JSON.stringify({
        areaId: record.competence.areaId,
        competenceId: record.competenceId,
        themeId: record.id,
        choiceId: record.choices[2].id,
      });
    });
    return initial;
  };

  return (
    <>
      {session && (
        <Formik
          initialValues={{}}
          onSubmit={async (values, actions) => {
            const answers: any[] = [];

            Object.values(values).map((choice: any) => {
              answers.push(JSON.parse(choice));
            });

            const response = await fetch("/api/assessment", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ id: assessmentId, answers }),
            });

            if (response.status === 200) {
              const data = await response.json();
              if (data.id) {
                router.push(`/assessment/${assessmentId}/feedback`);
              }
            } else {
              alert("An error has occurred");
            }
          }}
        >
          {({ values, isSubmitting }) => (
            <Form>
              {/* Questions */}
              {record && (
                <div key={record.id}>
                  <h2 className="mb-2 text-2xl font-bold uppercase leading-10 tracking-tight text-gray-900">
                    {record.competence.area.name} - {record.competence.name}
                  </h2>
                  <p className="my-4 text-sm text-black">
                    <span className="font-semibold">Description:</span>{" "}
                    {record.competence.description}
                  </p>
                  <div className="overflow-hidden rounded-lg bg-gray-50 shadow">
                    {/* Header */}
                    <div className="px-4 py-5 sm:px-6">
                      <h3 className="text-base font-semibold leading-6 text-gray-900">
                        {record.competence.area.type == "Entrepreneurial"
                          ? `Select the statement that best describes your ability to "${record.name}" ?`
                          : record.name}
                      </h3>
                    </div>
                    {/* /Header */}

                    {/* Content */}
                    <div className="min-h-[25rem] bg-white px-4 py-5 sm:p-6">
                      {record.choices.map((choice: any) => (
                        <div key={choice.id} className="flex items-center">
                          <Field
                            type="radio"
                            id={`choice_${choice.id}`}
                            name={`theme_${record.id}`}
                            value={JSON.stringify({
                              areaId: record.competence.areaId,
                              competenceId: record.competenceId,
                              themeId: record.id,
                              choiceId: choice.id,
                            })}
                            required
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label
                            htmlFor={`choice_${choice.id}`}
                            className="ml-3 block py-2 text-sm font-medium leading-6 text-gray-900"
                          >
                            {choice.name}
                          </label>
                        </div>
                      ))}
                    </div>
                    {/* /Content */}

                    {/* Footer */}
                    <div className="bg-gray-50 px-4 py-4 sm:px-6">
                      <nav
                        className="flex items-center justify-between"
                        aria-label="Pagination"
                      >
                        <div className="hidden sm:block">
                          <p className="text-sm text-gray-700">
                            Progress{" "}
                            <span className="font-medium">{question + 1}</span>{" "}
                            of{" "}
                            <span className="font-medium">
                              {records.length}
                            </span>
                          </p>
                        </div>
                        <div className="flex flex-1 justify-between sm:justify-end">
                          {!isSubmitting && question > 0 && (
                            <button
                              type="button"
                              onClick={() => pastQuestion(question)}
                              className="relative inline-flex items-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                            >
                              Back
                            </button>
                          )}
                          {!isSubmitting &&
                            question < records.length - 1 &&
                            Object.keys(values).some(
                              (key) => key === `theme_${record.id}`
                            ) && (
                              <button
                                type="button"
                                onClick={() => nextQuestion(question)}
                                className="relative ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                              >
                                Next
                              </button>
                            )}
                          {question === records.length - 1 && (
                            <>
                              {isSubmitting ? (
                                <button
                                  className="relative ml-3 inline-flex items-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                                  disabled
                                >
                                  <svg
                                    className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                  >
                                    <circle
                                      className="opacity-25"
                                      cx="12"
                                      cy="12"
                                      r="10"
                                      stroke="currentColor"
                                      stroke-width="4"
                                    ></circle>
                                    <path
                                      className="opacity-75"
                                      fill="currentColor"
                                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                  </svg>
                                  Loading ...
                                </button>
                              ) : (
                                <button
                                  type="submit"
                                  className="relative ml-3 inline-flex items-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                                >
                                  Submit
                                </button>
                              )}
                            </>
                          )}
                        </div>
                      </nav>
                    </div>
                    {/* /Footer */}
                  </div>
                </div>
              )}
              {/* Questions */}
            </Form>
          )}
        </Formik>
      )}
    </>
  );
}
