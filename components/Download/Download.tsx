



import React from 'react'
import Image from 'next/image'
import { Element, Rectangle } from '..'
import Button from '../Button/page'
import arrowdown from "../../public/arrowdown.png"


const Download = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row  items-center md:justify-around container mx-auto  md:w-[79.5625rem] md:h-[29.8125rem]
flex-shrink-0 mt-[100px] '>


            <div className='md:w-[30.375rem] md:h-[24.25rem] flex-shrink-0 flex flex-col items-center md:items-start md:ml[5rem]'>

                <h2 className='md:w-[30.0625rem] text-[#000] text-[2.25rem] font-[700] leading-[3.5rem] mb-[1.5rem] mt-[1.5rem] text-center md:text-start'>Download our mobile apps</h2>

                <Rectangle styles="bg-[#000] rounded-[0.375rem] " />
                <p className='md:w-[24rem]  leading-[1.875rem] font-[300] text-[#7D7987] text-2xl md:text-[1.125rem] text-justify md:text-start'>Our dedicated patient engagement app and
                    web portal allow you to access information instantaneously (no tedeous form, long calls,
                    or administrative hassle) and securely</p>

                <Button text="Download" Styles={`rounded-[3.4375rem] border border-[1.4px] border-[#458FF6] text-[#458FF6] mt-[3rem] bg-white leading-[3.75rem] font-[700] text-[1.125rem] transition ease-in-out delay-150 hover:border border-[#458FF6] hover:text-[#fff] hover:-translate-y-1 hover:scale-110 hover:bg-[#458FF6] duration-300`} image={`${arrowdown}`}/>
                   
              

            </div>
            <div>
                <Image src="/download.png" alt='' width={650} height={477} className='flex-1 flex-shrink-0' />
            </div>
            <div className='relative -top-72' >
                <Element />
            </div>

        </div>
    )
}

export default Download