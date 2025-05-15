

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'; 
import { Navigation, Autoplay } from 'swiper/modules';
import testi1 from "../assets/images/testi1.jpg";
import testi2 from "../assets/images/testi2.jpg"; 

const TestimonialSlider = () => {
  const swiperRef = useRef(null); 

  return (
    <div className="bg-pink-100  flex flex-col items-center justify-center  py-12">
      <h2 className="font-dm-sans text-[38px] font-bold mb-10 text-center xl:text-[64px]">Customers Talk</h2>

      <div className="w-full w-70% relative sm:w-[85%] lg:w-[70%] ">
        <div>
          
        </div>
       <div className='p-[16px]'>
          <Swiper
            ref={swiperRef} 
            navigation={{
              prevEl: '.prev-button',
              nextEl: '.next-button',
            }}
            modules={[Navigation, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 1000 }} 
          >
            <SwiperSlide>
              <div className="bg-white rounded-2xl shadow-md p-6">
                <div className="flex items-center space-x-4 mb-2">
                  <img
                    src={testi1}
                    alt="user"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="text-sm font-medium">
                    PetParent7 - <span className="text-gray-500">22 Jul</span>
                  </div>
                </div>
  
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.155c.969 0 1.371 1.24.588 1.81l-3.364 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.922-.755 1.688-1.538 1.118l-3.364-2.448a1 1 0 00-1.175 0l-3.364 2.448c-.783.57-1.838-.196-1.538-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.07 9.385c-.783-.57-.38-1.81.588-1.81h4.155a1 1 0 00.95-.69l1.286-3.958z" />
                    </svg>
                  ))}
                </div>
  
                <p className="text-gray-700 text-sm leading-relaxed">
                  KaiB was phenomenal with our dog, Max! We were first-time users of a pet-sitting service and were quite nervous. Kai's professionalism and warmth immediately put us at ease. She visited twice a day for a week and provided us with detailed updates and adorable pictures. Max was happy, healthy, and well-exercised throughout our trip. Kai's genuine love for animals shines through in her work. We will definitely book her again and highly recommend her services!
                </p>
              </div>
            </SwiperSlide>
  
            <SwiperSlide>
              <div className="bg-white rounded-2xl shadow-md p-6">
                <div className="flex items-center space-x-4 mb-2">
                  <img
                    src={testi2}
                    alt="user"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="text-sm font-medium">
                    PetParent8 - <span className="text-gray-500">25 Jul</span>
                  </div>
                </div>
  
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.155c.969 0 1.371 1.24.588 1.81l-3.364 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.922-.755 1.688-1.538 1.118l-3.364-2.448a1 1 0 00-1.175 0l-3.364 2.448c-.783.57-1.838-.196-1.538-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.07 9.385c-.783-.57-.38-1.81.588-1.81h4.155a1 1 0 00.95-.69l1.286-3.958z" />
                    </svg>
                  ))}
                </div>
  
                <p className="text-gray-700 text-sm leading-relaxed">
                  KaiB was phenomenal with our dog, Max! We were first-time users of a pet-sitting service and were quite nervous. Kai's professionalism and warmth immediately put us at ease. She visited twice a day for a week and provided us with detailed updates and adorable pictures. Max was happy, healthy, and well-exercised throughout our trip. Kai's genuine love for animals shines through in her work. We will definitely book her again and highly recommend her services!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white rounded-2xl shadow-md p-6">
                <div className="flex items-center space-x-4 mb-2">
                  <img
                    src={testi1}
                    alt="user"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="text-sm font-medium">
                    PetParent7 - <span className="text-gray-500">22 Jul</span>
                  </div>
                </div>
  
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.155c.969 0 1.371 1.24.588 1.81l-3.364 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.922-.755 1.688-1.538 1.118l-3.364-2.448a1 1 0 00-1.175 0l-3.364 2.448c-.783.57-1.838-.196-1.538-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.07 9.385c-.783-.57-.38-1.81.588-1.81h4.155a1 1 0 00.95-.69l1.286-3.958z" />
                    </svg>
                  ))}
                </div>
  
                <p className="text-gray-700 text-sm leading-relaxed">
                  KaiB was phenomenal with our dog, Max! We were first-time users of a pet-sitting service and were quite nervous. Kai's professionalism and warmth immediately put us at ease. She visited twice a day for a week and provided us with detailed updates and adorable pictures. Max was happy, healthy, and well-exercised throughout our trip. Kai's genuine love for animals shines through in her work. We will definitely book her again and highly recommend her services!
                </p>
              </div>
            </SwiperSlide>
  
            <SwiperSlide>
              <div className="bg-white rounded-2xl shadow-md p-6">
                <div className="flex items-center space-x-4 mb-2">
                  <img
                    src={testi2}
                    alt="user"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="text-sm font-medium">
                    PetParent8 - <span className="text-gray-500">25 Jul</span>
                  </div>
                </div>
  
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.155c.969 0 1.371 1.24.588 1.81l-3.364 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.922-.755 1.688-1.538 1.118l-3.364-2.448a1 1 0 00-1.175 0l-3.364 2.448c-.783.57-1.838-.196-1.538-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.07 9.385c-.783-.57-.38-1.81.588-1.81h4.155a1 1 0 00.95-.69l1.286-3.958z" />
                    </svg>
                  ))}
                </div>
  
                <p className="text-gray-700 text-sm leading-relaxed">
                  KaiB was phenomenal with our dog, Max! We were first-time users of a pet-sitting service and were quite nervous. Kai's professionalism and warmth immediately put us at ease. She visited twice a day for a week and provided us with detailed updates and adorable pictures. Max was happy, healthy, and well-exercised throughout our trip. Kai's genuine love for animals shines through in her work. We will definitely book her again and highly recommend her services!
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
          <div>
      
        </div>
       </div>

       
      </div>
    </div>
  );
};

export default TestimonialSlider;
