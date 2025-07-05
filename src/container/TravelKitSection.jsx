import React from "react";
import wrapKit from "../assets/images/wrapProduct3.jpeg";

const TravelKitSection = () => {
  return (
    <div className="bg-[#f4f4f5] py-16 px-6 md:px-12 lg:px-24 xl:px-30">
      <div className="w-full mx-auto flex flex-col-reverse lg:flex-row lg:justify-between items-center gap-12 animate-fadeIn">
        <div className="flex-1 text-left">
          <h1 className="text-center font-dm-serif text-[32px] md:text-[40px] lg:text-start lg:text-[48px] font-extrabold text-[#e0268e] leading-tight mb-6">
            Designed for Comfort, Built for Travel
          </h1>
          <p className="text-center text-[16px] md:text-[18px] lg:text-start lg:text-[20px] text-[#333] leading-relaxed tracking-wide">
            A thoughtfully designed, travel-friendly period kit containing
            eco-friendly bamboo pads, hygiene essentials, and a little treat –
            for comfort, confidence, and care during your periods. Wherever life
            takes you, this compact companion ensures you’re always prepared.
            Wrapped in love and convenience, it’s not just a kit – it’s peace of
            mind in your bag. Stay fresh. Stay empowered. Stay you. Made for
            every journey — from daily commutes to weekend getaways.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <img
            src={wrapKit}
            alt="Travel Kit"
            className="w-full 2xl:w-[87%] 2xl:ml-[80px] h-auto object-cover rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default TravelKitSection;
