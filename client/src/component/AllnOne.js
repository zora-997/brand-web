import React from 'react'
import { GoCheck } from 'react-icons/go'



const first = () => { 
   return (
    <div className='flex'>
    {/** for icon */}
    <div className='mr-5 ml-2'>
      <GoCheck size={25} className="text-green-600" />
    </div>
    {/** for text */}
    <div>
      <h3 className='font-bold text-lg pb-4'>Notification</h3>
      <p className='text-lg text-slate-600'>Lorem ipusem to my nother as far as my feet wiill carry me dotor sitamet amet consectetur adpisicing elit.</p>
    </div>
  </div>
   );
  
 }


const AllnOne = () => {
  return (
    <div name="platforms" className=' w-full h-full mt-20'>
      <div className='max-w-[1100px] mx-auto '>

        <div className='text-center flex-wrap'>
            <h1 className='font-bold text-4xl'>All-In-One Platform</h1>
            <p className='text-slate-500 text-2xl py-6'>Lorem ipsum, dotor sitamet amet consectetur adpisicing elit, illo quos eligendi totam nuila At expedita sit facere temporeaccusamus nemo</p>
        </div>  

        {/** for grid */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 mb-5'>
          {first()}
          {first()}
          {first()}
          {first()}
          {first()}
          {first()}
          {first()}
          {first()}
        </div>

    </div>
    </div>
  )
}

export default AllnOne



