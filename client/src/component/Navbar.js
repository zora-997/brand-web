import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from "react-scroll";

const links = [
    {
        id: 1,
        link: "Home",
        to: "home",
        offset: 0
    },
    {
        id: 2,
        link: "About",
        to: "about",
        offset: -180
    },
    {
        id: 3,
        link: "Support",
        to: "support",
        offset: -70
    },
    {
        id: 4,
        link: "Platforms",
        to: "platforms",
        offset: -88
    },
    {
        id: 5,
        link: "Pricing",
        to: "pricing",
        offset: -70
    },
]

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handelClick = () => setNav(!nav);
    const handelClose = () => setNav(!nav);

    return (
        <div className='bg-gradient-to-l from-purple-700 via-purple-800 to-gray-900 z-10 h-[80px]  fixed w-screen  drop-shadow-md'>
            {/** rast u chap */}
            <div className=' flex justify-between items-center h-full px-6'>

                {/** left start*/}

                <h1 className='text-3xl md:text-4xl font-bold text-white'>Brand.</h1>
                <ul className='hidden md:flex'>
                    {links.map((items) => {
                        return <li key={items.id} className="pl-8 text-xm text-white cursor-pointer w-fit "> <Link to={items.to} smooth={true} offset={items.offset} duration={500} className=' '>{items.link}</Link> </li>
                    })}
                </ul>

                {/** left end*/}


                {/** right start */}
                <div className='hidden md:flex'>
                    <button className='text-white'>Sign in</button>
                    <button className='bg-purple-700 ml-4 text-white  px-3 py-2 rounded-md font-bold hover:bg-white hover:text-purple-700  hover:border-purple-700 border '>Sign up</button>
                </div>
                <div className='md:hidden mr-3' onClick={handelClick}>
                    {!nav ? <AiOutlineMenu size={25} className="cursor-pointer text-white" /> : <AiOutlineClose size={25} className="cursor-pointer text-white" />}
                </div>
                {/** right end */}

            </div>
            {/** rigth and left end*/}


            {/** Menu */}
            {nav && (

                <ul className='md:hidden px-8  bg-gradient-to-l from-purple-700 via-purple-800 to-gray-900 '>
                    {links.map((items) => {
                        return <li key={items.id} className="pl-8 cursor-pointer text-xm text-white border-b-2 border-zinc-300 mb-3 pb-3  hover:border-b-purple-500 duration-300"> <Link onClick={handelClose} to={items.to} smooth={true} offset={items.offset} duration={500}> {items.link} </Link> </li>
                    })}
                    <div className='md:hidden flex flex-col py-8 '>
                        <button className='border mb-1 border-white text-white px-3 py-2 rounded-sm'>Sign in</button>
                        <button className='bg-white  text-text-purple-700 hover:text-purple-700   px-3 py-2 rounded-sm font-bold hover:bg-white hover:text-inpurpledigo-600  hover:border-purple-700 border'>Sign up</button>
                    </div>
                </ul>
            )}


        </div>
    )
}

export default Navbar