import React from 'react'
import { motion } from 'framer-motion'
import { FMLogo, FMIllustration } from '../assets'
import { Button, Badge } from '../components/ui'
import { HiChevronDown, HiChevronUp, HiOutlineStar } from "react-icons/hi"

const Draft = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='lg:min-h-screen'>
        <div className='flex flex-col items-center justify-between p-8 space-y-4'>
          {/* Navigation Bar */}
          <nav className='flex items-center justify-between w-full max-w-7xl rounded-xl p-4 border border-gray-800 bg-gray-800/40'>
            {/* Start */}
            <img src={FMLogo} alt="FM Logo" className='w-7 ms-2' />
            {/* Middle */}
            <div className='md:flex hidden items-center gap-2'>
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
            <div className='md:flex hidden items-center gap-2'>
              <Badge text='Ctrl K' styles='me-3 cursor-pointer' />
              <Button label={'Secondary'} variant='secondary'>
                <HiOutlineStar className='size-5' />
              </Button>
              <Button label={'Primary'} variant='primary'>
                <HiOutlineStar className='size-5' />
              </Button>
            </div>
          </nav>
          {/* Dropdown Menu */}
          <div className='grid md:grid-cols-3 grid-cols-1 gap-3 w-full max-w-5xl border border-gray-800 bg-gray-800/40 p-4 rounded-2xl'>
            {/* First and Second Column */}
            <div className='self-start col-span-2 grid grid-cols-2 gap-3'>
              {[
                { icon: HiOutlineStar, title: 'Hello World', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, error.' },
                { icon: HiOutlineStar, title: 'Hello World', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, error.' },
                { icon: HiOutlineStar, title: 'Hello World', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, error.' },
                { icon: HiOutlineStar, title: 'Hello World', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, error.' },
                { icon: HiOutlineStar, title: 'Hello World', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, error.' },
                { icon: HiOutlineStar, title: 'Hello World', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, error.' },
              ].map((item, index) => (
                <a className='border border-gray-700/40 hover:bg-gray-800/50 px-4 py-3 space-y-1 cursor-pointer rounded-lg transition duration-300 ease-in-out' key={index}>
                  <div className='flex items-center gap-1'>
                    <item.icon className='size-6 text-gray-100' />
                    <h5>{item.title}</h5>
                  </div>
                  <p>{item.desc}</p>
                </a>
              ))}
            </div>
            {/* Third Column */}
            <div className='space-y-2'>
              <div className='relative w-full h-36 border border-gray-800 rounded-2xl overflow-hidden'>
                <img src={FMIllustration} alt="FM Illustration" className='object-cover w-full h-full absolute' />
              </div>
              <div className='space-y-1'>
                <h3>Hello, World!</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, alisectetur adipisicing elit. Sas error. Sit ad pariatur libero eveniet corrupti tem.</p>
                <Button label={'Primary'} variant='primary' styles='mt-3'>
                  <HiOutlineStar className='size-5' />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </motion.div>
  )
}

export default Draft
