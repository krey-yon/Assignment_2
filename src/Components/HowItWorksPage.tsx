import { stepsCardData } from "../data/data";
import StepsCard from "./StepsCard";

const HowItWorksPage = () => {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 bg-white relative items-start lg:items-center px-4 sm:px-6 md:px-8 lg:px-0">
      <img
        src="/images/virticallines.webp"
        alt="verticalLines"
        className="absolute top-0 left-0 lg:left-[150px] hidden lg:block"
        width={100}
      />
      <div className="flex flex-col w-full lg:w-[440px] lg:ml-[150px] py-6 lg:py-0">
        <h1 className="text-blue-900 font-black text-2xl sm:text-3xl lg:text-4xl pb-2">
          India's Biggest Media Database
        </h1>
        <p className="text-sm sm:text-base text-neutral-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s...
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full pb-8 sm:pb-12 lg:pb-[100px] pt-6 sm:pt-8">
        {stepsCardData.map((card) => (
          <StepsCard
            key={card.id}
            discription={card.description}
            height={card.height}
            width={card.width}
            image={card.image}
            stepNumber={card.id}
            title={card.title}
          />
        ))}
      </div>
    </div>
  );
};

export default HowItWorksPage;
