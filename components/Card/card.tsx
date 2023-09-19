

import styles from "./card.module.css";
import { Card } from '@/types'
import React from 'react'
import Image from "next/image";


const Card = ({ title, description, imagem }: Card) => {
    return (
        <div className={` ${styles.cardComponent}`}>
            <Image src={`${imagem}`} alt="" width={92} height={90} className="flex-shrink-0" />
            <h2 className="text-[1.5rem] text-[#000] font-[700] leading-[3.5rem] ">{title}</h2>
            <p className="w-[16.625rem] text-[#7D7987] text-[1rem] font-[300] leading-[1.75rem] ">{description}</p>
            
        </div>
    )
}

export default Card