import React from "react";
import CurvyDivs from "../components/CurvyDivs";
import { aboutData } from "../constants/index";
import { motion } from "framer-motion";

function CuratedEssential() {
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

  return (
    <div
      id="curated-essential"
      className="bg-[#E0268E] pt-[60px] md:pt-[100px] pb-[60px] px-4 md:w-full"
    >
      <div className="text-center mx-auto max-w-2xl px-2">
        <motion.p
          variants={slideUp}
          initial="hidden"
          animate="visible"
          className="font-dm-serif text-3xl text-[#f4f4f5] sm:text-4xl sm:w-[77%] sm:mx-auto md:text-[60px] leading-snug md:leading-[80px] md:w-full font-medium"
        >
          Be Ready, Anywhere. Anytime.
        </motion.p>
      </div>

      <div className="flex flex-wrap justify-center gap-10 mt-12">
        {aboutData.map((item) => (
          <CurvyDivs
            key={item.id}
            title={item.title}
            img={item.img}
            para={item.para}
            num={item.num}
          />
        ))}
      </div>
    </div>
  );
}

export default CuratedEssential;


// import React from "react";
// import clsx from "clsx";
// import CurvyDivs from "../components/CurvyDivs";
// import {aboutData} from "../constants/index";
// import { motion } from "framer-motion";

// function CuratedEssential() {
//   const slideUp = {
//     hidden: { opacity: 0, y: 60 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <div
//       id="curated-essential"
//       className="bg-[#FDE6F6]  pt-[60px] md:pt-[100px] pb-[60px] md:pb-[60px] px-4 md:w-full"
//     >
//       <div className="text-center mx-auto max-w-2xl px-2">
//         {/* <p className="text-3xl sm:text-4xl sm:w-[77%] sm:mx-auto md:text-[60px] leading-snug md:leading-[80px] md:w-full font-medium">
//           Curated Essentials for Her Comfort
//         </p> */}
//         <motion.p
//           variants={slideUp}
//           initial="hidden"
//           animate="visible"
//           className="font-dm-serif text-3xl sm:text-4xl sm:w-[77%] sm:mx-auto md:text-[60px] leading-snug md:leading-[80px] md:w-full font-medium"
//         >
//           Curated Essentials for Her Comfort
//         </motion.p>
//       </div>
//       <div className="flex flex-col items-center justify-center p-[1rem] mt-12 md:mt-[85px] gap-10 md:flex-row md:flex-wrap xl:mt-0">
//         {aboutData.map((item) => (
//           <div key={item.id} className={clsx(item.id % 2 === 0 && "xl:pt-35")}>
//             <CurvyDivs
//               title={item.title}
//               img={item.img}
//               isEven={item.id % 2 === 0}
//               reverseAt2XL={item.id === 2}
//               num={item.num}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CuratedEssential;

// import React from "react";
// import clsx from "clsx";
// import CurvyDivs from "../components/CurvyDivs";
// import aboutData from "../../src/constants/index";

// function CuratedEssential() {
//   return (
//     <div className="bg-[#FDE6F6] font-dm-sans pt-[60px] md:pt-[100px] pb-[60px] md:pb-[60px] px-4 md:w-full">
//       <div className="text-center mx-auto max-w-2xl px-2">
//         <p className="text-3xl sm:text-4xl sm:w-[77%] sm:mx-auto md:text-[60px] leading-snug md:leading-[80px] md:w-full font-medium">
//           Curated Essentials for Her Comfort
//         </p>
//       </div>
//       <div className="flex flex-col items-center justify-evenly mt-12 md:mt-[85px] gap-10 md:flex-row md:flex-wrap xl:pl-[120px] xl:pr-[120px] xl:mt-0">
//         {aboutData.map((item) => (
//           <div
//             key={item.id}
//             className={clsx( item.id % 2===0 && "2xl:pt-35"
//               // "xl:pt-35": item.id % 2 === 0,

//             )}
//           >
//             <CurvyDivs title={item.title} img={item.img} isEven={item.id % 2 === 0} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CuratedEssential;

// import React from "react";
// import CurvyDivs from "../components/curvyDivs";

// function CuratedEssential() {
//   return (
//     <div className="bg-[#FDE6F6] font-dm-sans pt-[60px] md:pt-[100px] pb-[60px] md:pb-[60px] px-4 md:w-full">
//       <div className="text-center mx-auto max-w-2xl px-2">
//         <p className=" text-3xl sm:text-4xl sm:w-[77%] sm:mx-auto md:text-[60px] leading-snug md:leading-[80px] md:w-full font-medium">
//           Curated Essentials for Her Comfort
//         </p>
//       </div>
//       <div className="flex flex-col items-center justify-evenly mt-12 md:mt-[85px] gap-10 md:flex-row md:flex-wrap xl:pl-[120px] xl:pr-[120px]">
//         <CurvyDivs />
//         <CurvyDivs />
//         <CurvyDivs />
//       </div>
//     </div>
//   );
// }

// export default CuratedEssential;

// import React from "react";
// import CurvyDivs from "../components/curvyDivs";

// function CuratedEssential() {
//   return (
//     <div className="bg-[#FDE6F6] pt-[100px] pb-[103px]">
//       <div className="w-[543px] text-center mx-auto">
//         <p className="text-[65px] leading-[80px] font-medium ">
//           Curated Essentials for Her Comfort
//         </p>
//       </div>
//       <div className="pl-[120px] pr-[120px] flex justify-evenly mt-[85px]">
//         <CurvyDivs />
//         <CurvyDivs />
//         <CurvyDivs />
//       </div>

//     </div>
//   );
// }

// export default CuratedEssential;
