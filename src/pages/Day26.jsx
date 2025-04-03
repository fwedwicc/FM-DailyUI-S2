import React from 'react'
import { motion } from 'framer-motion'
import useScrollToTop from '../hooks/useScrollToTop'
import { Input, Button, Icon } from '../components/ui'
import { ImageIllustration } from '../assets/day26'
import { FMLogo } from '../assets'
import { HiCalendar, HiShieldCheck, HiOutlinePaperAirplane, HiOutlineMail, HiOutlineArrowSmRight } from "react-icons/hi"
import { SiLinkedin, SiInstagram, SiFacebook, SiX } from "react-icons/si"

const Day26 = () => {

  useScrollToTop()

  const Link = ({ children, styles }) => {
    return (
      <a className={`${styles} md:text-base text-sm underline text-indigo-400 cursor-pointer`}>
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
        <div className='md:order-1 order-2 lg:h-full h-[30rem] p-4'>
          <div className='relative h-full overflow-hidden md:rounded-3xl rounded-2xl border border-gray-800'>
            <img src={ImageIllustration} alt="Image Illustration" className='z-10 object-cover absolute w-full h-full' />
            {/* Blur Effect */}
            <div className='z-20 absolute bg-gray-950 h-[27rem] md:w-[28rem] w-[18rem] -bottom-14 -left-14 rounded-tr-[8rem] blur-2xl' />
            <div className='z-20 absolute bg-gray-950 md:h-[17rem] h-[14rem] w-[70rem] -bottom-14 -right-14 blur-2xl' />
            {/* Additional Contents */}
            <div className='z-30 absolute bottom-0 md:p-12 p-6 space-y-3'>
              <div className='size-24 flex items-center justify-center rounded-2xl bg-gray-900 outline-2 outline-offset-4 outline-indigo-500 border border-gray-800'>
                <img src={FMLogo} alt="FM Logo" className='size-12' />
              </div>
              <h1 className='mt-6'>Hello, World!</h1>
              <p className='w-full max-w-xl'>Exploring Series 2 (Challenges 26-50) of my Daily UI journey, building on fmUI from Series 1. Inspired by Tailwind UI, these designs enhance development skills and spark creativity.</p>
            </div>
          </div>
        </div>
        {/* Subscribe Section */}
        <div className='md:order-2 order-1 md:p-8 p-4'>
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
                <h1>Stay ahead with us!</h1>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-4 pt-3'>
                  {[
                    {
                      icon: HiCalendar,
                      title: 'Curated content',
                      desc: 'Get the latest web dev and design trends, productivity tools delivered every Monday.'
                    },
                    {
                      icon: HiShieldCheck,
                      title: 'Privacy respected',
                      desc: 'We never share your information, and you can unsubscribe anytime with one click.'
                    },
                  ].map((item, index) => (
                    <div className='space-y-2' key={index}>
                      <Icon styles='size-10'>
                        <item.icon
                          className='size-6 text-indigo-500'
                        />
                      </Icon>
                      <h5>{item.title}</h5>
                      <p>{item.desc}</p>
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
                <Button label={'Subscribe'} variant='primary' styles='absolute top-1/2 -translate-y-1/2 md:right-2 right-[5.5px]'>
                  <HiOutlinePaperAirplane className='size-4.5 rotate-90' />
                </Button>
              </div>
              {/* Additional Contents */}
              <div className='space-y-3'>
                <div className='flex items-center'>
                  {/* Avatar */}
                  {[
                    "https://github.com/themesberg/flowbite/blob/main/static/images/people/profile-picture-2.jpg?raw=true",
                    "https://github.com/themesberg/flowbite/blob/main/static/images/people/profile-picture-5.jpg?raw=true",
                    "https://github.com/themesberg/flowbite/blob/main/static/images/people/profile-picture-3.jpg?raw=true",
                    "https://github.com/themesberg/flowbite/blob/main/static/images/people/profile-picture-4.jpg?raw=true"
                  ].map((item, index) => (
                    <div className={`${index === 0 ? '' : '-ml-1'} relative size-8 rounded-full overflow-hidden ring-2 ring-indigo-300`} key={index}>
                      <img src={item} alt="Sample Avatar" className='absolute object-cover w-full h-full' />
                    </div>
                  ))}
                  <p className='ms-3.5'><span className='text-indigo-400'>5,000+</span> developers & designers</p>
                </div>
                <p>Join peers receiving valuable insights weekly. No spam—just quality content.</p>
              </div>
            </div>
            {/* End Content */}
            <div className=''>
              <div className='space-x-2'>
                {[
                  { icon: SiLinkedin },
                  { icon: SiX },
                  { icon: SiInstagram },
                  { icon: SiFacebook },
                ].map((item, index) => (
                  <a className='group size-8 rounded-lg inline-flex items-center justify-center hover:bg-gray-800 transition duration-300 ease-in-out cursor-pointer' key={index}>
                    <item.icon className='size-4 group-hover:text-indigo-500 text-gray-300 transition duration-300 ease-in-out' />
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
