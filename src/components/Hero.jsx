import React from 'react'
import machine from '../assets/f92b3ca3b356c0f681b50679f3137e8d.png'



export const Hero = (props) => {

  return (
    <div  className='w-full px-4 py-16' id='home'>

      <div className='max-w-[1200] mx-auto grid   md:grid-cols-2'>
        <div className='max-w-[960px]' > 
          <img  src={machine} alt=" auto machine" />
         
        </div>

        <div className='text-white max-w-[600px] pt-6  pr-2  ' >
          <h1 className='text-right text-3xl pb-8  font-bold md:text-[67.33px]'>{props.title}</h1>
          <p className='  text-xl text-right md:text-3xl '>{props.main}</p>


          <div className=' flex justify-end pt-8 max-w-[600px]'>
            <button className='bg-[#FFE8AC] max-w-[180px]  rounded-l-md text-[18px] font-[700] text-[#FFBC00] p-4  md:text-[30px]' >requests</button>
            <input placeholder='ادخل رقم الهاتف' className='placeholder-[#EBB749]  pr-0  h-[80px] bg-transparent border rounded-r-md placeholder:text-xl placeholder:text-right placeholder:pr-6 md:w-[380px] md:placeholder:text-3xl' />

          </div>
        </div>
      </div>
    </div>
  )
}
