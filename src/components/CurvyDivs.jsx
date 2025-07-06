import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function CurvyDivs({ title, img, para }) {
  const [active, setActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleClick = () => {
    if (isMobile) setActive((prev) => !prev);
  };

  return (
    <motion.div
      onClick={handleClick}
      initial={{ opacity: 0, scale: 0.6, rotateY: -20 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        delay: 0.2,
        duration: 0.2,
        ease: "easeInOut",
      }}
      className={`group relative flex flex-col items-center justify-between 
        bg-[#ebaccd] p-8 pt-[44px] pb-10 w-[350px] h-[500px] 
        lg:w-[400px] lg:h-[650px] text-white overflow-hidden 
        rounded-3xl shadow-lg transition-all duration-300 
        cursor-pointer ${active ? "shadow-2xl" : ""}`}
    >
      {/* White overlay */}
      <div
        className={`absolute inset-0 bg-[#f4f4f5] origin-top z-0 
          transition-transform duration-500
          ${active ? "scale-y-100" : "scale-y-0"} 
          lg:scale-y-0 lg:group-hover:scale-y-100`}
      />

      {/* Title */}
      <motion.div
        className="relative z-10 text-center mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <motion.p
          className={`font-dm-serif text-3xl font-bold transition-colors duration-300 
            ${active ? "text-black" : "text-[#f4f4f5]"} 
            lg:text-[#2e3532] lg:group-hover:text-[#e0268e]`}
          whileHover={{ letterSpacing: "1.5px" }}
        >
          {title}
        </motion.p>
      </motion.div>

      {/* Image */}
      <motion.div
        className="relative z-10 w-[200px] h-[300px] lg:w-[300px] lg:h-[450px] mb-4"
        initial={{ opacity: 0, scale: 0.8, rotateX: -10 }}
        whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.9 }}
      >
        <motion.img
          src={img}
          alt="img"
          className={`
            w-full h-full object-cover rounded-xl shadow-lg transition-transform duration-500
            ${active ? "scale-[1.03] rotate-[1deg]" : ""}
            lg:group-hover:scale-[1.03] lg:group-hover:rotate-[1deg]
          `}
        />
      </motion.div>

      {/* Paragraph */}
      <motion.div
        className="relative z-10 text-center px-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.3, duration: 0.7 }}
      >
        <p
          className={`font-mona text-[16px] font-medium transition-colors duration-300 
          ${active ? "text-black" : "text-[#f4f4f5]"} 
          lg:text-[#2e3532] lg:group-hover:text-[#e0268e]`}
        >
          {para}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default CurvyDivs;


// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// function CurvyDivs({ title, img, para }) {
//   const [active, setActive] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkScreen = () => setIsMobile(window.innerWidth <= 1024);
//     checkScreen();
//     window.addEventListener("resize", checkScreen);
//     return () => window.removeEventListener("resize", checkScreen);
//   }, []);

//   const handleClick = () => {
//     if (isMobile) setActive((prev) => !prev);
//   };

//   return (
//     <motion.div
//       onClick={handleClick}
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       whileTap={isMobile ? { scale: 0.97 } : {}}
//       transition={{
//         duration: 0.6,
//         type: "spring",
//         bounce: 0.35,
//         stiffness: 120,
//       }}
//       className={`group relative flex flex-col items-center justify-between
//         bg-[#ebaccd] p-8 pt-[44px] pb-10 w-[350px] h-[500px]
//         lg:w-[400px] lg:h-[650px] text-white overflow-hidden
//         rounded-3xl shadow-lg transition-all duration-300
//         cursor-pointer ${active ? "shadow-2xl" : ""}`}
//     >
//       {/* White overlay (same logic as your original) */}
//       <div
//         className={`absolute inset-0 bg-[#f4f4f5] origin-top z-0
//           transition-transform duration-500
//           ${active ? "scale-y-100" : "scale-y-0"}
//           lg:scale-y-0 lg:group-hover:scale-y-100`}
//       />

//       {/* Title */}
//       <motion.div
//         className="relative z-10 text-center mb-4"
//         initial={{ y: -20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.2, duration: 0.5 }}
//       >
//         <motion.p
//           className={`font-dm-serif text-3xl font-bold transition-colors duration-300
//             ${active ? "text-black" : "text-[#f4f4f5]"}
//             lg:text-[#2e3532] lg:group-hover:text-[#e0268e]`}
//           whileHover={{ letterSpacing: "1.5px" }}
//         >
//           {title}
//         </motion.p>
//       </motion.div>

//       {/* Image */}
//       <motion.div
//         className="relative z-10 w-[200px] h-[300px] lg:w-[300px] lg:h-[450px] mb-4"
//         initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
//         animate={{ opacity: 1, scale: 1, rotate: 0 }}
//         transition={{ delay: 0.3, duration: 0.6 }}
//       >
//         <motion.img
//           src={img}
//           alt="img"
//           className={`
//     w-full h-full object-cover rounded-xl shadow-lg transition-transform duration-500
//     ${active ? "scale-[1.03] rotate-[1deg]" : ""}
//     lg:group-hover:scale-[1.03] lg:group-hover:rotate-[1deg]
//   `}
//         />
//       </motion.div>

//       {/* Paragraph */}
//       <motion.div
//         className="relative z-10 text-center px-3"
//         initial={{ y: 15, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.4, duration: 0.5 }}
//       >
//         <p
//           className={`font-mona text-[16px] font-medium transition-colors duration-300
//           ${active ? "text-black" : "text-[#f4f4f5]"}
//           lg:text-[#2e3532] lg:group-hover:text-[#e0268e]`}
//         >
//           {para}
//         </p>
//       </motion.div>
//     </motion.div>
//   );
// }

// export default CurvyDivs;

// import React, { useState, useEffect } from "react";

// function CurvyDivs({ title, img, para }) {
//   const [active, setActive] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkScreen = () => setIsMobile(window.innerWidth < 768);
//     checkScreen();
//     window.addEventListener("resize", checkScreen);
//     return () => window.removeEventListener("resize", checkScreen);
//   }, []);

//   const handleClick = () => {
//     if (isMobile) {
//       setActive((prev) => !prev);
//     }
//   };

//   return (
//     <div
//       onClick={handleClick}
//       className={`group relative flex flex-col items-center justify-between
//                  bg-[#ebaccd] p-8 pt-[44px] pb-10 w-[350px] h-[500px]
//                  lg:w-[400px] lg:h-[650px] text-white overflow-hidden
//                  rounded-3xl shadow-lg transition-all duration-300
//                  cursor-pointer ${active ? "shadow-2xl" : ""}`}
//     >
//       <div
//         className={`absolute inset-0 bg-[#f4f4f5] origin-top z-0
//           transition-transform duration-500
//           ${active ? "scale-y-100" : "scale-y-0"}
//           lg:scale-y-0 lg:group-hover:scale-y-100`}
//       />

//       {/* Title */}
//       <div className="relative z-10 text-center mb-4">
//         <p
//           className={`font-dm-serif text-3xl font-bold transition-colors duration-300
//           ${active ? "text-black" : "text-[#f4f4f5]"}
//           lg:text-[#2e3532] lg:group-hover:text-[#e0268e]`}
//         >
//           {title}
//         </p>
//       </div>

//       {/* Image */}
//       <div className="relative z-10 w-[200px] h-[300px] lg:w-[300px] lg:h-[450px] mb-4">
//         <img
//           src={img}
//           alt="img"
//           className="w-full h-full object-cover rounded-xl"
//         />
//       </div>

//       {/* Paragraph */}
//       <div className="relative z-10 text-center px-3">
//         <p
//           className={`font-mona text-[16px] font-medium transition-colors duration-300
//           ${active ? "text-black" : "text-[#f4f4f5]"}
//           lg:text-[#2e3532] lg:group-hover:text-[#e0268e]`}
//         >
//           {para}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default CurvyDivs;

// import React from "react";

// function CurvyDivs({ title, img, para, num }) {
//   return (
//     <div
//       className="group relative flex flex-col items-center justify-between
//                  bg-[#E0268E] p-8 pt-[44px] pb-10 w-[350px] h-[500px] lg:w-[400px] lg:h-[650px]
//                  text-white overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:shadow-2xl"
//     >
//       <div className="absolute inset-0 bg-[#FBA6DE] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top z-0" />

//       <div className="relative z-10 text-center mb-4">
//         <p className="font-dm-serif text-[#f4f4f5] group-hover:text-[#000000] text-3xl font-bold transition-colors duration-300">
//           {title}
//         </p>
//       </div>

//       <div className="relative z-10 w-[200px] h-[300px] lg:w-[300px] lg:h-[450px] mb-4">
//         <img
//           src={img}
//           alt="img"
//           className="w-full h-full object-cover rounded-xl"
//         />
//       </div>

//       <div className="relative z-10 text-center px-3">
//         <p className="font-mona text-[#f4f4f5] group-hover:text-[#000000] text-[16px] font-medium transition-colors duration-300">
//           {para}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default CurvyDivs;

// import React from "react";

// function CurvyDivs({ title, img, isEven, reverseAt2XL, num }) {
//     return (
//         <div
//           className={`group relative flex flex-col items-center justify-start
//             bg-[#FBA6DE] rounded-tl-[80px] rounded-br-[80px] p-8 pb-[85px] text-white
//             sm:w-full sm:pb-[120px] md:pb-[69px] overflow-hidden
//             ${reverseAt2XL ? "xl:flex-col-reverse" : ""}`}
//         >
//           <div className="absolute inset-0 bg-[#E0268E] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top z-0" />

//           <div className="relative z-10 text-center mt-[44px]">
//             <p className="font-dm-serif text-[#000000] group-hover:text-white text-[40px] transition-colors duration-300">
//               {title}
//             </p>
//           </div>

//           <div className="relative z-10 w-[293px] mx-auto mt-[44px] sm:w-[320px]">
//             <img src={img} alt="img" className="w-full" />
//             <h2
//               className="font-dm-serif absolute top-[241px] left-[263px] transform -translate-x-1/2 -translate-y-1/2
//                 flex items-center justify-center text-center w-[76px] h-[80px]
//                  text-[74px] text-transparent group-hover:text-[#E0268E]
//                 transition-all duration-500"
//               style={{ WebkitTextStroke: "1px black" }}
//             >
//               {num}
//             </h2>
//           </div>
//         </div>
//       );
//     }

//     export default CurvyDivs;
// import React from "react";

// function CurvyDivs({ title, img, isEven, reverseAt2XL, num }) {
//     return (
//         <div
//           className={`group relative flex flex-col items-center justify-start
//             bg-[#FBA6DE] rounded-tl-[80px] rounded-br-[80px] p-8 pb-[85px] text-white
//             sm:w-full sm:pb-[120px] md:pb-[69px] overflow-hidden
//             ${reverseAt2XL ? "2xl:flex-col-reverse" : ""}`}
//         >
//           <div className="absolute inset-0 bg-[#E0268E] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top z-0" />

//           <div className="relative z-10 text-center mt-[44px]">
//             <p className="text-[#000000] group-hover:text-white text-[40px] transition-colors duration-300">
//               {title}
//             </p>
//           </div>

//           <div className="relative z-10 w-[293px] mx-auto mt-[44px] sm:w-[320px]">
//             <img src={img} alt="img" className="w-full" />
//             <h2
//               className="absolute top-[241px] left-[263px] transform -translate-x-1/2 -translate-y-1/2
//                 flex items-center justify-center text-center w-[76px] h-[80px]
//                 font-bold text-[74px] text-transparent group-hover:text-[#E0268E]
//                 transition-all duration-500"
//               style={{ WebkitTextStroke: "1px black" }}
//             >
//               {num}
//             </h2>
//           </div>
//         </div>
//       );
//     }

//     export default CurvyDivs;

// import React, { useState } from "react";

// function CurvyDivs({ title, img, isEven, reverseAt2XL, num }) {
//   // const [isTapped, setIsTapped] = useState(false);

//   // const handleToggle = () => {
//   //   setIsTapped((prev) => !prev);
//   // };

//   return (
//     <div
//       // onClick={handleToggle}
//       className={`group relative flex flex-col items-center justify-start

//         rounded-tl-[80px] rounded-br-[80px] p-8 pb-[85px] text-white
//         sm:w-full sm:pb-[120px] md:pb-[69px] overflow-hidden
//         ${reverseAt2XL ? "2xl:flex-col-reverse" : ""}`}
//     >

//       <div
//         className={`absolute inset-0 bg-[#E0268E] transition-transform duration-500 origin-top z-0`}
//       />

//       <div className="relative z-10 text-center mt-[44px] pointer-events-none">
//         <p
//           className={`font-dm-serif text-[40px] transition-colors duration-300 ${
//             isTapped ? "text-white" : "text-[#000000]"
//           } group-hover:text-white`}
//         >
//           {title}
//         </p>
//       </div>

//       <div className="relative z-10 w-[293px] mx-auto mt-[44px] sm:w-[320px]">
//         <img src={img} alt="img" className="w-full" />
//         <h2
//           className={`absolute top-[241px] left-[263px] transform -translate-x-1/2 -translate-y-1/2
//             flex items-center justify-center text-center w-[76px] h-[80px]
//             font-bold text-[74px] text-transparent

//             transition-all duration-500`}
//           style={{ WebkitTextStroke: "1px black" }}
//         >
//           {num}
//         </h2>
//       </div>
//     </div>
//   );
// }

// export default CurvyDivs;

// import React from "react";
// import Ellipse from "../assets/images/Ellipse 3.png";

// function CurvyDivs() {
//   return (
//     <div className="group relative w-auto h-auto bg-[#FBA6DE] rounded-tl-[80px] rounded-br-[80px] p-8 pb-[85px] text-white sm:w-full sm:pb-[120px] md:w-auto md:h-auto md:pb-[69px] overflow-hidden">
//       <div className="absolute inset-0 bg-[#E0268E] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top z-0"></div>

//       <div className="relative z-10 text-center mt-[44px]">
//         <p className="text-[#000000] group-hover:text-white text-[40px] transition-colors duration-300">
//           sdvddasadc
//         </p>
//       </div>

//       <div className="relative z-10 w-[293px] mx-auto mt-[44px] sm:w-[320px]">
//         <img src={Ellipse} alt="img" className="w-full" />
//         <h2
//           className="absolute top-[241px] left-[263px] transform -translate-x-1/2 -translate-y-1/2
//              flex items-center justify-center text-center w-[76px] h-[80px]
//              font-bold text-[74px] text-transparent group-hover:text-[#E0268E]
//              transition-all duration-500"
//           style={{
//             WebkitTextStroke: "1px black",
//           }}
//         >
//           02
//         </h2>
//       </div>
//     </div>
//   );
// }

// export default CurvyDivs;

// import React from "react";

// function CurvyDivs({ title, img, isEven }) {
//     return (
//     <div className="group relative w-auto h-auto bg-[#FBA6DE] rounded-tl-[80px] rounded-br-[80px] p-8 pb-[85px] text-white sm:w-full sm:pb-[120px] md:w-auto md:h-auto md:pb-[69px] overflow-hidden">
//       <div className="absolute inset-0 bg-[#E0268E] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top z-0"></div>

//       {!isEven && (
//           <div className="relative z-10 text-center mt-[44px]">
//             <p className="text-[#000000] group-hover:text-white text-[40px] transition-colors duration-300">
//               {title}
//             </p>
//           </div>
//         )}

//         <div className="relative z-10 w-[293px] mx-auto mt-[44px] sm:w-[320px]">
//           <img src={img} alt="img" className="w-full" />
//           <h2
//             className="absolute top-[241px] left-[263px] transform -translate-x-1/2 -translate-y-1/2
//                flex items-center justify-center text-center w-[76px] h-[80px]
//                font-bold text-[74px] text-transparent group-hover:text-[#E0268E]
//                transition-all duration-500"
//             style={{
//                 WebkitTextStroke: "1px black",
//               }}
//             >
//               02
//             </h2>
//           </div>
//           {isEven && (
//               <div className="relative z-10 text-center mt-[44px]">
//                 <p className="text-[#000000] group-hover:text-white text-[40px] transition-colors duration-300">
//                   {title}
//                 </p>
//               </div>
//             )}
//           </div>
//         );
//       }

//       export default CurvyDivs;

// import React from "react";

// function CurvyDivs({ title, img, isEven }) {
//   return (
//     <div className="group relative flex flex-col items-center justify-start bg-[#FBA6DE] rounded-tl-[80px] rounded-br-[80px] p-8 pb-[85px] text-white sm:w-full sm:pb-[120px] md:pb-[69px] overflow-hidden">
//       <div className="absolute inset-0 bg-[#E0268E] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top z-0" />

//       {isEven ? (
//         <>
//           <div className="relative z-10 w-[293px] mx-auto mt-[44px] sm:w-[320px]">
//             <img src={img} alt="img" className="w-full" />
//             <h2
//               className="absolute top-[241px] left-[263px] transform -translate-x-1/2 -translate-y-1/2
//                 flex items-center justify-center text-center w-[76px] h-[80px]
//                 font-bold text-[74px] text-transparent group-hover:text-[#E0268E]
//                 transition-all duration-500"
//               style={{
//                 WebkitTextStroke: "1px black",
//               }}
//             >
//               02
//             </h2>
//           </div>
//           <div className="relative z-10 text-center mt-[44px]">
//             <p className="text-[#000000] group-hover:text-white text-[40px] transition-colors duration-300">
//               {title}
//             </p>
//           </div>
//         </>
//       ) : (
//         <>
//           {/* Title first */}
//           <div className="relative z-10 text-center mt-[44px]">
//             <p className="text-[#000000] group-hover:text-white text-[40px] transition-colors duration-300">
//               {title}
//             </p>
//           </div>
//           {/* Then image */}
//           <div className="relative z-10 w-[293px] mx-auto mt-[44px] sm:w-[320px]">
//             <img src={img} alt="img" className="w-full" />
//             <h2
//               className="absolute top-[241px] left-[263px] transform -translate-x-1/2 -translate-y-1/2
//                 flex items-center justify-center text-center w-[76px] h-[80px]
//                 font-bold text-[74px] text-transparent group-hover:text-[#E0268E]
//                 transition-all duration-500"
//               style={{
//                 WebkitTextStroke: "1px black",
//               }}
//             >
//               02
//             </h2>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default CurvyDivs;

// import React from 'react'
// import Ellipse from "../assets/images/Ellipse 3.png"
// import aboutData from '../constants'
// function CurvyDivs() {
//   return (
//     <div className='w-auto h-auto bg-[#FBA6DE] rounded-tl-[80px] rounded-br-[80px] p-8 pb-[85px] text-white relative sm:w-full sm:pb-[120px] md:w-auto md:h-auto md:pb-[69px]'>
//       <div className='text-center mt-[44px]'>
//         <p className='text-[#000000] text-[40px]'>sdvddasadc</p>
//       </div>

//       <div className='relative w-[293px] mx-auto mt-[44px] sm:w-[320px]'>
//         <img src={Ellipse} alt="img" className="w-full" />
//         <h2
//           style={{
//             color: "transparent",
//             WebkitTextStroke: "1px black",
//             fontSize: "74px",
//             fontWeight: "bold",
//             width: "76px",
//             height: "80px",
//             position: "absolute",
//             top: "241px",
//             left: "263px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             textAlign: "center",
//             transform: "translate(-50%, -50%)",
//           }}
//         >
//           02
//         </h2>
//       </div>
//     </div>
//   )
// }

// export default CurvyDivs
