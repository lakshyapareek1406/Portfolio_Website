import React from 'react';
import { FaSquareGithub  } from "react-icons/fa6";
import { FaLinkedin}  from "react-icons/fa";

const Social = ({Cstyle}) => {
  const socialMedia = [
    
    { icon: <FaLinkedin  className='text-[#0077b5] w-8 h-8 '/>, path: "https://www.linkedin.com/in/pareek-lakshya" },
    { icon: <FaSquareGithub  className='text-white w-8 h-8 ' />, path: "https://github.com/Mayuru0" },
    { icon: <img src="https://img.icons8.com/color/48/GeeksforGeeks.png" alt="GeeksforGeeks" className="w-8 h-8" />, path: "https://www.geeksforgeeks.org/user/lakshyapa1uqg/" },
   {icon: <img  src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo.png" alt="Leetcode" className="w-8 h-8"/>, path: "https://leetcode.com/u/Lakshyapareek14/"} 
     
  ];



  return (
    <div className={Cstyle} data-aos="fade-right" data-aos-duration='1600'>
      {socialMedia.map((social, index) => (
        
        <a key={index} href={social.path} target="_blank" rel="noopener noreferrer" >
          {social.icon}
        </a>
      ))}
    </div>
  );
}

export default Social;
