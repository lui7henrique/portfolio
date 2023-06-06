import Image from "next/image";

export const WorkSection = () => {
  return (
    <section className="py-20 border-b">
      <h3
        className="text-3xl font-bold text-gray-900"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        Work
      </h3>

      <section className="mt-8 flex-col gap-4 grid grid-cols-3">
        {/* <div
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
            <h5 className="text-gray-50 font-regular text-md">Rocketseat</h5>

            <h5 className="text-gray-50 font-semibold text-3xl mb-4">
              Front-end engineer
            </h5>

            <sup className="text-gray-50 text-xs ">Nov 2023 - Nov 2025</sup>
          </div>
        </div> */}

        <div
          className="col-span-2 rounded-3xl bg-blue-700 flex flex-col justify-between p-8"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <figure className="rounded-xl overflow-hidden w-16 h-16 relative">
            <Image src="/logos/hyperlocal.jpg" fill alt="hyperlocal-logo" />
          </figure>

          <div className="mt-20">
            <h5 className="text-gray-50 font-regular text-md">Hyperlocal</h5>

            <h5 className="text-gray-50 font-semibold text-3xl mb-4">
              Front-end developer
            </h5>

            <sup className="text-gray-50 text-xs ">Nov 2022 - Present</sup>
          </div>
        </div>

        <div
          className="col-span-1 rounded-3xl bg-zinc-900 flex flex-col justify-between p-8"
          data-aos="fade-left"
          data-aos-delay="500"
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
  );
};
