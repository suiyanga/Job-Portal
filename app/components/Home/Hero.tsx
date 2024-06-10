import React from 'react';
import HeroImg from '@/public/images/Looking.svg';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
        <div className="w-[100%] h-[60vh] flex flex-col items-center justify-center">
            <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[2rem]">
                 {/* content */}
                <div>
                    <h1 className="text-[20px] sm:text-[35px] lg:text-[45px]  xl:text-[55px] text-[#05264e]
                     leading-[2rem] md:leading-[3rem] lg:leading-[4rem] font-black ">
                        The 
                        <span className="text-teal-500"> Easiest Way </span><br />
                        To Get Your New Job
                    </h1>
                    <p className="text-[#4f5e64] text-[14px] md:text-[18px] mt-[1rem]">
                    Trusted by thousands of job seekers daily, 
                    connecting talent with top employers across the globe. 
                    </p>
                    {/* search bar */}
                    <div className="mt-[1.5rem]">
                        <input 
                        className="w-[60%] md:w-[70%] lg:w-[75%] px-5 py-4 outline-none rounded-l-md bg-gray-200" 
                        type="text" 
                        placeholder="Search Job." 
                        />
                        <button className="px-5 py-4 outline-none rounded-r-md bg-teal-500 text-white">
                            Search
                        </button>
                    </div>
                </div>
                {/* image */}
                <div className="hidden lg:block">
                    <Image 
                    src={HeroImg} 
                    alt="hero" 
                    width={600} 
                    height={300} 
                    />
                </div>
            </div>
        </div>
        </div>
  )
}

export default Hero;