import React from "react";
import kit from "../assets/images/wrapProduct.png";
import rash from "../assets/images/rashFree.png";
import { motion } from "framer-motion";

function EmpoweringWomen() {
  return (
    <div className="sm:pt-[50px] bg-[#FDE6F6]  pb-30 flex flex-col gap-5 sm:pl-20 sm:pr-20 md:pl-10 md:pr-10 lg:pl-20 lg:pr-20 md:flex-row xl:pl-[120px] xl:pr-[120px]">
      {/* <div className='w-full xl:hidden md:w-[60%] md:mx-auto'>
            <img src={kit} alt="kitImg" />
        </div> */}
      <motion.div
        className="w-full md:hidden"
        initial={{ scale: 0.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={kit}
          alt="kitImg"
          className="mt-20 w-[200px] mx-auto sm:w-[250px] "
        />
      </motion.div>
      <div className="flex flex-col gap-16 pl-8 pr-8 md:pl-0 md:pr-0  xl:pl-8 xl:pr-8 text-center w-full mx-auto xl:text-start lg:w-[400px] xl:w-[610px]">
        <div className="flex flex-col gap-10 text-start leading-relaxed tracking-wide text-[16px] lg:text-[16px] xl:text-[20px] font-[500]">
          <div className="flex items-start gap-3">
            <div>
              <p className="text-xl">🌸</p>
            </div>
            <div>
              <p>Bamboo Pad — Soft, eco-friendly, gentle protection</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div>
              <p className="text-xl">🌸</p>
            </div>
            <div>
              <p>Disposal Cover — Clean, discreet disposal anytime</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div>
              <p className="text-xl">🌸</p>
            </div>
            <div>
              <p>Coin Tissue — Compact, expands with water</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div>
              <p className="text-xl">🌸</p>
            </div>
            <div>
              <p>Dry Tissue — Quick, simple hygiene on the go</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div>
              <p className="text-xl">🌸</p>
            </div>
            <div>
              <p>Perfume Tissue — Refreshing scented wipe</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className=" flex flex-col gap-16 pl-8 pr-8 md:pl-0 md:pr-0 xl:pl-8 xl:pr-8 text-center w-full mx-auto xl:text-start lg:w-[400px] xl:w-[610px]  ">
        <ul className="pl-0 text-start leading-relaxed tracking-wide text-[14px] lg:text-[16px] xl:text-[20px] font-[500] space-y-10">
          <li className="list-none before:content-['🌸'] before:mr-2">
            Bamboo Pad — Soft, eco-friendly, gentle protection
          </li>
          <li className="list-none before:content-['🌸'] before:mr-2">
            Disposal Cover — Clean, discreet disposal anytime
          </li>
          <li className="list-none before:content-['🌸'] before:mr-2">
            Coin Tissue — Compact, expands with water
          </li>
          <li className="list-none before:content-['🌸'] before:mr-2">
            Dry Tissue — Quick, simple hygiene on the go
          </li>
          <li className="list-none before:content-['🌸'] before:mr-2">
            Perfume Tissue — Refreshing scented wipe
          </li>
        </ul>
      </div> */}
      <motion.div
        className="w-full hidden md:block md:mt-28 lg:mt-18 xl:mt-8 2xl:w-[67%]"
        initial={{ scale: 0.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={kit}
          alt="kitImg"
          className="sm:w-[350px] lg:w-[300px] xl:w-[350px] sm:mx-auto"
        />
      </motion.div>
      {/* <div className="w-full hidden xl:block 2xl:w-[67%]">
        <img src={kit} alt="kitImg" />
      </div> */}
      <div className="flex flex-col gap-16 pl-8 pr-8 md:pl-0 md:pr-0 xl:pl-8 xl:pr-8 text-center w-full mx-auto xl:text-start lg:w-[400px] xl:w-[610px]">
        <div className="flex flex-col gap-10 text-start leading-relaxed tracking-wide text-[16px] lg:text-[16px] xl:text-[20px] font-[500]">
          <div className="flex items-start gap-3">
            <div>
              <p className="text-xl">🌸</p>
            </div>
            <div>
              <p>Hand Wash — Homemade, safe, gentle cleanser</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div>
              <p className="text-xl">🌸</p>
            </div>
            <div>
              <p>Chocolate — Homemade, mood-boosting treat</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div>
              <p className="text-xl">🌸</p>
            </div>
            <div>
              <p>Period Tracker Card — Track your monthly cycle easily</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div>
              <p className="text-xl">🌸</p>
            </div>
            <div>
              <p>
                Blood Color Tracker Card — Understand and monitor blood color
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div>
              <p className="text-xl">🌸</p>
            </div>
            <div>
              <p>Exercise Card — Simple moves for cramp relief</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className=" flex flex-col gap-16 pl-8 pr-8 md:pl-0 md:pr-0 xl:pl-8 xl:pr-8 text-center w-full mx-auto xl:text-start lg:w-[400px] xl:w-[610px]  ">
        <ul className="pl-0 text-start leading-relaxed tracking-wide text-[14px] lg:text-[16px] xl:text-[20px] font-[500] space-y-10">
          <li className="list-none before:content-['🌸'] before:mr-2">
            Hand Wash — Homemade, safe, gentle cleanser
          </li>
          <li className="list-none before:content-['🌸'] before:mr-2">
            Chocolate — Homemade, mood-boosting treat
          </li>
          <li className="list-none before:content-['🌸'] before:mr-2">
            Period Tracker Card — Track your monthly cycle easily
          </li>
          <li className="list-none before:content-['🌸'] before:mr-2">
            Blood Color Tracker Card — Understand and monitor blood color
          </li>
          <li className="list-none before:content-['🌸'] before:mr-2">
            Exercise Card — Simple moves for cramp relief
          </li>
        </ul>
      </div> */}
    </div>
  );
}

export default EmpoweringWomen;
// import React from "react";
// import kit from "../assets/images/wrapProduct.png";
// import rash from "../assets/images/rashFree.png";
// import { motion } from "framer-motion";

// function EmpoweringWomen() {
//   return (
//     <div className="sm:pt-[50px] bg-[#FDE6F6]  pb-30 flex flex-col gap-5 sm:pl-20 sm:pr-20 xl:flex-row xl:pl-[120px] xl:pr-[120px]">
//       {/* <div className='w-full xl:hidden md:w-[60%] md:mx-auto'>
//             <img src={kit} alt="kitImg" />
//         </div> */}
//       <motion.div
//         className="w-full xl:hidden"
//         initial={{ scale: 0.1, opacity: 0 }}
//         whileInView={{ scale: 1, opacity: 1 }}
//         viewport={{ once: true, amount: 0.4 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <img src={kit} alt="kitImg" className="mt-20 w-[200px] mx-auto sm:w-[250px] " />
//       </motion.div>
//       <div className=" flex flex-col gap-16 pl-8 pr-8 text-center w-full mx-auto xl:text-start lg:w-[400px] xl:w-[610px]  ">
//         <ul className="pl-0 text-start leading-relaxed tracking-wide text-[20px] font-[500] space-y-10">
//           <li className="list-none before:content-['🌸'] before:mr-2">
//             Bamboo Pad — Soft, eco-friendly, gentle protection
//           </li>
//           <li className="list-none before:content-['🌸'] before:mr-2">
//             Disposal Cover — Clean, discreet disposal anytime
//           </li>
//           <li className="list-none before:content-['🌸'] before:mr-2">
//             Coin Tissue — Compact, expands with water
//           </li>
//           <li className="list-none before:content-['🌸'] before:mr-2">
//             Dry Tissue — Quick, simple hygiene on the go
//           </li>
//           <li className="list-none before:content-['🌸'] before:mr-2">
//             Perfume Tissue — Refreshing scented wipe
//           </li>
//         </ul>
//       </div>
//       <motion.div
//         className="w-full hidden xl:block 2xl:w-[67%]"
//         initial={{ scale: 0.1, opacity: 0 }}
//         whileInView={{ scale: 1, opacity: 1 }}
//         viewport={{ once: true, amount: 0.4 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <img src={kit} alt="kitImg" className="sm:w-[350px] sm:mx-auto"/>
//       </motion.div>
//       {/* <div className="w-full hidden xl:block 2xl:w-[67%]">
//         <img src={kit} alt="kitImg" />
//       </div> */}
//       <div className=" flex flex-col gap-16 pl-8 pr-8 text-center w-full mx-auto xl:text-start lg:w-[400px] xl:w-[610px]  ">
//         <ul className="pl-0 text-start leading-relaxed tracking-wide text-[20px] font-[500] space-y-10">
//           <li className="list-none before:content-['🌸'] before:mr-2">
//             Hand Wash — Homemade, safe, gentle cleanser
//           </li>
//           <li className="list-none before:content-['🌸'] before:mr-2">
//             Chocolate — Homemade, mood-boosting treat
//           </li>
//           <li className="list-none before:content-['🌸'] before:mr-2">
//             Period Tracker Card — Track your monthly cycle easily
//           </li>
//           <li className="list-none before:content-['🌸'] before:mr-2">
//             Blood Color Tracker Card — Understand and monitor blood color
//           </li>
//           <li className="list-none before:content-['🌸'] before:mr-2">
//             Exercise Card — Simple moves for cramp relief
//           </li>
//         </ul>
//       </div>

//     </div>
//   );
// }

// export default EmpoweringWomen;

// import React from "react";
// import kit from "../assets/images/kit3.png";
// import rash from "../assets/images/rashFree.png";
// import { motion } from "framer-motion";

// function EmpoweringWomen() {
//   return (
//     <div className="bg-[#FDE6F6]  pb-10 flex flex-col gap-5 sm:pl-20 sm:pr-20 xl:flex-row xl:pl-[120px] xl:pr-[120px]">
//       {/* <div className='w-full xl:hidden md:w-[60%] md:mx-auto'>
//             <img src={kit} alt="kitImg" />
//         </div> */}
//       <motion.div
//         className="w-full xl:hidden md:w-[60%] md:mx-auto"
//         initial={{ scale: 0.1, opacity: 0 }}
//         whileInView={{ scale: 1, opacity: 1 }}
//         viewport={{ once: true, amount: 0.4 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//           <img src={kit} alt="kitImg" />

//       </motion.div>
//       <div className=" flex flex-col pl-8 pr-8  gap-5 text-center w-full mx-auto xl:text-start lg:w-[400px] xl:w-[510px]  ">
//         <div>
//           <p className="font-dm-serif hover:text-[#E0268E] transition-colors duration-1000 ease-in-out font-dm-sans text-[24px] xl:text-[28px]">
//             Wet Tissue
//           </p>
//           <p className="text-[#747474] text-[16px] xl:text-[18px]">
//             Whether it's during her cycle or a moment to recharge, our
//           </p>
//         </div>
//         <div>
//           <p className="font-dm-serif hover:text-[#E0268E] transition-colors duration-1000 ease-in-out font-dm-sans text-[24px] xl:text-[31px]">
//             Disposal Cover
//           </p>
//           <p className="text-[#747474] text-[16px] xl:text-[18px]">
//             Whether it's during her cycle or a moment to recharge, our
//           </p>
//         </div>
//         <div>
//           <p className="font-dm-serif hover:text-[#E0268E] transition-colors duration-1000 ease-in-out font-dm-sans text-[24px] xl:text-[31px]">
//             Dry Tissue
//           </p>
//           <p className="text-[#747474] text-[16px] xl:text-[18px]">
//             Whether it's during her cycle or a moment to recharge, our
//           </p>
//         </div>
//         <div>
//           <p className="font-dm-serif hover:text-[#E0268E] transition-colors duration-1000 ease-in-out font-dm-sans text-[24px] xl:text-[31px]">
//             Soap Solution
//           </p>
//           <p className="text-[#747474] text-[16px] xl:text-[18px]">
//             Whether it's during her cycle or a moment to recharge, our
//           </p>
//         </div>
//       </div>
//       <motion.div
//         className="w-full hidden xl:block 2xl:w-[67%]"
//         initial={{ scale: 0.1, opacity: 0 }}
//         whileInView={{ scale: 1, opacity: 1 }}
//         viewport={{ once: true, amount: 0.4 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >

//         <img src={kit} alt="kitImg" />

//       </motion.div>
//       {/* <div className="w-full hidden xl:block 2xl:w-[67%]">
//         <img src={kit} alt="kitImg" />
//       </div> */}
//       <div className="text-center pl-8 pr-8 mx-auto  flex flex-col gap-9 sm:w-[85%] lg:w-[800px] xl:text-start xl:pl-0 xl:pr-0 xl:w-[827px]">
//         <div className=" flex flex-col gap-10">
//           <p className="font-dm-serif hover:text-[#E0268E] transition-colors duration-1000 ease-in-out font-dm-sans text-[24px] xl:text-start xl:text-[31px]">
//             Empowering Women with Hygiene Essentials, Right to Your Door
//           </p>
//           <li className="text-[16px] text-[#747474] xl:text-[16px]">
//             No Artificial Fragrances or Harsh Chemicals
//           </li>
//           <li className="text-[16px] text-[#747474] xl:text-[16px]">
//             Discreet Packaging for Your Privacy
//           </li>
//           <li className="text-[16px] text-[#747474] xl:text-[16px]">
//             Assembled in Our Hygienic In-House Facility
//           </li>
//           <li className="text-[16px] text-[#747474] xl:text-[16px]">
//             50+ Fast & Reliable Delivery Points
//           </li>
//           <li className="text-[16px] text-[#747474] xl:text-[16px]">
//             Rated 5 Stars for Comfort, Quality & Care
//           </li>
//         </div>
//         <div className="flex lg:justify-evenly">
//           <div>
//             <img src={rash} alt="" />
//           </div>
//           <div>
//             <img src={rash} alt="" />
//           </div>
//           <div>
//             <img src={rash} alt="" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EmpoweringWomen;
