import type { NextPage } from 'next'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import Job from '../components/Job'

const expList: { id: number, imageURL: string, title: string, company: string, duration: string, location: string, description: string }[] = [
  {'id': 1,
  'imageURL': '/auraside_logo.png',
  'title': 'Frontend Developer',
  'company': 'AuraSide Inc.',
  'duration': 'May 2022 - Present',
  'location': 'Remote',
  'description': `Create, update and maintain the user interface and frontend functionality of the web app "mantle". Ensure high-quality graphic standards and brand consistency while following the design guidelines and Figma prototype.
  `,},
  {'id': 2,
  'imageURL': '/jcci_logo.jpeg',
  'title': 'Trainer',
  'company': 'JCCI Digital Academia',
  'duration': 'Jan 2020 - Present ',
  'location': 'Jhelum, Punjab, Pakistan',
  'description': `Mentored 250+ beginners and junior designers to gain the required skills to become successful in the field as a designer. Received a certificate of appreciation from the President of the Jhelum Chamber of Commerce and Industries (JCCI) for my efforts in the youth skill development initiative.
  `,},
  {'id': 3,
  'imageURL': '',
  'title': 'Frontend Web Developer',
  'company': 'EMO (PVT) LIMITED',
  'duration': 'Jan 2021 - Jun 2022',
  'location': 'Islamabad, Pakistan',
  'description': `Participated in the development of responsive single-page applications using the ReactJs library.
  Assisted in the development of modern user interfaces without compromising functionality.
  `,},
  {'id': 4,
  'imageURL': '',
  'title': 'UX/UI Designer',
  'company': 'EMO (PVT) LIMITED',
  'duration': 'Nov 2015 - Jan 2021 ',
  'location': 'Islamabad, Pakistan',
  'description': `Developed Application UIs via emerging Front End Technologies such as Sketch, Invision Studio, Figma, Adobe XD. Communicated with product managers and other stakeholders to translate project requirements and business objectives into polished user interfaces.
  `,},
  {'id': 4,
  'imageURL': '',
  'title': 'Graphics Designer',
  'company': 'Freelancer',
  'duration': 'Dec 2013 - Oct 2015',
  'location': 'Remote',
  'description': `Created design assets like screens, backgrounds, objects, and other graphics for number 2D games for web and mobile platforms. Created 50+ page designs, 100+ illustrations, and 20+ wireframes for several client websites.
  `,},
]




const Experience: NextPage = () => {
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
          <h1 className="text-2xl uppercase font-bold text-yellow-500">Experience</h1>
          <div className="flex flex-col divide-y">
            {
              expList.map((item) => <Job {...{
                id: item.id,
                imageURL: item.imageURL,
                title: item.title,
                company: item.company,
                duration: item.duration,
                location: item.location,
                description: item.description
              }} key={item.id} />)
            }
          </div>

        </div>
      </main>
    </div>
  )
}

export default Experience
