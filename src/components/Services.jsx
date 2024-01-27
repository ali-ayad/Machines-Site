import React from 'react'
import press from '../assets/bc8b3a0b53940b1c335e0218b9676641.png'

const servicesItems = [
  {
    id : 1,
    title:'اهم الخدمات المقدمة',
    description:'اعلى كلّ شيءْ، تبدُو لِي كذلك، وعيناكَ الضيّقتانِ، تزيدانِ من حدّتكْ، كلّما اكتملتْ تلكَ العقدةُ الّتي تعلُو وجهكْ أتشعرُ أنّك'

  },

  {
    id : 2,
    title:'اهم الخدمات المقدمة',
    description:'اعلى كلّ شيءْ، تبدُو لِي كذلك، وعيناكَ الضيّقتانِ، تزيدانِ من حدّتكْ، كلّما اكتملتْ تلكَ العقدةُ الّتي تعلُو وجهكْ أتشعرُ أنّك'

  },

  {
    id : 3,
    title:'اهم الخدمات المقدمة',
    description:'اعلى كلّ شيءْ، تبدُو لِي كذلك، وعيناكَ الضيّقتانِ، تزيدانِ من حدّتكْ، كلّما اكتملتْ تلكَ العقدةُ الّتي تعلُو وجهكْ أتشعرُ أنّك'

  },

  {
    id : 4,
    title:'اهم الخدمات المقدمة',
    description:'اعلى كلّ شيءْ، تبدُو لِي كذلك، وعيناكَ الضيّقتانِ، تزيدانِ من حدّتكْ، كلّما اكتملتْ تلكَ العقدةُ الّتي تعلُو وجهكْ أتشعرُ أنّك'

  },
]



export const Services = () => {
  return (
    <div className='bg-white w-full py-4 ' id='services'>
      <div className=' px-20 mx-auto grid md:grid-cols-2'>

        <div className='max-w-[660px] '>
          <img src={press} alt="" />
        </div>


        <div className='mx-auto'>
          <div className='max-w-[510px]  text-right mt-16 ml-14 border-r-8 border-[#E2B22A] pr-2 rounded-e-md md:ml-20 '>
            <h1 className=' text-[#635E50] text-[20px] font-[600] md:text-[30px] '>الخدمات</h1>
            <h1 className='text-[#E2B22A] text-[20px] font-[700] md:text-[30px]'>اهم الخدمات المقدمة</h1>
          </div>


          <div className='max-w-[480px] mx-auto my-10  text-right grid lg:grid-cols-2 gap-1 md:my-10'>


             {servicesItems.map(item => (

              <div key={item.id} className='text-[17px] w-[230px] h-[200px] border-orange-300 border shadow-xl shadow-orange-100  rounded-md px-2 m-1'>
              <h1 className='pb-1 text-[30px] font-[700] '>{item.id}</h1>
              <h2 className='text-[#E2B22A] font-[700]'> {item.title}  </h2>
              <p className=' font-[400]'> {item.description} </p>
            </div>
             ))}
             
          </div>
        </div>




      </div>
    </div>
  )
}
