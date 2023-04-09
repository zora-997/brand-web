import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaTwitch } from "react-icons/fa";


const solutions = [
  {
    solutions: "Solutions",
    marketings: "Marketings",
    analytics: "Analytics",
    commerce: "Commerce",
    data: "Data",
    cloud: "Cloud",

  }
]

const support = [
  {
    support: "Support",
    price: "Pricing",
    doc: "Documetaion",
    guides: "Guides",
    api: "API Status",

  }
]

const company = [
  {
    company: "Company",
    about: "About",
    blog: "Blog",
    jobs: "Jobs",
    prees: "Prees",
    partners: "Partners"
  }
]

const legal = [
  {
    legal: "Legal",
    clian: "Clian",
    privact: "Privact",
    pollices: "Pollices",
    terms: "Terms"
  }
]

const Footer = () => {
  return (
    <div className='w-full text-white bg-gray-900'>
      <div className='max-w-[1100px] mx-auto py-10 px-4 grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600'>

          {/** map solution */}
            {solutions.map((items) => {
              return <div>
                <h5 className='font-bold uppercase'>{items.solutions}</h5>
                <ul className='pl-3 text-sm'>
                  <li className='pt-1'>{items.marketings}</li>
                  <li className='pt-1'>{items.analytics}</li>
                  <li className='pt-1'>{items.commerce}</li>
                  <li className='pt-1'>{items.data}</li>
                  <li className='pt-1'>{items.cloud}</li>
                </ul>
              </div>
            })}

            {/** map support */}
            {support.map((items) => {
              return <div>
                <h5 className='font-bold uppercase'>{items.support}</h5>
                <ul className='pl-3 text-sm'>
                  <li className='pt-1'>{items.price}</li>
                  <li className='pt-1'>{items.doc}</li>
                  <li className='pt-1'>{items.guides}</li>
                  <li className='pt-1'>{items.api}</li>
                </ul>
              </div>
            })}

            {/** map company */}
            {company.map((items) => {
              return <div>
                <h5 className='font-bold uppercase'>{items.company}</h5>
                <ul className='pl-3 text-sm'>
                  <li className='pt-1'>{items.about}</li>
                  <li className='pt-1'>{items.jobs}</li>
                  <li className='pt-1'>{items.blog}</li>
                  <li className='pt-1'>{items.prees}</li>
                  <li className='pt-1'>{items.partners}</li>
                </ul>
              </div>
            })}

            {/** map legal */}
            {legal.map((items) => {
              return <div>
                <h5 className='font-bold uppercase'>{items.legal}</h5>
                <ul className='pl-3 text-sm'>
                  <li className='pt-1'>{items.clian}</li>
                  <li className='pt-1'>{items.privact}</li>
                  <li className='pt-1'>{items.pollices}</li>
                  <li className='pt-1'>{items.terms}</li>
                </ul>
              </div>
            })}

          {/** input */}
          <div className='col-span-2 pt-2 '>
            <h5 className='uppercase font-bold pb-3 '>subscrib to aur nesletter</h5>
            <p className='text-sm'>The latest news, artcies, and resources, snet, to your inbox weekiy.</p>
            <div className='flex flex-col sm:flex-row pt-5  pb-5'>
               <input type="email"  placeholder='Enter your email' className='mr-2 w-full rounded-md p-2  '/>
               <button className='bg-indigo-900 border-2 border-indigo-900 hover:bg-transparent  rounded-md sm:px-2 p-2 font-bold text-sm mt-2 sm:mt-0'>Subscribe</button> 
            </div>
          </div>
    

      </div>
      
        {/** div xwarawa */}
        <div className='flex flex-col sm:flex-row max-w-[1100px] mx-auto sm:justify-between items-center text-slate-300 py-6 px-3'>
            {/** left */}
            <div>
              <p className='text-sm pb-3'>2022 Workflow, LLC, All rights reserved.</p>
            </div>

            {/** right */}
            <div className='flex w-[16rem] justify-between   '>
              <FaFacebook  size={22} />
              <FaInstagram size={22} />
              <FaTwitter   size={22} />
              <FaTwitch    size={22} />
              <FaGithub    size={22} />
            </div>

        </div>
    </div>
  )
}

export default Footer