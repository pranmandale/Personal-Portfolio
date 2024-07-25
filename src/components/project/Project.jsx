import React from 'react'
import java from "../../assets/java.png";
import mongodb from "../../assets/mongodb.jpg";
import node from "../../assets/node.png";
import react from "../../assets/react.svg";
import express from "../../assets/express.png";

function Project() {
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
    ];
  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
      <div>
        <h1 className='text-3xl font-bold mb-5'>Projects</h1>
        <span className='underline text-xl font-semibold'>Featured Projects</span>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
        {
            images.map(({id,img,name}) => (
                <div className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 
                cursor-pointer hover:scale-110 duration-300' key={id}>
                    <img src={img} className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' alt=''/>
                    <div>
                        <div className='px-2 font-bold text-xl mb-2'>{name}</div>
                        <p className='px-2 text-gray-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, consequatur!</p>
                    </div>
                    <div className='px-2 py-4 space-x-3 justify-around'>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>video</button>
                        <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>source code</button>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Project
