import React from 'react'
import { SiReact, SiTailwindcss, SiGithub, SiDribbble } from "react-icons/si"
import { HiGift, HiFlag, HiBeaker, HiSparkles, HiOutlinePlusSm } from "react-icons/hi"
import { Button, Badge } from '../components/ui'
import { FMIllustration } from '../assets'

const Hero = () => {
  return (
    <>
      {/* First Section */}
      <section className='grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-4'>
        {/* Left Side / Content */}
        <div className='p-4 space-y-6'>
          <Badge text='Tailwind UI Inspired' styles='flex-row-reverse' variant='main'>
            <SiTailwindcss className='size-4' />
          </Badge>
          <div className='space-y-2'>
            <h1><a href="https://www.dailyui.co/" target='_blank' rel='noopener noreferrer' className='underline hover:text-indigo-400 transition duration-300 ease-in-out'>Daily UI</a> Challenges: 25 Days of <span className='bg-gradient-to-r from-blue-300 to-indigo-500 bg-clip-text text-transparent'>Tailwind UI</span> Mastery</h1>
            <p>Join me on a creative journey through 100 days of Daily UI challenges! In Series 2 (Challenges 26–50), I explore a fresh new UI approach inspired by the official Tailwind UI. Discover innovative and thoughtfully crafted designs that push the boundaries of web development and creativity.</p>
          </div>
          <div className='flex gap-2.5 pt-3'>
            <a href="https://dribbble.com/fwedwic" target='_blank' rel='noopener noreferrer'>
              <Button label={'Browse designs'} variant='primary'>
                <SiDribbble className='md:size-5 size-4' />
              </Button>
            </a>
            <a href="https://github.com/fwedwicc/FM-DailyUI-S2" target='_blank' rel='noopener noreferrer'>
              <Button label={'Source code'} variant='secondary'>
                <SiGithub className='md:size-5 size-4' />
              </Button>
            </a>
          </div>
        </div>
        {/* Right Side / Illustration */}
        <div className='relative md:h-auto h-48 right-0'>
          <div className='absolute border w-18 -left-6 h-full z-20 blur-xl  bg-gray-900' />
          <div className='absolute border w-full -top-6 h-12 z-20 blur-xl  bg-gray-900' />
          <div className='absolute border w-full -bottom-6 md:h-18 h-10 z-20 blur-xl  bg-gray-900' />
          <img src={FMIllustration} alt="FM Illustration" className='absolute object-cover w-full h-full' />
        </div>
      </section>
      {/* Second Section */}
      <section className='p-4 grid lg:grid-cols-2 grid-cols-1 md:gap-6 gap-9 md:mt-0 mt-4'>
        {/* Series Links */}
        <div className='lg:order-1 order-2 grid md:grid-cols-2 grid-cols-1 gap-3'>
          {/* Series 1 */}
          <a href="https://fwedwicc.github.io/FM-DailyUI/" target='_blank' rel='noopener noreferrer' className='inline-block border border-gray-800 bg-gray-800/30 hover:bg-gray-800/50 rounded-xl p-4 space-y-2 outline-2 outline-green-400/20 hover:outline-green-400/50 outline-offset-2 transition duration-300 ease-in-out'>
            <div className='flex flex-wrap gap-2 justify-between items-start'>
              <h5>Series 1</h5>
              <Badge text='Finished Series' styles='flex-row-reverse' variant='success'>
                <HiSparkles className='md:size-4 size-3' />
              </Badge>
            </div>
            <p>Challenge 1 to 25</p>
          </a>
          <div className='inline-block border border-gray-800 bg-gray-800/30 rounded-xl p-4 space-y-2 outline-2 outline-indigo-400/30 outline-offset-2'>
            <div className='flex flex-wrap gap-2 justify-between items-start'>
              <h5>Series 2</h5>
              <Badge text='Currently Browsing' styles='flex-row-reverse' variant='main'>
                <HiFlag className='md:size-4 size-3' />
              </Badge>
            </div>
            <p>Challenge 26 to 50</p>
          </div>
          <div className='inline-block border border-gray-800 bg-gray-800/30 rounded-xl p-4 space-y-2 outline-2 outline-gray-400/10 outline-offset-2 opacity-60 cursor-not-allowed'>
            <div className='flex flex-wrap gap-2 justify-between items-start'>
              <h5>Series 3</h5>
              <Badge text='Coming Soon' styles='flex-row-reverse'>
                <HiGift className='md:size-4 size-3' />
              </Badge>
            </div>
            <p>Challenge 51 to 75</p>
          </div>
          <div className='inline-block border border-gray-800 bg-gray-800/30 rounded-xl p-4 space-y-2 outline-2 outline-gray-400/10 outline-offset-2 opacity-60 cursor-not-allowed'>
            <div className='flex flex-wrap gap-2 justify-between items-start'>
              <h5>Series 4</h5>
              <Badge text='Coming Soon' styles='flex-row-reverse'>
                <HiGift className='md:size-4 size-3' />
              </Badge>
            </div>
            <p>Challenge 76 to 100</p>
          </div>
        </div>
        {/* Total designs & Tech stack */}
        <div className='lg:order-2 order-1 grid md:grid-cols-2 grid-cols-1 md:gap-2 gap-5 md:mt-6 mt-0'>
          {[
            { icon: <HiBeaker className='size-9' />, title: '25 Curated Designs', desc: 'Discover 25 uniquely crafted UI designs that blend creativity and functionality, enhancing both aesthetics and user experience.' },
            {
              icon: <>
                <SiReact className='size-9' />
                <HiOutlinePlusSm className='size-5 stroke-1.5' />
                <SiTailwindcss className='size-9' />
              </>, title: 'React + Tailwind', desc: "Built with React and Tailwind CSS, this collection delivers sleek, responsive, and modern UI components for seamless web development."
            },
          ].map((item, index) => (
            <div key={index} className='flex flex-col items-center gap-1 md:items-start md:text-left text-center'>
              <div className='flex items-center gap-1 mb-1 text-indigo-400'>
                {item.icon}
              </div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Hero
