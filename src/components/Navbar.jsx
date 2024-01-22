import React,{useState} from 'react'
import { Link } from 'react-scroll'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'


const Navbar = () => {
  const [nav , setNav] = useState(false)

  

  const handleNav = () => setNav(!nav)
  const Closewindow = () => setNav(!nav)

  return (
   

    <div  className='flex justify-between items-center h-24 mt-1 max-w-[1220px] m-auto px-4 font-bold md:mt-[40px]' id='nav'>

      <h1 className='text-white text-4xl  font-[900] w-[74px] h-[41px] '>Logo</h1>

      



      <ul className=' hidden md:flex gap-4 pr-5 ' >
       <il>  <Link to='goals' spy={true} smooth={true} offset={50} duration={500}   className="text-[#FFB950] p-1  cursor-pointer  rounded hover:bg-white">  الاهداف </Link></il> 
       <il>  <Link to='services' spy={true} smooth={true} offset={50} duration={500} className="text-[#FFB950] p-1 cursor-pointer hover:bg-white rounded ">  الخدمات </Link></il> 
       <il>  <Link to='whoweare' spy={true} smooth={true} offset={20} duration={500} className="text-[#FFB950] p-1 cursor-pointer hover:bg-white rounded">  من نحن  </Link></il> 
       <il>  <Link to='nav' spy={true} smooth={true} offset={1} duration={500}  className="text-[#FFB950] p-1 cursor-pointer  hover:bg-white rounded">  الرئيسية </Link></il> 
      </ul>

      
      <Link to='contactus' offset={100} > <button className='text-white bg-[#FAC53A] rounded-lg w-[125px] h-[34.13px] hidden md:block '> اتصل بنا </button></Link>

      <div onClick={handleNav} className=' fixed right-2  block  md:hidden'>
        {nav ? <></> : <AiOutlineMenu size={20}/>} 
      
      </div>



      <div  className={nav? ' z-20 fixed right-0 top-0 w-[60%] h-full bg-[#783b10] p-2 ease-in-out duration-500 block md:hidden': 'fixed right-[-200px]'}  >
      <div onClick={handleNav} className=' block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <></>} 
      
      </div>

        <ul className="pt-[50px] ">
        <il>  <Link to='nav' spy={true} smooth={true}  duration={500}  className="text-[#FFB950] p-4 cursor-pointer block  hover:bg-white rounded rounded text-right" onClick={handleNav}>  الرئيسية </Link></il> 
        <il>  <Link to='whoweare' spy={true} smooth={true}  duration={500} className="text-[#FFB950] p-4 cursor-pointer block hover:bg-white rounded  text-right" onClick={handleNav}>  من نحن  </Link></il>
        <il>  <Link to='services'spy={true} smooth={true}  duration={500} className="text-[#FFB950] p-4 cursor-pointer block  hover:bg-white  rounded text-right" onClick={handleNav}>  الخدمات </Link></il> 
        <il>  <Link to='goals' spy={true} smooth={true}  duration={500} className="text-[#FFB950] p-4 mb-8 cursor-pointer block  hover:bg-white  rounded text-right" onClick={handleNav}>  الاهداف </Link></il> 
       
         <Link to='contactus'> <li className=' flex justify-center'> <button className='text-white bg-[#dcaa2d] rounded-lg w-[145px] h-[44.13px] '>اتصل بنا</button></li></Link>

        </ul>
      </div>



    </div>

  )
}

export default Navbar