const TrustedByPage = () => {
  const CompanyLogo = [
    "/images/hp-logo.png",
    "/images/leadschool-logo.png",
    "/images/boat-logo.png",
    "/images/s-electric-logo.png",
    "/images/lenovo-logo.png",
    "/images/revolut-logo.png",
  ];
  return (
    <div className="flex flex-col items-center bg-neutral-100 pt-8 sm:pt-12 md:pt-16 lg:pt-[100px] px-4">
      <h1 className="text-neutral-600 font-bold text-3xl sm:text-4xl md:text-5xl py-2 sm:py-3 text-center">Trusted by</h1>
      <p className="text-neutral-600 text-lg sm:text-xl md:text-2xl font-medium text-center px-4">
        Over 40k+ software business growing with Skribe
      </p>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-20 py-6 sm:py-8 md:py-[40px] w-full">
        {CompanyLogo.map((logo, index) => (
          <img
            src={logo}
            key={index}
            alt="company-logo"
            className="h-8 sm:h-10 md:h-12 object-contain my-4"
          />
        ))}
      </div>
    </div>
  );
};

export default TrustedByPage;
