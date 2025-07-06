import React from "react";
import prdctImg from "../assets/images/wrapProduct.png";

function DemoProductImg() {
  return (
    <div className="w-1/2 bg-[#EDEFEF] flex items-center justify-center p-4">
      <div className="w-full ">
        <img className="w-full object-cover" src={prdctImg} alt="prdctimg" />
      </div>
    </div>
  );
}

export default DemoProductImg;

// import React from "react";
// import prdctImg from "../assets/images/wrapProduct.png";

// function DemoProductImg() {
//   return (
//     <div className="w-1/2 lg:w-1/2 bg-[#EDEFEF] pt-0 pb-0">
//       <div className=" sm:w-[50%] lg:w-[60%] mx-auto lg:h-full lg:flex lg:items-center lg:justify-center">
//         <img className="w-full" src={prdctImg} alt="prdctimg" />
//       </div>
//     </div>
//   );
// }

// export default DemoProductImg;