import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import newLogo from "../assets/images/newLogo.png";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToHomeSection = () => {
    const element = document.getElementById("home-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToCuratedEssential = () => {
    const element = document.getElementById("curated-essential");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProductSection = () => {
    const element = document.getElementById("product-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToFacSection = () => {
    const element = document.getElementById("fac-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToFooterSection = () => {
    const element = document.getElementById("footer-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`font-mona w-full bg-[#e0268e] px-6 lg:px-[60px] xl:px-[120px] py-4 flex justify-between items-center z-50 transition-all duration-300 ${
        isSticky ? "fixed top-0 left-0 shadow-md" : "relative"
      }`}
    >
      <div onClick={scrollToHomeSection} className="cursor-pointer">
        <img src={newLogo} alt="logoimg" className="h-15 w-auto" />
      </div>

      <div className="hidden lg:flex gap-10 items-center">
        <ul className="flex space-x-10 text-white font-medium text-[16px]">
          <li className="cursor-pointer hover:underline" onClick={scrollToHomeSection}>Home</li>
          <li className="cursor-pointer hover:underline" onClick={scrollToCuratedEssential}>Features</li>
          <li className="cursor-pointer hover:underline" onClick={scrollToProductSection}>Products</li>
          <li className="cursor-pointer hover:underline" onClick={scrollToFacSection}>F&Q</li>
          <li className="cursor-pointer hover:underline" onClick={scrollToFooterSection}>Contact</li>
        </ul>

        <button
          onClick={scrollToProductSection}
          className="bg-white text-[#E0268E] font-semibold px-6 py-2 rounded-full hover:bg-pink-100 transition duration-300"
        >
          Order Now
        </button>
      </div>

      <div
        className="lg:hidden text-white text-3xl cursor-pointer z-50"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-[#e0268e] bg-opacity-95 backdrop-blur-sm flex flex-col items-center justify-center z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <ul className="flex flex-col gap-10 text-white font-semibold text-2xl text-center">
            <li
              className="cursor-pointer hover:underline"
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(false);
                scrollToHomeSection();
              }}
            >
              Home
            </li>
            <li
              className="cursor-pointer hover:underline"
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(false);
                scrollToCuratedEssential();
              }}
            >
              Features
            </li>
            <li
              className="cursor-pointer hover:underline"
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(false);
                scrollToProductSection();
              }}
            >
              Products
            </li>
            <li
              className="cursor-pointer hover:underline"
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(false);
                scrollToFacSection();
              }}
            >
              F&Q
            </li>
            <li
              className="cursor-pointer hover:underline"
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(false);
                scrollToFooterSection();
              }}
            >
              Contact
            </li>
          </ul>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMobileMenuOpen(false);
              scrollToProductSection();
            }}
            className="mt-12 bg-white text-[#E0268E] font-semibold px-8 py-3 rounded-full text-xl hover:bg-pink-100 transition duration-300"
          >
            Order Now
          </button>

          {/* Social Icons */}
          <div className="flex gap-8 mt-8 text-white text-2xl">
            <a
              href="https://www.facebook.com/share/1feRLvJ5Bf/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-200"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/wrap_care?igsh=ZTk2dndoa3doOWE3"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-200"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com/@wrapcare?si=nVBTTa0d8JnOhNpU"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-200"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// import {
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";



// import newLogo from "../assets/images/newLogo.png";
// import { useState, useEffect } from "react";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setIsSticky(true);
//       } else {
//         setIsSticky(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToHomeSection = () => {
//     const element = document.getElementById("home-section");
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const scrollToCuratedEssential = () => {
//     const element = document.getElementById("curated-essential");
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const scrollToProductSection = () => {
//     const element = document.getElementById("product-section");
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const scrollToFacSection = () => {
//     const element = document.getElementById("fac-section");
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const scrollToFooterSection = () => {
//     const element = document.getElementById("footer-section");
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <nav
//       className={`w-full bg-[#e0268e] px-6 lg:px-[120px] py-4 flex justify-between items-center z-50 transition-all duration-300 ${
//         isSticky ? "fixed top-0 left-0 shadow-md" : "relative"
//       }`}
//     >
    
//       <div onClick={scrollToHomeSection} className="cursor-pointer">
//         <img src={newLogo} alt="logoimg" className="h-15 w-auto" />
//       </div>

     
//       <div className="hidden lg:flex gap-10 items-center">
//         <ul className="flex space-x-10 text-white font-medium text-[16px]">
//           <li className="cursor-pointer hover:underline" onClick={scrollToHomeSection}>Home</li>
//           <li className="cursor-pointer hover:underline" onClick={scrollToCuratedEssential}>Features</li>
//           <li className="cursor-pointer hover:underline" onClick={scrollToProductSection}>Products</li>
//           <li className="cursor-pointer hover:underline" onClick={scrollToFacSection}>F&Q</li>
//           <li className="cursor-pointer hover:underline" onClick={scrollToFooterSection}>Contact</li>
//         </ul>

      
//         <button
//           onClick={scrollToProductSection}
//           className="bg-white text-[#E0268E] font-semibold px-6 py-2 rounded-full hover:bg-pink-100 transition duration-300"
//         >
//           Order Now
//         </button>
//       </div>

      
//       <div
//         className="lg:hidden text-white text-3xl cursor-pointer z-50"
//         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//       >
//         {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
//       </div>

 
//       {isMobileMenuOpen && (
//         <div
//           className="fixed inset-0 bg-[#e0268e] bg-opacity-95 backdrop-blur-sm flex flex-col items-center justify-center z-40"
//           onClick={() => setIsMobileMenuOpen(false)}
//         >
//           <ul className="flex flex-col gap-10 text-white font-semibold text-2xl text-center">
//             <li
//               className="cursor-pointer hover:underline"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setIsMobileMenuOpen(false);
//                 scrollToHomeSection();
//               }}
//             >
//               Home
//             </li>
//             <li
//               className="cursor-pointer hover:underline"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setIsMobileMenuOpen(false);
//                 scrollToCuratedEssential();
//               }}
//             >
//               Features
//             </li>
//             <li
//               className="cursor-pointer hover:underline"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setIsMobileMenuOpen(false);
//                 scrollToProductSection();
//               }}
//             >
//               Products
//             </li>
//             <li
//               className="cursor-pointer hover:underline"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setIsMobileMenuOpen(false);
//                 scrollToFacSection();
//               }}
//             >
//               F&Q
//             </li>
//             <li
//               className="cursor-pointer hover:underline"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setIsMobileMenuOpen(false);
//                 scrollToFooterSection();
//               }}
//             >
//               Contact
//             </li>
//           </ul>

      
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               setIsMobileMenuOpen(false);
//               scrollToProductSection();
//             }}
//             className="mt-12 bg-white text-[#E0268E] font-semibold px-8 py-3 rounded-full text-xl hover:bg-pink-100 transition duration-300"
//           >
//             Order Now
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// import {
//   FaUser,
//   FaShoppingBag,
//   FaSearch,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";
// import newLogo from "../assets/images/newLogo.png";
// import { useState, useEffect } from "react";


// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setIsSticky(true);
//       } else {
//         setIsSticky(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//    const scrollToHomeSection = () => {
//     const element = document.getElementById("home-section");
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const scrollToCuratedEssential = () => {
//     const element = document.getElementById("curated-essential");
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const scrollToProductSection = () => {
//     const element = document.getElementById("product-section");
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//    const scrollToFacSection = () => {
//     const element = document.getElementById("fac-section");
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const scrollToFooterSection = () => {
//     const element = document.getElementById("footer-section");
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <nav
//       className={`w-full bg-[#e0268e] px-6 lg:px-[120px] py-4 flex justify-between items-center z-50 transition-all duration-300 ${
//         isSticky ? "fixed top-0 left-0 shadow-md" : "relative"
//       }`}
//     >
//       <div
//       onClick={scrollToHomeSection}
//       className="cursor-pointer"
//       >
//         <img src={newLogo} alt="logoimg" className="h-15 w-auto" />
//       </div>

//       <div className="hidden lg:flex gap-10">
//         <ul className="flex space-x-10 text-white font-medium text-[16px]">
//           <li className="cursor-pointer hover:underline"
//           onClick={scrollToHomeSection}
//           >Home</li>
//           <li
//             className="cursor-pointer hover:underline"
//             onClick={scrollToCuratedEssential}
//           >
//             Features
//           </li>
//           <li
//             className="cursor-pointer hover:underline"
//             onClick={scrollToProductSection}
//           >
//             Products
//           </li>
//           <li className="cursor-pointer hover:underline"
//           onClick={scrollToFacSection}
//           >F&Q</li>
//           <li className="cursor-pointer hover:underline"
//           onClick={scrollToFooterSection}
//           >Contact</li>
//         </ul>

//         <div className="flex space-x-6 text-white text-lg">
//           <FaUser className="cursor-pointer" />
//           <FaShoppingBag className="cursor-pointer" />
//           <FaSearch className="cursor-pointer" />
//         </div>
//       </div>

//       <div
//         className="lg:hidden text-white text-3xl cursor-pointer z-50"
//         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//       >
//         {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
//       </div>

//       {isMobileMenuOpen && (
//         <div
//           className="fixed inset-0 bg-[#e0268e] bg-opacity-95 backdrop-blur-sm flex flex-col items-center justify-center z-40"
//           onClick={() => setIsMobileMenuOpen(false)}
//         >
//           <ul className="flex flex-col gap-10 text-white font-semibold text-2xl text-center">
//             <li className="cursor-pointer hover:underline"
//             onClick={(e) => {
//                 e.stopPropagation();
//                 setIsMobileMenuOpen(false);
//                 scrollToHomeSection();
//               }}
//             >Home</li>
//             <li
//               className="cursor-pointer hover:underline"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setIsMobileMenuOpen(false);
//                 scrollToCuratedEssential();
//               }}
//             >
//               Features
//             </li>
//             <li
//               className="cursor-pointer hover:underline"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setIsMobileMenuOpen(false);
//                 scrollToProductSection();
//               }}
//             >
//               Products
//             </li>
//             <li className="cursor-pointer hover:underline"
//             onClick={(e) => {
//                 e.stopPropagation();
//                 setIsMobileMenuOpen(false);
//                 scrollToFacSection();
//               }}
//             >F&Q</li>
//             <li className="cursor-pointer hover:underline"
//             onClick={(e) => {
//                 e.stopPropagation();
//                 setIsMobileMenuOpen(false);
//                 scrollToFooterSection();
//               }}
//             >Contact</li>
//           </ul>
//           <div className="flex gap-10 text-white text-3xl pt-12">
//             <FaUser className="cursor-pointer" />
//             <FaShoppingBag className="cursor-pointer" />
//             <FaSearch className="cursor-pointer" />
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



// import {
//   FaUser,
//   FaShoppingBag,
//   FaSearch,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";
// import newLogo from "../assets/images/newLogo.png";
// import { useState, useEffect } from "react";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);

//   // Detect scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         // Show after scrolling 100px
//         setIsSticky(true);
//       } else {
//         setIsSticky(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`w-full bg-[#FBA6DE] px-6 lg:px-[120px] py-4 flex justify-between items-center z-50 transition-all duration-300 ${
//         isSticky ? "fixed top-0 left-0 shadow-md" : "relative"
//       }`}
//     >
//       <div>
//         <img src={newLogo} alt="logoimg" className="h-15 w-auto" />
//       </div>

//       <div className="flex gap-10">
//         <ul className="hidden lg:flex space-x-10 text-white font-medium text-[16px]">
//           <li className="cursor-pointer hover:underline">Home</li>
//           <li className="cursor-pointer hover:underline">Features</li>
//           <li className="cursor-pointer hover:underline">Products</li>
//           <li className="cursor-pointer hover:underline">F&Q</li>
//           <li className="cursor-pointer hover:underline">Contact</li>
//         </ul>
  
//         <div className="hidden lg:flex space-x-6 text-white text-lg">
//           <FaUser className="cursor-pointer" />
//           <FaShoppingBag className="cursor-pointer" />
//           <FaSearch className="cursor-pointer" />
//         </div>
//       </div>

//       <div
//         className="lg:hidden text-white text-xl cursor-pointer"
//         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//       >
//         {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
//       </div>

//       {isMobileMenuOpen && (
//         <div className="absolute top-16 left-0 w-full bg-[#FBA6DE] text-white flex flex-col items-start px-6 py-4 gap-0 lg:hidden z-10 shadow-md">
//           <ul className="flex flex-col gap-4 font-medium w-full">
//             <li className="cursor-pointer hover:underline">Home</li>
//             <li className="cursor-pointer hover:underline">Features</li>
//             <li className="cursor-pointer hover:underline">Products</li>
//             <li className="cursor-pointer hover:underline">F&Q</li>
//             <li className="cursor-pointer hover:underline">Contact</li>
//           </ul>
//           <div className="flex gap-6 text-lg pt-2">
//             <FaUser className="cursor-pointer" />
//             <FaShoppingBag className="cursor-pointer" />
//             <FaSearch className="cursor-pointer" />
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// import {
//   FaUser,
//   FaShoppingBag,
//   FaSearch,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";
// import newLogo from "../assets/images/newLogo.png";
// import { useState } from "react";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-[#FBA6DE] px-6 lg:px-[120px] py-4 flex justify-between items-center z-50 shadow-md">
//       <div>
//         <img src={newLogo} alt="logoimg" className="h-15 w-auto" />
//       </div>

//       <ul className="hidden lg:flex space-x-10 text-white font-medium text-[16px]">
//         <li className="cursor-pointer hover:underline">Home</li>
//         <li className="cursor-pointer hover:underline">Features</li>
//         <li className="cursor-pointer hover:underline">Products</li>
//         <li className="cursor-pointer hover:underline">F&Q</li>
//         <li className="cursor-pointer hover:underline">Contact</li>
//       </ul>

//       <div className="hidden lg:flex space-x-6 text-white text-lg">
//         <FaUser className="cursor-pointer" />
//         <FaShoppingBag className="cursor-pointer" />
//         <FaSearch className="cursor-pointer" />
//       </div>

//       <div
//         className="lg:hidden text-white text-xl cursor-pointer"
//         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//       >
//         {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
//       </div>

//       {isMobileMenuOpen && (
//         <div className="absolute top-16 left-0 w-full bg-[#FBA6DE] text-white flex flex-col items-start px-6 py-4 gap-4 lg:hidden z-10 shadow-md">
//           <ul className="flex flex-col gap-4 font-medium w-full">
//             <li className="cursor-pointer hover:underline">Home</li>
//             <li className="cursor-pointer hover:underline">Features</li>
//             <li className="cursor-pointer hover:underline">Products</li>
//             <li className="cursor-pointer hover:underline">F&Q</li>
//             <li className="cursor-pointer hover:underline">Contact</li>
//           </ul>
//           <div className="flex gap-6 text-lg pt-2">
//             <FaUser className="cursor-pointer" />
//             <FaShoppingBag className="cursor-pointer" />
//             <FaSearch className="cursor-pointer" />
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// import { FaUser, FaShoppingBag, FaSearch } from "react-icons/fa";
// import logo2 from "../assets/images/logo2.jpg";
// const Navbar = () => {
//   return (
//     <nav className="bg-[#FBA6DE] pt-[16px] pb-[16px] pl-[120px] pr-[120px] flex justify-around items-center">
//       <div className="">
//         <img src={logo2} alt="logoimg" />
//       </div>

//       <div className=" flex justify-end gap-15 w-[67%]">
//         <ul className="hidden md:flex space-x-15 text-white font-medium">
//           <li className="cursor-pointer text-[16px]  hover:underline">Home</li>
//           <li className="cursor-pointer hover:underline">Features</li>
//           <li className="cursor-pointer hover:underline">Products</li>
//           <li className="cursor-pointer hover:underline">F&Q</li>
//           <li className="cursor-pointer hover:underline">Contact</li>
//         </ul>

//         <div className="flex space-x-10 text-white text-lg">
//           <FaUser className="cursor-pointer" />
//           <FaShoppingBag className="cursor-pointer" />
//           <FaSearch className="cursor-pointer" />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
