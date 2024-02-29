import Head from "next/head";

import Image from "next/image"; // Import the 'Image' component

export default function Team() {
  const staffs = [
    {
      name: "Dominik Koch",
      categorys: ["Developers"],
      id: 2,
      description: "Founder, Lead Developer, German Translator",
      imageUrl: "/staff/Dominik.webp",
      xUrl: "#",
      linkedinUrl: "#",
    },
    {
      name: "Sky Skyer",
      id: 2,
      categorys: [
        "Developers",
        "Designers",
        "Beta Testers",
        "Translators",
        "Contributors",
      ],
      description: "CO-Founder, Developer",
      imageUrl: "/staff/Sky.webp",
      xUrl: "#",
      linkedinUrl: "#",
    },
    //
    // More people...
  ];

  const roles = [
    "Developers",
    "Designers",
    "Beta Testers",
    "Translators",
    "Contributors",
  ];

  return (
    <>
      <Head>
        <title>Would You - Team</title>
      </Head>
      <main className="px-8 xl:px-[17vw]">
        <h1 className="mt-36 text-4xl font-bold text-white">
          <span className="text-brand-red-100 drop-shadow-red-glow">Meet </span>{" "}
          <span className="text-brand-blue-100 drop-shadow-blue-glow">
            {" "}
            the{" "}
          </span>
          Team
        </h1>
        <p className="text-neutral-500">
          Meet the amazing team and contributors behind Would You.
        </p>
        <div className="mx-auto h-full max-w-5xl justify-center text-center">
          {roles.map((role) => (
            <>
              <h2 className=" mt-10 select-none font-semibold text-neutral-300">
                {role}
              </h2>
              <ul
                role="list"
                className="text-pretty mx-auto mt-10 grid max-w-2xl grid-cols-1 justify-center gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-8 "
              >
                {staffs
                  .filter((staff) => staff.categorys.includes(role))
                  .map((staff) => (
                    // eslint-disable-next-line react/jsx-key
                    <li
                      key={staff.id} // Add a unique key prop
                      className="transform content-center rounded-2xl bg-neutral-800 px-4 py-8 shadow-lg transition duration-300 ease-in-out hover:shadow-2xl sm:px-6 lg:px-8 lg:hover:-translate-y-2 xl:px-10"
                    >
                      <Image
                        className="mx-auto h-28 w-28 rounded-full md:h-24 md:w-24"
                        src={staff.imageUrl}
                        width={28}
                        height={28}
                        alt=""
                      />
                      <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">
                        {staff.name}
                      </h3>
                      <p className="text-sm leading-6 text-gray-400">
                        {staff.description}
                      </p>
                      <ul
                        role="list"
                        className="mt-6 flex justify-center align-bottom"
                      >
                        <li
                          className="absolute bottom-5 left-1/2 -translate-x-1/2"
                          key={staff.linkedinUrl}
                        >
                          <a
                            href={staff.linkedinUrl} // Use the correct variable name
                            className="text-gray-400 hover:text-gray-300"
                          >
                            <span className="sr-only">LinkedIn</span>
                            <svg
                              className="h-5 w-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 120 120"
                            >
                              <switch>
                                <g>
                                  <path d="M60 120C26.9 120 0 93.1 0 60S26.9 0 60 0s60 26.9 60 60-26.9 60-60 60M60 5C29.7 5 5 29.7 5 60s24.7 55 55 55 55-24.7 55-55S90.3 5 60 5" />
                                  <path d="M60 120c-19.3 0-34.4-26.4-34.4-60S40.7 0 60 0s34.4 26.4 34.4 60-15.1 60-34.4 60M60 5C43.8 5 30.5 29.7 30.5 60s13.2 55 29.5 55 29.5-24.7 29.5-55S76.2 5 60 5" />
                                  <path d="M12.2 25.6h95.6v5H12.2zm0 63.9h95.6v5H12.2zm-9.7-32h115v5H2.5z" />
                                  <path d="M57.5 2.5h5v115h-5z" />
                                </g>
                              </switch>
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </li>
                  ))}{" "}
              </ul>
            </>
          ))}{" "}
        </div>
      </main>
    </>
  );
}
