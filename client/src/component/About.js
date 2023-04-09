import React from 'react'

const data = [
    {
        id: 1,
        number: "100%",
        name: "Completion",
    },
    {
        id: 2,
        number: "24/7",
        name: "Delivery",
    },
    {
        id: 3,
        number: "100K",
        name: "Transaction",
    },
]

const About = () => {
  return (
    <div name="about" className='max-w-[1100px] m-auto my-32 text-center' >
            <div>
                <h1 className='text-5xl font-bold'>Trusted by developers across the world</h1>
                <p className='text-gray-500 py-5'>Lorem ipsum dolor sit amet sozan adipisicint elit. Cumque asperi kalar veritatis dignissimation</p>
            </div>

            <div className="grid md:grid-cols-3 gap-1 px-2 ">
                {data.map((items) => {
                    return <div key={items.id} className="border shadow-xl rounded-xl border-gray-200-200 py-8" >
                        <p className='text-indigo-700 font-bold text-6xl'>{items.number}</p>
                        <span className='text-sm text-gray-400'>{items.name}</span>
                    </div>
                })}
            </div>
    </div>
  )
}

export default About