import Link from 'next/link'
import { Github, Linkedin } from 'lucide-react'
import { Button } from './ui/button'
import { ModeToggle } from './mode-toggle'

const nav = [
  {
    href: '/',
    label: 'About',
  },
  {
    href: '/resume',
    label: 'Resume',
  },
]

const contact = [
  {
    icon: Github,
    ariaLabel: "Luiz Henrique's Github Profile",
    href: 'https://github.com/lui7henrique',
  },
  {
    icon: Linkedin,
    ariaLabel: "Luiz Henrique's LinkedIn Profile",
    href: 'https://www.linkedin.com/in/luiz-henrique7/',
  },
]

export const Header = () => {
  return (
    <header className="max-w-screen-lg mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex space-x-4">
        <Link href="/">
          <div className="text-4xl font-bold select-none">⚡</div>
        </Link>

        <div className="gap-4 items-center hidden">
          <nav className="flex gap-4 items-center ">
            {nav.map((item) => {
              const { href, label } = item

              return (
                <Link href={href} key={href}>
                  <span className="text-md">{label}</span>
                </Link>
              )
            })}
          </nav>
        </div>
      </div>

      <div className="flex gap-2">
        {contact.map(({ href, ariaLabel, icon: Icon }) => {
          return (
            <Button asChild key={ariaLabel} variant="outline" size="icon">
              <Link href={href} aria-label={ariaLabel} target="_blank">
                <div className="p-2 transition-all rounded-lg hover:bg-muted">
                  <Icon size={14} />
                </div>
              </Link>
            </Button>
          )
        })}

        <ModeToggle />
      </div>
    </header>
  )
}
