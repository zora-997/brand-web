import React from 'react'
import image from "../asset/best.png";
import {AiFillCloud, AiFillDashboard, AiFillApi, AiFillDatabase} from "react-icons/ai";

// aw div srata abe flex yan grid be bo away div dwam m-auto bkaweta nawarast

const Home = () => {
  return (
    
    <div name="home" className='w-full h-screen flex bg-zinc-200'>
        <div className='max-w-[1100px] m-auto grid md:grid-cols-2 md:gap-28 '>
          
          <div className='flex flex-col justify-center items-start w-full px-2 pt-5'>
           <h1 className='text-3xl'>Build Web</h1>           
           <p className='text-4xl md:text-6xl font-bold'>Im Developer Full Stuck</p>
           <p className='text-gray-500 text-lg pb-4 '>Is ease to leran so so</p>
           <button className='sm:w-[60%] w-full bg-purple-700  text-white hover:text-purple-700   px-3 py-2 rounded-md font-bold hover:bg-transparent   hover:border-purple-700 border'>Get Started</button>
          </div>
           
           {/** image  */}
           <div className='mb-5'>
           <img src={image} alt="gf" className='w-[400px]' />
           </div>

            {/** data services */}
           <div className='absolute bottom-[3%] md:left-1/5 lg:left-1/4 md:ml-10 -translate-x-1 md:min-w-[700px] border border-slate-300 bg-zinc-200 shadow-2xl  rounded-md py-4 text-center'>
            <p className='py-2'>Data Services</p>

            {/** name and icons */}
            <div className='flex justify-between flex-wrap pb-3 '>
              <p className='text-slate-600 flex px-3 md:px-7'><AiFillDashboard className='text-indigo-900'  size={25}/>Dashbord Design</p>
              <p className='text-slate-600 flex px-3 md:px-7'><AiFillCloud className='text-indigo-900' size={25}/>App Securty</p>
              <p className='text-slate-600 flex px-3 md:px-7'><AiFillApi className='text-indigo-900' size={25}/>API</p>
              <p className='text-slate-600 flex px-3 md:px-7'><AiFillDatabase className='text-indigo-900' size={25}/>Cloud Data</p>
            </div>

           </div>
          
        </div>
    </div>
  )
}

export default Home