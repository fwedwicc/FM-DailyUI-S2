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
      {/* Main Content */}
      <div className='w-full p-12 border border-yellow-300/40'>
        <div className='flex flex-col justify-between h-full border border-yellow-300/40'>
          {/* Headings */}
          <div className='space-y-6 border border-yellow-300/40'>
            {/* Campaign Info */}
            <div>
              <h4>Hello World</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur et ea fugiat error, eveniet ab mollitia non, nisi asperiores rerum modi iure, veniam praesentium cumque numquam culpa pariatur repudiandae alias.</p>
            </div>
            {/* Timeline */}
            <div className='mx-20 border border-yellow-300/40 pb-8'>
              <div className='relative h-3 w-full rounded-full bg-gray-700'>
                {/* Progress */}
                <div className='relative h-3 rounded-full w-[69.64%] bg-indigo-500'>
                  {/* First Pin */}
                  <div className='absolute left-[3px] -translate-y-1/2 top-1/2 size-2 shrink-0 rounded-full bg-indigo-700'>
                    <span className='absolute -translate-x-1/2 left-1/2 top-6 text-gray-400'>ss</span>
                  </div>
                  {/* Progress and Mid Pin */}
                  <div className='absolute right-[3px] -translate-y-1/2 top-1/2 size-2 shrink-0 rounded-full bg-indigo-700'>
                    <div className='absolute w-[3px] h-6 -translate-x-1/2 left-1/2 rounded-full bg-indigo-700'></div>
                    <span className='absolute -translate-x-1/2 left-1/2 top-6 text-gray-400'>ss</span>
                  </div>
                </div>
                {/* End Pin */}
                <div className='absolute right-1 -translate-y-1/2 top-1/2 size-[7px] shrink-0 rounded-full bg-gray-500'>
                  <span className='absolute -translate-x-1/2 left-1/2 top-6 text-gray-400'>ss</span>
                </div>
              </div>
            </div>
            {/* Numbers */}
            <div className='mx-12 grid grid-cols-3 divide-x divide-gray-700/50 rounded-xl bg-gray-800/20 border border-yellow-300/40'>
              <div className='flex flex-col items-center my-2.5'>
                <span className='flex gap-1 text-3xl text-indigo-400 text-center'>
                  <span className='text-base'>₱</span>
                  348,200
                </span>
                <span className='text-gray-400'>Mission Goal</span>
              </div>
              <div className='flex flex-col items-center my-2.5'>
                <span className='text-3xl text-indigo-400 text-center'>479</span>
                <span className='text-gray-400'>Total Contributors</span>
              </div>
              <div className='flex flex-col items-center my-2.5'>
                <span className='text-3xl text-indigo-400 text-center'>89</span>
                <span className='text-gray-400'>Days Since Started</span>
              </div>
            </div>
          </div>
          {/* Middle Content */}
          <div className='space-y-2 border border-yellow-300/40'>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            <div className='grid grid-cols-2 gap-4'>
              <div className='border border-yellow-300/40 p-5 rounded-xl'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis labore consequuntur doloremque, explicabo officia neque quam quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quo alias culpa nobis suscipit, quasi animi, nulla corrupti, explicabo nam sequi nisi minus quod natus fuga quae. Eum, sequi odit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className='border border-yellow-300/40 p-5 rounded-xl'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis labore consequuntur doloremque, explicabo officia neque quam quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quo alias culpa nobis suscipit, quasi animi, nulla corrupti, explicabo nam sequi nisi minus quod natus fuga quae. Eum, sequi odit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          {/* Footer */}
          <div className='border border-yellow-300/40'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quo alias culpa nobis suscipit, quasi animi, nulla corrupti, explicabo nam sequi nisi minus quod natus fuga quae. Eum, sequi odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quo alias culpa nobis suscipit, quasi animi, nulla corrupti, explicabo nam sequi nisi minus quod natus fuga quae. Eum, sequi odit.</p>
            <span className='text-sm text-gray-400'>lreom lorem hello</span>
          </div>
        </div>
      </div>
      {/* Pet Stories */}
      <div className='lg:max-w-xl w-full py-6 pr-6 border border-yellow-300/40'>
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
    </motion.div>
  )
}

export default Draft