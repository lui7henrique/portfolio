export const Footer = () => {
  return (
    <footer className="bg-zinc-950 w-full text-zinc-400 text-sm">
      <div className="border-t border-zinc-900 max-w-screen-lg mx-auto w-full py-4 text-xs [&_a]:underline px-4 text-center">
        <p>
          Made with{" "}
          <a href="https://nextjs.org/" target="_blank">
            NextJS
          </a>
          ,{" "}
          <a href="https://tailwindcss.com/" target="_blank">
            Tailwind
          </a>{" "}
          and{" "}
          <a href="https://hygraph.com/" target="_blank">
            Hygraphy
          </a>
          . The source code is available on
          <a
            href="https://github.com/lui7henrique/web-portfolio"
            target="_blank"
            className="underline"
          >
            {" "}
            Github
          </a>
        </p>
      </div>
    </footer>
  );
};
