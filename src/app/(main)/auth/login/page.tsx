import Login from "../../components/Login";
import { getCsrfToken } from "next-auth/react";

export default async function Page() {
  const csrfToken = await getCsrfToken();
  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Cu Competence"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Login
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
            <Login token={csrfToken ? csrfToken : ""} />
          </div>
        </div>
      </div>
    </>
  );
}

export const dynamic = "force-dynamic";
