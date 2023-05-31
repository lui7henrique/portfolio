"use client";

import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      duration: 250,
    });
  }, []);

  return (
    <>
      <main className="max-w-screen-lg mx-auto px-4 ">
        <section className=" py-32 flex flex-col justify-center border-b">
          <div className="flex items-end gap-4">
            <h2
              data-aos="fade-down"
              data-aos-delay="0"
              className="text-7xl font-bold text-gray-900"
            >
              Hello,
            </h2>

            <h2
              data-aos="fade-down"
              data-aos-delay="400"
              className="text-7xl font-bold text-gray-900"
            >
              I&apos;m Luiz Henrique 🖐
            </h2>
          </div>

          <h2
            className="text-4xl font-regular text-gray-700"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            I&apos;m a software engineer currently based in Brazil!
          </h2>

          <p
            className="text-md font-regular text-gray-500 mt-10 w-2/3"
            data-aos="fade-right"
            data-aos-delay="800"
          >
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

        <section className="py-20 border-b">
          <h3
            className="text-3xl font-bold text-gray-900"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Work
          </h3>

          <section className="mt-8 flex-col gap-4 grid grid-cols-3">
            <div
              className="col-span-1 rounded-3xl bg-zinc-950 flex flex-col justify-between p-8"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <figure className="rounded-xl overflow-hidden w-16 h-16 relative">
                <Image src="/logos/uber.png" fill alt="uber-logo" />
              </figure>

              <div className="mt-20">
                <h5 className="text-gray-50 font-regular text-md">Uber</h5>

                <h5 className="text-gray-50 font-semibold text-3xl mb-4">
                  Software Engineer
                </h5>

                <sup className="text-gray-50 text-xs ">2025 - Currently</sup>
              </div>
            </div>

            <div
              className="col-span-2 rounded-3xl bg-zinc-900 flex flex-col justify-between p-8"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <figure className="rounded-xl overflow-hidden w-16 h-16 relative">
                <Image src="/logos/rocket.png" fill alt="rocket-logo" />
              </figure>

              <div className="mt-20">
                <h5 className="text-gray-50 font-regular text-md">
                  Rocketseat
                </h5>

                <h5 className="text-gray-50 font-semibold text-3xl mb-4">
                  Front-end engineer
                </h5>

                <sup className="text-gray-50 text-xs ">Nov 2023 - Nov 2025</sup>
              </div>
            </div>

            <div
              className="col-span-2 rounded-3xl bg-blue-700 flex flex-col justify-between p-8"
              data-aos="fade-right"
              data-aos-delay="600"
            >
              <figure className="rounded-xl overflow-hidden w-16 h-16 relative">
                <Image src="/logos/hyperlocal.jpg" fill alt="hyperlocal-logo" />
              </figure>

              <div className="mt-20">
                <h5 className="text-gray-50 font-regular text-md">
                  Hyperlocal
                </h5>

                <h5 className="text-gray-50 font-semibold text-3xl mb-4">
                  Front-end developer
                </h5>

                <sup className="text-gray-50 text-xs ">Nov 2022 - Nov 2023</sup>
              </div>
            </div>

            <div
              className="col-span-1 rounded-3xl bg-zinc-900 flex flex-col justify-between p-8"
              data-aos="fade-left"
              data-aos-delay="700"
            >
              <figure className="rounded-xl overflow-hidden w-16 h-16 relative">
                <Image src="/logos/hubxp.svg" fill alt="hubxp-logo" />
              </figure>

              <div className="mt-20">
                <h5 className="text-gray-50 font-regular text-md">hubxp</h5>

                <h5 className="text-gray-50 font-semibold text-3xl mb-4">
                  Front-end developer
                </h5>

                <sup className="text-gray-50 text-xs ">Set 2021 - Nov 2022</sup>
              </div>
            </div>
          </section>
        </section>

        <section className="py-20 border-b">
          <h3
            className="text-3xl font-bold text-gray-900"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Blog
          </h3>

          <section className="mt-8 flex flex-col gap-4"></section>
        </section>
      </main>
    </>
  );
}
