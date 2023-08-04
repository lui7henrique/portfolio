import { CompanyIcon } from "src/components/CompanyIcon";
import { server } from "src/graphql/client";
import dayjs from "dayjs";
import { Metadata } from "next";

const thumbnail = {
  url: "https://lui7henrique.com/resume.png",
  width: 1280,
  height: 720,
  alt: "Resume",
};

const defaultMetadata = {
  title: "Resume",
  description:
    "A brief resume about my professional life, such as information about myself and professional experiences!",
  images: [thumbnail],
};

export const metadata: Metadata = {
  ...defaultMetadata,
  twitter: {
    ...defaultMetadata,
    card: "summary_large_image",
    site: "@lui7henrique",
    creator: "@lui7henrique",
  },
  openGraph: {
    ...defaultMetadata,
  },
};

export default async function Resume() {
  const { experiences } = await server.getExperiences();

  return (
    <>
      <main className="max-w-screen-lg mx-auto px-4">
        <section className="py-24 flex flex-col justify-center border-b select-none">
          <div className="flex items-end justify-center gap-4">
            <h1 className="font-bold text-zinc-90 text-6xl lg:text-9xl">
              Resume
            </h1>
          </div>
        </section>

        <section className="flex flex-col gap-4 lg:gap-8 py-8 lg:py-16">
          <div className=" grid gap-4 grid-cols-1 lg:grid-cols-4 lg:gap-8">
            <div className="col-span-1">
              <h2 className="text-lg font-semibold text-zinc-800">About me</h2>
            </div>

            <div className="col-span-3">
              <p className="text-zinc-600 text-xs lg:text-sm">
                My name&apos;s Luiz Henrique. I&apos;m a 20 years old software
                engineer based in São Paulo, Brazil. I&apos;m passionate about
                developing satisfying interfaces and solutions.
              </p>
            </div>
          </div>

          <div className="py-8 grid gap-4 grid-cols-1 lg:grid-cols-4 lg:gap-8">
            <div className="col-span-1">
              <h2 className="text-lg font-semibold text-zinc-800">
                Experience
              </h2>
            </div>

            <div className="col-span-3 flex flex-col gap-8 lg:gap-16">
              {experiences.reverse().map((experience) => {
                const {
                  id,
                  companyName,
                  companyColor,
                  companyLogo,
                  role,
                  description,
                  finishedAt,
                  startedAt,
                } = experience;

                const templateFormat = "MMM YYYY";

                const start = dayjs(startedAt).format(templateFormat);
                const finish = finishedAt
                  ? dayjs(finishedAt).format(templateFormat)
                  : "Current";

                return (
                  <div className="flex flex-col gap-2" key={id}>
                    <div className="flex gap-4">
                      <CompanyIcon
                        companyName={companyName}
                        companyColor={companyColor}
                        companyLogo={companyLogo}
                      />

                      <div className="flex flex-col">
                        <h5 className="font-semibold  text-zinc-800 text-sm lg:text-lg">
                          {role}
                          <span className="text-zinc-400">, {companyName}</span>
                        </h5>

                        <span className="text-xs text-zinc-400 uppercase font-semibold tracking-widest">
                          {start} - {finish}
                        </span>
                      </div>
                    </div>

                    <div
                      dangerouslySetInnerHTML={{
                        __html: description.html,
                      }}
                      className="prose w-full max-w-none text-xs lg:text-sm"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
