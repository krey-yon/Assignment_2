interface CardProps {
  image: string,
  title: string,
  description: string
  background: string
}

const Card = ({image, title, description, background} : CardProps ) => {
  return (
    <div className={`border rounded-lg border-gray-200/100 flex flex-col xs:flex-row max-w-[600px] gap-2 shadow-2xl p-3 sm:p-4 ${background}`}>
      <img 
        src={image} 
        alt="card-icon" 
        className="w-[60px] sm:w-[80px] md:w-[100px] object-contain self-center xs:self-start"
      />
      <div className="flex flex-col gap-1 sm:gap-2 mt-2 xs:mt-0">
        <h1 className="text-blue-950 text-base sm:text-lg font-semibold text-center xs:text-left">{title}</h1>
        <p className="text-sm sm:text-base font-normal text-center xs:text-left">{description}</p>
      </div>
    </div>
  )
}

export default Card