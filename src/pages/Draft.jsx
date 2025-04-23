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
      className='flex lg:flex-row flex-col md:min-h-screen'
    >
      {/* Pet Stories */}
      <div className='lg:max-w-xl w-full py-6 pl-6 border border-yellow-300/40'>
        <div className='flex flex-col justify-between h-full p-6 rounded-2xl border border-yellow-300/40'>
          {/* Content */}
          <div className='border border-yellow-300/40'>
            <h2>Hello world</h2>
            <span className='text-xl font-medium text-gray-300'>asdfa pis sad</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolor similique aliquid. Ea, atque! Laudantium cum quis numquam quae vel id voluptate veniam temporibus. Numquam consequuntur delectus earum nam facere!</p>
          </div>
          {/* Slide Button */}
          <div className='flex items-center justify-center gap-3 border border-yellow-300/40'>
            <div className='w-14 h-1 rounded-full bg-gray-500'></div>
            <div className='w-14 h-1 rounded-full bg-gray-500'></div>
            <div className='w-14 h-1 rounded-full bg-gray-500'></div>
            <div className='w-14 h-1 rounded-full bg-gray-500'></div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className='w-full p-12 border border-yellow-300/40'>
        <div className='flex flex-col justify-between h-full border border-yellow-300/40'>
          {/* Headings */}
          <div className='border border-yellow-300/40'>
            <p>lorem</p>
          </div>
          {/* Middle Content */}
          <div className='grid grid-cols-2 gap-4 border border-yellow-300/40'>
            <div className='border border-yellow-300/40 p-4 rounded-lg'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis labore consequuntur doloremque, explicabo officia neque quam quasi. Temporibus explicabo, repellat consequuntur eius qui illo aliquam beatae nam dolores! Adipisci, quasi!
              </p>
            </div>
            <div className='border border-yellow-300/40 p-4 rounded-lg'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis labore consequuntur doloremque, explicabo officia neque quam quasi. Temporibus explicabo, repellat consequuntur eius qui illo aliquam beatae nam dolores! Adipisci, quasi!
              </p>
            </div>
          </div>
          {/* Footer */}
          <div className='border border-yellow-300/40'>
            <p>lorem</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Draft