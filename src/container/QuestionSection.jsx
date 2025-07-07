import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import image1 from "../assets/images/wrapCard2.jpg";
import image2 from "../assets/images/wrapProduct5.jpg";
import image3 from "../assets/images/wrapProduct6.jpg";
import image4 from "../assets/images/wrapProduct7.jpg";
import FaqQuestion from '../components/FaqQuestion';

function QuestionSection() {
  const images = [image1, image2, image3, image4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Preload images on mount
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  // ✅ Detect screen width
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleImageChange = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div
      id="fac-section"
      className='w-full bg-[#e0268e] px-4 pt-4 pb-10 md:pt-[50px] md:pb-[70px] 
        flex flex-col items-center md:items-start justify-between gap-8 
        lg:pt-[35px] lg:flex-row lg:items-center lg:justify-center 
        lg:pr-10 lg:pl-10 xl:pl-[120px] xl:pr-[120px]'
    >
      <motion.div
        className='w-full px-10 md:w-full lg:w-full cursor-pointer'
        onMouseEnter={!isMobile ? handleImageChange : undefined}
        onClick={isMobile ? handleImageChange : undefined}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <motion.img
          src={images[currentIndex]}
          alt="img"
          className="w-full h-auto rounded-2xl transition-all duration-500 ease-in-out"
          whileHover={{
            scale: 1.05,
            rotate: 1,
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.25)"
          }}
          whileTap={{
            scale: 0.95,
            rotate: -1,
            boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)"
          }}
        />
      </motion.div>

      <div className='flex flex-col xl:gap-5 w-full md:w-full space-y-4'>
        <FaqQuestion />
        {/* <FaqQuestion /> */}
      </div>
    </div>
  );
}

export default QuestionSection;







// import React from 'react';
// import { motion } from 'framer-motion';
// import calender from "../assets/images/wrapCard2.jpg";
// import FaqQuestion from '../components/FaqQuestion';

// function QuestionSection() {
//   return (
//     <div
//       id="fac-section"
//       className='w-full bg-[#e0268e] px-4 pt-4 pb-10 md:pt-[50px] md:pb-[70px] 
//         flex flex-col items-center md:items-start justify-between gap-8 lg:pt-[35px] lg:flex-row lg:items-center lg:justify-center lg:pr-10 lg:pl-10 xl:pl-[120px] xl:pr-[120px]'>
      
//       <motion.div
//         className='w-full px-10 md:w-full lg:w-full'
//         initial={{ scale: 0.1, opacity: 0 }}
//         whileInView={{ scale: 1, opacity: 1 }}
//         viewport={{ once: true, amount: 0.4 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <img src={calender} alt="img" className="w-full h-auto rounded-2xl" />
//       </motion.div>

//       <div className='flex flex-col xl:gap-5 w-full md:w-[full] space-y-4'>
//         <FaqQuestion />
//         {/* <FaqQuestion />
//         <FaqQuestion />
//         <FaqQuestion /> */}
//       </div>
//     </div>
//   );
// }

// export default QuestionSection;

// import React from 'react';
// import { motion } from 'framer-motion';
// import calender from "../assets/images/wrapCard2.jpg";
// import FaqQuestion from '../components/FaqQuestion';

// function QuestionSection() {
//   return (
//     <div
//     id="fac-section"
//     className='w-full bg-[#e0268e] px-4 pt-35 py-10 md:pt-[100px] md:pb-[100px] 
//       flex flex-col items-center md:items-start justify-between gap-8 lg:pt-[35px] lg:flex-row lg:items-center lg:justify-center lg:pr-10 lg:pl-10 xl:pl-[120px] xl:pr-[120px] '>
      
//       <motion.div
//         className='w-full px-10 md:w-full lg:w-full'
//         initial={{ scale: 0.1, opacity: 0 }}
//         whileInView={{ scale: 1, opacity: 1 }}
//         viewport={{ once: true, amount: 0.4 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <img src={calender} alt="img" className="w-full h-auto rounded-2xl" />
//       </motion.div>

//       <div className='flex flex-col xl:gap-5 w-full md:w-[full] space-y-4'>
//         <FaqQuestion />
//         {/* <FaqQuestion />
//         <FaqQuestion />
//         <FaqQuestion /> */}
//       </div>
//     </div>
//   );
// }

// export default QuestionSection;

// import React from 'react';
// import calender from "../assets/images/calender.png";
// import FaqQuestion from '../components/FaqQuestion';

// function QuestionSection() {
//   return (
//     <div className='w-full bg-[#FDE6F6] px-4 pt-35 py-10 md:pt-[100px] md:pb-[100px] 
//       flex flex-col items-center md:items-start justify-between gap-8 lg:flex-row lg:items-center lg:justify-center lg:pr-10 lg:pl-10 xl:pl-[120px] xl:pr-[120px] '>
      
//       <div className='w-full px-10 md:w-full lg:w-full'>
//         <img src={calender} alt="img" className="w-full h-auto " />
//       </div>

//       <div className='flex flex-col xl:gap-5 w-full md:w-[full] space-y-4'>
//         <FaqQuestion />
//         <FaqQuestion />
//         <FaqQuestion />
//         <FaqQuestion />
//       </div>
      
//     </div>
//   );
// }

// export default QuestionSection;

// import React from 'react'
// import calender from "../assets/images/calender.png"
// import FaqQuestion from '../components/FaqQuestion'
// function QuestionSection() {
//   return (
//     <div className='pt-[100px] pb-[100px] pl-[120px] pr-[176px] bg-[#FDE6F6] flex justify-between  w-full'>
//       <div className='w-[573px] h-[648px]'>
//         <img src={calender} alt="img" />
//       </div>
//       <div className='w-[573px] h-[648px]'>
//         <FaqQuestion/>
//         <FaqQuestion/>
//         <FaqQuestion/>
//         <FaqQuestion/>
//       </div>
//     </div>
//   )
// }

// export default QuestionSection
// import { useState } from 'react';
// import { Plus, X } from 'lucide-react';

// const FAQComponent = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const faqs = [
//     {
//       question: 'Can I use the Landify for a client’s product?',
//       answer:
//         'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem',
//     },
//     {
//       question: 'Can I use the Landify for a client’s product?',
//       answer: '',
//     },
//     {
//       question: 'Can I use the Landify for a client’s product?',
//       answer: '',
//     },
//     {
//       question: 'Can I use the Landify for a client’s product?',
//       answer: '',
//     },
//   ];

//   const toggleFAQ = (index) => {
//     setActiveIndex(index === activeIndex ? null : index);
//   };

//   return (
//     <div className="w-full min-h-screen flex items-center justify-center p-6">
//       <div className="w-full bg-white rounded-3xl shadow-md p-4 md:flex max-w-4xl w-full">
       
//         <div className="w-full flex items-center justify-center p-4">
//           <img
//             src="/calendar.jpg"
//             alt="Woman pointing to calendar"
//             className="rounded-2xl object-cover max-h-96"
//           />
//         </div>

//         {/* FAQ Section */}
//         <div className="md:w-1/2 p-4 space-y-4">
//           {faqs.map((faq, index) => (
//             <div key={index} className="border-b pb-2">
//               <div
//                 className="flex justify-between items-center cursor-pointer"
//                 onClick={() => toggleFAQ(index)}
//               >
//                 <h3
//                   className={`font-semibold ${
//                     index === activeIndex ? 'text-pink-600' : 'text-black'
//                   }`}
//                 >
//                   {faq.question}
//                 </h3>
//                 {index === activeIndex ? <X size={18} /> : <Plus size={18} />}
//               </div>

//               {index === activeIndex && faq.answer && (
//                 <p className="text-gray-600 mt-2 text-sm">{faq.answer}</p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQComponent;
