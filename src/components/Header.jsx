import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

function Header() {

  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const menuVars = {
    initial: {
      translateY: 0
    },
    animate: {
      translateY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      translateY: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        type: "spring"
      },
    },
  };
  const containerVars = {
    initial: {
      opacity:0,
      translateX: -100,
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      opacity:1,
      translateX: 0,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.06,
        staggerDirection: 1,
      },
    },
  };

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
    className='flex justify-between relative items-center py-4 bg-backgroundPrimary z-50 px-10'>
          <motion.div variants={item} className='p-2 flex items-center text-black  font-bold text-[18px] '>Job Hunt</motion.div>
          <ul
                 className='flex justify-center items-center font-normal text-[14px] max-lg:hidden gap-4'>
            <motion.li variants={item} size={50} className='p-2'>Home</motion.li>
            <motion.li variants={item} size={50} className='p-2'>Categories</motion.li>
            <motion.li variants={item} size={50} className='p-2'>Find Jobs</motion.li>
            <motion.li variants={item} size={50} className='p-2'>Post Jobs</motion.li>
            <motion.li variants={item} size={50} className='p-2'>Apply</motion.li>
            <motion.li variants={item} size={50} className='p-2'>About</motion.li>
          </ul>
          <motion.div variants={item} className='flex justify-end items-center max-lg:hidden gap-4'>
            <motion.button whileHover="hover" whileTap="tap" variants={button} className='rounded-borderRadius bg-green font-bold text-white px-6 py-2 flex justify-center items-center'>Sign Up</motion.button>
            <motion.button whileHover="hover" whileTap="tap" variants={button} className='rounded-borderRadius border border-green font-bold px-6 py-2 flex justify-center items-center'>Login</motion.button>
          </motion.div>
          <div className='hidden max-lg:block cursor-pointer' onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
            <path d="M1 11H19M1 6H19M1 1H19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </div>

          <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-backgroundPrimary text-text p-10"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between">
              <motion.div variants={item} className='p-2 flex items-center text-black  font-bold text-[18px] '>Job Hunt</motion.div>
                <button
                  className="cursor-pointer text-md font-sans font-bold text-text"
                  onClick={toggleMenu}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none">
                    <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" fill="black"/>
                  </svg>
                </button>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center  font-sans items-center gap-4 "
              >
                <ul className='md:justify-end font-inter self-stretch text-black w-auto font-bold justify-center text-3xl flex flex-col md:flex-row items-center gap-[24px] md:flex-1'>
                <motion.li variants={item} size={50} className='p-2'>Home</motion.li>
                <motion.li variants={item} size={50} className='p-2'>Categories</motion.li>
                <motion.li variants={item} size={50} className='p-2'>Find Jobs</motion.li>
                <motion.li variants={item} size={50} className='p-2'>Post Jobs</motion.li>
                <motion.li variants={item} size={50} className='p-2'>Apply</motion.li>
                <motion.li variants={item} size={50} className='p-2'>About</motion.li>
              </ul>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
    </>
  )
}

export default Header