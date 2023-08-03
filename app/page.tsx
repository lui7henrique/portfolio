import { WorkSection } from "src/components/Work";

export const metadata = {
  title: "About",
  description:
    "Hello, I'm Luiz Henrique! I'm a software engineer currently based in Brazil.",
};

export default async function Home() {
  return (
    <>
      <main className="max-w-screen-lg mx-auto px-4">
        <section className="py-32 flex flex-col justify-center items-center border-b select-none">
          <h2 className="text-6xl font-bold text-zinc-900 ">
            Hello! I&apos;m Luiz Henrique <span>🖐</span>
          </h2>

          <h2 className="text-xl lg:text-3xl font-regular text-zinc-700 mt-4">
            A software engineer currently based in Brazil.
          </h2>
        </section>

        <WorkSection />
      </main>
    </>
  );
}
