const HeroPage = () => {
  return (
    <div className="bg-blue-50">
      <div className="flex flex-col lg:flex-row justify-between bg-blue-50 px-4 md:px-8 lg:px-0 pt-12 md:pt-16 lg:pt-[120px] gap-6 lg:gap-[136px] max-w-[1480px] mx-auto overflow-hidden">
        <div className="px-4 md:px-6 lg:pl-[120px] w-full lg:max-w-[600px]">
          <h1 className="text-[#002B5B] font-inter text-3xl md:text-4xl lg:text-[52px] font-bold leading-tight lg:leading-[100%]">
            Transform your PR
          </h1>
          <p className="text-blue-950 mt-4 lg:mt-[20px] text-base md:text-lg">
            Skribe empowers PR teams with real-time media intelligence,
            journalist insights, and automated workflows, ensuring precise
            targeting, streamlined execution, and maximized PR outcomes.
          </p>
          <button className="rounded-md border border-blue-950 text-blue-950 px-5 py-3 md:px-6 md:py-3 mt-6 lg:mt-[37px] w-full md:w-auto hover:bg-blue-900 hover:text-white transition-colors font-semibold">
            Request Demo
          </button>
        </div>

        <div className="w-full md:w-4/5 mx-auto lg:mx-0 lg:w-auto shadow-xl lg:shadow-2xl mt-8 lg:mt-0">
          <img
            src="/images/hero-image-goskribe.png"
            alt="PR transformation platform"
            className="w-full h-auto rounded-lg lg:w-[760px] lg:h-[590px] lg:rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
