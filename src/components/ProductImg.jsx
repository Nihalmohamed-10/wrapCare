import React from "react";
import { motion } from "framer-motion";
import prdctImg from "../assets/images/wrapProduct.png";

function ProductImg() {
  return (
    <div className="w-full lg:w-1/2 bg-[#EDEFEF] pt-20 pb-20">
      <div className="w-[50%] sm:w-[50%] lg:w-[60%] mx-auto lg:h-full lg:flex lg:items-center lg:justify-center">
        <motion.img
          src={prdctImg}
          alt="prdctimg"
          className="w-full"
          initial={{ rotate: 0 }}
          whileHover={{
            rotate: -10, // slight left tilt
            scale: 1.03,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
          whileTap={{
            rotate: -10, // same for mobile tap
            scale: 1.02,
            transition: { duration: 0.2 },
          }}
        />
      </div>
    </div>
  );
}

export default ProductImg;

// import React from "react";
// import prdctImg from "../assets/images/wrapProduct.png";

// function ProductImg() {
//   return (
//     <div className="w-full lg:w-1/2 bg-[#EDEFEF] pt-20 pb-20">
//       <div className="w-[50%] sm:w-[50%] lg:w-[60%] mx-auto lg:h-full lg:flex lg:items-center lg:justify-center">
//         <img className="w-full" src={prdctImg} alt="prdctimg" />
//       </div>
//     </div>
//   );
// }

// export default ProductImg;

// import React from 'react'
// import prdctImg from "../assets/images/Asset 2.png"

// function ProductImg() {
//   return (
//     <div className='w-full  bg-[#EDEFEF] lg:w-full '>
//         <div className='w-[80%] sm:mx-auto lg:h-full lg:flex lg:items-center lg:justify-center'>
//             <img className='w-full' src={prdctImg} alt="prdctimg" />
//         </div>
//     </div>
//   )
// }

// export default ProductImg