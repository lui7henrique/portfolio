export const Footer = () => {
  return (
    <footer className="w-full px-4">
      <div className="border-t max-w-screen-lg mx-auto w-full py-4 [&_a]:underline text-center">
        <p className="text-muted-foreground text-xs">
          Made with{' '}
          <a href="https://nextjs.org/" target="_blank">
            NextJS
          </a>
          ,{' '}
          <a href="https://tailwindcss.com/" target="_blank">
            TailwindCSS
          </a>{' '}
          and{' '}
          <a href="https://hygraph.com/" target="_blank">
            Hygraphy
          </a>
          . The source code is available on{' '}
          <a
            href="https://github.com/lui7henrique/web-portfolio"
            target="_blank"
            className="underline"
          >
            Github.
          </a>
        </p>
      </div>
    </footer>
  )
}
