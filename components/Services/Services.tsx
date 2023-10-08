


import React from 'react'
import styles from "./service.module.css"
import Button from '../Button/page';
import { Element, Rectangle } from '..';
import Image from 'next/image';

const Services = () => {

  const services = [
    { id: 1, title: "Search doctor", description: "Choose your doctor from thousands of specialist, general, and trusted hospitals", imagem: "/Frame.png" },
    { id: 2, title: "Online pharmacy", description: "Buy  your medicines with our mobile application with a simple delivery system", imagem: "/Frame.svg" },
    { id: 3, title: "Consultation", description: "Free consultation with our trusted doctors and get the best recomendations", imagem: "/Frame(1).svg" },
    { id: 4, title: "Details info", description: "Free consultation with our trusted doctors and get the best recomendations", imagem: "/Frame(2).svg" },
    {
      id: 5, title: "Emergency care", description: "You can get 24/7 urgent care for yourself or your children and your lovely family", imagem: "/Frame(3).svg"
    },
    { id: 6, title: "Tracking", description: "Track and save your medical history and health data", imagem: "/Frame(4).svg" }]


  return (
    <section className={` flex flex-col items-center `}>
      <h2 className="text-[#000] text-[2.25rem] font-[700] leading-[3.5rem] mt-[60px] mb-[1.5rem]">
        Our services
      </h2>

      <Rectangle styles="bg-[#000] rounded-[0.625rem]" />

      <p className=" w-[25rem] md:w-[59.5rem] h-[3.75rem] text-[#7D7987] text-xl md:text-[1.125rem] text-center font-[300] leading-[ 1.875rem] ">
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health
      </p>

      <div className={`relative md:w-[70rem] md:h-[46.5625rem] flex-shrink-0 grid grid-cols-1 gap-[2.5rem] md:grid-cols-3 mt-[10rem] md:mt-[5rem] z-10`}>

        {services.map((item) => (
          <div key={item.id} className='w-[350px] h-[354px] bg-white rounded-lg shadow-lg'>
            <div className='relative w-[92px] h-[90px] my-4 mx-6'>
              <Image src={item.imagem} alt='' fill />
            </div>

            <div className='w-[196px] h-[56px] mx-8'>
              <h2 className='text-2xl font-bold leading-[56px]'>{item.title}</h2>
            </div>

            <div className='w-[266px] h-[84px] mx-8 mt-[1rem]'>
              <p className='font-light text-[#7D7987] text-base '>{item.description}</p>
            </div>
          </div>))}

      </div>
      <div className={`hidden md:flex ${styles.service}`}></div>
      <div className='relative left-[36rem] -top-[26rem] '>
        <Element />
      </div>


      <Button text="Learn more" Styles={`rounded-[3.4375rem] border border-[1.4px] border-[#458FF6] text-[#458FF6] mt-[3rem] bg-white leading-[3.75rem] font-[700] text-[1.125rem] transition ease-in-out delay-150 hover:border border-[#458FF6] hover:text-[#fff] hover:-translate-y-1 hover:scale-110 hover:bg-[#458FF6] duration-300`} />
    </section >
  );
}

export default Services