import React from 'react'
import glamorous from 'glamorous'
import background from '../assets/d168f66a5b096bc0c2eb3515b0cc3b8c.png'

export const ContactUs = () => {
   const MyStyledComponent = glamorous.div (
    {
     
      height: "110vh",
      position: 'relative',
      
      '&::before': {
        content: `''`,
        backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          position: 'absolute',
           top: '0px',
           right: '0px',
           bottom: '0px',
           left: '0px',
           opacity: 0.5,
      }
    },
  )
   


  return (
    <div  >
   <MyStyledComponent>
    <div className='w-full h-[100vh] '>

        <form className='bg-white max-w-[380px] h-[452px] rounded-lg  relative  mx-auto   top-80  md:left-80   '>
          <h1 className='text-center text-[26.82px] font-bold text-[#CC8720]  p-10'>اتصل بنا</h1>
          <input className='w-[313px] h-[38px] mx-8 my-2 bg-[#E8E8E8] rounded-xl ' ></input>
          <input className='w-[313px] h-[38px] mx-8 bg-[#E8E8E8] rounded-xl ' ></input>
          <textarea className='w-[313px] h-[100px] mx-8 my-2 bg-[#E8E8E8] rounded-xl'></textarea>

        </form>
        </div>
       </MyStyledComponent>
    
    </div>
  )
}
