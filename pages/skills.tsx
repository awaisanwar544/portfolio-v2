import type { NextPage } from 'next'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import Image from 'next/image'
import Skill from '../components/skill'

const techList: { imageURL: string, skillName: string }[] = [
  {'imageURL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'skillName': 'HTML'},
  {'imageURL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'skillName': 'CSS'},
  {'imageURL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  'skillName': 'BootStrap'},
  {'imageURL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
  'skillName': 'Tailwind CSS'},
  {'imageURL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'skillName': 'JavaScript'},
  {'imageURL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'skillName': 'TypeScript'},
  {'imageURL': '/next.svg',
  'skillName': 'Next JS'},
  {'imageURL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'skillName': 'React JS'},
  {'imageURL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  'skillName': 'Redux'},
  {'imageURL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
  'skillName': 'Jest'},
  {'imageURL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg',
  'skillName': 'Ruby'},
  {'imageURL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg',
  'skillName': 'Ruby on Rails'},
  {'imageURL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rspec/rspec-original.svg',
  'skillName': 'RSpec'},
  {'imageURL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'skillName': 'Git'},
  {'imageURL': '/github.svg',
  'skillName': 'GitHub'},
  {'imageURL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg',
  'skillName': 'Heroku'},
  {'imageURL': '/netlify.svg',
  'skillName': 'Netlify'},
          
]

const profList: { imageURL: string, skillName: string }[] = [
  {'imageURL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'skillName': 'HTML'},
]

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Awais Anwar - Skills</title>
        <meta name="description" content="Awais Anwar Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-row justify-between">
        <Navigation />
        <div  className="flex flex-col text-center mt-5 w-1/2 overflow-y-scroll h-screen">
          <h1 className="text-2xl uppercase font-bold text-yellow-500">Technical Skills</h1>
          <div className="flex flex-row flex-wrap">
            {
              techList.map((item) => <Skill {...{imageURL: item.imageURL, skillName: item.skillName}} />)
            }
          </div>
          <h1 className="text-2xl uppercase font-bold text-yellow-500">Professional Skills</h1>
          <div className="flex flex-row flex-wrap">
            {
              profList.map((item) => <Skill {...{imageURL: item.imageURL, skillName: item.skillName}} />)
            }
          </div>

        </div>
      </main>
    </div>
  )
}

export default Home
