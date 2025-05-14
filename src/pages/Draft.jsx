import React from 'react'
import { motion } from 'framer-motion'
import useScrollToTop from '../hooks/useScrollToTop'

const Draft = () => {

  useScrollToTop()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className=''
    >
      <h1>Cheat push. I forgot again</h1>
      <div className='ml-64 h-full border border-yellow-300/50'>
        <div className='flex items-center justify-between bg-gray-900 fixed w-[85%] border-b border-yellow-300/50 p-4'>
          <div>
            <p>Wedding</p>
            <h3>Aly and Santi's</h3>
          </div>
          <div className='size-10 rounded-full bg-yellow-300/50'></div>
        </div>
        {/*  */}
        <div className='mt-30 flex flex-col items-center justify-center py-4'>
          <h3>Creative Suppliers</h3>
          <p className='w-full max-w-lg text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto in qui voluptatibus libero quibusdam dicta aliquam totam laboriosam</p>
        </div>
        {/*  */}
        <div className='flex items-center justify-between px-4 sticky top-22 w-full py-4 bg-gray-900 border'>
          <div className='inline-flex items-center gap-8 px-4 py-2 border border-yellow-300/50 rounded-md'>
            <p>My Suppliers</p>
            <p>Saved</p>
            <p>Meseyds</p>
          </div>
          <div className='inline-flex items-center gap-8 px-4 py-2 border border-yellow-300/50 rounded-md'>
            <p>Browse</p>
          </div>
        </div>



        <div className='grid grid-cols-4 gap-4 px-4 pb-4'>
          <div className='h-64 border border-yellow-300/50 rounded-lg'></div>
          <div className='h-64 border border-yellow-300/50 rounded-lg'></div>
          <div className='h-64 border border-yellow-300/50 rounded-lg'></div>
          <div className='h-64 border border-yellow-300/50 rounded-lg'></div>
          <div className='h-64 border border-yellow-300/50 rounded-lg'></div>
          <div className='h-64 border border-yellow-300/50 rounded-lg'></div>
          <div className='h-64 border border-yellow-300/50 rounded-lg'></div>
          <div className='h-64 border border-yellow-300/50 rounded-lg'></div>
          <div className='h-64 border border-yellow-300/50 rounded-lg'></div>
          <div className='h-64 border border-yellow-300/50 rounded-lg'></div>
          <div className='h-64 border border-yellow-300/50 rounded-lg'></div>
          <div className='h-64 border border-yellow-300/50 rounded-lg'></div>
          <div className='h-64 border border-yellow-300/50 rounded-lg'></div>
          <div className='h-64 border border-yellow-300/50 rounded-lg'></div>
          <div className='h-64 border border-yellow-300/50 rounded-lg'></div>
          <div className='h-64 border border-yellow-300/50 rounded-lg'></div>
          <div className='h-64 border border-yellow-300/50 rounded-lg'></div>
          <div className='h-64 border border-yellow-300/50 rounded-lg'></div>
        </div>
      </div>
    </motion.div>
  )
}

export default Draft
