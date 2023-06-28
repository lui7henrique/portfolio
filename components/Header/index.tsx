import Link from "next/link";
import { HeaderContact } from "../HeaderContact";

const nav = [
  {
    href: "/resume",
    label: "Resume",
  },
  {
    href: "/posts",
    label: "Posts",
  },
];

export const Header = () => {
  return (
    <header className="max-w-screen-lg mx-auto px-4 py-4 flex items-center justify-between">
      <Link href="/">
        <div className="text-4xl font-bold text-zinc-900 select-none">⚡</div>
      </Link>

      <div className="flex gap-4 items-center">
        <nav className="flex gap-4 items-center">
          {nav.map((item) => {
            const { href, label } = item;

            return (
              <Link href={href} key={href}>
                <span className={`text-sm  text-zinc-700`}>{label}</span>
              </Link>
            );
          })}
        </nav>

        <HeaderContact />
      </div>
    </header>
  );
};
