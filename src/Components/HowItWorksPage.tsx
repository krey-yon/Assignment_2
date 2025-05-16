import { stepsCardData } from "../data/data";
import StepsCard from "./StepsCard";

const HowItWorksPage = () => {
  return (
    <div className="grid grid-cols-2 bg-white relative items-center">
      <img
        src="/images/virticallines.webp"
        alt="verticalLines"
        className="absolute top-0 left-[200px] hidden lg:block"
        width={100}
      />
      <div className="flex flex-col w-[440px] relative left-[200px]">
        <h1 className="text-blue-900 font-black text-4xl pb-2" >India's Biggest Media Database</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s...
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto pb-12 sm:pb-16 md:pb-[100px] pt-6 sm:pt-8 px-2 sm:px-4">
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
