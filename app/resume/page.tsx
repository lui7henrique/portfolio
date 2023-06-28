import { CompanyIcon } from "src/components/CompanyIcon";
import client from "src/graphql/client";
import { GetExperiencesQuery } from "src/graphql/generated/graphql";
import { GET_EXPERIENCES } from "src/graphql/queries";

const getExperiences = async () => {
  const experiences = await client.request<GetExperiencesQuery>(
    GET_EXPERIENCES
  );

  return experiences;
};

export default async function Resume() {
  const { experiences } = await getExperiences();

  return (
    <>
      <main className="max-w-screen-lg mx-auto px-4">
        <section className=" py-24 flex flex-col justify-center border-b">
          <div className="flex items-end justify-center gap-4">
            <h1 className="text-9xl font-bold text-zinc-900">Resume</h1>
          </div>
        </section>

        <section className="py-16 flex flex-col gap-8">
          <div className=" grid grid-cols-4 gap-8">
            <div className="col-span-1">
              <h2 className="text-lg font-semibold text-zinc-800">About me</h2>
            </div>

            <div className="col-span-3">
              <p className="text-zinc-600 text-sm">
                My name is Luiz Henrique. I&apos;m a software engineer based in
                São Paulo, brazil. . I&apos;m passionate about developing
                satisfying interfaces and solutions. I really enjoy consuming
                and creating content and I&apos;m constantly sharing thoughts
                and ideas through my blog!
              </p>
            </div>
          </div>

          <div className="py-8 grid grid-cols-4 gap-8">
            <div className="col-span-1">
              <h2 className="text-lg font-semibold text-zinc-800">
                Experience
              </h2>
            </div>

            <div className="col-span-3 flex flex-col gap-16">
              {experiences.map((experience) => {
                const { id, companyName, role, description } = experience;

                return (
                  <div className="flex flex-col gap-2" key={id}>
                    <div className="flex gap-4">
                      <CompanyIcon companyName={companyName} />

                      <div className="flex flex-col">
                        <h5 className="font-semibold text-lg text-zinc-800">
                          {role}
                          <span className="text-zinc-400">, {companyName}</span>
                        </h5>

                        <span className="text-xs text-zinc-400 uppercase font-semibold tracking-widest">
                          Sep 2021 - Nov 2022
                        </span>
                      </div>
                    </div>

                    <div
                      dangerouslySetInnerHTML={{
                        __html: description.html,
                      }}
                      className="prose text-sm w-full max-w-none"
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
