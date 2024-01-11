import React from 'react'
import machine from '../assets/f92b3ca3b356c0f681b50679f3137e8d.png'

const divStyle = {
  fontFamily: 'Medium',

};

const plc ="ادخل رقم الهاتف"

export const Hero = () => {

  return (
    <div style={divStyle} className='w-full px-4 py-16'>
      <div className='max-w-[1200] mx-auto grid   md:grid-cols-2'>

       <div className='max-w-[960px]  z-1'>
          <img  className='' src={machine} alt=" auto machine" />
          </div>

        <div className='text-white max-w-[600px] pt-6   ' >
          <h1 className='text-right text-[67.33px] font-bold'>شركة برمجية</h1>
         
       <p className=' text-3xl text-right'>أتشعرُ أنّك مرهقٌ جداً يا فتى؟ متعبٌ من كلّ شيءٍ، وساخطٌ على كلّ شيءْ،تبدُو لِي كذلك، وعيناكَ الضيّقتانِ، تزيدانِ من حدّتكْ، كلّما اكتملتْ تلكَ العقدةُ الّتي تعلُو وجهكْ</p>
       <div className=' flex pt-8'> 
          <button className='bg-[#FFE8AC]  w-[200px]  rounded-l-md text-[30px] font-[700] text-[#FFBC00] ' placeholder='ادخل رقم الهاتف'>requests</button>
        
          <input placeholder={plc} className='placeholder-[#EBB749] placeholder-text-right pr-0 w-[422px] h-[80px] bg-transparent border rounded-r-md '/>
          
           </div>
        </div>

        
      </div>
    </div>
  )
}
