"use client";

import { useSession } from "next-auth/react";
import { Form, Field, Formik } from "formik";
import { useState } from "react";

export interface AssesmentProps {
  records: any;
}

export default function Assessment({ records }: AssesmentProps) {
  const session = useSession();

  const [question, setQuestion] = useState(140);

  const record = records[question];

  const nextQuestion = (q: number) => {
    setQuestion(q + 1);
  };

  const pastQuestion = (q: number) => {
    setQuestion(q - 1);
  };

  return (
    <>
      <Formik
        initialValues={{}}
        onSubmit={async (values, actions) => {
          const answers: any[] = [];

          Object.values(values).map((choice: any) => {
            answers.push(JSON.parse(choice));
          });

          console.log(answers);

          const response = await fetch("/api/assessment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(answers),
          });

          const data = await response.json();

          if (data.error) {
            console.log(data.error);
          }

          console.log(data);
        }}
      >
        {({ values }) => (
          <Form>
            {/* Profile */}

            {/* /Profile */}

            {/* Questions */}
            {record && (
              <div key={record.id}>
                <h2 className="mt-10 mb-2 text-2xl font-bold uppercase leading-10 tracking-tight text-gray-900">
                  {record.competence.area.name}
                </h2>
                <div className="overflow-hidden rounded-lg bg-gray-50 shadow">
                  {/* Header */}
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-base font-semibold leading-6 text-gray-900">
                      {record.competence.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{record.name}</p>
                  </div>
                  {/* /Header */}

                  {/* Content */}
                  <div className="h-[25rem] bg-white px-4 py-5 sm:p-6">
                    {record.choices.map((choice: any) => (
                      <div key={choice.id} className="flex items-center">
                        <Field
                          type="radio"
                          id={`choice_${choice.id}`}
                          name={`theme_${record.id}`}
                          value={JSON.stringify({
                            areaId: record.id,
                            competenceId: record.competenceId,
                            themeId: record.id,
                            choiceId: choice.id,
                          })}
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
                          Question{" "}
                          <span className="font-medium">{question + 1}</span> of{" "}
                          <span className="font-medium">{records.length}</span>
                        </p>
                      </div>
                      <div className="flex flex-1 justify-between sm:justify-end">
                        {question > 0 && (
                          <button
                            type="button"
                            onClick={() => pastQuestion(question)}
                            className="relative inline-flex items-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                            Back
                          </button>
                        )}
                        {question < records.length - 1 && (
                          <button
                            type="button"
                            onClick={() => nextQuestion(question)}
                            className="relative ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                            Next
                          </button>
                        )}
                        {question === records.length - 1 && (
                          <button
                            type="submit"
                            className="relative ml-3 inline-flex items-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                          >
                            Submit
                          </button>
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
    </>
  );
}
