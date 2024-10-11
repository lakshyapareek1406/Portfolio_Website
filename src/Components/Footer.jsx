import React from 'react'
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const socialMedia = [

    { icon: <FaLinkedin className='text-white w-5 h-5' />, path: "https://www.linkedin.com/in/pareek-lakshya" },
    { icon: <FaSquareGithub className='text-white w-5 h-5' />, path: "https://github.com/lakshyapareek1406" },
    { icon: <img src="https://img.icons8.com/color/48/GeeksforGeeks.png" alt="GeeksforGeeks" className="w-5 h-5" />, path: "https://www.geeksforgeeks.org/user/lakshyapa1uqg/" },
    {icon: <img  src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo.png" alt="Leetcode" className="w-5 h-5"/>, path: "https://leetcode.com/u/Lakshyapareek14/"} 

  ];

  return (
    <div className='max-w-[1200px] p-6 sm:p-12 flex flex-col sm:flex-row justify-between items-center sm:items-start mx-auto  '>
      <span className='primary text-center sm:text-left'>
        <a href='/home'>Lakshya Pareek</a>
      </span>

      <div className='flex gap-6 mt-6 sm:mt-0 sm:mb-0 '>
        {socialMedia.map((social, index) => (
          <a key={index} href={social.path} target="_blank" rel="noopener noreferrer">
            {social.icon}
          </a>
        ))}
      </div>

      <p className='text-gray-600 text-center sm:text-right mt-6 sm:mt-0'>
        lakshyapareek1464@gmail.com
      </p>
    </div>
  )
}

export default Footer
