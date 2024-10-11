import React from 'react';
import pro from '../assets/11.png';
import { motion } from 'framer-motion';

const Photo = () => {
  return (
    <div className='relative ' >
      <motion.div>
           <div className='mix-blend-lighten absolute' data-aos="fade-in" data-aos-duration='1600'>
               <img src={pro} alt="Profile" className='w-[350px] ml-8 lg:ml-[50px] h-350px  '/>
           </div>
           
              <div className=' w-[280px] lg:w-[400px] '>
           <motion.svg
           className=""
           fill="transparent"
           viewBox="0 0 506 506"
           xmlns="http://www.w3.org/2000/svg"           
           >
             <motion.circle cx="253" cy="253" r="250" stroke="#0AB2D6" strokeWidth="4" 
             strokeLinecap="round"
             strokeLinejoin="round"
             initial={{strokeDasharray:"24 10 0 0"}}
             animate={{
                strokeDasharray:["15 120 25 25" ,"16 25 92 72" ,"4 250 22 22"],
                rotate:[120,360],
             }}
             transition={{
                duration:20,
                repeat:Infinity,
                repeatType:"reverse"
             }}
             />
           </motion.svg>
           </div> 
      </motion.div>
      
    </div>
  );
}

export default Photo;
