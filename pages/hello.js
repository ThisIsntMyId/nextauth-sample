import Head from 'next/head'

export default function HelloAgain() {
  return (
    <div>
      <Head>
        <title>Hello Again</title>
        <meta name="description" content="This is a hello page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Hello Again
        </h1>
      </main>

      <footer>
        Hello Again
      </footer>
    </div>
  )
}
