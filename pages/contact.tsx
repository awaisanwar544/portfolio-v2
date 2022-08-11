import type { NextPage } from 'next'
import Head from 'next/head'
import Navigation from '../components/Navigation'

const Contact: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Awais Anwar - Contact</title>
        <meta name="description" content="Awais Anwar Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-row justify-between">
        <Navigation />
        <div className="flex flex-col w-1/2 mt-5 space-y-5">
          <h1 className="text-2xl uppercase font-bold text-yellow-500 self-center">Contact Me</h1>
          <div className="flex flex-row space-x-10">
            <p>Email:</p>
            <p>anwarawais900@gmail.com</p>
          </div>
          <div className="flex flex-row space-x-10">
            <p>Linkedin:</p>
            <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://www.linkedin.com/in/awaisanwar544/" target="_blank" rel="noopener noreferrer" >awaisanwar544</a>
          </div>
          <div className="flex flex-row space-x-10">
            <p>Github:</p>
            <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://github.com/awaisanwar544" target="_blank" rel="noopener noreferrer" >awaisanwar544</a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Contact
