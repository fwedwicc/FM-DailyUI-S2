import React from 'react'
import { SiReact, SiTailwindcss } from "react-icons/si"
import { HiSparkles, HiOutlinePlusSm } from "react-icons/hi"
import { Button, Badge } from '../components/ui'

const Hero = () => {
  return (
    <>
      {/* First Section */}
      <section className='grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-4'>
        {/* Left Side / Content */}
        <div className='p-4 space-y-2'>
          <Badge text='New sasa' styles='flex-row-reverse' variant='main'>
            <HiSparkles className='size-4' />
          </Badge>
          <div className='space-y-1'>
            <h1>Lorem ipsum, dolor sit amet consectetur adipis.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda fuga eveniet nesciunt labore ullam nihil odio ratione officiis, vero pro.</p>
          </div>
          <div className='flex gap-2.5 pt-3'>
            <Button label={'Primary'} variant='primary'>
              <HiSparkles className='size-5' />
            </Button>
            <Button label={'Primary'} variant='secondary'>
              <HiSparkles className='size-5' />
            </Button>
          </div>
        </div>
        {/* Right Side / Illustration */}
        <div className='relative md:h-auto h-56 right-0'>
          <img src="https://placehold.co/30x30" alt="" className='absolute object-cover w-full h-full' />
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
                <HiSparkles className='size-4' />
              </Badge>
            </div>
            <p>Challenge 1 to 25</p>
          </a>
          <div className='inline-block border border-gray-800 bg-gray-800/30 rounded-xl p-4 space-y-2 outline-2 outline-indigo-400/30 outline-offset-2'>
            <div className='flex flex-wrap gap-2 justify-between items-start'>
              <h5>Series 2</h5>
              <Badge text='Currently Browsing' styles='flex-row-reverse' variant='main'>
                <HiSparkles className='size-4' />
              </Badge>
            </div>
            <p>Challenge 26 to 50</p>
          </div>
          <div className='inline-block border border-gray-800 bg-gray-800/30 rounded-xl p-4 space-y-2 outline-2 outline-gray-400/10 outline-offset-2 opacity-60 cursor-not-allowed'>
            <div className='flex flex-wrap gap-2 justify-between items-start'>
              <h5>Series 3</h5>
              <Badge text='Upcoming Series' styles='flex-row-reverse'>
                <HiSparkles className='size-4' />
              </Badge>
            </div>
            <p>Challenge 51 to 75</p>
          </div>
          <div className='inline-block border border-gray-800 bg-gray-800/30 rounded-xl p-4 space-y-2 outline-2 outline-gray-400/10 outline-offset-2 opacity-60 cursor-not-allowed'>
            <div className='flex flex-wrap gap-2 justify-between items-start'>
              <h5>Series 4</h5>
              <Badge text='Upcoming Series' styles='flex-row-reverse'>
                <HiSparkles className='size-4' />
              </Badge>
            </div>
            <p>Challenge 76 to 100</p>
          </div>
        </div>
        {/* Total designs & Tech stack */}
        <div className='lg:order-2 order-1 grid md:grid-cols-2 grid-cols-1 md:gap-2 gap-5 md:mt-6 mt-0'>
          {[
            { icon: <HiSparkles className='size-9' />, title: '25 Curated Designs', desc: 'Lorem ipsum dolor site nihil nemo fugit voluptas Lorem ipsum dolor site nihil nemo fugit voluptas arche id vitae magni!' },
            {
              icon: <>
                <SiReact className='size-9' />
                <HiOutlinePlusSm className='size-5 stroke-1.5' />
                <SiTailwindcss className='size-9' />
              </>, title: 'React + Tailwind', desc: 'Lorem ipsum dolor site nihil nemo fugit voluptas Lorem ipsum dolor site nihil nemo fugit voluptas arche id vitae magni!'
            },
          ].map((item, index) => (
            <div key={index} className='flex flex-col items-center md:items-start md:text-left text-center'>
              <div className='flex items-center gap-1 mb-1 text-gray-600'>
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
