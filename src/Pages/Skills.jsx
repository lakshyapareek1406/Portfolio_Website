import React from 'react';
import CountUp from 'react-countup';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import java from '../assets/java.png';
import Nodejs from '../assets/Nodejs.png';
import expressjs from '../assets/express-js.png';
import php from '../assets/php.png';
import tailwind from '../assets/tailwind.png';
import mysql from '../assets/mysql.png';
import mongoDB from '../assets/mongoDB.png';
import Figma from '../assets/Figma.png';
import wordpress from '../assets/wordpress.png';
import AdobePhotoshop from '../assets/AdobePhotoshop.png';
import AdobeLightroom  from '../assets/AdobeLightroom.png';
import AdobePremiere  from '../assets/AdobePremiere.png';
//import AdobeAfterEffects  from '../assets/AdobeAfterEffects.png';

const Skills = () => {
  const Frontend = [
    { fskill: 'HTML', level: 80, img: html },
    { fskill: 'CSS', level: 60, img: css },
    { fskill: 'JavaScript', level: 50, img: javascript },
    //{ fskill: 'React Js', level: 50, img: react },
  ];
  const Backend = [
    { bskill: 'Java', level: 50, img: java },
    //{ bskill: 'Nodejs', level: 60, img: Nodejs },
    { bskill: 'Express js', level: 50, img: expressjs },
    { bskill: 'PHP', level: 20, img: php },
  ];

  const Framework  = [
    { fskill: 'React', level: 70, img: react },
    { fskill: 'Nodejs', level: 60, img: Nodejs },
    { fskill: 'Tailwind Css', level: 80, img: tailwind },
  ];

  const Database   = [
    { bskill: 'MySQL', level: 60, img: mysql },
    { bskill: 'MongoDB', level: 70, img: mongoDB },
  
  ];

  
  const Tools   = [
    { bskill: 'Figma', level: 70, img: Figma },
    { bskill: 'Wordpress', level: 40, img: wordpress },
  
  ];

  const Editing   = [
    { bskill: 'Adobe Photoshop', level: 70, img: AdobePhotoshop },
    { bskill: 'Adobe Lightroom  ', level: 75, img: AdobeLightroom  },
    { bskill: 'Adobe Premiere Pro   ', level: 85, img: AdobePremiere  },
    //{ bskill: 'Adobe After Effects  ', level: 60, img: AdobeAfterEffects  },
  
  ];

  const professionalSkills = [
    { name: 'Creativity', percentage: 80 },
    { name: 'Communication', percentage: 65 },
    { name: 'Problem Solving', percentage: 75 },
    { name: 'Teamwork', percentage: 85 },
  ];

  return (
    <section className=" text-white py-10 " data-aos="fade-in" data-aos-duration='1600'>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">My Technical Skills</h2>
        <div className="flex flex-wrap">
          {/* Frontend Technical Skills */}
          <div className="w-full md:w-1/2 p-4">
            <h3 className="text-xl font-semibold mb-4">Frontend Technical Skills</h3>
            <div className="space-y-4">
              {Frontend.map(({ fskill, level, img }) => (
                <div key={fskill} className="relative mb-4">
                  <img src={img} alt={fskill} className="w-10 object-cover rounded" />
                  <span className="block text-sm text-center">{fskill}</span>
                  <div className="absolute inset-0 flex items-center justify-center p-4 ml-[40px]">
                    <div className="w-full bg-gray-800 h-2 rounded overflow-hidden -mt-2">
                      <div className="bg-teal-500 h-2 rounded" style={{ width: `${level}%` }}></div>
                    </div>
                    <div className="text-white text-center -mt-4 ml-2">
                      <span className="block text-xl font-bold">
                        <CountUp end={level} duration={4} />%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Technical Skills */}
          <div className="w-full md:w-1/2 p-4">
            <h3 className="text-xl font-semibold mb-4">Backend Technical Skills</h3>
            <div className="space-y-4">
              {Backend.map(({ bskill, level, img }) => (
                <div key={bskill} className="relative mb-4">
                  <img src={img} alt={bskill} className="w-10 object-cover rounded" />
                  <span className="block text-sm text-center">{bskill}</span>
                  <div className="absolute inset-0 flex items-center justify-center p-4 ml-[40px]">
                    <div className="w-full bg-gray-800 h-2 rounded overflow-hidden -mt-2">
                      <div className="bg-teal-500 h-2 rounded" style={{ width: `${level}%` }}></div>
                    </div>
                    <div className="text-white text-center -mt-4 ml-2">
                      <span className="block text-xl font-bold">
                        <CountUp end={level} duration={4} />%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

       {/*************************************** */}
      <div className="container mx-auto px-6">
       
        <div className="flex flex-wrap">
          {/* Framework  */}
          <div className="w-full md:w-1/2 p-4">
            <h3 className="text-xl font-semibold mb-4">Framework </h3>
            <div className="space-y-4">
              {Framework.map(({ fskill, level, img }) => (
                <div key={fskill} className="relative mb-4">
                  <img src={img} alt={fskill} className="w-10 object-cover rounded" />
                  <span className="block text-sm text-center">{fskill}</span>
                  <div className="absolute inset-0 flex items-center justify-center p-4 ml-[40px]">
                    <div className="w-full bg-gray-800 h-2 rounded overflow-hidden -mt-2">
                      <div className="bg-teal-500 h-2 rounded" style={{ width: `${level}%` }}></div>
                    </div>
                    <div className="text-white text-center -mt-4 ml-2">
                      <span className="block text-xl font-bold">
                        <CountUp end={level} duration={4} />%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Database */}
          <div className="w-full md:w-1/2 p-4">
            <h3 className="text-xl font-semibold mb-4">Databases</h3>
            <div className="space-y-4">
              {Database.map(({ bskill, level, img }) => (
                <div key={bskill} className="relative mb-4">
                  <img src={img} alt={bskill} className="w-10 object-cover rounded" />
                  <span className="block text-sm text-center">{bskill}</span>
                  <div className="absolute inset-0 flex items-center justify-center p-4 ml-[40px]">
                    <div className="w-full bg-gray-800 h-2 rounded overflow-hidden -mt-2">
                      <div className="bg-teal-500 h-2 rounded" style={{ width: `${level}%` }}></div>
                    </div>
                    <div className="text-white text-center -mt-4 ml-2">
                      <span className="block text-xl font-bold">
                        <CountUp end={level} duration={4} />%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

        {/*************************************** */}

        <div className="container mx-auto px-6">
       
        <div className="flex flex-wrap">
          {/* Tools  */}
          <div className="w-full md:w-1/2 p-4">
            <h3 className="text-xl font-semibold mb-4">Tools </h3>
            <div className="space-y-4">
              {Tools.map(({ fskill, level, img }) => (
                <div key={fskill} className="relative mb-4">
                  <img src={img} alt={fskill} className="w-10 object-cover rounded" />
                  <span className="block text-sm text-center">{fskill}</span>
                  <div className="absolute inset-0 flex items-center justify-center p-4 ml-[40px]">
                    <div className="w-full bg-gray-800 h-2 rounded overflow-hidden -mt-2">
                      <div className="bg-teal-500 h-2 rounded" style={{ width: `${level}%` }}></div>
                    </div>
                    <div className="text-white text-center -mt-4 ml-2">
                      <span className="block text-xl font-bold">
                        <CountUp end={level} duration={4} />%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Editing */}
          <div className="w-full md:w-1/2 p-4">
            <h3 className="text-xl font-semibold mb-4">Editing</h3>
            <div className="space-y-4">
              {Editing.map(({ bskill, level, img }) => (
                <div key={bskill} className="relative mb-4">
                  <img src={img} alt={bskill} className="w-10 object-cover rounded" />
                  <span className="block text-sm text-center">{bskill}</span>
                  <div className="absolute inset-0 flex items-center justify-center p-4 ml-[40px]">
                    <div className="w-full bg-gray-800 h-2 rounded overflow-hidden -mt-2">
                      <div className="bg-teal-500 h-2 rounded" style={{ width: `${level}%` }}></div>
                    </div>
                    <div className="text-white text-center -mt-4 ml-2">
                      <span className="block text-xl font-bold">
                        <CountUp end={level} duration={4} />%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
       {/* Professional Skills */}
       <div className="text-white p-8 justify-between items-center sm:items-start" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
      <h2 className="text-center text-xl font-semibold mb-8">Professional Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {professionalSkills.map((skill) => (
          <div key={skill.name} className="flex justify-center items-center">
            <div className="relative mb-4">
              <svg className="w-24 h-24 sm:w-24 sm:h-24">
                <circle
                  cx="50%"
                  cy="50%"
                  r="40"
                  strokeWidth="6"
                  stroke="#1E293B"
                  fill="none"
                />
                <circle
                  cx="50%"
                  cy="50%"
                  r="40"
                  strokeWidth="6"
                  stroke="#0ea5e9"
                  strokeDasharray={`${2.5 * skill.percentage} 251`}
                  fill="none"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg sm:text-xl font-bold">
                  <CountUp end={skill.percentage} duration={4} />%
                </span>
              </div>
            </div>
            <p className="text-center text-base sm:text-lg font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Skills;

