"use client";

import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import Image from "next/image";

export default function Resume() {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      duration: 250,
    });
  }, []);

  return (
    <>
      <main className="max-w-screen-lg mx-auto px-4">
        <section className=" py-24 flex flex-col justify-center border-b">
          <div className="flex items-end justify-center gap-4">
            <h1
              data-aos="fade-down"
              data-aos-delay="0"
              className="text-9xl font-bold text-gray-900"
            >
              Resume
            </h1>
          </div>
        </section>

        <section className="py-16 flex flex-col gap-8">
          <div className=" grid grid-cols-4 gap-8">
            <div
              className="col-span-1"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <h2 className="text-lg font-semibold text-gray-800">About me</h2>
            </div>

            <div
              className="col-span-3"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <p className="text-gray-600 text-sm">
                My name is Luiz Henrique. I&apos;m a software engineer based in
                São Paulo, brazil. . I&apos;m passionate about developing
                satisfying interfaces and solutions. I really enjoy consuming
                and creating content and I&apos;m constantly sharing thoughts
                and ideas through my blog!
              </p>
            </div>
          </div>

          <div className="py-8 grid grid-cols-4 gap-8">
            <div
              className="col-span-1"
              data-aos="fade-right"
              data-aos-delay="600"
            >
              <h2 className="text-lg font-semibold text-gray-800">
                Experience
              </h2>
            </div>

            <div
              className="col-span-3 flex flex-col gap-16"
              data-aos="fade-right"
              data-aos-delay="800"
            >
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <figure className="w-12 h-12 relative rounded-xl bg-blue-700">
                    <Image
                      src="/logos/hyperlocal-white.svg"
                      fill
                      alt="hyperlocal-logo"
                      className="p-3"
                    />
                  </figure>

                  <div className="flex flex-col">
                    <h5 className="font-semibold text-lg text-gray-800">
                      Front-end developer
                      <span className="text-gray-400">, Hyperlocal</span>
                    </h5>

                    <span className="text-xs text-gray-400 uppercase font-semibold tracking-widest">
                      Nov 2022 - Present
                    </span>
                  </div>
                </div>

                <p className="text-gray-800 text-sm">
                  Fusce congue euismod felis, sit amet scelerisque ipsum
                  suscipit vitae. Fusce eu lobortis sem, a bibendum ex. Etiam
                  vel consequat sapien. Donec placerat leo purus, in dapibus
                  risus molestie quis. Donec a mi nec mi tincidunt blandit
                  convallis sed neque. Fusce tempus nulla eu blandit mattis.
                  Quisque et nibh congue, feugiat ex non, interdum libero.
                  Aenean id velit ultricies, fermentum massa eu, convallis
                  velit. Donec imperdiet lectus ut volutpat volutpat. Ut nec
                  dignissim diam. Sed condimentum, massa feugiat aliquet mattis,
                  quam nisi accumsan ipsum, posuere consectetur metus neque non
                  massa. Integer hendrerit lectus sed mattis placerat. Cras
                  dapibus, turpis et consectetur hendrerit, lacus arcu sagittis
                  ex, vel tempus mi nunc molestie metus. Maecenas ullamcorper
                  pellentesque velit id blandit.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <figure className="w-12 h-12 relative rounded-xl bg-zinc-900">
                    <Image
                      src="/logos/hubxp.svg"
                      fill
                      alt="hyperlocal-logo"
                      className="p-2"
                    />
                  </figure>

                  <div className="flex flex-col">
                    <h5 className="font-semibold text-lg text-gray-800">
                      Front-end developer
                      <span className="text-gray-400">, hubxp</span>
                    </h5>

                    <span className="text-xs text-gray-400 uppercase font-semibold tracking-widest">
                      Sep 2021 - Nov 2022
                    </span>
                  </div>
                </div>

                <p className="text-gray-800 text-sm">
                  Fusce congue euismod felis, sit amet scelerisque ipsum
                  suscipit vitae. Fusce eu lobortis sem, a bibendum ex. Etiam
                  vel consequat sapien. Donec placerat leo purus, in dapibus
                  risus molestie quis. Donec a mi nec mi tincidunt blandit
                  convallis sed neque. Fusce tempus nulla eu blandit mattis.
                  Quisque et nibh congue, feugiat ex non, interdum libero.
                  Aenean id velit ultricies, fermentum massa eu, convallis
                  velit. Donec imperdiet lectus ut volutpat volutpat. Ut nec
                  dignissim diam. Sed condimentum, massa feugiat aliquet mattis,
                  quam nisi accumsan ipsum, posuere consectetur metus neque non
                  massa. Integer hendrerit lectus sed mattis placerat. Cras
                  dapibus, turpis et consectetur hendrerit, lacus arcu sagittis
                  ex, vel tempus mi nunc molestie metus. Maecenas ullamcorper
                  pellentesque velit id blandit.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
