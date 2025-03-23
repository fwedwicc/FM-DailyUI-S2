import React from 'react'
import { motion } from 'framer-motion'
import { Input, Button, Icon } from '../components/ui'
import { HiOutlineStar, HiOutlinePaperAirplane, HiOutlineMail, HiOutlineArrowSmRight } from "react-icons/hi"

const Day26 = () => {

  const Link = ({ children, styles }) => {
    return (
      <a className={`${styles} underline text-indigo-400 cursor-pointer`}>
        {children}
      </a>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='bg-gray-900'
    >
      <div className='grid lg:grid-cols-2 grid-cols-1 lg:min-h-screen'>
        {/* Illustration/Company Details */}
        <div className=' lg:h-full h-[25rem] p-3'>
          <div className='relative h-full overflow-hidden rounded-xl'>
            <img src="" alt="Sample Image" className='object-cover absolute w-full h-full' />
          </div>
        </div>
        {/* Subscribe Section */}
        <div className='p-8'>
          <div className='h-full flex flex-col justify-between lg:gap-y-0 gap-y-20'>
            {/* Start Content */}
            <div className='flex justify-between items-center'>
              <Link>
                Privacy Policy
              </Link>
              <Link styles='flex items-center'>
                Home
                <HiOutlineArrowSmRight className='size-5' />
              </Link>
            </div>
            {/* Middle Content */}
            <div className='space-y-8'>
              {/* Additional Contents */}
              <div className='space-y-4'>
                <h1>Subscribe to newsletter</h1>
                <div className='grid grid-cols-2 gap-4 pt-6'>
                  {[
                    {
                      icon: <HiOutlineStar className='size-6 text-indigo-500' />,
                      title: 'Weekly articles',
                      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut quam magnam.'
                    },
                    {
                      icon: <HiOutlineStar className='size-6 text-indigo-500' />,
                      title: 'No Spam',
                      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut quam magnam.'
                    },
                  ].map((item, index) => (
                    <div className='space-y-2' key={index}>
                      <Icon styles='size-10'>
                        {item.icon}
                      </Icon>
                      <h5>{item.title}</h5>
                      <span>{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Subscribe */}
              <div className='relative w-full'>
                <HiOutlineMail className='size-6 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-600' />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@email.com"
                  styles="w-auto"
                  inputStyles='pr-24 px-12 py-4 rounded-xl'
                />
                <Button label={'Subscribe'} variant='primary' styles='absolute top-1/2 -translate-y-1/2 right-2'>
                  <HiOutlinePaperAirplane className='size-4.5 rotate-90' />
                </Button>
              </div>
              {/* Additional Contents */}
              <p className=''>Lorem ipsumasdf ssdflpa aspernatur erunt quidem quas?</p>
            </div>
            {/* End Content */}
            <div className='space-y-3'>
              <p>Our Socials:</p>
              <div className='space-x-2'>
                {[
                  { icon: HiOutlineStar },
                  { icon: HiOutlineStar },
                  { icon: HiOutlineStar },
                  { icon: HiOutlineStar },
                ].map((item, index) => (
                  <a className='group size-8 rounded-lg inline-flex items-center justify-center hover:bg-gray-800 transition duration-300 ease-in-out cursor-pointer' key={index}>
                    <item.icon className='size-5 group-hover:text-indigo-500 text-gray-300 transition duration-300 ease-in-out' />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Day26
