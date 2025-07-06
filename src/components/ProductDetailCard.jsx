import React, { useState } from "react";

function ProductDetailCard({ price, oldPrice }) {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "918606050922";
    const message = `Hey! 👋 I'm interested in ordering your period care kit. I'd like to place an order for ${quantity} unit(s). Could you please assist me with the next steps? 😊`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="w-full lg:w-1/2 bg-[#FDE6F6] h-auto pl-[96px] pr-[96px] flex justify-center p-8 sm:py-20 lg:pl-[25px] lg:pr-[25px] xl:pl-[80px] group hover:bg-[#FDE6F6] transition-colors duration-[4000ms] ease-in-out lg:bg-[#F4F4F5]">
      <div className="mt-[10px] w-[563px] lg:w-full lg:pl-[20px] lg:pr-[20px]">
        <p className="font-dm-serif sm:mx-auto text-center text-[20px] w-[320px] sm:w-[430px] md:w-[430px] lg:w-[378px] lg:text-start lg:text-[22px] font-extrabold text-black xl:mx-0 xl:text-[26px] 2xl:w-[500px]">
          She doesn’t ask for much. Just a little comfort during her hardest
          days. Introducing Wrapcare — your monthly period companion, made with
          love 💗
        </p>

        {/* <div className="mt-[10px] flex flex-col gap-16 pl-8 pr-8 pt-5 text-center w-full mx-auto lg:pl-2 lg:pr-2 xl:text-start lg:w-[400px] xl:w-[480px] 2xl:mx-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4 text-start ml-12 sm:ml-0 text-[16px] font-[500] md:w-[365px] md:mx-auto leading-relaxed tracking-wide lg:mx-0 lg:text-start">
            <div className="space-y-4">
              <p>🌸 Bamboo Pads</p>
              <p>🌸 Sanitizer</p>
              <p>🌸 Handwash</p>
              <p>🌸 Dry Tissue</p>
              <p>🌸 Coin Wet Tissue</p>
              <p>🌸 Perfumed Tissue</p>
            </div>
            <div className="space-y-4">
              <p>🌸 Disposal Cover</p>
              <p>🌸 Kitty Chocolate</p>
              <p>🌸 Period Tracker - Card</p>
              <p>🌸 Exercise - Cards</p>
              <p>🌸 Blood Colour Tracker - Card</p>
            </div>
          </div>
        </div> */}

        <p className="mt-[30px] font-dm-serif sm:mx-auto text-center text-[20px] w-[320px] sm:w-[430px] lg:text-start lg:w-[500px] text-black xl:mx-0 xl:text-[26px]">
          All in one comforting pack, made just for her. Because her period deserves more than just products — ✨ It deserves
          care, warmth, and a wrap of love
        </p>

       <div className="font-mona sm:w-[400px] sm:mx-auto lg:w-[500px] lg:mx-0">
          <div className="mt-[20px] mb-4 flex justify-between gap-14 items-center lg:mt-[20px] lg:pl-[20px] lg:justify-start lg:w-[90%]">
            <p className="text-[20px] text-[#e0268e]">Price:</p>
            <div className="flex flex-col">
              <span className="text-[18px] font-bold text-[#e0268e]">
                {price} + Free Shipping
              </span>
              <span className="text-[#e0268e] line-through text-[18px]">
                {oldPrice}
              </span>
            </div>
          </div>
          <div className="mt-[20px] mb-6 flex justify-between gap-6 items-center lg:pl-[20px] lg:mt-[20px] lg:justify-start lg:w-[90%]">
            <p className="text-[20px] text-[#747474]">Quantity:</p>
            <div className="flex gap-4 items-center border border-[#E0268E] rounded-full px-4 py-1">
              <button onClick={decrement} className="text-lg font-bold">
                –
              </button>
              <span className="text-[16px] px-2">{quantity}</span>
              <button onClick={increment} className="text-lg font-bold">
                +
              </button>
            </div>
          </div>
  
          {/* <div className="lg:pl-[30px]"> */}
          <div className="lg:pl-[30px] flex justify-center sm:justify-end lg:justify-start">
            <button
              onClick={handleWhatsAppRedirect}
              className="w-full bg-[#FDE6F6] border border-[#E0268E] mt-[10px] pt-[17px] pb-[17px] px-[42px] text-[#c1005e] font-semibold rounded-full sm:w-[200px] lg:mt-[20px] sm:bg-[#E0268E] sm:text-[#FFFFFF] transition-colors duration-[2000ms] ease-in-out"
            >
              ADD TO CART
            </button>
          </div>
       </div>

        {/* <p className="mt-[30px] font-dm-serif sm:mx-auto text-center text-[20px] w-[320px] lg:text-start sm:w-[470px] lg:w-[378px] text-black xl:mx-0 xl:text-[26px]">
          Because her period deserves more than just products — ✨ It deserves
          care, warmth, and a wrap of love
        </p> */}
      </div>
    </div>
  );
}

export default ProductDetailCard;

// import React, { useState } from "react";

// function ProductDetailCard({ title, content, price, oldPrice, weight }) {
//   const [quantity, setQuantity] = useState(1);

//   const increment = () => setQuantity((prev) => prev + 1);
//   const decrement = () => {
//     if (quantity > 1) setQuantity((prev) => prev - 1);
//   };

//   return (
//     <div className=" w-full lg:w-1/2 bg-[#FDE6F6] h-auto pl-[96px] pr-[96px] flex justify-center p-8 sm:py-20 lg:pl-[25px] lg:pr-[25px] xl:pl-[80px] group hover:bg-[#FDE6F6] transition-colors duration-[4000ms] ease-in-out lg:bg-[#F4F4F5]">
//       <div className="mt-[10px] w-[563px] lg:w-full lg:pl-[20px] lg:pr-[20px]">
//         <p className="font-dm-serif sm:mx-auto text-center text-[20px] w-[320px] sm:w-[400px] md:w-[470px] lg:w-[378px] lg:text-start lg:text-[22px] font-extrabold text-black xl:mx-0 xl:text-[26px] 2xl:w-[500px]">
//           She doesn’t ask for much. Just a little comfort during her hardest
//           days. Introducing Wrapcare — your monthly period companion, made with
//           love 💗
//         </p>

//         <div className="mt-[10px] flex flex-col gap-16  pl-8 pr-8 pt-5 text-center w-full mx-auto lg:pl-2 lg:pr-2 xl:text-start lg:w-[400px] xl:w-[480px] 2xl:mx-0">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4 text-start ml-12 sm:ml-0 text-[16px] font-[500] md:w-[365px] md:mx-auto leading-relaxed tracking-wide lg:mx-0 lg:text-start">
//             <div className="space-y-4 ">
//               <p>🌸 Bamboo Pads</p>
//               <p>🌸 Sanitizer</p>
//               <p>🌸 Handwash</p>
//               <p>🌸 Dry Tissue</p>
//               <p>🌸 Coin Wet Tissue</p>
//               <p>🌸 Perfumed Tissue</p>
//             </div>
//             <div className="space-y-4">
//               <p>🌸 Disposal Cover</p>
//               <p>🌸 Kitty Chocolate</p>
//               <p>🌸 Period Tracker - Card</p>
//               <p>🌸 Exercise - Cards</p>
//               <p>🌸 Blood Colour Tracker - Card</p>
//             </div>
//           </div>
//         </div>

//         <p className="mt-[30px] font-dm-serif sm:mx-auto text-center text-[20px] w-[320px] lg:text-start lg:w-[378px] text-black xl:mx-0 xl:text-[26px]">
//           All in one comforting pack, made just for her
//         </p>

//         <div className="mt-[20px] mb-4 flex justify-between gap-14 items-center lg:mt-[20px] lg:pl-[20px] lg:justify-start lg:w-[90%]">
//           <p className="text-[20px] text-[#747474]">Price:</p>
//           <div className="flex flex-col">
//             <span className="text-[20px] text-[#747474]">
//               {price}+ Free Shipping
//             </span>
//             <span className="text-gray-400 line-through text-sm">
//               {oldPrice}
//             </span>
//           </div>
//         </div>

//         {/* <div className="mt-[20px] mb-4 flex justify-between gap-14 items-center lg:pl-[20px]  lg:mt-[20px] lg:justify-start lg:w-[90%]">
//           <p className="text-[20px] text-[#747474]">Weight:</p>
//           <span className="inline-flex items-center justify-center bg-[#EBACCD] text-[#444444] font-semibold w-[76px] h-[52px] rounded-full text-sm">
//             {weight}
//           </span>
//         </div> */}

//         <div className="mt-[20px] mb-6 flex justify-between gap-6 items-center lg:pl-[20px]  lg:mt-[20px] lg:justify-start lg:w-[90%]">
//           <p className="text-[20px] text-[#747474]">Quantity:</p>
//           <div className="flex gap-4 items-center border border-[#E0268E] rounded-full px-4 py-1">
//             <button onClick={decrement} className="text-lg font-bold">
//               –
//             </button>
//             <span className="text-[16px] px-2">{quantity}</span>
//             <button onClick={increment} className="text-lg font-bold">
//               +
//             </button>
//           </div>
//         </div>

//         <div className="lg:pl-[30px]">
//           <button className="w-full bg-[#FDE6F6] border border-[#E0268E] mt-[10px] pt-[17px] pb-[17px] px-[42px] text-[#c1005e] font-semibold rounded-full sm:w-[200px]   lg:mt-[20px] sm:bg-[#E0268E] sm:text-[#FFFFFF] transition-colors duration-[2000ms] ease-in-out">
//             ADD TO CART
//           </button>
//         </div>
//         <p className="mt-[30px] font-dm-serif sm:mx-auto text-center text-[20px] w-[320px] lg:text-start sm:w-[470px] lg:w-[378px] text-black xl:mx-0 xl:text-[26px]">
//           Because her period deserves more than just products — ✨ It deserves
//           care, warmth, and a wrap of love
//         </p>
//       </div>
//     </div>
//   );
// }

// export default ProductDetailCard;

// import React, { useState } from "react";
// import { products } from "../constants";

// function ProductDetailCard() {
//   const [quantity, setQuantity] = useState(1);

//   const increment = () => setQuantity((prev) => prev + 1);
//   const decrement = () => {
//     if (quantity > 1) setQuantity((prev) => prev - 1);
//   };

//   return (
//     <div className="w-full lg:w-1/2 bg-[#FDE6F6] h-auto pl-[96px] pr-[96px] flex justify-center p-8 sm:py-20 lg:pl-[25px] lg:pr-[25px] xl:pl-[120px] group hover:bg-[#FDE6F6] transition-colors duration-[4000ms] ease-in-out lg:bg-[#F4F4F5]">
//       <div className="w-[563px] lg:w-full lg:pl-[20px] lg:pr-[20px]">
//         <h2 className="text-[24px] w-[320px] font-extrabold text-black  xl:text-[42px]">
//           Compact & Travel Friendly
//         </h2>

//         <p className="mt-[43px] text-[20px] leading-[32px] tracking-[-0.02em] text-[#747474] mb-6 lg:text-[16px] lg:w-[422px]   xl:text-[17px]">
//           Whether it's during her cycle or a moment to recharge, our <br />
//           Whether it's during her cycle or a moment to recharge, our <br />
//           Whether it's during her cycle or a moment to recharge, our
//         </p>

//         <div className="mt-10 mb-4 flex justify-between gap-14 items-center lg:justify-start lg:w-[90%]">
//           <p className="text-[20px] leading-[32px] tracking-[-0.02em] text-[#747474]  ">
//             Price:
//           </p>
//           <div className="flex flex-col">
//             <span className="text-[20px] text-[#747474]">RS. 69.00</span>
//             <span className="text-gray-400 line-through   text-sm">
//               RS. 150.00
//             </span>
//           </div>
//         </div>

//         <div className="mt-10 mb-4 flex justify-between gap-14 items-center lg:justify-start lg:w-[90%]">
//           <p className="text-[20px] leading-[32px] tracking-[-0.02em] text-[#747474]  ">
//             Weight:
//           </p>
//           <span className="inline-flex items-center justify-center bg-[#EBACCD] text-[#444444] font-semibold w-[76px] h-[52px] rounded-full text-sm  ">
//             0.5
//           </span>
//         </div>

//         <div className="mt-10 mb-6 flex justify-between gap-6 items-center lg:justify-start lg:w-[90%]">
//           <p className="text-[20px] leading-[32px] tracking-[-0.02em] text-[#747474]  ">
//             Quantity:
//           </p>
//           <div className="flex gap-4 items-center border border-[#E0268E] rounded-full px-4 py-1">
//             <button
//               onClick={decrement}
//               className="cursor-pointer text-[#000000] text-lg font-bold hover:text-blue-700 focus:outline-none  "
//             >
//               –
//             </button>
//             <span className="text-[#000000] font-medium text-[16px] px-2">
//               {quantity}
//             </span>
//             <button
//               onClick={increment}
//               className="cursor-pointer text-[#000000] text-lg font-bold hover:text-blue-700 focus:outline-none "
//             >
//               +
//             </button>
//           </div>
//         </div>

//         <button className="w-full cursor-pointer bg-[#FDE6F6] border border-[#E0268E] mt-10 pt-[17px] pb-[17px]
//         pl-[42px] pr-[42px]  group hover:bg-[#FDE6F6] transition-colors duration-[2000ms] ease-in-out text-[#c1005e] font-semibold rounded-full sm:w-[200px] sm:bg-[#E0268E] sm:text-[#FFFFFF] #FDE6F6">
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
