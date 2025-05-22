import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "Can I use the Landify for a client’s product?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem.",
  },
];

export default function FaqQuestion() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="p-4 space-y-6">
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
          sx={{
            backgroundColor: "transparent", 
            borderBottom: "1px solid #E0268E80",
            boxShadow: "none",
            "&:before": { display: "none" },
            paddingTop: 2,
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded === index ? (
                <span style={{ fontSize: 20 }}>❌</span>
              ) : (
                <span style={{ fontSize: 20 }}>➕</span>
              )
            }
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            sx={{
              paddingX: 0,
              backgroundColor: "transparent", 
            }}
          >
            <Typography
              sx={{
                fontFamily: "DM Sans, sans-serif-text",
                fontWeight: 600,
                fontSize: {
                  xs: "18px",
                  xl: "22px",
                },
                color: expanded === index ? "#E0268E" : "black",
                width: { xs: "219px", lg: "490px" },
              }}
            >
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ paddingX: 0 }}>
            <Typography
              sx={{
                paddingX: 0,
                backgroundColor: "transparent", // optional, for safety
              }}
            >
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

// import React, { useState, useRef, useEffect } from "react";

// const faqs = [
//   {
//     question: "Can I use the Landify for a client’s product?",
//     answer:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem.",
//   },

// ];

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
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <div ref={faqRef} className="p-4 space-y-6">
//       {faqs.map((faq, index) => (
//         <div
//           key={index}
//           className="pb-2 sm:w-[85%] mx-auto lg:w-full border-b border-[#E0268E80]"
//         >
//           <button
//             className="w-full text-left flex justify-between items-center pt-10 focus:outline-none"
//             onClick={() => toggleFAQ(index)}
//             aria-expanded={activeIndex === index}
//           >
//             <h3
//               className={`font-dm-sans font-semibold text-[18px] w-[219px] lg:w-[420px] transition-colors duration-300 xl:text-[22px] ${
//                 activeIndex === index ? "text-[#E0268E]" : "text-black"
//               }`}
//             >
//               {faq.question}
//             </h3>
//             <span className="text-xl cursor-pointer">
//               {activeIndex === index ? "❌" : "➕"}
//             </span>
//           </button>

//           {activeIndex === index && (
//             <p className="text-gray-600 mt-3 text-[22px] leading-[180%]">
//               {faq.answer}
//             </p>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default FaqQuestion;
// import React, { useState } from "react";
// import {
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Typography,
//   Box,
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import CloseIcon from "@mui/icons-material/Close";
// import AddIcon from "@mui/icons-material/Add";

// const faqs = [
//   {
//     question: "Can I use the Landify for a client’s product?",
//     answer:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem.",
//   },
// ];

// function FaqQuestion() {
//   const [expanded, setExpanded] = useState(false);

//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : false);
//   };

//   return (
//     <Box sx={{ p: 4, maxWidth: 800, mx: "auto" }}>
//       {faqs.map((faq, index) => {
//         const panelId = `panel-${index}`;
//         const isExpanded = expanded === panelId;
//         return (
//           <Accordion
//             key={index}
//             expanded={isExpanded}
//             onChange={handleChange(panelId)}
//             sx={{
//               backgroundColor: "transparent",
//               boxShadow: "none",
//               borderBottom: "1px solid rgba(224, 38, 142, 0.5)",
//               "&:before": { display: "none" },
//               "& .MuiAccordionSummary-root": {
//                 paddingTop: "10px",
//                 paddingBottom: "10px",
//               },
//               "& .MuiAccordionSummary-content": {
//                 margin: 0,
//               },
//             }}
//           >
//             <AccordionSummary
//               expandIcon={
//                 isExpanded ? (
//                   <CloseIcon sx={{ color: "#E0268E" }} />
//                 ) : (
//                   <AddIcon sx={{ color: "black" }} />
//                 )
//               }
//               aria-controls={`${panelId}-content`}
//               id={`${panelId}-header`}
//             >
//               <Typography
//                 sx={{
//                   fontFamily: "'DM Sans', sans-serif",
//                   fontWeight: 600,
//                   fontSize: { xs: 18, xl: 22 },
//                   color: isExpanded ? "#E0268E" : "black",
//                   width: { xs: 219, lg: 420 },
//                 }}
//               >
//                 {faq.question}
//               </Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Typography
//                 sx={{
//                   color: "gray",
//                   fontSize: 18,
//                   lineHeight: "180%",
//                   mt: 1,
//                 }}
//               >
//                 {faq.answer}
//               </Typography>
//             </AccordionDetails>
//           </Accordion>
//         );
//       })}
//     </Box>
//   );
// }

// export default FaqQuestion;

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
