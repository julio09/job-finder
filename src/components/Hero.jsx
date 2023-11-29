import React from 'react'
import { Avatar, Check, HeroImg, Hotel } from '../Asset'

function Hero() {
  return (
    <>
    <div className=' bg-backgroundPrimary pt-[70px] flex justify-start  self-stretch flex-wrap md:gap-[152px] lg:gap-[500px] px-10'>
      <div className='part1 flex flex-col justify-center items-start gap-[32px]'>
        <div className='flex flex-col items-start gap-[32px] self-stretch'>
          <div className='flex flex-col items-start self-stretch gap-[16px]'>
            <p className='font-bold text-[28px] '>Find and Apply for a Job that suits you!</p>
            <p className='text-[18px]'>Here you can find your best job, Explore hundreds of jobs<br /> with us. Ready for your next adventure?</p>
          </div>
          <div className='flex gap-[16px] items-start'>
            <div className='flex px-4 py-2 rounded-borderRadius bg-backgroundThird items-start gap-2'>
              <input type='text' placeholder='Job Title or Keyword' className='flex p-2 items-center justify-center placeholder:text-black focus:outline-none' />
              <input type='' placeholder='City or State' className='p-2 placeholder:text-black focus:outline-none' />
            </div>
            <button className='rounded-borderRadius bg-green px-8 py-4 font-bold text-white flex justify-center items-center'>Search</button>
          </div>
        </div>
        <div className='flex flex-col gap-2 items-start'>
          <div className='flex items-center self-stretch py-2 pr-2'>
            <p className='font-bold text-[18px] '>Most Searched Jobs:</p>
          </div>
          <div className='flex flex-col gap-2 items-start text-[14px]'>
              <div className='flex items-start gap-2'>
                <button className='p-2 flex items-center bg-backgroundThird'>Graphic Designer</button>
                <button className='p-2 flex items-center bg-backgroundThird'>Front End Developer</button>
                <button className='p-2 flex items-center bg-backgroundThird'>Data Analyst</button>
                <button className='p-2 flex items-center bg-backgroundThird'>Accountant</button>
              </div>
              <div className='flex items-start gap-2'>
                <button className='p-2 flex items-center bg-backgroundThird'>Photographer</button>
                <button className='p-2 flex items-center bg-backgroundThird'>Full Stack Developer</button>
                <button className='p-2 flex items-center bg-backgroundThird'>Senior Lecturer</button>
                <button className='p-2 flex items-center bg-backgroundThird'>UX Designer</button>
              </div>
            </div>
        </div>
      </div>
      <div className='Sary relative z-20'>
        <div className='absolute p-4 right-[-3px] top-[5px] bg-backgroundThird rounded-borderCard flex flex-col justify-center items-center gap-2 '>
          <img alt='' src={Avatar}/>
          <p className='text-[14px]'>Hello, I am looking to apply <br /> for the role of a UX Designer</p>
        </div>
        <div className='px-4 py-6 flex rounded-borderCard bg-backgroundThird flex-col gap-2 justify-center items-center absolute -right-[40px] bottom-[30px] '>
          <span className='font-bold '>200+</span>
          <p>Got job on our platform</p>
          <div className='flex px-2 items-center'>
          <img alt='' src={Avatar} className=''/>
          <img alt='' src={Avatar} className=''/>
          <img alt='' src={Avatar} className=''/>
          <img alt='' src={Avatar} className=''/>
          <img alt='' src={Avatar} className=''/>
          <img alt='' src={Avatar} className=''/>
          </div>
        </div>
        <div className='absolute top-7 left-7 flex flex-col gap-4 items-start justify-center bg-backgroundThird rounded-borderCard p-4 '>
          <div className='flex self-stretch items-center justify-center gap-6'>
            <div className='flex flex-col gap-1 flex-1 items-start'>
              <img alt='' src={Hotel}/>
              <span className='text-[14px]'>Kokomlemle</span>
            </div>
            <button className='px-2 py-1 flex justify-center rounded-radius bg-white font-bold text-green'>Full Time</button>
          </div>
          <div className='flex flex-col items-start gap-2'>
            <span className='font-bold text-[14px] '>Graphic Designer</span>
            <p>The company seeks to employ the <br />
            services of a.....................<span className='font-bold text-green'>Read More</span></p>
          </div>
        </div>
        <div className='flex p-4 gap-4 justify-center items-start absolute bottom-8 left-20 rounded-borderCard bg-backgroundThird'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none">
          <path d="M20 12.3457V1.76367C20 0.787772 19.2122 0 18.2363 0H1.76367C0.787772 0 0 0.787772 0 1.76367V12.3457C0 13.3216 0.787772 14.1093 1.76367 14.1093H18.2363C19.2122 14.1093 20 13.3216 20 12.3457ZM18.4597 1.63433C18.8477 2.02234 18.6361 2.4221 18.4245 2.62199L13.6508 6.99588L18.2363 11.7695C18.3774 11.9342 18.4715 12.1928 18.3069 12.3692C18.154 12.5573 17.8013 12.5456 17.6484 12.428L12.5103 8.04233L9.99412 10.3351L7.48971 8.04233L2.35156 12.428C2.19871 12.5456 1.84597 12.5573 1.69312 12.3692C1.52851 12.1928 1.62257 11.9342 1.76367 11.7695L6.34921 6.99588L1.57554 2.62199C1.3639 2.4221 1.15226 2.02234 1.54027 1.63433C1.92828 1.24633 2.32804 1.43445 2.65726 1.71664L9.99412 7.64256L17.3427 1.71664C17.672 1.43445 18.0717 1.24633 18.4597 1.63433Z" fill="#20C6B1"/>
        </svg>
        <div className='flex flex-col items-start text-[14px] justify-center'>
          <p className='font-bold text-green '>Congratulations!</p>
          <p>You have got an Email</p>
        </div>
        <img alt='' src={Check} />
        </div>
        <img alt='' className='object-cover z-10' src={HeroImg}/>
      </div>
    </div>
    </>
  )
}

export default Hero