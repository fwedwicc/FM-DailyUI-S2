import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '../components/ui'
import { HiStar } from "react-icons/hi"

const BadgeCollection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='border border-gray-800 p-4 rounded-2xl space-y-4'
    >
      <h3>Badge Components</h3>
      <div className='flex flex-wrap gap-3'>
        {/* Default Badge */}
        <Badge text='Hello world' />
        {/* Main Badge */}
        <Badge text='Hello world' variant='main' />
        {/* Success Badge */}
        <Badge text='Hello world' variant='success' />
        {/* Warning Badge */}
        <Badge text='Hello world' variant='warning' />
        {/* Error Badge */}
        <Badge text='Hello world' variant='error' />
        {/* Default Badge with icon-start */}
        <Badge text='Hello world'>
          <HiStar className='size-4' />
        </Badge>
        {/* Main Badge with icon-start */}
        <Badge text='Hello world' variant='main'>
          <HiStar className='size-4' />
        </Badge>
        {/* Success Badge with icon-start */}
        <Badge text='Hello world' variant='success'>
          <HiStar className='size-4' />
        </Badge>
        {/* Warning Badge with icon-start */}
        <Badge text='Hello world' variant='warning'>
          <HiStar className='size-4' />
        </Badge>
        {/* Error Badge with icon-start */}
        <Badge text='Hello world' variant='error'>
          <HiStar className='size-4' />
        </Badge>
        {/* Default Badge with icon-end */}
        <Badge text='Hello world' styles='flex-row-reverse'>
          <HiStar className='size-4' />
        </Badge>
        {/* Main Badge with icon-end */}
        <Badge text='Hello world' variant='main' styles='flex-row-reverse'>
          <HiStar className='size-4' />
        </Badge>
        {/* Success Badge with icon-end */}
        <Badge text='Hello world' variant='success' styles='flex-row-reverse'>
          <HiStar className='size-4' />
        </Badge>
        {/* Warning Badge with icon-end */}
        <Badge text='Hello world' variant='warning' styles='flex-row-reverse'>
          <HiStar className='size-4' />
        </Badge>
        {/* Error Badge with icon-end */}
        <Badge text='Hello world' variant='error' styles='flex-row-reverse'>
          <HiStar className='size-4' />
        </Badge>
      </div>
    </motion.section>
  )
}

export default BadgeCollection
