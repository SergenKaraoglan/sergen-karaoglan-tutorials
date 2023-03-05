import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const navigation = {
  social: [
    {
      name: "GitHub",
      href: "https://github.com/SergenKaraoglan",
      icon: (props: { className: string }) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/sergen-karaoglan",
      icon: (props: { className: string }) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="border-t border-gray-900/10 pt-8 lg:flex lg:items-center lg:justify-between">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-gray-900">
              Contact.
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Contact for web development, full-time, on-site (UK) or remote.
            </p>
          </div>

          <EmailButton />
        </div>
        <div className="mt-8 border-t border-gray-900/10 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-500 hover:text-gray-400"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0">
            &copy; 2023 Sergen Karaoglan.
          </p>
        </div>
      </div>
    </footer>
  );
}

function EmailButton() {
  function copyEmail() {
    navigator.clipboard.writeText(email);
    setTooltip(true);
    setTimeout(() => {
      setTooltip(false);
    }, 1000);
  }

  const email = "sergenkaraoglan@outlook.com";
  const [tooltip, setTooltip] = useState(false);
  return (
    <button
      id="contact-email"
      onClick={copyEmail}
      className="group relative items-center mt-4 flex max-w-fit lg:mt-0 rounded-md bg-blue-700 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
    >
      <p>{email}</p>
      <div className="ml-2 sm:ml-4 sm:flex-shrink-0">
        <ClipboardDocumentIcon className="w-6 h-6" />
      </div>
      <span
        className={
          "absolute top-10 ease-out duration-300 rounded bg-gray-800 p-2 text-xs text-white " +
          (tooltip ? "scale-100" : "scale-0")
        }
      >
        Copied!
      </span>
    </button>
  );
}
