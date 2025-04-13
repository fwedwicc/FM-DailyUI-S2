import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '../components/ui'
import { HiStar } from "react-icons/hi"
import useScrollToTop from '../hooks/useScrollToTop'

const Draft = () => {

  useScrollToTop()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='md:min-h-screen flex justify-center items-center md:p-24 p-4'
    >
      <div className='border border-yellow-300/40 space-y-8'>
        {/* Infos */}
        <div className='flex items-end justify-between'>
          {/* Header and Description */}
          <div className='space-y-2'>
            <Badge text='Hello world' styles='mb-3' variant='main'>
              <HiStar className='size-4' />
            </Badge>
            <h1>Hello, World</h1>
            <p className='w-full max-w-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit Iste, ipsum impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          {/* Tab Component */}
          <div className='border border-yellow-300/40'>
            <p>Tab</p>
          </div>
        </div>
        {/* Price Containers */}
        <div className='grid grid-cols-3 gap-4 border border-yellow-300/40'>
          {/* First */}
          <div className='border border-yellow-300/40 rounded-2xl'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic perferendis maiores magnam. At odio nobis sapiente in reprehenderit ex natus nostrum saepe, provident nemo voluptate, nam iure similique atque ipsam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic perferendis maiores magnam. At odio nobis sapiente in reprehenderit ex natus nostrum saepe, provident nemo voluptate, nam iure similique atque ipsam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic perferendis maiores magnam. At odio nobis sapiente in reprehenderit ex natus nostrum saepe, provident nemo voluptate, nam iure similique atque ipsam?</p>
          </div>
          {/* Second */}
          <div className='border border-yellow-300/40 rounded-2xl'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic perferendis maiores magnam. At odio nobis sapiente in reprehenderit ex natus nostrum saepe, provident nemo voluptate, nam iure similique atque ipsam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic perferendis maiores magnam. At odio nobis sapiente in reprehenderit ex natus nostrum saepe, provident nemo voluptate, nam iure similique atque ipsam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic perferendis maiores magnam. At odio nobis sapiente in reprehenderit ex natus nostrum saepe, provident nemo voluptate, nam iure similique atque ipsam?</p>
          </div>
          {/* Third */}
          <div className='border border-yellow-300/40 rounded-2xl'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic perferendis maiores magnam. At odio nobis sapiente in reprehenderit ex natus nostrum saepe, provident nemo voluptate, nam iure similique atque ipsam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic perferendis maiores magnam. At odio nobis sapiente in reprehenderit ex natus nostrum saepe, provident nemo voluptate, nam iure similique atque ipsam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic perferendis maiores magnam. At odio nobis sapiente in reprehenderit ex natus nostrum saepe, provident nemo voluptate, nam iure similique atque ipsam?</p>
          </div>
        </div>
        {/*  */}
        <div className='flex justify-center'>
          <p>Read more</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Draft
