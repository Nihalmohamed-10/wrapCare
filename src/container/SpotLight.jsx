import React from "react";
import spotImng from "../assets/images/spotImg.png";

const Spotlight = () => {
  return (
    <section
    id="home-section"
      className="w-full h-[680px] md:h-[734px] bg-cover bg-center text-white flex items-center px-6  "
      style={{ backgroundImage: `url(${spotImng})` }}
    >
      <div className=" w-full  ml-0 md:pl-[50px] text-center xl:pl-[120px] xl:ml-0">
        <h1 className="font-dm-sans text-[52px] sm:text-4xl sm:text-start sm:w-[77%] font-[400] leading-tight mb-6 lg:w-[47%] xl:text-[50px] xl:w-[404px] 2xl:text-[72px] 2xl:w-[583px] 2xl:font-normaly">
          From Periods to Pampering—We’ve Got Her Covered
        </h1>
        <p className="text-[16px] leading-9 pt-[40px] pb-[40px] sm:text-start sm:w-[77%] sm:mx-0 sm:text-lg md:text-[20px] w-full md:w-[560px] mx-auto md:mx-0 mb-8 lg:w-[47%] xl:w-[404px] 2xl:w-[583px]">
          Curated for comfort and care, our hygiene packs support every woman’s
          confidence and well-being—anytime she needs it.
        </p>
        <div className="sm:w-full sm:text-start">
          <button className="w-full cursor-pointer bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full transition duration-300 sm:w-[300px] sm:mx-0 lg:w-[150px] ">
            Order Here
          </button>
        </div>
      </div>
    </section>
  );
};

export default Spotlight;

// import React from 'react';
// import spotImng from '../assets/images/spotLightImg.jpg';

// const Spotlight = () => {
//   return (
//     <section
//       className="w-full h-[734px] bg-cover bg-center text-white flex items-center px-6 md:px-20"
//       style={{ backgroundImage: `url(${spotImng})` }}
//     >
//       <div className="w-[590px] ml-[120px]">
//         <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
//           From Periods to <br />
//           Pampering—We’ve <br />
//           Got Her Covered
//         </h1>
//         <p className="text-[20px] w-[560px] mb-8">
//           Curated for comfort and care, our hygiene packs support every woman’s
//           confidence and well-being—anytime she needs it.
//         </p>
//         <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full transition duration-300">
//           Order Here
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Spotlight;
