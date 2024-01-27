import React from 'react';

const goalItems = [
  {
    id: 1,
    bgColor: '#FAF0D4',
    svgColor: '#D18E22',
    title: 'ant design',
    description: 'على كلّ شيءْ، تبدُو لِي كذلك، وعيناكَ الضيّقتانِ، تزيدانِ من حدّتكْ، كلّما اكتملتْ تلكَ العقدةُ الّتي تعلُو وجهكْ أتشعرُ أنّك',
  },
  {
    id: 2,
    bgColor: '#FAF0D4',
    svgColor: '#D18E22',
    title: 'ant design',
    description: 'على كلّ شيءْ، تبدُو لِي كذلك، وعيناكَ الضيّقتانِ، تزيدانِ من حدّتكْ، كلّما اكتملتْ تلكَ العقدةُ الّتي تعلُو وجهكْ أتشعرُ أنّك',
  },
  {
    id: 3,
    bgColor: '#FAF0D4',
    svgColor: '#D18E22',
    title: 'ant design',
    description: 'على كلّ شيءْ، تبدُو لِي كذلك، وعيناكَ الضيّقتانِ، تزيدانِ من حدّتكْ، كلّما اكتملتْ تلكَ العقدةُ الّتي تعلُو وجهكْ أتشعرُ أنّك',
  },
  {
    id: 4,
    bgColor: '#FAF0D4',
    svgColor: '#D18E22',
    title: 'ant design',
    description: 'على كلّ شيءْ، تبدُو لِي كذلك، وعيناكَ الضيّقتانِ، تزيدانِ من حدّتكْ، كلّما اكتملتْ تلكَ العقدةُ الّتي تعلُو وجهكْ أتشعرُ أنّك',
  },
  {
    id: 5,
    bgColor: '#FAF0D4',
    svgColor: '#D18E22',
    title: 'ant design',
    description: 'على كلّ شيءْ، تبدُو لِي كذلك، وعيناكَ الضيّقتانِ، تزيدانِ من حدّتكْ، كلّما اكتملتْ تلكَ العقدةُ الّتي تعلُو وجهكْ أتشعرُ أنّك',
  },
  {
    id: 6,
    bgColor: '#FAF0D4',
    svgColor: '#D18E22',
    title: 'ant design',
    description: 'على كلّ شيءْ، تبدُو لِي كذلك، وعيناكَ الضيّقتانِ، تزيدانِ من حدّتكْ، كلّما اكتملتْ تلكَ العقدةُ الّتي تعلُو وجهكْ أتشعرُ أنّك',
  },

];

export const Goals = () => {
  return (
    <div className='w-full bg-white py-20' id='goals'>
      <div className='mx-auto'>
        <div className='text-center'>
          <h1 className='text-[#635E50] text-[20px] font-[600] md:text-[30px] '>الاهداف</h1>
          <h1 className='text-[#E2B22A] text-[20px] font-[700] md:text-[30px]'>اهم الأهداف المقدمة</h1>
        </div>

        <div className='max-w-[1000px] my-10 py-4 pt-4 mx-auto grid md:grid-cols-3 gap-4'>
          
          {goalItems.map(item => (
            <div key={item.id} className='w-full max-w-[332px] h-[190px] bg-[#FAF0D4] rounded-md m-1 mx-auto'>
              <div className='flex'>
                <div className={`w-[68px] h-[68px] rounded-full bg-[${item.svgColor}] mt-4 ml-4 mr-2`}>
                  <svg className='fill-current text-white m-1' role="img" viewBox="-2 -2 28 30" xmlns="http://www.w3.org/2000/svg">
                    <title>Ant Design</title>
                    <path d="M17.4511 6.6808c.5091-.5064.5091-1.3316 0-1.838l-1.8729-1.873.0027.0027c-.4957-.4957-1.3478-1.3478-2.5535-2.5508-.568-.5547-1.487-.5493-2.0498.0134L.426 10.9787a1.4426 1.4426 0 0 0 0 2.047l10.549 10.541a1.4506 1.4506 0 0 0 2.0497 0l4.4238-4.4211c.509-.5064.509-1.3317 0-1.8381a1.3049 1.3049 0 0 0-1.8408 0l-3.3493 3.3546c-.1393.1394-.3564.1394-.4957 0l-8.4268-8.4188c-.1394-.1393-.1394-.3563 0-.4956L11.76 3.3289c.0107-.0108.0241-.0188.0349-.0295.1393-.1099.3322-.0992.4608.0295l3.3547 3.352c.509.509 1.3343.509 1.8407 0zm-8.2446 5.375a2.8482 2.8456 0 1 0 5.6965 0 2.8482 2.8456 0 1 0-5.6965 0zm14.3672-1.0343l-3.293-3.277c-.5092-.5063-1.3344-.5063-1.8408.0028a1.2968 1.2968 0 0 0 0 1.838l2.2239 2.2213c.1393.1393.1393.3564 0 .4957l-2.1918 2.189a1.2968 1.2968 0 0 0 0 1.8382 1.3049 1.3049 0 0 0 1.8408 0l3.2635-3.2609a1.445 1.445 0 0 0-.0026-2.047Z"/>
                  </svg>
                </div>
                <div className='mt-8 text-[18px] font-[600]'>{item.title}</div>
              </div>
              <div className='text-right p-2 m-3 font-[600] text-[14px] text-[#36342F] lg:text-[16px]'>
                <p>{item.description}</p> 
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
