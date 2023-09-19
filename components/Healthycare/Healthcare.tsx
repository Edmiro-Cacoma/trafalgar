



import React from 'react'
import Image from 'next/image'
import { Rectangle } from '..'



const Healthcare = () => {
    return (
        <div className='flex flex-col md:flex-row  items-center md:justify-between container mx-auto  md:w-[79.5625rem] md:h-[29.8125rem]
flex-shrink-0 mt-[100px]'>
            <div>
                <Image src="/healthcare.png" alt='' width={650} height={477} className='flex-1 flex-shrink-0' />
            </div>
            <div className='w-[30.375rem] h-[24.25rem] flex-shrink-0'>
                <h2 className='w-[30.0625rem] text-[#000] text-[2.25rem] font-[700] leading-[3.5rem] mb-[1.5rem]'>Leading healthcare providers</h2>
                <Rectangle />
                <p className='w-[25rem]  leading-[1.875rem] font-[300] text-[#7D7987] text-[1.125rem] '>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver</p>
            </div>
        </div>
    )
}

export default Healthcare