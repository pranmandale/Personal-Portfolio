import axios from 'axios'
import React from 'react'
import { useForm } from "react-hook-form"

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    }

    try {
      await axios.post("https://getform.io/f/bgdyvyja", userInfo)
      alert("Message has been sent")
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      <div 
        name="Contact"
        className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
        <h1 className='text-3xl font-bold mb-4'>Contact me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className='flex flex-col items-center justify-center mt-5'>
          <form 
            onSubmit={handleSubmit(onSubmit)}
            className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
            <h1 className='text-xl font-semibold mb-4'>Send your message</h1>
            <div className='flex flex-col mb-4'>
              <label className='block text-gray-700'>
                Full Name
              </label>
              <input 
                className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                {...register("name", { required: true })}
                id='name'
                type='text'
                name='name'
                placeholder='Enter Your Full Name'
              />
              {errors.name && <span>This field is required</span>}
            </div>

            <div className='flex flex-col mb-4'>
              <label className='block text-gray-700'>
                Email Address
              </label>
              <input 
                className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                {...register("email", { required: true })}
                id='email'
                type='text'
                name='email'
                placeholder='Enter Your Email'
              />
              {errors.email && <span>This field is required</span>}
            </div>

            <div className='flex flex-col mb-4'>
              <label className='block text-gray-700'>
                Message
              </label>
              <textarea 
                className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                {...register("message", { required: true })}
                id='message'
                name='message'
                placeholder='Enter Your Message'
              />
              {errors.message && <span>This field is required</span>}
            </div>

            <button 
              type='submit'
              className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300'>
              Send
            </button>
          </form>
        </div>
      </div> 
    </>
  )
}

export default Contact
