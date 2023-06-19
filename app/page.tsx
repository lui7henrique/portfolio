"use client";

import { Suspense } from "react";
import { BlogSection } from "src/components/BlogSection";
import { WorkSection } from "src/components/Work";

export default async function Home() {
  return (
    <>
      <main className="max-w-screen-lg mx-auto px-4">
        <section className=" py-32 flex flex-col justify-center border-b">
          <div className="flex items-end gap-4">
            <h2 className="text-7xl font-bold text-gray-900">Hello,</h2>

            <h2 className="text-7xl font-bold text-gray-900 whitespace-nowrap">
              I&apos;m Luiz Henrique 🖐
            </h2>
          </div>

          <h2 className="text-4xl font-regular text-gray-700">
            I&apos;m a software engineer currently based in Brazil.
          </h2>

          <p className="text-md font-regular text-gray-500 mt-10 w-2/3">
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
        </section>

        <WorkSection />
      </main>

      <Suspense fallback={<p>loading...</p>}>
        {/* @ts-expect-error Server component */}
        <BlogSection />
      </Suspense>
    </>
  );
}
