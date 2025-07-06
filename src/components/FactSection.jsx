import React from "react";

function FactsSection({ description, isDark }) {
  return (
    <section
      className={`${
        isDark ? "bg-[#E0268E] pt-10 text-white" : "bg-[#f4f4f5] pt-10 text-[#3F3C3C]"
      } w-full`}
    >
      <div className="w-full mx-auto flex flex-col lg:flex-row items-start md:items-center justify-between lg:gap-8 lg:pt-[25px] lg:pb-[25px] lg:pr-[21px]">
        <div
          className={`w-full relative mb-6 lg:border-b lg:w-[50%] ${
            isDark ? "border-white border-none" : "border-[#E0268E]"
          }`}
        >
          <h2
            className={`font-dm-serif mx-auto text-[32px] ${
              isDark ? "text-white" : "text-[#E0268E33]"
            } text-center sm:text-[36px] font-semibold lg:text-end`}
          >
            F A C T S
          </h2>
        </div>

        <div className="font-mona w-full pl-[30px] pr-[30px] text-center sm:w-[90%] sm:mx-auto md:w-[500px] md:text-left lg:text-[18px] lg:leading-[40px]">
          <p>{description}</p>
        </div>

        <div
          className={`w-full h-[2px] ${
            isDark ? "bg-white" : "bg-[#E0268E]"
          } mt-20 md:mt-6 lg:hidden`}
        ></div>
      </div>
    </section>
  );
}

export default FactsSection;

// import React from 'react';

// function FactsSection({ description }) {
//   return (
//     <section className="  bg-[#FDE6F6]  w-full">

//       <div className="w-full  mx-auto flex flex-col lg:flex-row items-start md:items-center justify-between  lg:gap-8 lg:pt-[25px] lg:pb-[25px] lg:pr-[21px]">

//         <div className="w-full  relative mb-6 lg:border-b border-[#E0268E] lg:w-[50%]  ">
//           <h2 className="font-dm-serif mx-auto text-[32px] text-[#E0268E33] text-center sm:text-[36px] font-semibold lg:text-end">
//             F A C T S
//           </h2>
//         </div>

//         <div className=" w-full pl-[30px] pr-[30px] text-center text-[#3F3C3C] text-[20px] sm:w-[90%] sm:mx-auto md:w-[500px]  md:text-left lg:text-[18px] lg:leading-[40px]">
//           <p>{description}</p>
//         </div>

//          <div className="w-full h-[2px] bg-[#E0268E]  mt-20 md:mt-6 lg:hidden"></div>
//       </div>

//     </section>
//   );
// }

// export default FactsSection;

// import React from 'react';

// function FactsSection({ description }) {
//   return (
//     <section className="pt-[100px] pb-[132px] pr-[121px] bg-pink-100 py-12 ">
//       <div className="w-[1391px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">

//         <div className="w-[760px] relative mb-6 md:mb-0">
//           <h2 className="text-[58px] text-[#E0268E33] text-end font-semibold">F A C T S</h2>
//           <div className="absolute left-0 bottom-6 w-full h-[2px] bg-[#E0268E] mt-2"></div>
//         </div>
//         <p className="w-[520px] text-gray-800 text-[20px]">
//           {description}
//         </p>
//       </div>
//     </section>
//   );
// }

// export default FactsSection;

// import React from 'react';

// function FactsSection() {
//   return (
//     <section className="pt-[100px] pb-[132px] pr-[121px] bg-pink-100 py-12 ">
//       <div className="w-[1391px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
//         {/* Title with underline */}
//         <div className="w-[760px] relative mb-6 md:mb-0">
//           <h2 className="text-[58px] text-[#E0268E33] text-end font-semibold">F A C T S</h2>
//           <div className="absolute left-0 bottom-6 w-full h-[2px] bg-[#E0268E] mt-2"></div>
//         </div>

//         {/* Paragraph */}
//         <p className="w-[520px] text-gray-800 text-[20px]">
//           Each of our hygiene care packs is thoughtfully curated with safe, skin-friendly,
//           and high-quality products designed to support women’s health and comfort.
//         </p>
//       </div>
//     </section>
//   );
// }

// export default FactsSection;
