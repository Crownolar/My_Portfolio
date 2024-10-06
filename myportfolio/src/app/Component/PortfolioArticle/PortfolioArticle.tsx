// const PortfolioArticle = () => {
//   return (
//     <div className="w-[70vw] h-[60vh] flex flex-col gap-3">
//       <div className="flex justify-between p-2">
//         <span className="font-semibold">Recent Posts</span>
//         <button className="text-blue-500 cursor-pointer">view all</button>
//       </div>
//       <div className="w-full flex gap-10 h-80">
//         <div className=" bg-white w-[48%] flex flex-col space-y-6 p-2">
//           <div className="font-semibold text-3xl">
//             <h1>Making a design system from scratch</h1>
//           </div>
//           <div className="flex space-x-10">
//             <p>12 Feb 2020</p>
//             <p>|</p>
//             <span>Design, Pattern</span>
//           </div>
//           <div>
//             <p>
//               Amet minim mollit non deserunt ullamco est sit aliqua dolor do
//               amet sint. Velit officia consequat duis enim velit mollit.
//               Exercitation veniam consequat sunt nostrud amet amet sint. Velit
//               officia consequat duis enim velit mollit. Exercitation veniam
//               consequat sunt nostrud amet
//             </p>
//           </div>
//         </div>
//         <div className=" bg-white w-[48%] flex flex-col space-y-6 p-2">
//           <div className="font-semibold text-3xl">
//             <h1>Creating pixel perfect icons in Figma</h1>
//           </div>
//           <div className="flex space-x-10">
//             <p>12 Feb 2020</p>
//             <p>|</p>
//             <span>Design, Pattern</span>
//           </div>
//           <div>
//             <p>
//               Amet minim mollit non deserunt ullamco est sit aliqua dolor do
//               amet sint. Velit officia consequat duis enim velit mollit.
//               Exercitation veniam consequat sunt nostrud amet amet sint. Velit
//               officia consequat duis enim velit mollit. Exercitation veniam
//               consequat sunt nostrud amet
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PortfolioArticle;

const PortfolioArticle = () => {
  return (
    <div className="w-[90vw] md:w-[70vw] h-[60vh] flex flex-col gap-3 p-4">
      <div className="flex justify-between p-2">
        <span className="font-semibold">Recent Posts</span>
        <button className="text-blue-500 cursor-pointer">view all</button>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-5 md:gap-10 h-80 bg-sky-500">
        <div className=" bg-white w-[48%] flex flex-col space-y-6 p-2">
          <div className="font-semibold text-3xl">
            <h1>Making a design system from scratch</h1>
          </div>
          <div className="flex space-x-10">
            <p>12 Feb 2020</p>
            <p>|</p>
            <span>Design, Pattern</span>
          </div>
          <div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit. //
              Exercitation veniam consequat sunt nostrud amet amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet //{" "}
            </p>
          </div>
        </div>
        <div className="bg-white w-full md:w-[48%] flex flex-col space-y-6 p-2">
          {/* Content here */}
        </div>
        {/* Article 2 */}
        <div className="bg-white w-full md:w-[48%] flex flex-col space-y-6 p-2">
          {/* Content here */}
        </div>
      </div>
    </div>
  );
};

export default PortfolioArticle;
