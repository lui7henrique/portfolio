import Image from 'next/image'
import dayjs from 'dayjs'

import { twMerge } from 'tailwind-merge'
import { server } from '@/graphql/client'

import Link from 'next/link'
import { generateColSpanByIndex } from '@/utils/generateColSpanByIndex'

export const WorkSection = async () => {
  const { experiences } = await server.getExperiences()

  return (
    <section className="py-20">
      <h3 className="text-2xl font-bold">work</h3>

      <p className="text-sm font-regular text-muted-foreground mt-4">
        as of this moment, i&apos;m building projects at{' '}
        <a
          href="https://www.linkedin.com/company/hyperlocalholding/"
          className="underline"
          target="_blank"
        >
          Hyperlocal
        </a>
        . i have limited availability for freelance work but I&apos;m always
        excited for new ideas and projects! you can{' '}
        <a href="mailto:7henrique18@gmail.com" className="underline">
          shoot me an email
        </a>{' '}
        or hit up on{' '}
        <a
          href="https://twitter.com/lui7henrique"
          target="_blank"
          className="underline"
        >
          twitter
        </a>{' '}
        or{' '}
        <a
          href="https://www.linkedin.com/in/luiz-henrique7/"
          target="_blank"
          className="underline"
        >
          linkedIn!
        </a>
      </p>

      <section className="mt-8 flex-col gap-4 flex lg:grid lg:grid-cols-3">
        {experiences.map((experience, index) => {
          const {
            companyColor,
            companyLogo,
            companyName,
            role,
            startedAt,
            finishedAt,
          } = experience

          const templateFormat = 'MMM YYYY'

          const start = dayjs(startedAt).format(templateFormat)
          const finish = finishedAt
            ? dayjs(finishedAt).format(templateFormat)
            : 'Current'

          return (
            <Link
              className={twMerge(
                'rounded-lg flex flex-col justify-between p-8 border',
              )}
              style={{
                gridColumn: generateColSpanByIndex(index),
              }}
              key={experience.id}
              href={`/resume#${companyName}`}
            >
              <div className="flex">
                <figure
                  className="rounded-lg overflow-hidden relative w-16 h-16 flex items-center justify-center"
                  style={{ backgroundColor: companyColor.hex }}
                >
                  <Image
                    src={companyLogo.url}
                    alt={companyName}
                    width={32}
                    height={32}
                  />
                </figure>
              </div>

              <div className="mt-12 space-y-2">
                <h4 className="text-xs text-muted-foreground">
                  {companyName}

                  <span className="ml-2">
                    • {start} - {finish}
                  </span>
                </h4>

                <h5 className="font-bold text-xl">{role}</h5>
              </div>
            </Link>
          )
        })}
      </section>
    </section>
  )
}
