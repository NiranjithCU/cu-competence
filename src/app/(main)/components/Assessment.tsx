"use client";

import { Form, Field, Formik } from "formik";

export interface AssesmentProps {
  records: any;
}

export default function Assessment({ records }: AssesmentProps) {
  return (
    <>
      <Formik
        initialValues={{ theme_1: "", theme_2: "", theme_3: "" }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {({ values }) => (
          <Form>
            {/* Section */}
            {records.map((record: any) => (
              <div key={record.id}>
                <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900 uppercase">
                  {record.name}
                </h2>
                {record.competences.map((competence: any) => (
                  <div key={competence.id} className="mt-10 sm:mt-10">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                      <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                          <h3 className="text-base font-semibold leading-6 text-gray-900">
                            {competence.name}
                          </h3>
                          <p className="mt-1 text-sm text-gray-600">
                            {competence.description}
                          </p>
                        </div>
                      </div>
                      <div className="mt-5 md:col-span-2 md:mt-0">
                        <div className="overflow-hidden shadow sm:rounded-md">
                          <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                            {competence.themes.map((theme: any) => (
                              <fieldset key={theme.id}>
                                <legend className="contents text-sm font-semibold leading-6 text-gray-900">
                                  {theme.name}
                                </legend>
                                <div className="mt-4 space-y-4">
                                  {theme.choices.map((choice: any) => (
                                    <div
                                      key={choice.id}
                                      className="flex items-center"
                                    >
                                      <Field
                                        type="radio"
                                        id={`choice_${choice.id}`}
                                        name={`theme_${theme.id}`}
                                        value={`choice_${choice.levelId}`}
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                      />

                                      <label
                                        htmlFor={`choice_${choice.id}`}
                                        className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                                      >
                                        {choice.name}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </fieldset>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
            {/* Section */}

            {/* Submit */}
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6 mt-6">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Submit
              </button>
              {/* Submit */}
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
