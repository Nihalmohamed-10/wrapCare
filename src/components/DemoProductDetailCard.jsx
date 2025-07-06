import React, { useState } from "react";

function DemoProductDetailCard({ price, oldPrice }) {
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
    <div className="w-1/2 bg-[#FDE6F6] flex justify-center p-4">
      <div className="w-full max-w-[400px]">
        <p className="font-dm-serif text-[14px] text-center font-extrabold text-black mb-4">
          She doesn’t ask for much. Just a little comfort during her hardest
          days. Introducing Wrapcare — your monthly period companion, made with
          love
        </p>

        <p className="text-[12px] text-center text-black mb-6">
          All in one comforting pack, made just for her. Because her period
          deserves more than just products — ✨ It deserves care, warmth, and a
          wrap of love
        </p>

        <div className="flex justify-between gap-4 items-center mb-4">
          <p className="text-[12px] text-[#747474]">Price:</p>
          <div className="flex flex-col">
            <span className="text-[12px] text-[#747474]">
              {price} + Free Shipping
            </span>
            <span className="text-gray-400 line-through text-sm">
              {oldPrice}
            </span>
          </div>
        </div>

        <div className="flex justify-between gap-4 items-center mb-6">
          <p className="text-[12px] text-[#747474]">Quantity:</p>
          <div className="flex gap-1 items-center border border-[#E0268E] rounded-full px-4 py-1">
            <button onClick={decrement} className="text-[12px] font-bold">
              –
            </button>
            <span className="text-[12px] px-2">{quantity}</span>
            <button onClick={increment} className="text-lg font-bold">
              +
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleWhatsAppRedirect}
            className="w-[100px] bg-[#FDE6F6] border border-[#E0268E]  text-[#c1005e] text-[12px] font-semibold rounded-full sm:w-[200px] sm:bg-[#E0268E] sm:text-white transition-colors duration-1000 ease-in-out"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default DemoProductDetailCard;


// import React, { useState } from "react";

// function DemoProductDetailCard({ price, oldPrice }) {
//   const [quantity, setQuantity] = useState(1);

//   const increment = () => setQuantity((prev) => prev + 1);
//   const decrement = () => {
//     if (quantity > 1) setQuantity((prev) => prev - 1);
//   };

//   const handleWhatsAppRedirect = () => {
//     const phoneNumber = "918606050922";
//     const message = `Hey! 👋 I'm interested in ordering your period care kit. I'd like to place an order for ${quantity} unit(s). Could you please assist me with the next steps? 😊`;
//     const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
//       message
//     )}`;
//     window.open(url, "_blank");
//   };

//   return (
//     <div className="w-full lg:w-1/2 bg-[#FDE6F6] h-auto pl-[00px] pr-[00px] flex justify-center p-8 sm:py-20 lg:pl-[25px] lg:pr-[25px] xl:pl-[80px] group hover:bg-[#FDE6F6] transition-colors duration-[4000ms] ease-in-out lg:bg-[#F4F4F5]">
//       <div className="mt-[10px] w-[563px] lg:w-full lg:pl-[20px] lg:pr-[20px]">
//         <p className="font-dm-serif sm:mx-auto text-center text-[14px] w-[120px] sm:w-[400px] md:w-[470px] lg:w-[378px] lg:text-start lg:text-[22px] font-extrabold text-black xl:mx-0 xl:text-[26px] 2xl:w-[500px]">
//           She doesn’t ask for much. Just a little comfort during her hardest
//           days. Introducing Wrapcare — your monthly period companion, made with
//           love
//         </p>

   

//         <p className="mt-[30px] font-dm-serif sm:mx-auto text-center text-[12px] w-[120px] lg:text-start lg:w-[378px] text-black xl:mx-0 xl:text-[26px]">
//           All in one comforting pack, made just for her. Because her period deserves more than just products — ✨ It deserves
//           care, warmth, and a wrap of love
//         </p>

//         <div className="mt-[20px] mb-4 flex justify-between gap-14 items-center lg:mt-[20px] lg:pl-[20px] lg:justify-start lg:w-[90%]">
//           <p className="text-[20px] text-[#747474]">Price:</p>
//           <div className="flex flex-col">
//             <span className="text-[20px] text-[#747474]">
//               {price} + Free Shipping
//             </span>
//             <span className="text-gray-400 line-through text-sm">
//               {oldPrice}
//             </span>
//           </div>
//         </div>
//         <div className="mt-[20px] mb-6 flex justify-between gap-6 items-center lg:pl-[20px] lg:mt-[20px] lg:justify-start lg:w-[90%]">
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

//         <div className="lg:pl-[30px] flex justify-center md:justify-start">
//           <button
//             onClick={handleWhatsAppRedirect}
//             className="w-full bg-[#FDE6F6] border border-[#E0268E] mt-[10px] pt-[17px] pb-[17px] px-[42px] text-[#c1005e] font-semibold rounded-full sm:w-[200px] lg:mt-[20px] sm:bg-[#E0268E] sm:text-[#FFFFFF] transition-colors duration-[2000ms] ease-in-out"
//           >
//             ADD TO CART
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DemoProductDetailCard;