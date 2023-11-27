import React from 'react'

function newsletter() {
  return (
    <>
    <div className='flex px-10 py-[120px] self-stretch items-center flex-col '>
      <div className='bg-green px-10 py-[70px] flex flex-col w-[1128px] items-center gap-14 '>
        <p className='p-[10px] text-white font-bold text-[28px] text-center'>Want to get notified on<br />
          every Job Posting?</p>
          <div className='flex items-start'>
            <div className='flex px-8 py-4 items-center bg-white '>
              <input type="text" placeholder='Enter Your Email Address'className=' focus:outline-none'/>
            </div>
            <button className='px-8 py-4 items-center bg-black text-white font-bold'>Subscribe</button>
          </div>
      </div>
    </div>
    </>
  )
}

export default newsletter