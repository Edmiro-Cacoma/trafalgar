



import React from 'react'
import { Rectangle } from '@/types'

const Rectangle = ({styles}:Rectangle) => {
  return (
      <div  className={`${styles} w-[3.5rem] h-[0.125rem] flex-shrink-0 mb-[1rem]`}></div>
  )
}

export default Rectangle