import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../components/ui'
import { HiOutlineStar } from "react-icons/hi"

const ButtonCollection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='border border-gray-800 p-4 rounded-2xl space-y-4'
    >
      <h3>Button Components</h3>
      <div className='flex flex-wrap items-center gap-4'>
        {/* Primary Button */}
        <Button label={'Primary'} variant='primary'>
        </Button>
        {/* Secondary Button */}
        <Button label={'Secondary'} variant='secondary'>
        </Button>
        {/* Ghost Button */}
        <Button label={'Ghost'} variant='ghost'>
        </Button>
        {/* Outline Button */}
        <Button label={'Outline'} variant='outline'>
        </Button>
        {/* Primary Button with icon-start */}
        <Button label={'Primary'} variant='primary'>
          <HiOutlineStar className='size-5' />
        </Button>
        {/* Secondary Button with icon-start */}
        <Button label={'Secondary'} variant='secondary'>
          <HiOutlineStar className='size-5' />
        </Button>
        {/* Ghost Button with icon-start */}
        <Button label={'Ghost'} variant='ghost'>
          <HiOutlineStar className='size-5' />
        </Button>
        {/* Outline Button with icon-start */}
        <Button label={'Outline'} variant='outline'>
          <HiOutlineStar className='size-5' />
        </Button>
        {/* Primary Button with icon-end */}
        <Button label={'Primary'} variant='primary' styles='flex-row-reverse'>
          <HiOutlineStar className='size-5' />
        </Button>
        {/* Secondary Button with icon-end */}
        <Button label={'Secondary'} variant='secondary' styles='flex-row-reverse'>
          <HiOutlineStar className='size-5' />
        </Button>
        {/* Ghost Button with icon-end */}
        <Button label={'Ghost'} variant='ghost' styles='flex-row-reverse'>
          <HiOutlineStar className='size-5' />
        </Button>
        {/* Outline Button with icon-end */}
        <Button label={'Outline'} variant='outline' styles='flex-row-reverse'>
          <HiOutlineStar className='size-5' />
        </Button>
        {/* Primary Button - Icon */}
        <Button variant='primary' iconButton>
          <HiOutlineStar className='size-5' />
        </Button>
        {/* Secondary Button - Icon */}
        <Button variant='secondary' iconButton>
          <HiOutlineStar className='size-5' />
        </Button>
        {/* Ghost Button - Icon */}
        <Button variant='ghost' iconButton>
          <HiOutlineStar className='size-5' />
        </Button>
        {/* Outline Button - Icon */}
        <Button variant='outline' iconButton>
          <HiOutlineStar className='size-5' />
        </Button>
      </div>
    </motion.section>
  )
}

export default ButtonCollection
