import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kunji Foundation</title>
        <meta name="description" content="Welcome to Kunji Foundation :)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex justify-center items-center h-screen'>
        <h1 className='text-2xl md:text-4xl font-mono'>
          Welcome to <a href="https://github.com/Kunji-Foundation">Kunji Foundation Website :)</a>
        </h1>

        </main>

    </>
  )
}
