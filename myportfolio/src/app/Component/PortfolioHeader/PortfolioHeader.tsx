import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const PortfolioHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full flex justify-between items-center h-[10vh] p-4">
      <div className="text-lg font-bold">My Portfolio</div>
      <div className="md:hidden">
        {isMenuOpen ? (
          <FiX
            className="text-3xl cursor-pointer"
            onClick={toggleMenu}
          /> 
        ) : (
          <FiMenu
            className="text-3xl cursor-pointer"
            onClick={toggleMenu}
          /> 
        )}
      </div>
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row gap-4 font-semibold absolute md:relative top-[10vh] right-4 md:top-0 md:right-0 bg-white md:bg-transparent md:justify-end p-4 md:p-0 shadow-md md:shadow-none w-full md:w-auto`}
      >
        <button className="cursor-pointer">Work</button>
        <button className="cursor-pointer">Blog</button>
        <button className="cursor-pointer">Contact</button>
      </nav>
    </header>
  );
};

export default PortfolioHeader;
