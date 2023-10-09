import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='flex h-full bg-zinc-50 dark:bg-zinc-800'>
        <Main />
        <NextScript />
        <div id="notification"></div>
      </body>
    </Html>
  )
}
