import React from 'react'
import { Lenovo, Microsoft, Samsung, Yahoo, Youtube } from '../Asset'

function sponsor() {
  return (
    <>
    <div className='flex py-[70px] gap-[56px] flex-col '>
        <p className='font-bold text-center text-[28px] '>We are trusted by the World’s largest companies</p>
        <div className='px-10 flex gap-[130px] justify-between items-center self-stretch flex-wrap '>
          <img alt=''  src={Yahoo} />
          <img alt=''  src={Microsoft} />
          <img alt=''  src={Youtube} />
          <img alt=''  src={Lenovo} />
          <img alt=''  src={Samsung} />
        </div>
    </div>
    </>
  )
}

export default sponsor