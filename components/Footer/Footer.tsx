


import React from 'react'
import { Element } from '..'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    const Links = [
        { id: 1, label: "Company", url: "/", submenu: [{ id: 1, label: "About", url: "/" }, { id: 2, label: "testmonials" }, { id: 3, label: "Find a doctor", url: "/" }, { id: 4, label: "Apps", url: "/" },] },

        { id: 2, label: "Region", url: "/", submenu: [{ id: 1, label: "Angola", url: "/" }, { id: 2, label: "Namibia" }, { id: 3, label: "Zambia", url: "/" }, { id: 4, label: "Mali", url: "/" },] },

        { id: 3, label: "Help", url: "/", submenu: [{ id: 1, label: "Help Center", url: "/" }, { id: 2, label: "Contact Support" }, { id: 3, label: "Instructions", url: "/" }, { id: 4, label: "How it Works", url: "/" },] }]


    return (
        <div className='mt-[6rem] md:h-[523px] flex-shrink-0 overflow-hidden'>
            <div className='hidden md:flex absolute right-0'>
                <Element />
            </div>
            <div className=' flex  items-center mx-auto  md:h-[523px] bg-blue-500  flex-shrink-0 mt-[4.5rem]'>
                <div className='hidden md:flex relative z-10 top-32 left-0'>
                    <Element />
                </div>
                <div className='flex flex-col-reverse items-center md:flex-row container mx-auto gap-2 justify-around'>

                <div className='flex flex-col items-center md:items-start w-[391px] text-center mt-4 md:-mt-4'>
                    <Image
                        src={"/logo.png"}
                        alt="logo"
                        width={160}
                        height={41}
                        className="text-white"
                    />
                    <p className='font-light text-lg leading-7 text-white  h-20 mt-[22px] md:text-start'>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                    <p className='text-base font-light leading-7 text-white w-[391px] h-[24px] mt-[33px] md:text-start'>©Trafalgar PTY LTD 2020. All rights reserved</p>
                </div>

                {Links.map((item) => (<div key={item.id} className='md:w-[10rem] flex flex-col gap-2  items-center justify-between '>

                    <Link href={item.url} className='w-[92px] h-[60px] font-bold leading-9[60px] text-xl text-white md:-mt-4 -mb-4 mt-4'>{item.label}</Link>
                    {item.submenu && (<div className='flex flex-col items-center justify-center text-white '>
                        {item.submenu.map((subItem) => (<Link key={subItem.id} href="/" className=' leading-9 font-light text-lg '>
                            {subItem.label}
                        </Link>))}
                    </div>)}
                </div>))}
                </div>
            </div>
        </div>
    )
}

export default Footer