"use client";

import { useSession } from "next-auth/react";
import { Form, Field, Formik } from "formik";
import { countries } from "./data/countries";
import { useRouter } from "next/navigation";

export default function Profile() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <>
      {session && (
        <Formik
          initialValues={{}}
          onSubmit={async (values, actions) => {
            const profile = { ...values, userId: session.id };
            const response = await fetch("/api/profile", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(profile),
            });

            if (response.status === 200) {
              const data = await response.json();
              if (data.id) {
                router.push(`/assessment/start/${data.id}`);
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
                  Start Assesment
                </h2>

                <div className="overflow-hidden rounded-lg bg-gray-50 shadow">
                  {/* Header */}
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-base font-semibold leading-6 text-gray-900">
                      Profile
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      We need a few details to begin profiling your assesment
                    </p>
                  </div>
                  {/* /Header */}

                  {/* Content */}
                  <div className=" bg-white px-4 py-5 sm:p-6">
                    <label
                      htmlFor="country"
                      className="mt-1 block text-sm font-medium leading-6 text-gray-900"
                    >
                      Country of Origin
                    </label>
                    <Field
                      as="select"
                      id="country"
                      name="country"
                      required
                      className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option value="">Select Country</option>
                      {countries.map((country, index) => (
                        <option key={index} value={country.code}>
                          {country.name}
                        </option>
                      ))}
                    </Field>

                    <label
                      htmlFor="age"
                      className="mt-5 block text-sm font-medium leading-6 text-gray-900"
                    >
                      Age
                    </label>
                    <Field
                      as="select"
                      id="age"
                      name="age"
                      required
                      className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option value="">Select Age</option>
                      <option value="<20">{"< 20"}</option>
                      <option value="21-30">{"21 - 30"}</option>
                      <option value="31-40">{"31 - 40"}</option>
                      <option value="41-60">{"41 - 60"}</option>
                      <option value=">60">{"> 60"}</option>
                    </Field>

                    <label
                      htmlFor="gender"
                      className="mt-5 block text-sm font-medium leading-6 text-gray-900"
                    >
                      Gender
                    </label>
                    <Field
                      as="select"
                      id="gender"
                      name="gender"
                      required
                      className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option value="">Select Gender</option>
                      <option value="M">Male</option>
                      <option value="F">Female</option>
                      <option value="O">Other</option>
                    </Field>

                    <label
                      htmlFor="program"
                      className="mt-5 block text-sm font-medium leading-6 text-gray-900"
                    >
                      Program
                    </label>
                    <Field
                      as="select"
                      id="program"
                      name="program"
                      required
                      className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option value="">Select Program</option>
                      <option value="TIMMENG">
                        TIM - MASTER OF ENGINEERING (MENG)
                      </option>
                      <option value="TIMMENT">
                        TIM - MASTER OF ENTREPRENEURSHIP (MENT)
                      </option>
                      <option value="TIMMABA">
                        TIM - MASTER IN APPLIED BUSINESS ANALYTICS (MABA)
                      </option>
                      <option value="TIMMSC">
                        TIM - MASTER OF SCIENCE (MSC)
                      </option>
                      <option value="TIMMDTE">
                        TIM - MASTERS OF DIGITAL TRANSFORMATION &
                        ENTREPRENEURSHIP (MDTE)
                      </option>
                    </Field>

                    <label
                      htmlFor="semester"
                      className="mt-5 block text-sm font-medium leading-6 text-gray-900"
                    >
                      Semester
                    </label>
                    <Field
                      as="select"
                      id="semester"
                      name="semester"
                      required
                      className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option value="">Select Semester</option>
                      <option value="1">First</option>
                      <option value="2">Second</option>
                      <option value="3">Third</option>
                      <option value="4">Fourth</option>
                      <option value="5">Alumni</option>
                    </Field>

                    <label
                      htmlFor="job"
                      className="mt-5 block text-sm font-medium leading-6  text-gray-900"
                    >
                      Job (Field of Experience)
                    </label>
                    <div className="mt-2">
                      <Field
                        name="job"
                        id="job"
                        placeholder="Job"
                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                        Start!
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
