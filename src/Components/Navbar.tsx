import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-50 py-4 px-4 sm:px-6 md:px-10">
      <div className="flex items-center justify-between max-w-[1480px] mx-auto">
        <div className="flex items-center space-x-2 md:space-x-4 lg:gap-12">
          <img
            src="/images/skribelogo.png"
            alt="skribelogo"
            className="h-6 sm:h-8 w-auto"
          />
          <ul className="hidden md:flex items-center space-x-3 lg:space-x-6 text-blue-950 font-semibold">
            <li className="border-b-2">Home</li>
            <li>Products</li>
            <li>Pricing</li>
            <li>Resources</li>
            <li>Company</li>
          </ul>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <button className="border border-[#00214D] text-[#00214D] px-4 py-2 rounded-md font-semibold hover:bg-[#00214D] hover:text-white transition text-sm sm:text-base">
            Request Demo
          </button>
          <button className="bg-[#00214D] text-white px-4 py-2 rounded-md font-semibold hover:opacity-90 transition text-sm sm:text-base">
            Login
          </button>
        </div>

        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6 text-blue-950"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-blue-50 shadow-lg py-4 px-4 z-10">
          <ul className="flex flex-col space-y-4 text-blue-950 font-semibold">
            <li className="border-b-2 pb-1 w-fit">Home</li>
            <li className="pb-1">Products</li>
            <li className="pb-1">Pricing</li>
            <li className="pb-1">Resources</li>
            <li className="pb-1">Company</li>
          </ul>
          <div className="flex flex-col space-y-2 mt-4">
            <button className="border border-[#00214D] text-[#00214D] px-4 py-2 rounded-md font-semibold hover:bg-[#00214D] hover:text-white transition">
              Request Demo
            </button>
            <button className="bg-[#00214D] text-white px-4 py-2 rounded-md font-semibold hover:opacity-90 transition">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
