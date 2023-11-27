import { motion } from 'framer-motion'
import React from 'react'

function Header() {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerDirection: -1
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  const button = {
    hover: {
        scale: 1.2,
        transition: {
          duration: .2, type: "tween", ease: "easeInOut"
      }
    },

    tap: { scale: 0.9 }
    
  }
  return (
    <>
    <motion.div
    variants={container}
    initial="hidden"
    animate="show"
    className='flex justify-between py-4 bg-backgroundPrimary px-10'>
          <motion.div variants={item} className='p-2 items-center text-black font-bold text-[18px] '>Job Hunt</motion.div>
          <ul
                 className='flex justify-center items-center font-normal text-[14px] gap-4'>
            <motion.li variants={item} size={50} className='p-2'>Home</motion.li>
            <motion.li variants={item} size={50} className='p-2'>Categories</motion.li>
            <motion.li variants={item} size={50} className='p-2'>Find Jobs</motion.li>
            <motion.li variants={item} size={50} className='p-2'>Post Jobs</motion.li>
            <motion.li variants={item} size={50} className='p-2'>Apply</motion.li>
            <motion.li variants={item} size={50} className='p-2'>About</motion.li>
          </ul>
          <motion.div variants={item} className='flex justify-end items-center gap-4'>
            <motion.button whileHover="hover" whileTap="tap" variants={button} className='rounded-borderRadius bg-green font-bold text-white px-6 py-2 justify-center items-center'>Sign Up</motion.button>
            <motion.button whileHover="hover" whileTap="tap" variants={button} className='rounded-borderRadius border border-green font-bold px-6 py-2 justify-center items-center'>Login</motion.button>
          </motion.div>
    </motion.div>
    </>
  )
}

export default Header