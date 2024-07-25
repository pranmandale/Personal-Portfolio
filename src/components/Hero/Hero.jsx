import React from 'react'
import logo from '../../assets/photo.avif'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

import {ReactTyped} from 'react-typed';


function Hero() {
  return (
    <>
    {/* my means margin from top also as well as bottom */}
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 '>   
        <div className='flex flex-col md:flex-row '>
            <div className='md:w-1/2 mt-8 md:mt-24 space-y-2 order-2 md:order-1'>
              <span className='text-xl'>Welcome In My Feed</span>
              <div className='flex space-x-1 text-2xl md:text-4xl'>
              <h1>Hello I'm a</h1>
              {/* <span className='text-red-600 font-bold'>Developer</span> */}
              <ReactTyped
                className='text-red-600 font-bold'
                strings= {["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
              </div>
              <br/>
              <p className='text-sm md:text-md text-justify'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae temporibus nisi ipsum earum enim unde facilis doloremque quia commodi ducimus, perspiciatis ex sit corrupti pariatur eos adipisci quaerat consequuntur itaque ratione minima officiis tempore! Ex et neque cumque amet.
              </p>
              <br/>
              {/* social media icons */}
              <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
              <div className='space-y-2'>
                <h1 className='font-bold'>Available on</h1>
                <ul className='flex space-x-5'>
                  <li>
                    <a href='' >
                    <FaFacebook className='text-2xl cursor-pointer' />
                    </a>
                  </li>
                  <li>
                    {" "}
                    <FaLinkedin className='text-2xl cursor-pointer' />
                 </li>
                 <li>
                  {" "}
                  <FaInstagram className='text-2xl cursor-pointer' />
                 </li>
                 <li>
                  {" "}
                  <FaTelegram className='text-2xl cursor-pointer' />
                 </li>
                </ul>
              </div>

              <div className='space-y-3'>
              <h1 className='font-bold'>Currently Working on</h1>
                <div className='flex space-x-5'>
                <DiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                </div>
              </div>
              </div>
            </div>
            <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
             <img src={logo} className='rounded-full md:w-[450px] md:h-[450px]' alt=''/>
            </div>
        </div>
      </div>
      
      
    </>
  )
}

export default Hero
