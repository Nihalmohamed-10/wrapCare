import React from "react";
import clsx from "clsx";

function CurvyDivs({ title, img, isEven }) {
  return (
    <div className="group relative w-auto h-auto bg-[#FBA6DE] rounded-tl-[80px] rounded-br-[80px] p-8 pb-[85px] text-white sm:w-full sm:pb-[120px] md:w-auto md:h-auto md:pb-[69px] overflow-hidden">
      <div className="absolute inset-0 bg-[#E0268E] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top z-0"></div>

      <div
        className={clsx(
          "relative z-10 text-center transition-colors duration-300",
          "mt-[44px]",
          isEven ? "2xl:order-2" : "2xl:order-1"
        )}
      >
        <p className="text-[#000000] group-hover:text-white text-[40px]">
          {title}
        </p>
      </div>

      <div className="relative z-10 w-[293px] mx-auto mt-[44px] sm:w-[320px]">
        <img src={img} alt="img" className="w-full" />
        <h2
          className="absolute top-[241px] left-[263px] transform -translate-x-1/2 -translate-y-1/2
             flex items-center justify-center text-center w-[76px] h-[80px]
             font-bold text-[74px] text-transparent group-hover:text-[#E0268E]
             transition-all duration-500"
          style={{
            WebkitTextStroke: "1px black",
          }}
        >
          02
        </h2>
      </div>
    </div>
  );
}

export default CurvyDivs;

// import React from "react";

// function CurvyDivs({ title, img, isEven }) {
//   return (
//     <div className="group relative w-auto h-auto bg-[#FBA6DE] rounded-tl-[80px] rounded-br-[80px] p-8 pb-[85px] text-white sm:w-full sm:pb-[120px] md:w-auto md:h-auto md:pb-[69px] overflow-hidden">
//       <div className="absolute inset-0 bg-[#E0268E] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top z-0"></div>

//       {!isEven && (
//         <div className="relative z-10 text-center mt-[44px]">
//           <p className="text-[#000000] group-hover:text-white text-[40px] transition-colors duration-300">
//             {title}
//           </p>
//         </div>
//       )}

//       <div className="relative z-10 w-[293px] mx-auto mt-[44px] sm:w-[320px]">
//         <img src={img} alt="img" className="w-full" />
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
//       {isEven && (
//         <div className="relative z-10 text-center mt-[44px]">
//           <p className="text-[#000000] group-hover:text-white text-[40px] transition-colors duration-300">
//             {title}
//           </p>
//         </div>
//       )}
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
