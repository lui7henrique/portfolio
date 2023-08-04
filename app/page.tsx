import { Metadata } from "next";
import { WorkSection } from "src/components/Work";

const thumbnail = {
  url: "https://lui7henrique.com/about.png",
  width: 1200,
  height: 630,
  alt: "About me",
};

const defaultMetadata = {
  title: "Luiz Henrique • About me",
  description:
    "Hello, I'm Luiz Henrique! I'm a software engineer currently based in Brazil. 🖐",
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
    url: "https://lui7henrique.com/",
    siteName: "Luiz Henrique • About me",
  },
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
