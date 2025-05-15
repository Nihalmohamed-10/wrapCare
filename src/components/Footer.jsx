import React from "react";
import { FaFacebookF, FaTwitter, FaVimeoV, FaYoutube } from "react-icons/fa";
import newLogo from "../assets/images/newLogo.png";
const Footer = () => {
  return (
    <footer className="w-full font-sans-serif bg-[#FDE6F6] text-gray-900 lg:px-14 py-10 xl:pl-[162px] xl:pr-[162px]">
      <div className="flex flex-col w-full  justify-between items-center gap-6 border-b border-[#E0268E80] pb-10 lg:flex-row lg:pr-10 lg:pl-10">
        <ul className="flex flex-col flex-wrap gap-10 text-start items-center justify-center text-[16px] font-medium lg:flex-row">
          <li>
            <a href="#" className="hover:text-pink-600">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-600">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-600">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-600">
              F&Q
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-600">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex gap-12 text-xl">
          <a href="#" className="hover:text-pink-600">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-pink-600">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-pink-600">
            <FaVimeoV />
          </a>
          <a href="#" className="hover:text-pink-600">
            <FaYoutube />
          </a>
        </div>
      </div>

      <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-[18px] gap-4 md:text-[16px] md:pr-10 md:pl-10">
        <p>© 2022 ABC. All rights reserved.</p>
        <div>
          <img src={newLogo} alt="logoimg" className="h-10 w-auto" />
        </div>
        <div className="flex gap-6 text-[18px] md:text-[16px]">
          <a href="#" className="hover:text-pink-600">
            Terms of Service
          </a>
          <a href="#" className="hover:text-pink-600">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import React from 'react';
// import { FaFacebookF, FaTwitter, FaVimeoV, FaYoutube } from 'react-icons/fa';
// import logo from "../assets/images/wrapCareLogo.jpg";

// const Footer = () => {
//   return (
//     <footer className="bg-pink-100 text-gray-900 px-6 md:px-20 py-10">

//       <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-[#2B3D51] pb-10">

//         <ul className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-16 text-[16px] font-medium text-center">
//           <li><a href="#" className="hover:text-pink-600">Home</a></li>
//           <li><a href="#" className="hover:text-pink-600">Features</a></li>
//           <li><a href="#" className="hover:text-pink-600">Products</a></li>
//           <li><a href="#" className="hover:text-pink-600">F&Q</a></li>
//           <li><a href="#" className="hover:text-pink-600">Contact</a></li>
//         </ul>

//         <div className="flex gap-6 text-xl justify-center">
//           <a href="#" className="hover:text-pink-600"><FaFacebookF /></a>
//           <a href="#" className="hover:text-pink-600"><FaTwitter /></a>
//           <a href="#" className="hover:text-pink-600"><FaVimeoV /></a>
//           <a href="#" className="hover:text-pink-600"><FaYoutube /></a>
//         </div>
//       </div>

//       <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-[14px] gap-4">

//         <p className="text-center md:text-left">© 2022 ABC. All rights reserved.</p>

//         <div className="w-[100px]">
//           <img src={logo} alt="logoimg" className="mx-auto md:mx-0" />
//         </div>

//         <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-center md:text-right">
//           <a href="#" className="hover:text-pink-600">Terms of Service</a>
//           <a href="#" className="hover:text-pink-600">Privacy Policy</a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
