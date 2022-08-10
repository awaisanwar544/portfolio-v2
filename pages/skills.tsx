import type { NextPage } from 'next'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import Skill from '../components/Skill'

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
  {'imageURL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'skillName': 'Postgresql'},
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
  {'imageURL': '/mycollection/png/002-pair.png',
  'skillName': 'Pair Programming'},
  {'imageURL': '/mycollection/png/001-partners.png',
  'skillName': 'Team Work'},
  {'imageURL': '/mycollection/png/003-collaboration.png',
  'skillName': 'Collaboration'},
  {'imageURL': '/mycollection/png/005-videoconference.png',
  'skillName': 'Remote Best Practices'},
  {'imageURL': '/mycollection/png/006-time-management.png',
  'skillName': 'Time Management'},
  {'imageURL': '/mycollection/png/004-networking.png',
  'skillName': 'Cross Cultural Communication'},
  {'imageURL': '/mycollection/png/007-network.png',
  'skillName': 'Effective Networking'},
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
          <div className="flex flex-row flex-wrap justify-center">
            {
              techList.map((item) => <Skill {...{imageURL: item.imageURL, skillName: item.skillName}} key={item.skillName} />)
            }
          </div>
          <h1 className="text-2xl uppercase font-bold text-yellow-500 mt-5">Professional Skills</h1>
          <div className="flex flex-row flex-wrap justify-center">
            {
              profList.map((item) => <Skill {...{imageURL: item.imageURL, skillName: item.skillName}} key={item.skillName} />)
            }
          </div>

        </div>
      </main>
    </div>
  )
}

export default Home
