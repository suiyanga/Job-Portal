export interface Job {
    id: number;
    title: string;
    image: string;
    salary: string;
    location: string;
    jobtype: string;
  }
  
  const JobData: Job[] = [
    {
      id: 1,
      title: "Software Engineer",
      image: "/images/google.svg",
      salary: "80k - 100k",
      location: "Nairobi",
      jobtype: "Senior",
    },
    {
      id: 2,
      title: "DevOps Engineer",
      image: "/images/meta.svg",
      salary: "85k - 100k",
      location: "Cape Town",
      jobtype: "Entry",
    },
    {
      id: 3,
      title: "Frontend Developer",
      image: "/images/oracle.svg",
      salary: "65k - 70k",
      location: "Nairobi",
      jobtype: "Entry",
    },
    {
      id: 4,
      title: "GPU Engineer",
      image: "/images/nvidia.svg",
      salary: "85k - 100k",
      location: "Arlington",
      jobtype: "Senior",
    },
    {
      id: 5,
      title: "Fullstack Developer",
      image: "/images/apple.svg",
      salary: "90k - 100k",
      location: "London",
      jobtype: "Mid",
    },
    {
      id: 6,
      title: "Android Developer",
      image: "/images/samsung.svg",
      salary: "45k - 50k",
      location: "Rome",
      jobtype: "Freelance",
    },
  ];
  
  export default JobData;