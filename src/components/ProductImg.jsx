import React from "react";
import prdctImg from "../assets/images/Asset 2.png";

function ProductImg() {
  return (
    <div className="w-full lg:w-1/2 bg-[#EDEFEF]">
      <div className="w-[80%] sm:mx-auto lg:h-full lg:flex lg:items-center lg:justify-center">
        <img className="w-full" src={prdctImg} alt="prdctimg" />
      </div>
    </div>
  );
}

export default ProductImg;

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