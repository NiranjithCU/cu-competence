"use client";

import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <div className="px-6 pt-6 lg:px-8">
      <nav className="flex items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">CU-Competence</span>
            <img
              className="h-8"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Home
          </Link>

          {session && (
            <Link
              href="/assessment"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Assessments
            </Link>
          )}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {session ? (
            <>
              <div className="text-sm font-semibold leading-6 text-gray-900">
                Welcome, {session?.user?.name}
              </div>
              <button
                className="ml-5 text-sm font-semibold leading-6 text-gray-900"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                Sign out
              </button>
            </>
          ) : (
            <button
              className="text-sm font-semibold leading-6 text-gray-900"
              onClick={() => signIn()}
            >
              Sign in
            </button>
          )}
        </div>
      </nav>
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                >
                  Home
                </Link>
                {session && (
                  <Link
                    href="/assessment"
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                  >
                    Assessments
                  </Link>
                )}
              </div>

              <div className="py-6">
                {session ? (
                  <>
                    <div className="text-sm font-semibold leading-6 text-gray-900">
                      Welcome, {session?.user?.name}
                    </div>
                    <Link
                      href="#"
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                      onClick={() => signOut({ callbackUrl: "/" })}
                    >
                      Sign out
                    </Link>
                  </>
                ) : (
                  <Link
                    href="#"
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                    onClick={() => signIn()}
                  >
                    Sign in
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}
