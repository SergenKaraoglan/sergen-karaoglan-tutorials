import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Sergen Karaoglan</title>
        <meta
          name="description"
          content="Portfolio homepage of Sergen Karaoglan"
        />
      </Head>
      <main>
        <div className="relative overflow-hidden min-h-screen w-full pb-16 sm:pb-24 lg:pb-32">
          <video
            className="h-full w-full object-cover absolute inset-0 -z-20 "
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/manim_montage.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="text-center">
                <h1 className="text-4xl font-medium tracking-tight text-white sm:text-6xl">
                  Developing responsive web apps that focus on the{" "}
                  <u className="text-white">user experience</u>
                </h1>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#footer-heading"
                    className="rounded-md bg-blue-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                  >
                    Contact
                  </a>
                  {/* <a href="#" className="text-sm font-semibold leading-6 text-white">
                    Learn more <span aria-hidden="true">→</span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="featured-projects"
          className="mx-auto max-w-4xl py-20 sm:py-28 lg:py-36"
        >
          <h2 className="text-center text-3xl font-medium tracking-tight text-black sm:text-4xl py-7">
            Featured Projects
          </h2>
          <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <li className="col-span-2 divide-y divide-gray-200 rounded-lg bg-white shadow">
              <div className="flex w-full items-center justify-between space-x-6 p-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-base font-medium text-gray-900">
                      Touchless T-Rex Runner
                    </h3>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">Javascript</p>
                  <p className="mt-1 text-sm text-gray-900">
                    A deep learning project that allows the user to tweak and
                    train a neural network using a GUI that can then be used to
                    play T-rex runner with a touchless interface.
                  </p>
                </div>
                <Image
                  className="h-auto w-1/4 flex-shrink-0 rounded"
                  src="/t_rex_runner_touchless_interface.png"
                  alt="t_rex_runner"
                  height={100}
                  width={100}
                />
              </div>
              <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                  <div className="flex w-0 flex-1">
                    <a
                      href="https://sergenkaraoglan.github.io/t_rex_runner_touchless_interface/"
                      className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                          clipRule="evenodd"
                        />
                        <path
                          fillRule="evenodd"
                          d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-3">Demo</span>
                    </a>
                  </div>
                  <div className="-ml-px flex w-0 flex-1">
                    <a
                      href="https://github.com/SergenKaraoglan/t_rex_runner_touchless_interface"
                      className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.25 2A2.25 2.25 0 002 4.25v11.5A2.25 2.25 0 004.25 18h11.5A2.25 2.25 0 0018 15.75V4.25A2.25 2.25 0 0015.75 2H4.25zm4.03 6.28a.75.75 0 00-1.06-1.06L4.97 9.47a.75.75 0 000 1.06l2.25 2.25a.75.75 0 001.06-1.06L6.56 10l1.72-1.72zm4.5-1.06a.75.75 0 10-1.06 1.06L13.44 10l-1.72 1.72a.75.75 0 101.06 1.06l2.25-2.25a.75.75 0 000-1.06l-2.25-2.25z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-3">Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>

            {/* <li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
              <div className="flex w-full items-center justify-between space-x-6 p-6">
                <div className="flex-1 truncate">
                  <div className="flex items-center space-x-3">
                    <h3 className="truncate text-sm font-medium text-gray-900">Project title</h3>
                  </div>
                  <p className="mt-1 truncate text-sm text-gray-500">Technologies</p>
                  <p className="mt-1 truncate text-sm text-gray-500">About</p>
                </div>
                <img className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="">
              </div>
              <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                  <div className="flex w-0 flex-1">
                    <a href="mailto:janecooper@example.com" className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
                      </svg>
                      <span className="ml-3">Demo</span>
                    </a>
                  </div>
                  <div className="-ml-px flex w-0 flex-1">
                    <a href="tel:+1-202-555-0170" className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v11.5A2.25 2.25 0 004.25 18h11.5A2.25 2.25 0 0018 15.75V4.25A2.25 2.25 0 0015.75 2H4.25zm4.03 6.28a.75.75 0 00-1.06-1.06L4.97 9.47a.75.75 0 000 1.06l2.25 2.25a.75.75 0 001.06-1.06L6.56 10l1.72-1.72zm4.5-1.06a.75.75 0 10-1.06 1.06L13.44 10l-1.72 1.72a.75.75 0 101.06 1.06l2.25-2.25a.75.75 0 000-1.06l-2.25-2.25z" clipRule="evenodd" />
                      </svg>
                      <span className="ml-3">Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </li> */}
          </ul>
        </div>
      </main>
    </>
  );
}
