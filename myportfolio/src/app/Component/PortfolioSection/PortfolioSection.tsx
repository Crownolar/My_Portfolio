const PortfolioSection = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between h-[80vh] p-4">
      <div className="w-full md:w-1/2 h-full flex items-center">
        <div className="w-full bg-white h-56 flex flex-col justify-center space-y-7 md: items-center">
          <h1 className="font-bold text-2xl md:text-4xl text-center">
            Hi, I am Yusuf, <br /> Creative Software Engineer
          </h1>
          <p className="md: text-center">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet
          </p>
          <div className="w-full  md: flex justify-center">
            <button className="p-2 bg-red-400 rounded-md text-white cursor-pointer">
              Download Resume
            </button>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-full flex justify-center md:justify-end">
        <img
          src="./signup img.jpg"
          alt="portfolioimage"
          className="w-40 h-40 md:w-60 md:h-60 rounded-full bg-cyan-400"
        />
      </div>
    </div>
  );
};

export default PortfolioSection;
