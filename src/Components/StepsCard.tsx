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
    <div className=" max-w-[250px]">
      <img src={image} alt="steps" height={height} width={width} className="object-contain h-[160px]" />
      <span className="text-sm font-semibold text-neutral-800 border border-gray-300 px-2 py-0.5 rounded-lg mb-2 inline-block">
        Step {stepNumber}
      </span>
      <h1 className="py-2.5 text-blue-900 font-medium">{title}</h1>
      <p className="text-neutral-500">{discription}</p>
    </div>
  );
};

export default StepsCard;
