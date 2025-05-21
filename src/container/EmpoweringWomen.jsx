import React from 'react'
import kit from "../assets/images/kit3.png"
import rash from "../assets/images/rashFree.png"
function EmpoweringWomen() {
  return (
    <div className='bg-[#FDE6F6]  pb-10 flex flex-col gap-5 sm:pl-20 sm:pr-20 xl:flex-row xl:pl-[120px] xl:pr-[120px]'>
        <div className='w-full xl:hidden md:w-[60%] md:mx-auto'>
            <img src={kit} alt="kitImg" />
        </div>
        <div className=' flex flex-col pl-8 pr-8  gap-5 text-center w-full mx-auto sm:text-start lg:w-[400px] xl:w-[510px]  '>
            <div>
                <p className='hover:text-[#E0268E] transition-colors duration-1000 ease-in-out font-dm-sans text-[24px] xl:text-[28px]'>
                    Wet Tissue
                </p>
                <p className='text-[#747474] text-[16px] xl:text-[18px]'>
                    Whether it's during her cycle or a moment to recharge, our  
                </p>
            </div>
            <div>
                <p className='hover:text-[#E0268E] transition-colors duration-1000 ease-in-out font-dm-sans text-[24px] xl:text-[31px]'>
                    Disposal Cover
                </p>
                <p className='text-[#747474] text-[16px] xl:text-[18px]'>
                    Whether it's during her cycle or a moment to recharge, our  
                </p>
            </div>
            <div>
                <p className='hover:text-[#E0268E] transition-colors duration-1000 ease-in-out font-dm-sans text-[24px] xl:text-[31px]'>
                    Dry Tissue
                </p>
                <p className='text-[#747474] text-[16px] xl:text-[18px]'>
                    Whether it's during her cycle or a moment to recharge, our  
                </p>
            </div>
            <div>
                <p className='hover:text-[#E0268E] transition-colors duration-1000 ease-in-out font-dm-sans text-[24px] xl:text-[31px]'>
                    Soap Solution
                </p>
                <p className='text-[#747474] text-[16px] xl:text-[18px]'>
                    Whether it's during her cycle or a moment to recharge, our  
                </p>
            </div>
        </div>
        <div className='w-full hidden xl:block 2xl:w-[67%]'>
            <img src={kit} alt="kitImg" />
        </div>
        <div className='pl-8 pr-8  flex flex-col gap-9 sm:w-[85%] lg:w-[800px] xl:pl-0 xl:pr-0 xl:w-[827px]'>
            <div className='flex flex-col gap-10'>
                <p className='hover:text-[#E0268E] transition-colors duration-1000 ease-in-out font-dm-sans text-[24px] text-start xl:text-[31px]'>
                    Empowering Women with Hygiene Essentials, Right to Your Door
                </p>
                <li className='text-[16px] text-[#747474] xl:text-[16px]'>
                   No Artificial Fragrances or Harsh Chemicals
               </li>
                <li className='text-[16px] text-[#747474] xl:text-[16px]'>
                   Discreet Packaging for Your Privacy
               </li>
                <li className='text-[16px] text-[#747474] xl:text-[16px]'>
                   Assembled in Our Hygienic In-House Facility
               </li>
                <li className='text-[16px] text-[#747474] xl:text-[16px]'>
                   50+ Fast & Reliable Delivery Points
               </li>
                <li className='text-[16px] text-[#747474] xl:text-[16px]'>
                   Rated 5 Stars for Comfort, Quality & Care
               </li>
            </div>
            <div className='flex '>
                <div>
                    <img src={rash} alt="" />
                </div>
                <div>
                    <img src={rash} alt="" />
                </div>
                <div>
                    <img src={rash} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmpoweringWomen