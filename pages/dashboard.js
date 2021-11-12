import Head from 'next/head'

export default function Dashboard() {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="This is a hello page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Dashboard
        </h1>
      </main>

      <footer>
        Dashboard
      </footer>
    </div>
  )
}
