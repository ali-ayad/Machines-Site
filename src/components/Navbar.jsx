import React,{useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'


const Navbar = () => {
  const [nav , setNav] = useState(false)

  

  const handleNav = ()=>{
    setNav(!nav)
  }

  return (
   

    <div  className='flex justify-between items-center h-24 mt-1 max-w-[1220px] m-auto px-4 font-bold md:mt-[40px] '>

      <div onClick={handleNav} className=' block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>} 
      
      </div>

      <Link to='contactus'> <button className='text-white bg-[#FAC53A] rounded-lg w-[145px] h-[44.13px] hidden md:block '> اتصل بنا </button></Link>


      <ul className=' hidden md:flex gap-4 pr-5 ' >
       <il>  <NavLink to='/goals' className="text-[#FFB950] p-1  aria-[current=page]:bg-white rounded">  الاهداف </NavLink></il> 
       <il>  <NavLink to='/services' className="text-[#FFB950] p-1  aria-[current=page]:bg-white rounded">  الخدمات </NavLink></il> 
       <il>  <NavLink to='/whoweare' className="text-[#FFB950] p-1  aria-[current=page]:bg-white rounded">  من نحن  </NavLink></il> 
       <il>  <NavLink to='/' className="text-[#FFB950] p-1  aria-[current=page]:bg-white rounded">  الرئيسية </NavLink></il> 
      </ul>

      <h1 className='text-white text-3xl  font-[900] w-[74px] h-[41px]'>Logo</h1>



      <div  className={nav? ' z-20 fixed right-0 top-0 w-[60%] h-full bg-[#783b10] p-2 ease-in-out duration-500 block md:hidden': 'fixed right-[-200px]'}  >

        <ul className="pt-[50px] ">
        <il>  <NavLink to='/' className="text-[#FFB950] p-4 block  aria-[current=page]:bg-white rounded text-right">  الرئيسية </NavLink></il> 
        <il>  <NavLink to='/whoweare' className="text-[#FFB950] p-4 block aria-[current=page]:bg-white rounded text-right">  من نحن  </NavLink></il>
        <il>  <NavLink to='/services' className="text-[#FFB950] p-4 block  aria-[current=page]:bg-white rounded text-right">  الخدمات </NavLink></il> 
        <il>  <NavLink to='/goals' className="text-[#FFB950] p-4 mb-8 block  aria-[current=page]:bg-white rounded text-right">  الاهداف </NavLink></il> 
       
          <li className=' flex justify-center'> <button className='text-white bg-[#dcaa2d] rounded-lg w-[145px] h-[44.13px] '>اتصل بنا</button></li>

        </ul>
      </div>



    </div>

  )
}

export default Navbar