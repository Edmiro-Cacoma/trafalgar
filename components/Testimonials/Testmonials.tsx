"use client"

import React from "react";
import { Element, Rectangle } from "..";
import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "../Button/page";

const Testmonials = () => {
    const items = [
        {
            id: 1,
            name: "Edmiro Cacoma",
            title: "Fullstack Developer",
            description:
                "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely",
            url: "/image 1.png", // Corrected the URL format
        },
        {
            id: 2,
            name: "Robson Paulo",
            title: "Mobile Developer",
            description:
                "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely",
            url: "/pic2.jpg", // Corrected the URL format
        },
        {
            id: 3,
            name: "O Tal Miudo",
            title: "VideoMaker",
            description:
                "Weightlifting generally refers to activities in which people lift weights, often in the form of dumbbells or barbells. People lift various kinds of weights for a variety of different reasons.",
            url: "/pic5.jpg", // Corrected the URL format
        },
        {
            id: 4,
            name: "Boni Capta",
            title: "Frontend Developer",
            description:
                "Weightlifting generally refers to activities in which people lift weights, often in the form of dumbbells or barbells. People lift various kinds of weights for a variety of different reasons.",
            url: "/image 3.png", // Corrected the URL format
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0)


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) =>
                prev === items.length - 1 ? 0 : prev + 1
            );
            
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleNext = () => {
        const nextSlide = (currentSlide + 1) % items.length;
        setCurrentSlide(nextSlide);
      
    }

    const handlePrevious = () => {
        const previousSlide = (currentSlide - 1 + items.length) % items.length;
        setCurrentSlide(previousSlide);
   
    }

    const handleDotClick = (index: React.SetStateAction<number>) => {
        setCurrentSlide(index)
      
    }

    return (
        <div className="md:w-[76.22381rem] md:h-[31.375rem] flex-shrink-0 flex flex-col items-center container mx-auto px-2 md:px-0">
            <div className="relative  top-[32rem] right-[35rem] w-max hidden md:flex">
                <Element />
            </div>
            <div className="hidden md:flex relative top-[8rem] left-[33rem] z-10 justify-end w-max">
                <Element />
            </div>

            <div className="mx-auto mt-8 md:mt-0 flex flex-col items-center md:w-[70rem] h-[26.5625rem] flex-shrink-0 rounded-[1.5rem]  bg-gradient-to-tl from-[#67C3F3] to-[#5A98F2] overflow-hidden">


                <h1 className="relative w-full h-[3rem] md:mt-16 mx-auto md:text-4xl text-white text-center leading-[3rem] font-bold">
                    What our customers are saying
                </h1>
                <Rectangle styles="relative bg-white rounded-[0.375rem] mt-5 mx-auto" />

                <div className="flex flex-col md:gap-28 md:flex-row md:mt-12">


                    <div className='flex flex-col md:flex-row items-center'>
                        <div className="w-[9rem] h-[9rem] relative">
                            <Image src={items[currentSlide].url} alt="" fill className="object-cover rounded-full border-4 border-white" />
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className=" ">
                                <h3 className='w-[12rem] h-[3rem] text-white text-xl font-bold leading-3 -mb-6'>
                                    {items[currentSlide].name}
                                </h3>
                            </div>

                            <div>
                                <h4 className='w-[8rem] h-[3rem] text-white text-opacity-85  text-sm font-normal leading-3'>
                                    {items[currentSlide].title}
                                </h4>
                            </div>

                        </div>

                    </div>
                    <div className='md:w-[26.25rem]'>
                        <p className='text-white text-opacity-90 text-center text-base md:text-lg font-normal leading-1.875'>
                            {items[currentSlide].description}
                        </p>
                    </div>
                </div>

            </div>



            <div className="flex items-center justify-center w-[22rem] h-5 flex-shrink-0 mt-[2.5rem] mx-auto relative">
                <button onClick={handlePrevious}>

                    <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
                        <path d="M3.73745 11.2373L24.7834 11.2373L20.1596 15.8611C19.5219 16.4988 19.5219 17.4555 20.1596 18.0932C20.7974 18.731 21.754 18.731 22.3918 18.0932L29.726 10.759C30.3637 10.1213 30.3637 9.16464 29.726 8.52689L22.3918 1.1927C21.754 0.55495 20.7974 0.55495 20.1596 1.1927C19.5219 1.83046 19.5219 2.78709 20.1596 3.42485L24.7834 8.04857L3.73745 8.04857C2.94025 8.04857 2.14306 8.68633 2.14306 9.64296C2.14306 10.5996 2.94025 11.2373 3.73745 11.2373Z" fill="#458FF6" />
                    </svg>
                  
                </button>

                <div className="flex  m-9">
                    {items.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`w-3 h-3 rounded-full mx-1 ${index === currentSlide ? "bg-blue-500" : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>

                <button onClick={handleNext}>

                    <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.73745 11.2373L24.7834 11.2373L20.1596 15.8611C19.5219 16.4988 19.5219 17.4555 20.1596 18.0932C20.7974 18.731 21.754 18.731 22.3918 18.0932L29.726 10.759C30.3637 10.1213 30.3637 9.16464 29.726 8.52689L22.3918 1.1927C21.754 0.55495 20.7974 0.55495 20.1596 1.1927C19.5219 1.83046 19.5219 2.78709 20.1596 3.42485L24.7834 8.04857L3.73745 8.04857C2.94025 8.04857 2.14306 8.68633 2.14306 9.64296C2.14306 10.5996 2.94025 11.2373 3.73745 11.2373Z" fill="#458FF6" />
                    </svg>

                </button>

            </div>

           
        </div>
    );
};

export default Testmonials;
