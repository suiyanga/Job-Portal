import ApplyButton from '@/app/components/Helper/ApplyButton';
import JobCard from '@/app/components/Helper/JobCard';
import { authOptions } from '@/auth';
import JobData from '@/data';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import React from 'react';

const JobDetails = async ({params}:{ params:{id:string} }) => {
   
    const singleJob = JobData.find((job) => job.id.toString() == params.id);
    const session = await getServerSession(authOptions);


    const firstFourJob = JobData.slice(0, 4);


  return (
    <div className="mt-20 mb-12">
        <div className="block sm:flex items-center justify-between w-[80%] mx-auto">
            <div className="flex-[0.7]">
                <JobCard job={singleJob!} />
            </div>
            {session && <ApplyButton />}
            {!session && (
                <Link href='/signup'>
                    <button className="px-8 py-5 bg-teal-700 rounded-lg text-white"> 
                        Sign Up To Apply
                        </button>
                </Link>
            )}
         </div>
         <div className="mt-16 w-[80%] mx-auto">
            <h1 className="text-[18px] lg:text-[20px] font-semibold"> Job Description</h1>
            <p className="text-[13px] mt-4 text-black text-opacity-70">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quo velit, nostrum iste ex dolor sapiente dignissimos perspiciatis 
                totam similique commodi doloremque doloribus nihil rem, 
                nulla unde consectetur porro cum magnam!
            </p>
            <h1 className="mt-8 text-[18px] lg:text-[20px] font-semibold"> Key Responsibilities</h1>
            <p className="text-[13px] mt-4 text-black text-opacity-70">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quo velit, nostrum iste ex dolor sapiente dignissimos perspiciatis 
                totam similique commodi doloremque doloribus nihil rem, 
                nulla unde consectetur porro cum magnam!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quo velit, nostrum iste ex dolor sapiente dignissimos perspiciatis 
                totam similique commodi doloremque doloribus nihil rem, 
                nulla unde consectetur porro cum magnam!
            </p>
            <h1 className="mt-8 text-[18px] lg:text-[20px] font-semibold"> Skills </h1>
            <ul className="mt-4">
                <li className="mt-4 text-black text-opacity-70"> React JS</li>
                <li className="mt-4 text-black text-opacity-70"> Next JS</li>
                <li className="mt-4 text-black text-opacity-70"> Tailwind CSS</li>
                <li className="mt-4 text-black text-opacity-70"> Typescript</li>
                <li className="mt-4 text-black text-opacity-70"> Next Auth</li>
            </ul>
            <h1 className="mt-8 text-[18px] lg:text-[20px] font-semibold"> Related Jobs </h1>
            <div className="mt-4">
              {firstFourJob.map((job)=>{
                 return (
                   <Link 
                   href={`/job/jobdetails/${job.id}`} 
                   className="space-y-6"
                   key={job.id}>
                     <JobCard job={job} />
                   </Link>
                    );
             })}
      </div> 
        </div>
        </div>
  )
}

export default JobDetails