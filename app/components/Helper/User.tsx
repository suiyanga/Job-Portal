/* eslint-disable @next/next/no-img-element */
"use client";

import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import React from 'react';

interface Props {
    session:Session;
}

const User = ({ session }: Props) => {
  return (
    <div onClick={() => {
      signOut({ callbackUrl:`${process.env.NEXT_PUBLIC_URL}/signup`});
    }}
    className="cursor-pointer">
        <img 
        src={`${session?.user?.image} `}
        alt="user" 
        className="w-[40px] h-[40px] rounded-full" 
        />
    </div>
  )
}

export default User;