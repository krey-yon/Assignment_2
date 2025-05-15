const HeroPage2 = () => {
  return (
    <div className="bg-neutral-100 flex flex-col items-center px-4 sm:px-6 md:px-8 pt-8 sm:pt-12 md:pt-16 lg:pt-[100px]">
      <h1 className="text-neutral-600 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
        Augmented Intelligence
      </h1>
      <p className="pt-3 sm:pt-4 md:pt-[17px] text-neutral-800 text-base sm:text-lg md:text-xl font-normal pb-8 sm:pb-10 md:pb-12 lg:pb-[67px] text-center max-w-3xl mx-auto">
        We analyse connections between brands, people, and products to help
        teams identify key concepts, sentiments, and relationships.
      </p>
      <img 
        src="/images/home-research.webp" 
        alt="second-hero-image" 
        className="w-full max-w-[1280px] h-auto object-cover rounded-lg" 
      />
    </div>
  );
};

export default HeroPage2;
