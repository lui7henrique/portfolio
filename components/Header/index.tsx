import Link from "next/link";

export const Header = () => {
  return (
    <header className="max-w-screen-lg mx-auto px-4 py-4 flex items-center justify-between">
      <Link href="/">
        <div className="text-4xl font-bold text-gray-900 select-none">⚡</div>
      </Link>

      <nav className="flex gap-4">
        <Link href="/resume">
          <span className="text-sm text-gray-700">Resume</span>
        </Link>

        <Link href="/posts">
          <span className="text-sm text-gray-700">Posts</span>
        </Link>

        <Link href="/contact">
          <span className="text-sm text-gray-700">Contact</span>
        </Link>
      </nav>
    </header>
  );
};
