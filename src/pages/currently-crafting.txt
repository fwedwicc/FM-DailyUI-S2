import React from 'react'
import { CuteCat } from '../assets'
import { motion } from 'framer-motion'

const Day34 = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <main>
        <section className='relative h-screen flex flex-col justify-center items-center overflow-hidden'>
          {/* Main Content */}
          <div className='absolute flex flex-col justify-center'>
            <span className='text-center bg-gradient-to-r from-blue-300 to-indigo-500 bg-clip-text text-transparent md:text-3xl text-2xl font-bold'>Still Crafting</span>
            <p className='text-center'>Working on it :)</p>
          </div>
          {/* Running Cat */}
          <marquee direction="right" className='absolute -bottom-2'>
            <div className='relative px-4 py-2.5 rounded-lg bg-gray-800/20 border border-gray-800 inline-block mb-4'>
              <p className='leading-none'>frederick is busy</p>
              <div className='w-0 h-0 border-l-12 border-r-12 border-b-0 border-t-[16px] border-l-transparent border-r-transparent border-t-gray-800/70 z-20 absolute border-gray-800 -bottom-4 -translate-x-1/2 left-1/2'></div>
            </div>
            <img src={CuteCat} alt="Running Cat" className='h-20 w-auto' />
          </marquee>
        </section>
      </main>
    </motion.div>
  )
}

export default Day34