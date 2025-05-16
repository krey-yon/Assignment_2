import { cardData } from "../data/data";
import Card from "./Card";

const TryItOutPage = () => {
  return (
    <div className="bg-neutral-100 flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-12 md:py-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-600 py-2 sm:py-[12px] text-center">
        The AI Partner for PR
      </h1>
      <p className="text-neutral-500 font-normal text-base sm:text-lg md:text-xl text-center max-w-2xl mx-auto">
        We work with Agency and Enterprise pros to drive campaign success and
        improve PR ROIs.
      </p>
      <button className="bg-blue-950 px-5 sm:px-[28px] py-2 sm:py-[12px] border border-neutral-600 rounded-md mt-5 sm:mt-[24px] text-white font-medium mb-2 w-full sm:w-auto max-w-xs hover:bg-blue-900 transition-colors">
        Try it Out
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto pb-12 sm:pb-16 md:pb-[100px] pt-6 sm:pt-8 px-2 sm:px-4">
        {cardData.map((card) => (
          <Card
            key={card.id}
            description={card.description}
            image={card.image}
            title={card.title}
            background={card.background}
          />
        ))}
      </div>
    </div>
  );
};

export default TryItOutPage;
