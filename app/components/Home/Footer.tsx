import React from 'react';
import FooterImage from '@/public/images/merit.svg';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-[#008080]">
        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem]
         items-start pb-[2rem] border-b-2 border-white border-opacity-10">
            {/* 1st part of footer */}
        <div >
            <div className="w-[100px] h-[100px] md:w-[150px] md:h-[150px]">
            <Link href="/">
                <Image 
                src={FooterImage} 
                alt="Logo" 
                width={250} 
                height={250} 
                className="w-[100%] h-[100%]" 
                />
                </Link>
            </div>
                
            {/* social icons */}
            <div className="mt-[1.5rem] flex items-center space-x-3">
                <div className="w-[2.4rem] h-[2.4rem] bg-blue-600 rounded-full flex items-center
                 justify-center flex-col">
                    <FaFacebook className="text-white" />
                 </div>
                 <div className="w-[2.4rem] h-[2.4rem] bg-sky-400 rounded-full flex items-center
                 justify-center flex-col">
                    <FaTwitter className="text-white" />
                 </div>
                 <div className="w-[2.4rem] h-[2.4rem] bg-red-600 rounded-full flex items-center
                 justify-center flex-col">
                    <FaYoutube className="text-white" />
                 </div>
                 <div className="w-[2.4rem] h-[2.4rem] bg-pink-600 rounded-full flex items-center
                 justify-center flex-col">
                    <FaInstagram className="text-white" />
                 </div>
                </div>
            </div>
            {/* 2nd part of footer */}
            <div>
                <h1 className="sm:text-[15px] w-fit text-white font-semibold mb-[1.5rem]">
                    About Us
                    </h1>
                    <p className="sm:text-[13px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30
                     mb-[0.7rem]">
                        Job
                     </p>
                     <p className="sm:text-[13px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30
                     mb-[0.7rem]">
                        Privacy
                     </p>
                     <p className="sm:text-[13px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30
                     mb-[0.7rem]">
                        Policy
                     </p>
                     <p className="sm:text-[13px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30
                     mb-[0.7rem]">
                        Application
                     </p>
                     <p className="sm:text-[13px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30
                     mb-[0.7rem]">
                        Candidates
                     </p>
            </div>
            {/* 3rd part of footer */}
            <div>
                <h1 className="sm:text-[15px] w-fit text-white font-semibold mb-[1.5rem]">
                    Quick Links
                    </h1>
                    <p className="sm:text-[13px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30
                     mb-[0.7rem]">
                        All Jobs
                     </p>
                     <p className="sm:text-[13px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30
                     mb-[0.7rem]">
                        Job Details
                     </p>
                     <p className="sm:text-[13px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30
                     mb-[0.7rem]">
                        How to Apply
                     </p>
                     <p className="sm:text-[13px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30
                     mb-[0.7rem]">
                        Resume
                     </p>
            </div>
            {/*4th part of footer */}
            <div>
                <h1 className="sm:text-[15px] w-fit text-white font-semibold mb-[1.5rem]">
                    Get in Touch
                    </h1>
                    <p className="sm:text-[13px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30
                     mb-[0.7rem]">
                        +254 713 341 586
                     </p>
                     <p className="sm:text-[13px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30
                     mb-[0.7rem]">
                        augustkinya@gmail.com
                     </p>
                     <p className=" sm:text-[13px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-30
                     mb-[0.7rem]">
                        Nairobi, Kenya
                     </p>
            </div>
         </div>
         <h1 className="mt-[2rem] text-[12px] w-[80%] mx-auto text-white opacity-50">
            COPYRIGHT BY SUIYANGA.DEV - 2024
         </h1>
    </div>
  )
}

export default Footer;