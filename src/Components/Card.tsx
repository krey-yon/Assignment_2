interface CardProps {
  image: string,
  title: string,
  description: string
  background: string
}

const Card = ({image, title, description, background} : CardProps ) => {
  return (
    <div className={`border rounded-lg border-gray-200/100 flex max-w-[600px] gap-2 p-4 ${background}`}>
      <img src={image} alt="card-icon" width={100} />
      <div className="flex flex-col gap-2">
        <h1 className="text-blue-950 text-lg font-semibold">{title}</h1>
        <p className="font-normal">{description}</p>
      </div>
    </div>
  )
}

export default Card