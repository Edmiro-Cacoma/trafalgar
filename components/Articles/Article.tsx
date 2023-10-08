

"use client"

import React from 'react'
import { Element, Rectangle } from '..'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../Button/page'

const Article = () => {

    const Articles = [{
        id: 1, title: "Disease detection, check up in the laboratory", description: "In this case, the role of the health laboratory is very important to do a disease detection...",
        image: "/image 4.png"
    },
    {
        id: 2, title: "Herbal medicines that are safe for consumption", description: "Herbal medicine is very widely used at this time because of its very good for your health...",
        image: "/image 2.png"
    },
    {
        id: 3, title: "Natural care for healthy facial skin", description: "A healthy lifestyle should start from now and also for your skin health.There are some...",
        image: "/image 3.png"
    }]
    return (
        <div className='flex flex-col items-center relative mt-[279px] container mx-auto  md:w-[1785.115px] md:h-[810px] flex-shrink-0 overflow-hidden'>

            <div className='absolute -right-32 top-28 hidden md:flex w-[778.724px] h-[557.383px] flex-shrink-0'>
                <Image src="/vector-left.png" alt='' fill />
            </div>

            <div className='hidden md:flex absolute left-0 top-24'>
                <Element />
            </div>

          
            <div className='flex flex-col items-center mx-auto w-[462px] h-[84px] fex-shrink-0'>
                <div className='w-[462px] h-[56px] text-center'>
                    <h1 className='font-[700] leading-[3.5rem] text-black text-3xl md:text-4xl '>Check out our latest article</h1>

                </div>
                <div>
                    <Rectangle styles="w-[56px] h-[2px] bg-[#000] rounded-[5px] mt-[26px]" />
                </div>
               
            </div>

            <div className='mx-auto relative md:w-[70rem] md:h-[46.5625rem] flex-shrink-0 grid grid-cols-1 gap-[2.5rem] md:grid-cols-3 mt-[10rem] md:mt-[5rem] z-10  overflow-hidden'>
                {Articles.map((Article) => (

                    <div key={Article.id} className='flex flex-col  w-[350px] h-[512px] flex-shrink-0 rounded-lg bg-white shadow-xl rounded-tl-2xl rounded-tr-2xl'>
                        <div className='relative w-[350px] h-[240px] flex-shrink-0 rounded-tl-2xl rounded-tr-2xl '>
                            <Image src={Article.image} alt='' fill className='object-cover rounded-tl-2xl rounded-tr-2xl' />
                        </div>
                        <div className='w-[265px] h-[64px] mx-auto mt-[21px]'>
                            <h1 className='text-[#000] text-[21px] leading-8 font-bold'>{Article.title}</h1>
                        </div>

                        <div className='w-[266px] h-[84px] mx-auto mt-[12px]'>
                            <p className='text-[#7D7987] font-light leading-7 text-base'>{Article.description}</p>
                        </div>

                        <div className='w-[266px] h-[28px] flex items-center mx-auto gap-5 mt-[25px] '>

                            <Link href="/" className='text-[#4089ED] font-semibold text-lg leading-7'>Read more</Link>

                            <span className='w-[15px] h-[9px] flex-shrink-0'>
                                <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_63_2691)">
                                        <path d="M0.803597 5.30357L11.4107 5.30357L9.08038 7.63393C8.75895 7.95536 8.75895 8.4375 9.08038 8.75893C9.40181 9.08036 9.88395 9.08036 10.2054 8.75893L13.9018 5.0625C14.2232 4.74107 14.2232 4.25893 13.9018 3.9375L10.2054 0.241071C9.88396 -0.0803579 9.40181 -0.080358 9.08038 0.241071C8.75896 0.5625 8.75896 1.04464 9.08038 1.36607L11.4107 3.69643L0.803597 3.69643C0.401811 3.69643 2.52311e-05 4.01786 2.51889e-05 4.5C2.51468e-05 4.98214 0.401811 5.30357 0.803597 5.30357Z" fill="#4089ED" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_63_2691">
                                            <rect width="14.1429" height="9" fill="white" transform="translate(14.1429 9) rotate(-180)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>
                        </div>
                    </div>

                ))}
             
            </div>
            <div className='relative md:-top-56 z-10 mx-auto '>
                <Button text="View All" Styles={`rounded-full border-2 border-blue-500 text-[#458FF6] mt-[3rem] bg-white leading-[3.75rem] font-bold text-base transition ease-in-out delay-150 hover:border border-[#458FF6] hover:text-[#fff] hover:-translate-y-1 hover:scale-110 hover:bg-[#458FF6] duration-300 cursor-pointer`} />
            </div>
           
        </div>
    )
}

export default Article