import Image from "next/image";
import { server } from "src/graphql/client";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";
import { generateColSpanByIndex } from "src/utils/generateColSpanByIndex";

export const WorkSection = async () => {
  const { experiences } = await server.getExperiences();

  return (
    <section className="py-20">
      <h3 className="text-3xl font-bold text-zinc-900">Work</h3>

      <p className="text-md font-regular text-zinc-500 mt-4">
        As of this moment, I&apos;m building projects at{" "}
        <a
          href="https://www.linkedin.com/company/hyperlocalholding/"
          className="underline"
          target="_blank"
        >
          Hyperlocal
        </a>
        . I have limited availability for freelance work but I&apos;m always
        excited for new ideas and projects! You can{" "}
        <a href="mailto:7henrique18@gmail.com" className="underline">
          shoot me an email
        </a>{" "}
        or hit up on{" "}
        <a
          href="https://twitter.com/lui7henrique"
          target="_blank"
          className="underline"
        >
          Twitter
        </a>{" "}
        or{" "}
        <a
          href="https://www.linkedin.com/in/luiz-henrique7/"
          target="_blank"
          className="underline"
        >
          LinkedIn!
        </a>
      </p>

      <section className="mt-8 flex-col gap-4 flex lg:grid lg:grid-cols-3">
        {experiences.reverse().map((experience, index) => {
          const {
            companyColor,
            companyLogo,
            companyName,
            role,
            startedAt,
            finishedAt,
          } = experience;

          const templateFormat = "MMM YYYY";

          const start = dayjs(startedAt).format(templateFormat);
          const finish = finishedAt
            ? dayjs(finishedAt).format(templateFormat)
            : "Current";

          return (
            <div
              className={twMerge(
                "rounded-3xl flex flex-col justify-between p-8"
              )}
              key={experience.id}
              style={{
                backgroundColor: companyColor.hex,
                gridColumn: generateColSpanByIndex(index),
              }}
            >
              <figure className="rounded-xl overflow-hidden w-16 h-16 relative p-1">
                <Image src={companyLogo.url} fill alt={companyName} />
              </figure>

              <div className="mt-20">
                <h5 className="text-zinc-50 font-regular text-md">
                  {companyName}
                </h5>

                <h5 className="text-zinc-50 font-semibold text-3xl mb-4">
                  {role}
                </h5>

                <sup className="text-zinc-50 text-xs ">
                  {start} - {finish}
                </sup>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};
