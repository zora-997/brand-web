import React from 'react'
import image from "../asset/dd.png";
import { AiFillCloud, AiFillDashboard, AiFillApi, AiFillDatabase } from "react-icons/ai";

// aw div srata abe flex yan grid be bo away div dwam m-auto bkaweta nawarast

const Home = () => {
  return (

    <div name="home" className='w-full  h-screen flex  bg-white'>
      <div className='sm:max-w-[1100px] w-full relative   m-auto grid sm:grid-cols-2 md:gap-28  '>


        <div className='flex flex-col  justify-center items-center sm:items-start w-full px-5   '>
          <div className='pt-20 sm:pt-0'>
            <h1 className='text-3xl'>Build Web</h1>
            <p className='text-3xl sm:text-4xl md:text-6xl font-bold '>Im Developer Full Stuck</p>
            <p className='text-gray-500 text-lg pb-4 '>Is ease to leran so so</p>
            <button className='w-full  bg-gradient-to-l from-purple-700 via-purple-800 to-gray-900  text-white    px-3 py-2 rounded-md font-bold hover:bg-transparent   hover:border-purple-700 border-2'>Get Started</button>
          </div>
        </div>

        {/** image  */}
        <div className='mb-5 flex justify-center items-start sm:items-center '>
          <img src={image} alt="gf" className='w-[700px] md:w-[1000px] scale-110 ' />
        </div>

        {/** data services */}
        <div className='w-full absolute -bottom-20 md:-bottom-24 flex justify-center '>
          <div className='w-full md:w-3/4 border border-slate-300 bg-white shadow-2xl mx-2  rounded-md p-5 '>
            <p className='text-center mb-2'>Data Services</p>

            {/** name and icons */}
            <div className='grid grid-cols-4 items-center  '>
              <p className='text-slate-600 flex items-center text-xs md:text-base'><AiFillDashboard className='text-indigo-900 scale-90' size={25} />Dashbord</p>
              <p className='text-slate-600 flex items-center text-xs md:text-base '><AiFillCloud className='text-indigo-900 scale-90' size={25} />App Securty</p>
              <p className='text-slate-600 flex items-center text-xs md:text-base '><AiFillApi className='text-indigo-900 scale-90' size={25} />API</p>
              <p className='text-slate-600 flex items-center text-xs md:text-base '><AiFillDatabase className='text-indigo-900 scale-75' size={25} />Cloud Data</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home