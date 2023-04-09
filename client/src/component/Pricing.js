import React from 'react'
import { GoCheck } from 'react-icons/go'
const Pricing = () => {
  return (
   
        
    
    <div name="pricing" className='w-full mt-20 '>
            {/** bo awaia ka div saraki nabe ba absolut w div tr la saro darnache */}
        <div className='w-full h-[500px] bg-gray-900 absolute mix-blend-overlay'></div>

        <div className='max-w-[1100px] mx-auto px-4'>
            <div>
                <h3 className='text-center uppercase text-3xl pt-12 pb-6 text-gray-400'>pricing</h3>
                <h1 className='text-center font-bold text-5xl text-white'>The right price for your resereach</h1>
                <p className='text-center text-gray-400 text-xl pt-6'>Lorem ipusem to my nother as consectetur adpisicing need for some thing and your beautfull my change another chanell goog boy job in your.</p>
            </div>

            {/** for grid */}
            <div className='flex justify-center items-center gap-8 px-1 mb-32 mt-8 '>
                {/** for box */}
                <div className='bg-white rounded-xl p-4 shadow-2xl md:w-[400px]'>   
                    <span className='bg-purple-400 rounded-full px-1 py-0.5 text-sm uppercase'>standard</span>
                    <p className='font-bold text-4xl pt-2 pb-8 flex'>$49 <span className='text-xl flex flex-col justify-end'>/m</span> </p>
                    <p>Lorem ipusem to my nother as far as my feet wiill need anything job</p>
                    
                   <ul className='pt-5'>
                        <li className='flex pt-5'><GoCheck size={25} className='text-green-600' /> <span className='pl-3'>Lorme, ipsum dolor.</span> </li>
                        <li className='flex pt-5'><GoCheck size={25} className='text-green-600' /> <span className='pl-3'>Lorme, ipsum sit.</span> </li>
                        <li className='flex pt-5'><GoCheck size={25} className='text-green-600' /> <span className='pl-3'>Lorme, ipsum sit amet.</span> </li>
                        <li className='flex pt-5'><GoCheck size={25} className='text-green-600' /> <span className='pl-3'>Lorme, ipsum dolor.</span> </li>
                        <li className='flex pt-5'><GoCheck size={25} className='text-green-600' /> <span className='pl-3'>Lorme, ipsum dolor good.</span> </li>
                       <button className='bg-gray-900 text-white font-bold text-center w-full py-2 rounded-md my-3 border-2 hover:border-gray-900 hover:bg-transparent hover:text-gray-900'>Get Started</button>
                   </ul>    

                </div>
                {/** for box */}
                <div className='bg-white rounded-md p-4 shadow-2xl md:w-[400px]'>   
                    <span className='bg-purple-400 rounded-full px-1 py-0.5 text-sm uppercase'>enterprice</span>
                    <p className='font-bold text-4xl pt-2 pb-8 flex '>$75 <span className='text-xl flex flex-col justify-end '>/m</span> </p>
                    <p>Lorem ipusem to my nother as far as my feet wiill need anything job</p>
                    
                   <ul className='pt-5'>
                        <li className='flex pt-5'><GoCheck size={25} className='text-green-600' /> <span className='pl-3'>Lorme, ipsum dolor.</span> </li>
                        <li className='flex pt-5'><GoCheck size={25} className='text-green-600' /> <span className='pl-3'>Lorme, ipsum sit.</span> </li>
                        <li className='flex pt-5'><GoCheck size={25} className='text-green-600' /> <span className='pl-3'>Lorme, ipsum sit amet.</span> </li>
                        <li className='flex pt-5'><GoCheck size={25} className='text-green-600' /> <span className='pl-3'>Lorme, ipsum dolor.</span> </li>
                        <li className='flex pt-5'><GoCheck size={25} className='text-green-600' /> <span className='pl-3'>Lorme, ipsum dolor good.</span> </li>
                       <button className='bg-gray-900 text-white text-center w-full py-2 rounded-md my-3 border-2 font-bold hover:border-gray-900 hover:bg-transparent hover:text-gray-900'>Get Started</button>
                   </ul>    

                </div>
            </div>

        </div>
    </div>

  )
}

export default Pricing