import React from "react";
import spotImng from "../assets/images/spotImg.png";
import { motion } from "framer-motion";
import banner from "../assets/images/wc_banner.png";
const Spotlight = () => {
  const slideUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  const slideUp2 = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home-section"
      className="w-full h-[680px] md:h-[680px] bg-cover bg-center text-white flex items-center px-6  "
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className=" ml-0 md:pl-[50px] text-center xl:pl-[120px] xl:ml-0">
        {/* <h1 className="font-dm-sans text-[52px] sm:text-4xl sm:text-start sm:w-[77%] font-[400] leading-tight mb-6 lg:w-[47%] xl:text-[50px] xl:w-[404px] 2xl:text-[72px] 2xl:w-[583px] 2xl:font-normaly">
          From Periods to Pampering—We’ve Got Her Covered
        </h1> */}
        <motion.h1
          variants={slideUp}
          initial="hidden"
          animate="visible"
          className="mt-15 font-dm-serif text-[#e0268e] sm:mx-auto text-[52px] sm:text-4xl sm:text-center sm:w-[77%] font-[400] leading-tight md:mx-0 md:text-start mb-6 lg:w-[59%] lg:font-extrabold xl:text-[44px] xl:w-[500px] 2xl:text-[54px] 2xl:w-[720px] 2xl:font-normaly"
        >
          {/* From Periods to Pampering—We’ve Got Her Covered */}
          Your Confidence Companion for Period Days.
        </motion.h1>
        {/* <p className="text-[16px] leading-9 pt-[40px] pb-[40px] sm:text-start sm:w-[77%] sm:mx-0 sm:text-lg md:text-[20px] w-full md:w-[560px] mx-auto md:mx-0 mb-8 lg:w-[47%] xl:w-[404px] 2xl:w-[583px]">
          Curated for comfort and care, our hygiene packs support every woman’s
          confidence and well-being—anytime she needs it.
        </p> */}
        <motion.p
          variants={slideUp}
          initial="hidden"
          animate="visible"
          className=" text-[16px]  leading-6 mb-2 sm:mx-auto sm:leading-9 sm:pb-[40px] sm:pt-[40px] sm:text-center sm:w-[77%] sm:mx-0 sm:text-lg md:text-[20px] w-full md:text-start  md:w-[560px] mx-auto md:mx-0 lg:w-[59%] xl:w-[600px] 2xl:w-[800px]"
        >
          Introducing the MINI COMBO PERIOD PACK — a thoughtfully designed
          menstrual hygiene kit created by an engineering couple, made to
          support women anytime, anywhere. Whether you’re a student, a traveler,
          or a working professional, this compact pack has everything you need
          for safe, hygienic, and confident periods on the go.
        </motion.p>
        <div className="sm:w-full sm:mx-auto sm:text-center md:text-start">
          {/* <button className="w-full cursor-pointer bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full transition duration-300 sm:w-[300px] sm:mx-0 lg:w-[150px] ">
            Order Here
          </button> */}
          <motion.button
            variants={slideUp2}
            initial="hidden"
            animate="visible"
            className=" w-full cursor-pointer bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full transition duration-300 sm:w-[300px] sm:mx-0 lg:w-[150px] "
          >
            Order Here
          </motion.button>
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
