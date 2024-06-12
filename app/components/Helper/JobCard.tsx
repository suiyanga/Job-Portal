import { Job } from '@/data';
import Image from 'next/image';
import React from 'react';
import { BiMoney } from 'react-icons/bi';
import { FaMapLocation, FaRegBookmark } from 'react-icons/fa6';

interface Props {
    job:Job;
}

const JobCard = ({job}:Props) => {
  return (
    <div className="p-4 mb-6 relative border-2 cursor-pointer hover:scale-110 hover:shadow-sm
     transition-all duration-300 border-gray-500 rounded-lg border-opacity-10">
        <div className="flex items-center space-x-6">
          <div>
          <Image src={job?.image} alt={job?.title} width={50} height={50} />
          </div> 
          <div>
            <h1 className="lg:text-[17px] sm:text-[15px] font-semibold mb-[0.4rem]"> 
                {job?.title} 
                </h1>
                <div className="flex items-center md:space-x-10 space-x-4 ">
                    <div className="flex items-center space-x-2 ">
                        <FaMapLocation className="w-[0.6rem] h-[0.8rem] text-pink-700" />
                        <p>{job?.location}</p>
                    </div>
                    <div className="flex items-center space-x-2 ">
                        <BiMoney className="w-[0.6rem] h-[0.8rem] text-pink-700" />
                        <p>{job?.salary}</p>
                    </div>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-4 mt-[1rem]">
                    <div className="lg:text-[12px] sm:text-[8px] text-black text-opacity-80 px-3 sm:px-6 py-1
                     rounded-full bg-opacity-30 font-semibold capitalize bg-teal-600">
                        {job?.jobtype}
                        </div>
                        <div className="lg:text-[12px] sm:text-[8px] text-black text-opacity-80 px-3 sm:px-6 py-1
                     rounded-full bg-opacity-30 font-semibold capitalize bg-red-400">
                        Private
                        </div>
                        <div className="lg:text-[12px] sm:text-[8px] text-black text-opacity-80 px-3 sm:px-6 py-1
                     rounded-full bg-opacity-30 font-semibold capitalize bg-cyan-600">
                        Urgent
                        </div>
                    </div>
          </div>
        </div>
      <div className="absolute top-[1rem] right-[1rem]">
        <FaRegBookmark className="w-[1rem] h-[1rem]" />
        </div>        
    </div>
  );
};

export default JobCard;