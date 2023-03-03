import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-black">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex-shrink-0">
                <Link href="/">
                  <Image
                    className="block h-5 w-auto sm:hidden"
                    src="/logo.svg"
                    alt="Sergen Karaoglan logo"
                    height={0}
                    width={0}
                  />
                  <Image
                    className="hidden h-5 w-auto sm:block"
                    src="/logo.svg"
                    alt="Sergen Karaoglan logo"
                    height={0}
                    width={0}
                  />
                </Link>
              </div>
              <div className="hidden sm:block">
                <div className="flex space-x-4">
                  {/* <a href="https://www.linkedin.com/in/sergen-karaoglan/" className="rounded-md px-3 py-2 text-sm font-medium text-gray-50 hover:bg-gray-700">About</a> */}
                  <Link
                    href="/projects"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-50 hover:bg-gray-700"
                  >
                    Projects
                  </Link>
                  <a
                    href="#footer-heading"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-50 hover:bg-gray-700"
                  >
                    Contact
                  </a>
                </div>
              </div>
              <div className="-mr-2 flex sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button
                  className="inline-flex items-center justify-center rounded-md p-2 text-gray-50 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Disclosure.Button
                as="a"
                href="/projects"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#footer-heading"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Contact
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
