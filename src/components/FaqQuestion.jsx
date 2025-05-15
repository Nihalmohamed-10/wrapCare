import React, { useState, useRef, useEffect } from "react";

const faqs = [
  {
    question: "Can I use the Landify for a client’s product?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem.",
  },

];

function FaqQuestion() {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqRef = useRef(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (faqRef.current && !faqRef.current.contains(event.target)) {
        setActiveIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={faqRef} className="p-4 space-y-6">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="pb-2 sm:w-[85%] mx-auto lg:w-full border-b border-[#E0268E80]"
        >
          <button
            className="w-full text-left flex justify-between items-center pt-10 focus:outline-none"
            onClick={() => toggleFAQ(index)}
            aria-expanded={activeIndex === index}
          >
            <h3
              className={`font-dm-sans font-semibold text-[18px] w-[219px] lg:w-[420px] transition-colors duration-300 xl:text-[22px] ${
                activeIndex === index ? "text-[#E0268E]" : "text-black"
              }`}
            >
              {faq.question}
            </h3>
            <span className="text-xl">
              {activeIndex === index ? "❌" : "➕"}
            </span>
          </button>

          {activeIndex === index && (
            <p className="text-gray-600 mt-3 text-[22px] leading-[180%]">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default FaqQuestion;

// import React, { useState, useRef, useEffect } from "react";

// function FaqQuestion() {
//   const [activeIndex, setActiveIndex] = useState(null);
//   const faqRef = useRef(null);

//   const toggleFAQ = (index) => {
//     setActiveIndex(index === activeIndex ? null : index);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (faqRef.current && !faqRef.current.contains(event.target)) {
//         setActiveIndex(null);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div ref={faqRef} className="p-2 space-y-4">
    
//       <div className="pb-2 sm:w-[85%] mx-auto lg:w-full">
//         <div
//           className="flex justify-between items-center  cursor-pointer border-b border-[#E0268E80]"
//           onClick={() => toggleFAQ(0)}
//         >
//           <h3
//             className={`font-dm-sans font-semibold text-[18px] pt-[40px] w-[219px] lg:w-[380px] ${
//               activeIndex === 0 ? "text-[#E0268E]" : "text-black"
//             }`}
//           >
//             Can I use the Landify for a client’s product?
//           </h3>
//           <span>{activeIndex === 0 ? "❌" : "➕"}</span>
//         </div>
//         {activeIndex === 0 && (
//           <p className="text-gray-600 mt-2 text-[22px] leading-[250%]">
//             It is a long established fact that a reader will be distracted by
//             the readable content of a page when looking at its layout. The
//             point of using Lorem
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default FaqQuestion;

// import React from "react";
// import { useState } from "react";

// function FaqQuestion() {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setActiveIndex(index === activeIndex ? null : index);
//   };
//   return (
//     <div className="">
//       <div className=" p-4 space-y-4">
//         {/* FAQ 1 */}
//         <div className=" pb-2">
//           <div
//             className="flex justify-between items-center cursor-pointer border-b border-[#E0268E80]"
//             onClick={() => toggleFAQ(0)}
//           >
//             <h3
//               className={`font-semibold text-[22px] pt-[40px] pb-[40px] pl-[40px]  ${
//                 activeIndex === 0 ? "text-pink-600" : "text-black"
//               }`}
//             >
//               Can I use the Landify for a client’s product?
//             </h3>
//             <span>{activeIndex === 0 ? "❌" : "➕"}</span>
//           </div>
//           {activeIndex === 0 && (
//             <p className="text-gray-600 mt-2 text-[22px] leading-[250%]">
//               It is a long established fact that a reader will be distracted by
//               the readable content of a page when looking at its layout. The
//               point of using Lorem
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FaqQuestion;
