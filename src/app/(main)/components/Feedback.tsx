"use client";

import { Form, Field, Formik } from "formik";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export interface FeedbackProps {
  assessmentId: string;
}

export default function Feedback({ assessmentId }: FeedbackProps) {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <>
      {session && (
        <Formik
          initialValues={{}}
          onSubmit={async (values, actions) => {
            const response = await fetch("/api/feedback", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ id: assessmentId, feedback: values }),
            });

            if (response.status === 200) {
              const data = await response.json();
              if (data.id) {
                router.push(`/assessment/${assessmentId}`);
              }
            } else {
              alert("An error has occurred");
            }
          }}
        >
          {({ values, isSubmitting }) => (
            <Form>
              <div>
                <h2 className="mb-2 text-2xl font-bold uppercase leading-10 tracking-tight text-gray-900">
                  Feedback
                </h2>

                <div className="overflow-hidden rounded-lg bg-gray-50 shadow">
                  {/* Header */}
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-base font-semibold leading-6 text-gray-900">
                      Tell us about your experience
                    </h3>
                  </div>
                  {/* /Header */}

                  {/* Content */}
                  <div className=" bg-white px-4 py-4 sm:p-6">
                    <label
                      htmlFor="job"
                      className="mt-5 block text-sm font-medium leading-6  text-gray-900"
                    >
                      The tool was easy to use
                    </label>
                    <Field
                      as="select"
                      id="easyToUse"
                      name="easyToUse"
                      required
                      className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option value="">Select</option>
                      <option value="Strongly agree">Strongly Agree</option>
                      <option value="Agree">Agree</option>
                      <option value="Disagree">Disagree</option>
                      <option value="Strongly Disagree">
                        Strongly Disagree
                      </option>
                    </Field>

                    <label
                      htmlFor="job"
                      className="mt-5 block text-sm font-medium leading-6  text-gray-900"
                    >
                      The questions were easy to understand and coverd a good
                      range
                    </label>
                    <Field
                      as="select"
                      id="easyToUnderstand"
                      name="easyToUnderstand"
                      required
                      className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option value="">Select</option>
                      <option value="Strongly agree">Strongly Agree</option>
                      <option value="Agree">Agree</option>
                      <option value="Disagree">Disagree</option>
                      <option value="Strongly Disagree">
                        Strongly Disagree
                      </option>
                    </Field>

                    <label
                      htmlFor="job"
                      className="mt-5 block text-sm font-medium leading-6  text-gray-900"
                    >
                      The choices were reasonable and covered a good range
                    </label>
                    <Field
                      as="select"
                      id="goodChoices"
                      name="goodChoices"
                      required
                      className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option value="">Select</option>
                      <option value="Strongly agree">Strongly Agree</option>
                      <option value="Agree">Agree</option>
                      <option value="Disagree">Disagree</option>
                      <option value="Strongly Disagree">
                        Strongly Disagree
                      </option>
                    </Field>

                    <label
                      htmlFor="job"
                      className="mt-5 block text-sm font-medium leading-6  text-gray-900"
                    >
                      Other Feedback
                    </label>
                    <div className="mt-2">
                      <Field
                        as="textarea"
                        name="notes"
                        id="notes"
                        placeholder="Other"
                        className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                        />
                    </div>
                  </div>
                  {/* /Content */}

                  {/* Footer */}
                  <div className="bg-gray-50 px-4 py-4 sm:px-6">
                    {isSubmitting ? (
                      <button className="relative ml-3 inline-flex items-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600" disabled>
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
                        Save
                      </button>
                    )}
                  </div>
                  {/* /Footer */}
                </div>
              </div>
              {/* Questions */}
            </Form>
          )}
        </Formik>
      )}
    </>
  );
}
