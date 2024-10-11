import React from 'react'
import about from '../assets/44.png';

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12 h-[600px]' id="about">
        
    <div className='md:grid md:grid-cols-2 sm:py-16'>
        
        
        <div className='mt-4 md:mt-0 text-left flex  '>
            <div className='my-auto mx-6'>
                <h2 className='text-4xl font-bold mb-4 primary' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">About Me</h2>
                <p className='text-base lg:text-lg' data-aos="zoom-in" data-aos-duration='1600'>
                Hello, my name is Lakshya Pareek, and I am currently in my third year pursuing a Bachelor of Computer Applications (BCA) with a specialization at ICFAI University. I have a strong passion for coding, especially in the areas of Data Structures and Algorithms (DSA), where I have honed my skills using C++ and Python.
                In addition to my programming expertise, I possess a solid foundation in web development, with proficiency in HTML, CSS, and JavaScript. I am actively expanding my technical skill set by learning advanced frameworks such as React and Node.js, which are crucial for modern web applications.
                I am highly motivated by innovation and problem-solving, and I continuously seek opportunities to deepen my knowledge and contribute meaningfully to the tech industry. My goal is to leverage my skills in software development and web technologies to help drive impactful solutions in a fast-evolving technological landscape.
                I am eager to bring my expertise and enthusiasm to a dynamic team where I can further grow and make a significant contribution.
                </p>
            </div>
        </div>
        
        <img className='mx-auto rounded-3xl py-8 md:py-0' src ={about} width={300} height={300} data-aos="fade-right" data-aos-duration='1600' alt=''/>

        
        
        </div>    
    





    </div>
  )
}

export default About