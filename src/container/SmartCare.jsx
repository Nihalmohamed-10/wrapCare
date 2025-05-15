

import React from "react";
import flower2 from "../assets/images/f2.png";

function SmartCare() {
  return (
    <div className="font-dm-sans w-full relative bg-[#FBA6DE] h-[312px] overflow-hidden flex items-center justify-center">
     
      <p className="text-[32px] leading-[50px] text-center tracking-[0.18em] w-full sm:w-[80%] lg:w-[72%] lg:text-[42px]">
        Smart Care for Every Age, Every Body
      </p>

      <div className="absolute left-[-199px] top-[50px] h-full z-0 lg:top-[-16px] lg:left-[-95px] xl:left-[-21px]">
        <img
          src={flower2}
          alt=""
          className="h-full object-contain mix-blend-multiply opacity-70 scale-x-[-1]"
        />
      </div>

      <div className="absolute right-[-198px] bottom-[118px] h-full z-0 lg:bottom-[15px] lg:right-[-110px] xl:right-[-14px] ">
        <img
          src={flower2}
          alt=""
          className="h-full object-contain mix-blend-multiply opacity-70"
        />
      </div>
    </div>
  );
}

export default SmartCare;
