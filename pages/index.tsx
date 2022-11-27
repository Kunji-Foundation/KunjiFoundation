import Head from 'next/head'
import Image from 'next/image'
import Homepage from "../components/Home/index";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kunji Foundation</title>
        <meta name="description" content="Welcome to Kunji Foundation :)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homepage />
    </>
  );
}
