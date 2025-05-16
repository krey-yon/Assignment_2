interface StepsCardProps {
  height: number;
  width: number;
  image: string;
  stepNumber: number;
  title: string;
  discription: string;
}

const StepsCard = ({
  height,
  width,
  image,
  stepNumber,
  title,
  discription,
}: StepsCardProps) => {
  return (
    <div className="w-full max-w-[250px] sm:max-w-[225px] md:max-w-[250px]">
      <img 
        src={image} 
        alt="steps" 
        height={height} 
        width={width} 
        className="object-contain h-[120px] sm:h-[140px] md:h-[160px] w-full" 
      />
      <span className="text-xs sm:text-sm font-semibold text-neutral-800 border border-gray-300 px-2 py-0.5 rounded-lg mb-1 sm:mb-2 inline-block">
        Step {stepNumber}
      </span>
      <h1 className="py-1.5 sm:py-2.5 text-blue-900 font-medium text-base sm:text-lg">{title}</h1>
      <p className="text-sm sm:text-base text-neutral-500">{discription}</p>
    </div>
  );
};

export default StepsCard;
