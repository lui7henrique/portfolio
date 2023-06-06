import Link from "next/link";

const nav = [
  {
    href: "/resume",
    label: "Resume",
  },
  {
    href: "/posts",
    label: "Posts",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

export const Header = () => {
  return (
    <header className="max-w-screen-lg mx-auto px-4 py-4 flex items-center justify-between">
      <Link href="/">
        <div className="text-4xl font-bold text-gray-900 select-none">⚡</div>
      </Link>

      <nav className="flex gap-4">
        {nav.map((item) => {
          const { href, label } = item;

          return (
            <Link href={href} key={href}>
              <span className={`text-sm text-gray-700`}>{label}</span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
