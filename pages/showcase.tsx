import type { NextPage } from 'next'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import React, { useState } from 'react';
import Image from 'next/image'

const projects: { id: number, imageURL: string, title: string, techStack: string, liveLink: string, github: string, description: string }[] = [
  {'id': 1,
  'imageURL': '/bookdev.png',
  'title': 'BookDev - Hire a Developer',
  'techStack': 'Ruby on Rails | React | Redux | Tailwind CSS',
  'liveLink': 'https://book-dev.herokuapp.com/',
  'github': 'https://github.com/awaisanwar544/final-capstone-ui',
  'description': `This is a web page that let's you make an appointment with a developer. This app makes use of API calls to its back-end API to get the data for everything regarding users, developers, and skills.
  `,},
  {'id': 2,
  'imageURL': '/space.png',
  'title': 'Space X',
  'techStack': 'React | Redux',
  'liveLink': 'https://sweet-biscotti-fa21dd.netlify.app/',
  'github': 'https://github.com/awaisanwar544/spacex-project',
  'description': `A react based application for booking space travels and join missions.
  `,},
  {'id': 6,
  'imageURL': '/events.png',
  'title': 'Kontests',
  'techStack': 'React | Redux',
  'liveLink': 'https://mellow-concha-b54076.netlify.app/',
  'github': 'https://github.com/awaisanwar544/kontests',
  'description': `A web app that provides the updates about upcoming and ongoing tech events around the world.
  `,},
  {'id': 3,
  'imageURL': '/bookstore.png',
  'title': 'BookStore CMS',
  'techStack': 'React | Redux',
  'liveLink': 'https://sprightly-cannoli-671978.netlify.app/',
  'github': 'https://github.com/awaisanwar544/bookstore',
  'description': `A react based application for books lovers.
  `,},
  {'id': 4,
  'imageURL': '/recipe.png',
  'title': 'Recipe App - Create and Browse Recipes',
  'techStack': 'Ruby on Rails',
  'liveLink': 'https://chef-recipes-app.herokuapp.com/',
  'github': 'https://github.com/awaisanwar544/recipe-app',
  'description': `The Recipe app is a classic example of a recipe application that is fully functional webapp. It includes the list of recipe created by Users and allow users interact with them.
  `,},
  {'id': 5,
  'imageURL': '/khaata.png',
  'title': 'Khaata - A book keeping app',
  'techStack': 'Ruby on Rails | Bootstrap',
  'liveLink': 'https://khaata-app.herokuapp.com/',
  'github': 'https://github.com/awaisanwar544/khaata',
  'description': `The Khaata App keeps track of users daily transactions. A sample application built with Ruby on Rails with user authentication and session storage.
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
              <div>
                <a href={projects[currentProject].liveLink} target="_blank" rel="noopener noreferrer" className="focus:outline-none text-black bg-yellow-500 hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Live Demo</a>
              </div>
              <div>
                <a href={projects[currentProject].github} target="_blank" rel="noopener noreferrer" className="focus:outline-none text-black bg-yellow-500 hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Github Repo</a>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}

export default Showcase
