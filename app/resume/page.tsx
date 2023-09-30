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
  title: "Luiz Henrique • Resume",
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
    siteName: "Luiz Henrique • Resume",
  },
};

export default async function Resume() {
  const { experiences } = await server.getExperiences();

  return (
    <>
      <main className="max-w-screen-lg mx-auto px-4">
        <section className="py-24 flex flex-col justify-center border-b">
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

            <div className="col-span-3 text-zinc-600 text-sm/7 lg:text-md/7 flex flex-col gap-4">
              <p>
                I&apos;m Luiz Henrique, a 20-year-old software developer based in São Paulo, Brazil. My journey began at 18 when I dove into the world of web development through online courses, mastering essential tools like <strong>React</strong>, <strong>NodeJS</strong>, and <strong>React Native</strong>. I started my professional journey as a front-end developer, gaining valuable experience while working on various projects.
              </p>

              <p>
                In the last year, I&apos;ve been part of a dynamic company&apos;s banking squad, where I&apos;m currently focused on developing a versatile white-label banking application with a full range of features.
              </p>

              <p>I&apos;m recognized for my collaborative approach, effective communication, and commitment to continuous self-improvement. Still, I&apos;m actively addressing my tendencies towards anxiety and overthinking to further enhance my professional growth.</p>
            </div>
          </div>

          <div className="py-8 grid gap-4 grid-cols-1 lg:grid-cols-4 lg:gap-8">
            <div className="col-span-1">
              <h2 className="text-lg font-semibold text-zinc-800">
                Experience
              </h2>
            </div>

            <div className="col-span-3 flex flex-col gap-8 lg:gap-12">
              {experiences.map((experience) => {
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
                  <section className="flex flex-col gap-2" key={id} id={companyName}>
                    <div className="flex gap-4">
                      <CompanyIcon
                        companyName={companyName}
                        companyColor={companyColor}
                        companyLogo={companyLogo}
                      />

                      <div className="flex flex-col">
                        <h3 className="font-bold  text-zinc-950 text-sm lg:text-lg">
                          {role}
                          <span className="text-zinc-600 font-semibold">, {companyName}</span>
                        </h3>

                        <span className="text-xs text-zinc-600 uppercase font-semibold tracking-widest">
                          {start} - {finish}
                        </span>
                      </div>
                    </div>

                    <div
                      dangerouslySetInnerHTML={{
                        __html: description.html,
                      }}
                      className="prose w-full max-w-none text-sm/7 lg:text-md/7"
                    />
                  </section>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
