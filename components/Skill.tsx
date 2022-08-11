import Image from 'next/image'

interface Props {
  imageURL: string
  skillName: string
}

const Skill = (
  {
    imageURL,
    skillName
}: Props
) => {

  return (
    <div>
      <div className="m-5 p-5 text-center">
        <Image
          loader={() => imageURL}
          src={imageURL}
          alt={`Icon of ${skillName}`}
          width={100}
          height={100}
        />
        <h1>{skillName}</h1>
      </div>
    </div>
  )
}

export default Skill
