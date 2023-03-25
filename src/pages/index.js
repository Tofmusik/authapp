import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <main>
      <h1 className="h-screen flex justify-center items-center text-3xl font-bold underline">
      Hello world!
    </h1>
      </main>
    </>
  )
}
