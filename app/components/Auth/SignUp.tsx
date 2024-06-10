"use client";

import Image from 'next/image';
import React from 'react';
import ImageUrl from '@/public/images/Hiring1.svg';
import { signIn } from 'next-auth/react';

const SignUp = () => {
  return (
    <div className="overflow-hidden h-[84vh] flex flex-col items-center justify-center">
        {/*image*/}
        <Image 
        src={ImageUrl} 
        alt="image" 
        width={400} 
        height={200} 
        className="opacity-90"
        />
        {/* sign up button */}
        <button 
        onClick={()=>{
          signIn("google",{ callbackUrl: process.env.NEXT_PUBLIC_URL });
        }} 
        className="px-12 py-3 mt-[2rem] bg-teal-600 hover:bg-teal-800 transition-all
         duration-300 rounded-lg text-white">
            Sign Up Now
        </button>
        </div>
  )
}

export default SignUp