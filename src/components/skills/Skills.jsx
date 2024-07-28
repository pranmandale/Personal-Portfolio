import React from 'react'
import java from "../../assets/java.png";
import mongodb from "../../assets/mongodb.jpg";
import node from "../../assets/node.png";
import react from "../../assets/react.svg";
import express from "../../assets/express.png";
import oracle from "../../assets/oracle.png";
import spring from "../../assets/springBoot.jpg"

function Skills() {
    const images = [
        {
            id : 1,
            img : react,
            name : "React",
        },
        {
            id : 2,
            img : mongodb,
            name : "mongoDb",
        },
        {
            id : 3,
            img : node,
            name : "Nodejs",
        },
        {
            id : 4,
            img : express,
            name : "expressjs",
        }, 
        {
            id : 5,
            img : java,
            name : "Java",
        },
        {
            id : 6,
            img : spring,
            name : "SpringBoot",
        },
        {
            id : 7,
            img : oracle,
            name : "Oracle",
        },
    ];
  return (
    <div 
    name='Skill'
    className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
      <div>
        <h1 className='text-3xl font-bold mb-5'>Skills</h1>
        {/* <span className='underline text-xl font-semibold'>Featured Projects</span> */}
      </div>
      <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
        {
            images.map(({id,img,name}) => (
                <div className='flex flex-col items-center justify-center border-[2px] md:w-[200px] h-[200px] rounded-full  p-1 
                cursor-pointer hover:scale-70 duration-200' key={id}>
                    <img src={img} className='w-[150px]  rounded-full ' alt=''/>
                    <div>
                        <div className=''>{name}</div>                        
                    </div> 
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Skills
