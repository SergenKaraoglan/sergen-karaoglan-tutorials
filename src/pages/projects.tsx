import Image from "next/image";
import Head from "next/head";

const project_list = [
  {
    name: "t_rex_runner_touchless_interface",
    title: "Touchless T-Rex Runner",
    technologies: ["Javascript", "HTML", "CSS", "Tensorflow.js", "Chart.js"],
    description:
      "Play T-rex runner with a touchless interface by training and using a neural network.",
    demo: "https://sergenkaraoglan.github.io/t-rex-runner-touchless-interface/",
    code: "https://github.com/SergenKaraoglan/t_rex_runner_touchless_interface",
  },
  {
    name: "reaction-timer",
    title: "Reaction Time Tester",
    technologies: ["React", "Tailwind CSS", "Next.js"],
    description: "Test your reaction time.",
    demo: "/projects/reaction-timer",
    code: "https://github.com/SergenKaraoglan/sergen-karaoglan-portfolio/blob/main/src/pages/projects/reaction-timer.jsx#enroll-beta",
  },
];

export default function projects() {
  return (
    <>
      <Head>
        <title>Projects | Sergen Karaoglan</title>
        <meta name="description" content="Projects of Sergen Karaoglan" />
      </Head>
      <div className="mx-auto max-w-5xl py-20 sm:py-28 lg:py-36 px-5">
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {project_list.map((project) => (
            <li
              key={project.name}
              className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
            >
              <div className="flex flex-1 flex-col p-8">
                <Image
                  className="mx-auto h-32 w-32 flex-shrink-0 rounded"
                  src={"/" + project.name + ".png"}
                  alt=""
                  height={50}
                  width={50}
                />
                <h3 className="mt-6 text-sm font-medium text-gray-900">
                  {project.title}
                </h3>
                <dl className="mt-1 flex flex-grow flex-col justify-between">
                  <dt className="sr-only">Technologies</dt>
                  <dd className="text-sm text-gray-500">
                    {project.technologies.join(", ")}
                  </dd>
                  <dt className="sr-only">Description</dt>
                  <dd className="text-sm text-gray-800 p-1">
                    {project.description}
                  </dd>
                  <dt className="sr-only">Type</dt>
                  <dd className="mt-3">
                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                      Website
                    </span>
                  </dd>
                </dl>
              </div>
              <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                  <div className="flex w-0 flex-1">
                    <a
                      href={project.demo}
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
                      href={project.code}
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
          ))}
        </ul>
      </div>
    </>
  );
}
