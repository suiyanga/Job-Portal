import React from 'react';
import LogoImage from '@/public/images/merit.svg'
import Link from 'next/link';
import Image from 'next/image';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth';
import User from '../Helper/User';

const Nav = async () => {
    const session = await getServerSession(authOptions);

  return (
    <div className="h-[13vh] overflow-hidden shadow-md">
        <div className="w-[90%] md:w-[80%] h-[100%] mx-auto flex items-center justify-between">
            {/* logo */}
            <div className="w-[100px] h-[100px] md:w-[150px] md:h-[150px]">
                <Link href="/">
                <Image 
                src={LogoImage} 
                alt="Logo" 
                width={250} 
                height={250} 
                className="w-[100%] h-[100%]" 
                />
                </Link>
            </div>
            <div className="flex items-center space-x-4">
                {!session && (
                <Link href="/signup">
                    <button className="px-4 py-1.5 text-[12px] sm:text-[14px] sm:px-6 sm:py-2 bg-gray-700 font-semibold
                     text-white rounded-lg hover:bg-gray-950 transition-all duration-300">
                        Sign Up
                    </button>
                </Link>
                )}
                {session && <User session={session} />}
                {session && (
                    <button className="px-4 py-1.5 text-[12px] sm:text-[14px] sm:px-6 sm:py-2 bg-gray-700 font-semibold
                    text-white rounded-lg hover:bg-gray-950 transition-all duration-300">
                       Post a Job
                   </button>
                )}
            </div>
        </div>
    </div>
  )
}

export default Nav;