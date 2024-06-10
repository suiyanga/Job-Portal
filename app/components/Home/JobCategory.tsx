import React from 'react'
import Heading from '../Helper/Heading';
import JobCategoryCard from '../Helper/JobCategoryCard';

const JobCategory = () => {
  return (
    <div className="pt-20 pb-12">
        <Heading 
        mainHeading="Popular Job Categories" 
        subHeading="2020 jobs live - 289 added today."  
        />
        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[4rem] gap-[3rem]
         items-center">
          <JobCategoryCard image="/images/currency.svg" category="Finance" openPosition="28" />
          <JobCategoryCard image="/images/advertising.svg" category="Marketing" openPosition="33" />
          <JobCategoryCard image="/images/edit-image.svg" category="Design" openPosition="52" />
          <JobCategoryCard image="/images/factory.svg" category="Development" openPosition="76" />
          <JobCategoryCard image="/images/conference.svg" category="Human Resource" openPosition="25" />
          <JobCategoryCard image="/images/shipped.svg" category="Automotive Jobs" openPosition="20" />
          <JobCategoryCard image="/images/customer-support.svg" category="Customer Care" openPosition="35" />
          <JobCategoryCard image="/images/like.svg" category="Health & Care" openPosition="18" />
          <JobCategoryCard image="/images/services.svg" category="Project Management" openPosition="23" />
         </div>
    </div>
  )
}

export default JobCategory;