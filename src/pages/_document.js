import { Html, Head, Main, NextScript } from 'next/document'

export default function Document({ locale }) {
  return (
    <Html lang={locale}>
      <Head />
      <body className="bg-light dark:bg-dark">
        <script
          id="theme-switcher"
          dangerouslySetInnerHTML={{
            __html: `
              if (
                localStorage.getItem('theme') === 'dark' ||
                (!('theme' in localStorage) &&
                  window.matchMedia('(prefers-color-scheme: dark)').matches)
              ) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

// 👇 Get the locale from the context (Next.js passes it automatically)
Document.getInitialProps = async (ctx) => {
  const initialProps = await ctx.defaultGetInitialProps(ctx)
  return { ...initialProps, locale: ctx.locale }
}
