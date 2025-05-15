import React, { useState } from "react";

function ProductDetailCard() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <div className="w-full lg:w-1/2 bg-[#FDE6F6] h-auto pl-[96px] pr-[96px] flex justify-center p-8 sm:py-20 lg:pl-[25px] lg:pr-[25px] xl:pl-[120px]">
      <div className="w-[563px] lg:w-full lg:pl-[20px] lg:pr-[20px]">
        <h2 className="text-[24px] w-[320px] font-extrabold text-black mb-4 xl:text-[42px]">
          Compact & Travel Friendly
        </h2>

        <p className="mt-[43px] text-[20px] leading-[32px] tracking-[-0.02em] text-[#747474] mb-6 lg:text-[16px] lg:w-[422px] xl:text-[17px]">
          Whether it's during her cycle or a moment to recharge, our <br />
          Whether it's during her cycle or a moment to recharge, our <br />
          Whether it's during her cycle or a moment to recharge, our
        </p>

        <div className="mt-10 mb-4 flex justify-between gap-14 items-center lg:justify-start lg:w-[90%]">
          <p className="text-[20px] leading-[32px] tracking-[-0.02em] text-[#747474]">
            Price:
          </p>
          <div className="flex flex-col">
            <span className="text-[20px] text-[#747474]">RS. 69.00</span>
            <span className="text-gray-400 line-through text-sm">
              RS. 150.00
            </span>
          </div>
        </div>

        <div className="mt-10 mb-4 flex justify-between gap-14 items-center lg:justify-start lg:w-[90%]">
          <p className="text-[20px] leading-[32px] tracking-[-0.02em] text-[#747474]">
            Weight:
          </p>
          <span className="inline-flex items-center justify-center bg-[#EBACCD] text-[#444444] font-semibold w-[76px] h-[52px] rounded-full text-sm">
            0.5
          </span>
        </div>

        <div className="mt-10 mb-6 flex justify-between gap-6 items-center lg:justify-start lg:w-[90%]">
          <p className="text-[20px] leading-[32px] tracking-[-0.02em] text-[#747474]">
            Quantity:
          </p>
          <div className="flex gap-4 items-center border border-[#E0268E] rounded-full px-4 py-1">
            <button
              onClick={decrement}
              className="text-[#000000] text-lg font-bold hover:text-blue-700 focus:outline-none"
            >
              –
            </button>
            <span className="text-[#000000] font-medium text-[16px] px-2">
              {quantity}
            </span>
            <button
              onClick={increment}
              className="text-[#000000] text-lg font-bold hover:text-blue-700 focus:outline-none"
            >
              +
            </button>
          </div>
        </div>

        <button className="w-full bg-[#FDE6F6] border border-[#E0268E] mt-10 pt-[17px] pb-[17px] pl-[42px] pr-[42px] hover:bg-[#c1005e] text-[#c1005e] font-semibold rounded-full sm:w-[200px] sm:bg-[#E0268E] sm:text-[#FFFFFF]">
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default ProductDetailCard;

// import React, { useState } from "react";

// function ProductDetailCard() {
//   const [quantity, setQuantity] = useState(1);

//   const increment = () => setQuantity((prev) => prev + 1);
//   const decrement = () => {
//     if (quantity > 1) setQuantity((prev) => prev - 1);
//   };

//   return (
//     // <div className="bg-[#FDE6F6] w-full h-auto pl-[96px] pr-[96px] flex justify-center p-8 sm:py-20 lg:pl-[25px] lg:pr-[25px] lg:w-[87%] xl:pl-[90px]">
//     <div className="bg-[#3b393b] w-full h-auto pl-[96px] pr-[96px] flex justify-center p-8 sm:py-20 lg:pl-[25px] lg:pr-[25px] lg:w-[87%] xl:pl-[90px]">
//       <div className="w-[563px] lg:w-full lg:pl-[20px] lg:pr-[20px] ">
//         <h2 className="text-[24px] w-[320px] font-extrabold text-black mb-4 xl:text-[42px]">
//           Compact & Travel Friendly
//         </h2>

//         <p className="mt-[43px] text-[20px] leading-[32px] tracking-[-0.02em] text-[#747474] mb-6 lg:text-[16px] lg:w-[400px] xl:text-[20px]">
//           Whether it's during her cycle or a moment to recharge, our <br />
//           Whether it's during her cycle or a moment to recharge, our <br />
//           Whether it's during her cycle or a moment to recharge, our
//         </p>

//         <div className="mt-10 mb-4 flex justify-between gap-14 items-center lg:justify-start lg:w-[90%]">
//           <p className="text-[20px] leading-[32px] tracking-[-0.02em] text-[#747474]">
//             Price:
//           </p>
//           <div className="flex flex-col">
//             <span className="text-[20px] text-[#747474]">RS. 69.00</span>
//             <span className="text-gray-400 line-through text-sm">
//               RS. 150.00
//             </span>
//           </div>
//         </div>

//         <div className="mt-10 mb-4 flex justify-between gap-14 items-center lg:justify-start lg:w-[90%]">
//           <p className="text-[20px] leading-[32px] tracking-[-0.02em] text-[#747474]">
//             Weight:
//           </p>
//           <span className="inline-flex items-center justify-center bg-[#EBACCD] text-[#444444] font-semibold w-[76px] h-[52px] rounded-full text-sm">
//             0.5
//           </span>
//         </div>

//         <div className="mt-10 mb-6 flex justify-between gap-6 items-center lg:justify-start lg:w-[90%]">
//           <p className="text-[20px] leading-[32px] tracking-[-0.02em] text-[#747474]">
//             Quantity:
//           </p>
//           <div className="flex gap-4 items-center border border-[#E0268E] rounded-full px-4 py-1">
//             <button
//               onClick={decrement}
//               className="text-[#000000] text-lg font-bold hover:text-blue-700 focus:outline-none"
//             >
//               –
//             </button>

//             <span className="text-[#000000] font-medium text-[16px] px-2">
//               {quantity}
//             </span>

//             <button
//               onClick={increment}
//               className="text-[#000000] text-lg font-bold hover:text-blue-700 focus:outline-none"
//             >
//               +
//             </button>
//           </div>
//         </div>

//         <button className="w-full bg-[#FDE6F6] border border-[#E0268E] mt-10 pt-[17px] pb-[17px] pl-[42px] pr-[42px] hover:bg-[#c1005e] text-[#c1005e] font-semibold rounded-full sm:w-[200px] sm:bg-[#E0268E] sm:text-[#FFFFFF]">
//           ADD TO CART
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ProductDetailCard;

// import React, { useState } from "react";

// function ProductDetailCard() {
//   const [quantity, setQuantity] = useState(1);

//   const increment = () => setQuantity((prev) => prev + 1);
//   const decrement = () => {
//     if (quantity > 1) setQuantity((prev) => prev - 1);
//   };

//   return (
//     <div className="bg-[#FDE6F6] w-full h-[718px] pl-[96px] pr-[96px] flex justify-center p-8">
//       <div className="w-[563px]">
//         <h2 className="text-[24px] w-[367px] font-extrabold text-black mb-4">
//           Compact & Travel Friendly
//         </h2>

//         <p className="mt-[43px] text-[20px] leading-[32px] tracking-[-0.02em] text-[#747474] mb-6">
//           Whether it's during her cycle or a moment to recharge, our <br />
//           Whether it's during her cycle or a moment to recharge, our <br />
//           Whether it's during her cycle or a moment to recharge, our
//         </p>

//         <div className="mt-10 mb-4 flex justify-between gap-14 items-center">
//           <p className="text-[20px] leading-[32px] tracking-[-0.02em] text-[#747474]">
//             Price:
//           </p>
//           <div className="flex flex-col">
//             <span className="text-[20px] text-[#747474]">RS. 69.00</span>
//             <span className="text-gray-400 line-through text-sm">
//               RS. 150.00
//             </span>
//           </div>
//         </div>

//         <div className="mt-10 mb-4 flex justify-between gap-14 items-center">
//           <p className="text-[20px] leading-[32px] tracking-[-0.02em] text-[#747474]">
//             Price:
//           </p>
//           <span className="inline-flex items-center justify-center bg-[#EBACCD] text-[#444444] font-semibold w-[76px] h-[52px] rounded-full text-sm">
//             0.5
//           </span>
//         </div>

//         <div className="mt-10 mb-6 flex justify-between gap-6 items-center">
//           <p className="text-[20px] leading-[32px] tracking-[-0.02em] text-[#747474]">
//             Quantity:
//           </p>
//           <div className="flex gap-2 items-center border border-blue-500 rounded-full px-4 py-1">
//             <button
//               onClick={decrement}
//               className="w-6 h-6 flex items-center justify-center border border-blue-500 rounded-full text-blue-500 text-xs hover:bg-transparent focus:outline-none"
//             >
//               ◀
//             </button>

//             <span className="text-blue-500 font-medium text-sm px-2">
//               {quantity}
//             </span>

//             <button
//               onClick={increment}
//               className="w-6 h-6 flex items-center justify-center border border-blue-500 rounded-full text-blue-500 text-xs hover:bg-transparent focus:outline-none"
//             >
//               ▶
//             </button>
//           </div>
//         </div>

//         <button className="w-full bg-[#FDE6F6] border border-[#E0268E] mt-10 pt-[17px] pb-[17px] pl-[42px] pr-[42px] hover:bg-[#c1005e] text-[#c1005e] font-semibold rounded-full">
//           ADD TO CART
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ProductDetailCard;
