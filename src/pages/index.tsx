import { useState } from 'react'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const inter = Inter({ subsets: ['latin'] })

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

let mobileMenuOpen = false
function setMobileMenuOpen(isOpen: boolean): void {
  mobileMenuOpen = isOpen
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Sergen Karaoglan Portfolio</title>
        <meta charSet="UTF-8" />
        <meta name='description' content="Portfolio homepage of Sergen Karaoglan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
      </Head>
      <main>
        <div className="relative overflow-hidden min-h-screen w-full pb-16 sm:pb-24 lg:pb-32">
          <video class="h-full w-full object-cover absolute inset-0 -z-20 " autoplay="autoplay" loop="loop" muted="muted" playsinline>
            <source src="/FractalTree.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="text-center">
                <h1 className="text-4xl font-medium tracking-tight text-white sm:text-6xl">
                  Developing responsive web apps that focus on the <u className="text-white">user experience</u>
                </h1>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a 
                    href="#footer-heading"
                    className="rounded-md bg-blue-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400">
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
      </main>
    </>
  )
}