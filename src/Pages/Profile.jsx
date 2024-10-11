import React from 'react';
//import pro from '../assets/11.png';
import { TypeAnimation } from 'react-type-animation';
import Social from './Social';
import Photo from './Photo';

const Profile = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black' id='p'>
      <div className='col-span-1 my-auto mx-auto lg:-ml-10'>
        <div className='w-[230px]  h-auto lg:w-[320px]  mix-blend-lighten   ' >
         {/* <img src={pro} alt="Profile" /> */}
          <Photo  / >

        </div>



      </div>
      <div className='col-span-2 px-5 my-auto ' >
        <h1 className='text-white text-4xl sm:text-8xl font-extrabold' data-aos="fade-in" data-aos-duration='1600'>
          <span className='primary'>I'm a</span> <br />
        </h1>
        <TypeAnimation
          sequence={[
            "Frontend Developer",
            1000,
            "Backend Developer",
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-white text-2xl sm:text-5xl"
        />
       
         <p className='text-white sm:text-lg my-6  lg:text-xl' data-aos="zoom-in-down" data-aos-duration='1600'  >
          I'm Lakshya Pareek and I am looking for Job as  Frontend Developer or Backend Developer
         </p>

         <div className='my-8' data-aos="fade-in" data-aos-duration='2000'>
           <a href='https://drive.google.com/file/d/1udfqjdyeTUH_chHBbhcLc7k0lfs8Wxh9/view?usp=sharing' className='px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br  from-cyan-500 to-blue-500  hover:from-cyan-700 hover:to-blue-700 text-white hover:border-none'>
           Download CV
           </a> 

         </div>
             <div>
              <Social Cstyle="flex gap-6"  />
             </div>
 
          
      </div>
    </div>
  );
};

export default Profile;
