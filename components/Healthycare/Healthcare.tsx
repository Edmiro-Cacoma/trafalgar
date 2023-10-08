



import React from 'react'
import Image from 'next/image'
import { Rectangle } from '..'
import Button from '../Button/page'



const Healthcare = () => {
    return (
        <div className='flex flex-col md:flex-row  items-center md:justify-between container mx-auto  md:w-[79.5625rem] md:h-[29.8125rem]
flex-shrink-0 mt-[100px] gap-8'>
            <div>
                <Image src="/healthcare.png" alt='' width={650} height={477} className='flex-1 flex-shrink-0' />
            </div>
            <div className='md:w-[30.375rem] md:h-[24.25rem] flex-shrink-0 flex flex-col items-center md:items-start '>
                <h2 className='md:w-[30.0625rem] text-[#000] text-[2.25rem] font-[700] leading-[3.5rem] mb-[1.5rem] text-center md:text-start'>Leading healthcare providers</h2>
                <Rectangle styles="bg-[#000]" />
                
                <p className='md:w-[25rem]  leading-[1.875rem] font-[300] text-[#7D7987] text-2xl md:text-[1.125rem] text-center md:text-start'>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver</p>

                <Button text="Learn more" Styles={`rounded-[3.4375rem] border border-[1.4px] border-[#458FF6] text-[#458FF6] mt-[3rem] bg-white leading-[3.75rem] font-[700] text-[1.125rem] transition ease-in-out delay-150 hover:border border-[#458FF6] hover:text-[#fff] hover:-translate-y-1 hover:scale-110 hover:bg-[#458FF6] duration-300`} />

            </div>

        </div>
    )
}

export default Healthcare