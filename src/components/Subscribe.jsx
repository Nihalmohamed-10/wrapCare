import React, { useState } from "react";

const SubscribeSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsModalOpen(true);

    // Optional: auto close after 3 seconds
    setTimeout(() => {
      setIsModalOpen(false);
    }, 1000);
  };

  return (
    <div className="bg-[#f4f4f5] flex justify-center px-4 py-6 xl:pl-[120px] xl:pr-[120px]">
      <div className="bg-[#e0268e] w-full rounded-2xl px-6 py-20 flex flex-col sm:w-[85%] lg:pl-[50px] lg:pr-[50px] lg:flex-row items-center justify-between gap-8 xl:w-full">
        <div className="text-center md:text-left">
          <h2 className="font-dm-serif text-[30px] sm:text-3xl md:text-4xl font-bold text-[#FDE6F6] xl:text-[56px]">
            Subscribe to Wrapcare
          </h2>
          <p className="font-mona mt-8 text-base text-[#FDE6F6] font-semibold sm:text-lg md:text-xl xl:text-[24px]">
            Get latest offers & news real-world
          </p>
        </div>

        <form
          onSubmit={handleSubscribe}
          className="w-full max-w-md relative lg:w-[42%]"
        >
          <input
            type="email"
            placeholder="Your email"
            required
            className="w-full rounded-full px-6 py-3 outline-none text-base text-gray-800 bg-white sm:pr-32 xl:px-5 xl:py-5"
          />
          <button
            type="submit"
            className="font-mona w-full mt-4 md:mt-0 md:w-auto bg-[#2e3532] text-[#f4f4f5] font-semibold text-base px-6 py-3 rounded-full hover:bg-pink-700 transition-colors md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:rounded-l-none xl:px-5 xl:py-5"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>

  
      {isModalOpen && (
        <div className="fixed inset-0 bg-pink-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center max-w-sm w-full">
            <h2 className="font-mona text-xl font-semibold text-black mb-4">
              Registered Successfully!
            </h2>
            <p className="text-gray-700">Thank you for subscribing to Wrapcare!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubscribeSection;

// import React from "react";

// const SubscribeSection = () => {
//   return (
//     <div className=" bg-[#FDE6F6] flex justify-center px-4 py-6 xl:pl-[120px] xl:pr-[120px] ">
//       <div className="bg-[#F3D1E3] w-full  rounded-2xl px-6 py-20 flex flex-col sm:w-[85%]
//       lg:pl-[50px] lg:pr-[50px] lg:flex-row items-center justify-between gap-8 xl:w-full">
        
       
//         <div className=" text-center md:text-left">
//           <h2 className="font-dm-serif text-[30px] sm:text-3xl md:text-4xl font-bold text-gray-800 xl:text-[56px]">
//             Subscribe to Wrapcare
//           </h2>
//           <p className="font-dm-serif mt-8 text-base text-[#E0268E] font-semibold sm:text-lg md:text-xl xl:text-[24px]">
//             Get latest offers & news real-world
//           </p>
//         </div>

        
//         <form className="w-full max-w-md relative lg:w-[42%]">
//           <input
//             type="email"
//             placeholder="Your email"
//             className="w-full rounded-full px-6 py-3 outline-none text-base text-gray-800 bg-white pr-32 xl:px-5 xl:py-5"
//           />
//           <button
//             type="submit"
//             className="w-full mt-4 md:mt-0 md:w-auto bg-pink-600 text-white font-semibold text-base px-6 py-3 rounded-full hover:bg-pink-700 transition-colors 
//             md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:rounded-l-none xl:px-5 xl:py-5"
//           >
//             SUBSCRIBE
//           </button>
//         </form>
        
//       </div>
//     </div>
//   );
// };

// export default SubscribeSection;


// import React from "react";

// const SubscribeSection = () => {
//   return (
//     <div className="bg-pink-100 flex justify-center py-30 px-4">
//       <div className="bg-[#F3D1E3] pl-[60px] pr-[60px] pb-10 pt-10 rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
//         <div>
//           <h2 className="w-[558px] text-[40px] font-bold text-gray-800 mt-3">
//             Subscribe to Wrapcare
//           </h2>
//           <p className="mt-3 text-[22px] text-gray-700">
//             Get latest offers & news real-world
//           </p>
//         </div>
//         <form className="flex items-center w-full max-w-md">
//           <input
//             type="email"
//             placeholder="Your email"
//             className="flex-grow rounded-l-full px-6 py-3 outline-none text-base text-gray-800 bg-white"
//           />
//           <button
//             type="submit"
//             className="bg-pink-600 text-white font-semibold text-base px-8 py-3 rounded-r-full hover:bg-pink-700 transition-colors"
//           >
//             SUBSCRIBE
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SubscribeSection;
