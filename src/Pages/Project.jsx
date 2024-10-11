import React, { useState } from 'react';
import project from '../assets/skyline.webm';
import project2 from '../assets/pp.mp4';
// import project3 from '../assets/java1.png';
// import project4 from '../assets/W.mp4';
// import { MdOpenInNew } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const Project = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      video: project,
      description: "The Skyline Airline Reservation System simplifies flight booking and management with secure user accounts, easy flight search and an admin dashboard for efficient operations. ",
      description0: "💻Technologies Used: ",
      description1:"🔴Frontend:React JS",
      description2:"🔴Backend: Express JS, Node JS",
      description3:"🔴Database: MongoDB",
      title: "MERN Airline Reservation System",
      link: "https://github.com/lakshyapareek1406/Airline-Reservation-System",
      Count:"01",
    },
    {
      video: project2,
      description: "A personal portfolio showcasing my skills, projects, and experience in web development.",
      description0:"💻Technologies Used:  React JS,JavaScript",
      description2:"🔴React JS,JavaScript",
      title: "My Portfolio",
      link: "https://github.com/Mayuru0/Portfolio-Project--React-Js---vite-.git",
      Count:"02",
    },
    {
      image: "project3",
      title: "AWS Cloud Projects",
      description: "A series of AWS Cloud projects demonstrating EC2 management, event-driven architectures, and integrations with various AWS services.",
      description0: "💻Technologies Used:",
      description1: "🔴 AWS EC2, S3, Lambda, Transcribe, SES, MongoDB, Python, Boto3",
      link: "https://github.com/lakshyapareek1406/AWS-Cloud-Projects", 
    },

    {
      video: "project4",
      title: "E-commerce Website (MARK Computer)",
      description: "Mark Computer Shop offers a seamless online shopping experience, bringing the latest tech products and exclusive deals right to your doorstep. Now rebuilt using the MERN stack for improved performance and scalability.",
      description0: "💻Technologies Used:",
      description1: "🔴 MongoDB, Express.js, React, Node.js",
      link: "https://github.com/lakshyapareek1406/E-commerce-Website" ,
      Count: "04"
     
    },
    
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className='max-w-[1200px] mx-auto p-5  ' >
      <div className='pb-8' data-aos="fade-in" data-aos-duration='1600'>
        <p className='text-4xl mb-3 font-bold primary' >My Projects </p>
        <p className='text-gray-400'>Check out some of my recent work</p>
      </div>

      <div className='flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6'>
        {/* Description Section */}
        <div className='flex-1 md:order-1 text-center md:text-left  '>
          <h1 className='text-4xl text-white font-extrabold' 
                data-aos="fade-right"
               data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration='1600'>
          {projects[currentProject].Count}
          </h1>
          <h3 className='text-2xl font-bold mb-4 text-white' 
                data-aos="fade-right"
               data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration='1600'>
            {projects[currentProject].title} 
          </h3>
          <div data-aos="zoom-in" data-aos-duration='1600'>
          <p className='text-gray-200 mb-1'>
            {projects[currentProject].description}
          </p>
          <p className='text-gray-200 '>
            {projects[currentProject].description0}
          </p>
          <p className='text-gray-500 ml-6'>
            {projects[currentProject].description1}
          </p>
          <p className='text-gray-500 ml-6'>
            {projects[currentProject].description2}
          </p>
          <p className='text-gray-500 ml-6'>
            {projects[currentProject].description3}
          </p>
          </div>
          <a
            href={projects[currentProject].link}
            target='_blank'
            rel='noopener noreferrer'
           
          > <div  className='border-t-4 border-gray-700 mt-2 '>
            <button className='flex items-center text-white bg-gradient-to-r scale-100 px-6 py-2 rounded-full transition duration-300 mt-2 hover:bg-gradient-to-br  from-cyan-500 to-blue-500  hover:from-cyan-700 hover:to-blue-700 '>
              View Project <FaGithub className='ml-2 scale-100' />
            </button>
            </div>
          </a>
        </div>

        {/* Media Section (Image or Video) */}
        <div className='flex-1 md:order-2'>
          <div className='relative group rounded-lg shadow-lg overflow-hidden'  data-aos="fade-up-left" data-aos-duration='1600'>
            {projects[currentProject].video ? (
              <video
                src={projects[currentProject].video}
                controls
                autoPlay
                muted
                loop
                className='w-full h-full object-cover transform group-hover:scale-110 transition duration-500'
              />
            ) : (
              <img
                src={projects[currentProject].image}
                alt={projects[currentProject].title}
                className='w-full h-full object-cover transform group-hover:scale-110 transition duration-500'
              />
            )}
            <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-80 transition duration-500'></div>
          </div>
        </div>
      </div>

      <div className='flex justify-between mt-8 '>
        <button
          onClick={prevProject}
          className='text-white bg-gradient-to-r  hover:bg-gradient-to-br  from-cyan-500 to-blue-500  hover:from-cyan-700 hover:to-blue-700 px-4 py-2 rounded-full transition duration-300'
        >
          Previous
        </button>
        <button
          onClick={nextProject}
          className='text-white bg-gradient-to-r  hover:bg-gradient-to-br  from-cyan-500 to-blue-500  hover:from-cyan-700 hover:to-blue-700 px-4 py-2 rounded-full transition duration-300'
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Project;
