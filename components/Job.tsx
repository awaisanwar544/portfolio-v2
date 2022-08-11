import Image from 'next/image'

interface Props {
  imageURL: string
  title: string
  company: string
  duration: string
  location: string
  description: string
}

const Job = (
  {
    imageURL,
    title,
    company,
    duration,
    location,
    description
}: Props
) => {

  return (
    <div>
      <div className="flex flex-row m-5 p-5 space-x-5">
        <div className="w-2/5">
          {imageURL.length !== 0
          ? (
            <Image
            loader={() => imageURL}
            src={imageURL}
            alt={`Logo of the ${company}`}
            width={200}
            height={200}
            />
          ) : (
            <p className="text-6xl text-yellow-500">{company.charAt(0)}</p>
          )}
        </div>
        <div className="text-left space-y-2">
          <div className="flex flex-row justify-between">
            <h2 className="text-xl font-bold">{title}</h2>
            <h3>{company}</h3>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-gray-400">{location}</p>
            <p className="text-gray-400">{duration}</p>
          </div>
          <p className="italic">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Job
