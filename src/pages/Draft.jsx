import React from 'react'
import { motion } from 'framer-motion'
import { FMLogo } from '../assets'
import { Button, Badge } from '../components/ui'
import { HiChevronDown, HiChevronUp } from "react-icons/hi"

const Draft = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='lg:min-h-screen border border-yellow-300/40'>
        <div className='flex flex-col items-center justify-between p-8 space-y-4'>
          {/* Navigation Bar */}
          <nav className='flex items-center justify-between w-full max-w-7xl rounded-xl p-3 bg-gray-800/40 border border-yellow-300/40'>
            {/* Start */}
            <img src={FMLogo} alt="FM Logo" className='w-7 ms-2' />
            {/* Middle */}
            <div className='md:flex hidden items-center gap-2 border border-yellow-300/40'>
              <Button label={'Primary'} variant='ghost' />
              <Button label={'Primary'} variant='secondary'>
                <HiChevronUp className='size-5' />
              </Button>
              <Button label={'Primary'} variant='ghost'>
                <HiChevronDown className='size-5' />
              </Button>
              <Button label={'Primary'} variant='ghost' />
            </div>
            {/* End */}
            <div className='md:flex hidden items-center gap-2 border border-yellow-300/40'>
              <Badge text='Ctrl K' styles='me-3 cursor-pointer' />
              <Button label={'Secondary'} variant='secondary' />
              <Button label={'Primary'} variant='primary' />
            </div>
          </nav>
          {/* Dropdown Menu */}
          <div className='grid grid-cols-3 w-full max-w-4xl bg-gray-800/40 p-4 rounded-xl border border-yellow-300/40'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, alias error. Sit ad pariatur libero eveniet corrupti tempora in dolores aspernatur, autem, enim temporibus eos ipsum? Sit incidunt perspiciatis debitis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, alias error. Sit ad pariatur libero eveniet corrupti tempora in dolores aspernatur, autem, enim temporibus eos ipsum? Sit incidunt perspiciatis debitis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, alias error. Sit ad pariatur libero eveniet corrupti tempora in dolores aspernatur, autem, enim temporibus eos ipsum? Sit incidunt perspiciatis debitis?</p>
          </div>
        </div>
      </div>

    </motion.div>
  )
}

export default Draft
