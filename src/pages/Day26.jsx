import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../components/ui'

const Day26 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='bg-gray-900 border border-yellow-500'
    >
      <div className='grid lg:grid-cols-2 grid-cols-1 md:min-h-screen'>
        {/* Illustration/Company Details */}
        <div className='border border-yellow-400 h-full p-3'>
          <div className='relative border border-yellow-400 h-full overflow-hidden rounded-xl'>
            <img src="" alt="Sample Image" className='object-cover absolute w-full h-full' />
          </div>
        </div>
        {/* Subscribe Section */}
        <div className='border border-yellow-500 p-4'>
          <div className='h-full flex flex-col justify-between'>
            {/* Start Content */}
            <div>
              <h1>Subscribe to newsletter</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, blanditiis asperiores? Ad quas sapiente repellat voluptatum voluptates facere fuga ipsam praesentium, necessitatibus illum? Explicabo, culpa aspernatur optio deserunt quidem quas?</p>
            </div>
            {/* Middle Content */}
            <div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, blanditiis asperiores? Ad quas sapiente repellat voluptatum voluptates facere fuga ipsam praesentium, necessitatibus illum? Explicabo, culpa aspernatur optio deserunt quidem quas?</p>
            </div>
            {/* End Content */}
            <div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, blanditiis asperiores? Ad quas sapiente repellat voluptatum voluptates facere fuga ipsam praesentium, necessitatibus illum? Explicabo, culpa aspernatur optio deserunt quidem quas?</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Day26
