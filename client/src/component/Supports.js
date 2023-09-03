import React from 'react'
import support from "../asset/restorant.jpeg";
import { BiPhone, BiChip, BiSupport } from "react-icons/bi";
import { GoArrowSmallRight } from "react-icons/go";


const data = [
  {
    id: 1,
    icon: <BiPhone size={50} className='ml-5 bg-indigo-800 p-2 rounded-md mt-[-39px] text-white' />,
    name: "Sales"
  },
  {
    id: 2,
    icon: <BiChip size={50} className='ml-5 bg-indigo-800 p-2 rounded-md mt-[-39px] text-white' />,
    name: "Media Inquiries"
  },
  {
    id: 3,
    icon: <BiSupport size={50} className='ml-5 bg-indigo-800 p-2 rounded-md mt-[-39px] text-white' />,
    name: "Technicla Support"
  }
]

console.log(data[0].paragraf)
const Supports = () => {
  return (
    <div name="support" className='w-full mt-32'>

      <div className='bg-gray-900/90 w-full h-[500px] absolute'>
        <img src={support} alt="/" className='mix-blend-overlay w-full h-full object-cover ' />
      </div>

      <div className='text-white max-w-[1100px] mx-auto relative'>

        <h1 className='text-center text-3xl font-bold uppercase pt-4'>support</h1>
        <h2 className='text-5xl font-bold text-center pt-5'>Fidning the right team</h2>
        <p className='text-xl text-center text-gray-400 pt-5'>Note that the development build is not optimized.
          To we also need  circle create and alsow we need every thing  a production build, use npm run build.</p>


        {/** box */}
        <div className='grid md:grid-cols-3 mx-2 text-black gap-x-8 gap-y-20 mt-32 sm:mt-44'>
          {/** naw box */}
          {data.map(({ id, icon, name }) => {
            return <div key={id} className='bg-white rounded-xl shadow-2xl '>
              <div>
                {icon}
                <h2 className=' pl-5 py-4 font-bold'>{name}</h2>
                <p className='pl-5 pb-5'>
                  webpack compiled successfully Terminate batch job (Y/N)? yPS C:\Users\Hi\Desktop\app1\client
                </p>
                <div className='bg-gray-300 p-1 pl-5  rounded-md text-indigo-600 '>
                  <p className='flex items-center'>Content Us<GoArrowSmallRight size={30} /></p>
                </div>
              </div>
            </div>
          })}
        </div>
        {/**  end */}

      </div>
    </div>


  )
}
export default Supports
