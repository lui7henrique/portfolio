import { WorkSection } from '@/graphql/work-section'
import { Metadata } from 'next'

const thumbnail = {
  url: 'https://lui7henrique.com/about.png',
  width: 1200,
  height: 630,
  alt: 'About me',
}

const defaultMetadata = {
  title: 'Luiz Henrique • About me',
  description:
    "Hello, I'm Luiz Henrique! I'm a software developer currently based in Brazil. 🖐",
  images: [thumbnail],
}

export const metadata: Metadata = {
  ...defaultMetadata,
  twitter: {
    ...defaultMetadata,
    card: 'summary_large_image',
    site: '@lui7henrique',
    creator: '@lui7henrique',
  },
  openGraph: {
    ...defaultMetadata,
    url: 'https://lui7henrique.com/',
    siteName: 'Luiz Henrique • About me',
  },
}

export default async function Home() {
  return (
    <>
      <main className="max-w-screen-lg mx-auto px-4">
        <section className="h-[50vh] flex flex-col justify-center items-center border-b">
          <h2 className="text-3xl font-bold">
            hello <span className="line-through">world</span>! i&apos;m luiz
            henrique.
          </h2>

          <h2 className="text-md font-regular text-muted-foreground">
            a software developer passionate about awesome interfaces and
            experiences.
          </h2>
        </section>

        <WorkSection />
      </main>
    </>
  )
}
