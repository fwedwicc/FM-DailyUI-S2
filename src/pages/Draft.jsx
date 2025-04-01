import React from 'react'
import { motion } from 'framer-motion'
import { FMLogo, FMIllustration } from '../assets'
import { Button, Badge } from '../components/ui'
import { HiChevronDown, HiChevronUp, HiOutlineFlag, HiOutlineCollection, HiOutlineMap, HiOutlineUserGroup, HiOutlineCubeTransparent, HiOutlineLightningBolt, HiSparkles, HiArrowSmRight, HiOutlineSearch, HiMenuAlt3 } from "react-icons/hi"

const Draft = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='lg:min-h-screen'>
        <div className='flex flex-col items-center justify-between md:p-8 p-4 space-y-4'>
          {/* Navigation Bar */}
          <nav className='flex items-center justify-between w-full max-w-7xl rounded-xl p-4 border border-gray-800 bg-gray-800/40'>
            {/* Start */}
            <img src={FMLogo} alt="FM Logo" className='md:w-7 w-5 ms-2' />
            {/* Middle */}
            <div className='md:flex hidden items-center gap-2'>
              <Button label={'About'} variant='ghost' />
              <Button label={'Get Started'} variant='secondary'>
                <HiChevronUp className='size-5' />
              </Button>
              <Button label={'Blogs'} variant='ghost'>
                <HiChevronDown className='size-5' />
              </Button>
              <Button label={'Pricing'} variant='ghost' />
            </div>
            {/* End */}
            <div className='md:flex hidden items-center gap-2'>
              <Badge text='Ctrl K' styles='me-3 cursor-pointer flex-row-reverse'>
                <HiOutlineSearch className='size-4' />
              </Badge>
              <Button label={'Login'} variant='secondary' />
              <Button label={'Sign up'} variant='primary'>
                <HiArrowSmRight className='size-5' />
              </Button>
            </div>
            {/*  */}
            <Button variant='secondary' styles='md:hidden flex' iconButton>
              <HiMenuAlt3 className='size-5' />
            </Button>
          </nav>
          {/* Dropdown Menu */}
          <div className='grid md:grid-cols-3 grid-cols-1 gap-3 w-full max-w-5xl border border-gray-800 bg-gray-800/40 p-4 rounded-2xl'>
            {/* First and Second Column */}
            <div className='self-start col-span-2 grid md:grid-cols-2 grid-cols-1 gap-3'>
              {[
                { icon: HiOutlineFlag, title: 'Get Started', desc: 'Step-by-step setup guide for new users on our platform.' },
                { icon: HiOutlineCollection, title: 'Resources', desc: 'Access tutorials, guides, and comprehensive documentation.' },
                { icon: HiOutlineLightningBolt, title: 'API Docs', desc: 'Detailed API references and integration guidelines.' },
                { icon: HiOutlineUserGroup, title: 'Community', desc: 'Join discussions and connect with other users.' },
                { icon: HiOutlineMap, title: 'Roadmap', desc: 'Explore upcoming features and development plans.' },
                { icon: HiOutlineCubeTransparent, title: 'Frameworks', desc: 'Supported frameworks and integration tips.' },
              ].map((item, index) => (
                <a className='border border-gray-700/40 hover:bg-gray-800/50 p-4 space-y-2 cursor-pointer rounded-lg transition duration-300 ease-in-out' key={index}>
                  <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-2'>
                      <item.icon className='size-6 text-gray-100 stroke-[1.5px]' />
                      <h5>{item.title}</h5>
                    </div>
                    {index === 3 && (
                      <Badge text='New' variant='main'>
                        <HiSparkles className='size-4' />
                      </Badge>
                    )}
                    {index === 4 && (
                      <Badge text='Updated' variant='success'>
                        <HiSparkles className='size-4' />
                      </Badge>
                    )}
                  </div>
                  <p>{item.desc}</p>
                </a>
              ))}
            </div>
            {/* Third Column */}
            <div className='space-y-2.5'>
              <div className='relative w-full h-40 border border-gray-800 rounded-2xl overflow-hidden'>
                <img src={FMIllustration} alt="FM Illustration" className='object-cover w-full h-full absolute' />
              </div>
              <div className='space-y-1'>
                <h3>Hello, World!</h3>
                <p>Exploring Series 2 (Challenges 26-50) of my Daily UI journey, building on fmUI from Series 1. Inspired by Tailwind UI, these designs enhance development skills.</p>
                <Button label={'Get Started'} variant='primary' styles='mt-4'>
                  <HiArrowSmRight className='size-5' />
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
