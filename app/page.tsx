import { Suspense } from "react";
import { BlogSection } from "src/components/BlogSection";
import { WorkSection } from "src/components/Work";

export default async function Home() {
  return (
    <>
      <main className="max-w-screen-lg mx-auto px-4">
        <section className=" py-32 flex flex-col justify-center border-b">
          <div className="flex items-end gap-4">
            <h2 className="text-7xl font-bold text-zinc-900">Hello,</h2>

            <h2 className="font-bold text-zinc-900 lg:whitespace-normal xl:whitespace-nowrap text-4xl xl:text-7xl hidden lg:visible">
              I&apos;m Luiz Henrique 🖐
            </h2>
          </div>

          <h2 className="font-bold text-zinc-900 lg:whitespace-normal xl:whitespace-nowrap text-4xl xl:text-7xl ">
            I&apos;m Luiz Henrique 🖐
          </h2>

          <h2 className="text-4xl font-regular text-zinc-700">
            I&apos;m a software engineer currently based in Brazil.
          </h2>
        </section>

        <WorkSection />
      </main>
    </>
  );
}
