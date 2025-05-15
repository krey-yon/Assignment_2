import { cardData } from "../data/data";
import Card from "./Card";

const TryItOutPage = () => {
  return (
    <div className="bg-neutral-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-neutral-600 py-[12px]">
        The AI Partner for PR
      </h1>
      <p className="text-neutral-500 font-normal text-xl">
        We work with Agency and Enterprise pros to drive campaign success and
        improve PR ROIs.
      </p>
      <button className="bg-blue-950 px-[28px] py-[12px] border border-neutral-600 rounded-md mt-[24px] text-white font-medium mb-2">
        Try it Out
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto pb-[100px] pt-6">
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
