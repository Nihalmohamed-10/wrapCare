import React from "react";
import { motion } from "framer-motion";
import wrapKit from "../assets/images/wrapProduct3.jpeg";

// Animation variants
const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50, rotate: -10 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const TravelKitSection = () => {
  return (
    <div className="bg-[#f4f4f5] py-16 px-6 md:px-12 lg:px-24 xl:px-32">
      <div className="w-full mx-auto flex flex-col-reverse lg:flex-row lg:justify-between items-center gap-12">
        {/* Text Section */}
        <motion.div
          className="flex-1 text-left sm:w-[87%]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          whileHover={{
            scale: 1.02,
            y: -5,
            transition: { type: "tween", duration: 0.4, ease: "easeOut" },
          }}
          whileTap={{
            scale: 0.98,
            y: 2,
            transition: { duration: 0.2 },
          }}
        >
          <motion.h1
            whileHover={{ color: "#D81B7D" }}
            whileTap={{ color: "#D81B7D" }}
            transition={{ duration: 0.3 }}
            className="text-center font-dm-serif text-[32px] md:text-[40px] lg:text-start lg:text-[48px] font-extrabold text-[#e0268e] leading-tight mb-6"
          >
            Designed for Comfort, Built for Travel
          </motion.h1>

          <motion.p
            whileHover={{ color: "#444" }}
            whileTap={{ color: "#444" }}
            transition={{ duration: 0.3 }}
            className="font-mona text-center text-[16px] md:text-[18px] lg:text-start lg:text-[18px] text-[#333] leading-relaxed tracking-wide"
          >
            A thoughtfully designed, travel-friendly period kit containing
            eco-friendly bamboo pads, hygiene essentials, and a little treat –
            for comfort, confidence, and care during your periods. Wherever life
            takes you, this compact companion ensures you’re always prepared.
            Wrapped in love and convenience, it’s not just a kit – it’s peace of
            mind in your bag. Stay fresh. Stay empowered. Stay you. Made for
            every journey — from daily commutes to weekend getaways.
          </motion.p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, rotate: -10 }}
          whileInView={{
            opacity: 1,
            rotate: [-8, 6, -4, 2, 0], // swing effect
          }}
          viewport={{ once: true }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
          style={{ transformOrigin: "top center" }} // swing from the top
          whileHover={{
            scale: 1.04,
            y: -8,
            filter: "brightness(1.05)",
            transition: { type: "tween", duration: 0.4, ease: "easeOut" },
          }}
          whileTap={{
            scale: 0.98,
            filter: "brightness(1.02)",
            transition: { type: "tween", duration: 0.2 },
          }}
        >
          <img
            src={wrapKit}
            alt="Travel Kit"
            className="w-full sm:w-[87%] sm:mx-auto lg:w-full 2xl:w-[87%] 2xl:ml-[80px] h-auto object-cover rounded-2xl shadow-xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default TravelKitSection;

// import React from "react";
// import wrapKit from "../assets/images/wrapProduct3.jpeg";

// const TravelKitSection = () => {
//   return (
//     <div className="bg-[#f4f4f5] py-16 px-6 md:px-12 lg:px-24 lg:pb-25 lg:pt-25 xl:px-30">
//       <div className="w-full mx-auto flex flex-col-reverse lg:flex-row lg:justify-between items-center gap-12 animate-fadeIn">
//         <div className="flex-1 text-left">
//           <h1 className="text-center font-dm-serif text-[32px] md:text-[40px] lg:text-start lg:text-[48px] font-extrabold text-[#e0268e] leading-tight mb-6">
//             Designed for Comfort, Built for Travel
//           </h1>
//           <p className="font-mona text-center text-[16px] md:text-[18px] lg:text-start lg:text-[20px] text-[#333] leading-relaxed tracking-wide">
//             A thoughtfully designed, travel-friendly period kit containing
//             eco-friendly bamboo pads, hygiene essentials, and a little treat –
//             for comfort, confidence, and care during your periods. Wherever life
//             takes you, this compact companion ensures you’re always prepared.
//             Wrapped in love and convenience, it’s not just a kit – it’s peace of
//             mind in your bag. Stay fresh. Stay empowered. Stay you. Made for
//             every journey — from daily commutes to weekend getaways.
//           </p>
//         </div>

//         {/* Image Section */}
//         <div className="flex-1">
//           <img
//             src={wrapKit}
//             alt="Travel Kit"
//             className="w-full 2xl:w-[87%] 2xl:ml-[80px] h-auto object-cover rounded-2xl shadow-xl"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TravelKitSection;
