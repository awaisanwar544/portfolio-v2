import type { NextPage } from 'next'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Awais Anwar - Next | React | Rails</title>
        <meta name="description" content="Awais Anwar Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-row justify-between">
        <Navigation />
        <div className="flex flex-col w-1/2 justify-center items-center space-y-5">
          <Image
            className="rounded-full"
            src="/me.jpg"
            alt="Picture of the Awais Anwar"
            width={250}
            height={250}
          />
          <div className="text-center">
            <h1 className="text-2xl uppercase font-bold text-yellow-500">Awais Anwar</h1>
            <h2 className="text-lg uppercase">Full-stack Web Developer</h2>
            <h3 className="text-lg">React | Next | Rails</h3>
            <p className="text-md m-10">
            Hi! I&prime;m Awais Anwar, and I&prime;m a full-stack web developer. I have completed software development Bootcamp at Microverse and spent more than 1200+ hours of pair programming with other developers all over the world. I took the challenge to build some interesting projects from simple landing pages to complex web applications and APIs.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
