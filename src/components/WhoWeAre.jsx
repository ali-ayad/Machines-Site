import React from 'react'
import machine from '../assets/f92b3ca3b356c0f681b50679f3137e8d.png'

export const WhoWeAre = (props) => {
  return (
    <div className='bg-[#FAF0D4] w-full py-24 pl-[100px] ' id='whoweare'>
      <div className='  mx-auto grid md:grid-cols-2 md:px-[70px]'>

        <div className='text-right min-w-[220px] max-w-[500px] text-[18px] font-[400] p-4 pt-6 md:text-[25px] md:pt-20'>
          <h1 className='text-[#E2B22A]'>من نحن</h1>
          <p>{props.main}</p>
        </div>

        <div className='  max-w-[900px] pt-20'>
          <img className='transform -scale-x-100 ' src={machine} alt="" />
        </div>
      </div>


    </div>
  )
}
