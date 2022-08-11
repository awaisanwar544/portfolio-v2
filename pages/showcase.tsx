import type { NextPage } from 'next'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'

const projects: { id: number, imageURL: string, title: string, techStack: string, liveLink: string, github: string, description: string }[] = [
  {'id': 1,
  'imageURL': '/auraside_logo.png',
  'title': 'Frontend Developer',
  'techStack': 'AuraSide Inc.',
  'liveLink': 'May 2022 - Present',
  'github': 'Remote',
  'description': `Create, update and maintain the user interface and frontend functionality of the web app "mantle". Ensure high-quality graphic standards and brand consistency while following the design guidelines and Figma prototype.
  `,},
  {'id': 1,
  'imageURL': '/auraside_logo.png',
  'title': 'Frontend Developer',
  'techStack': 'AuraSide Inc.',
  'liveLink': 'May 2022 - Present',
  'github': 'Remote',
  'description': `Create, update and maintain the user interface and frontend functionality of the web app "mantle". Ensure high-quality graphic standards and brand consistency while following the design guidelines and Figma prototype.
  `,},
]




const Showcase: NextPage = () => {
  const [currentProject, setCurrentProject] = useState(0);
  return (
    <div>
      <Head>
        <title>Awais Anwar - Showcase</title>
        <meta name="description" content="Awais Anwar Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-row justify-between">
        <Navigation />
        <div  className="flex flex-col text-center mt-5 w-1/2 overflow-y-scroll h-screen">
          <h1 className="text-2xl uppercase font-bold text-yellow-500">{`Project ${currentProject+1} / ${projects.length}`}</h1>
          <div className="mt-5">
            <div className="relative">
              {currentProject !== 0 && 
                <button type="button" onClick={() => setCurrentProject(currentProject - 1)} className="absolute top-48 left-0 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Previous</button>
              }
              <div>
                <Image
                loader={() => projects[currentProject].imageURL}
                src={projects[currentProject].imageURL}
                alt={`Preiview image of ${projects[currentProject].title}`}
                width={500}
                height={500}
                />
              </div>
              {currentProject !== projects.length - 1 &&
                <button type="button" onClick={() => setCurrentProject(currentProject + 1)} className="absolute top-48 right-5 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Next</button>
              }
            </div>
            <h2 className="text-xl font-bold">{projects[currentProject].title}</h2>
            <p className="text-gray-400">{projects[currentProject].techStack}</p>
            <p className="italic">{projects[currentProject].description}</p>
            <div className="flex flex-row space-x-10 text-center justify-center m-5">
              <Link href={projects[currentProject].liveLink}>
                <a className="focus:outline-none text-black bg-yellow-500 hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Live Demo</a>
              </Link>
              <Link href={projects[currentProject].github}>
                <a className="focus:outline-none text-black bg-yellow-500 hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Github Repo</a>
              </Link>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}

export default Showcase
