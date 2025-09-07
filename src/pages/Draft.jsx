import React from 'react'
import { motion } from 'framer-motion'
import useScrollToTop from '../hooks/useScrollToTop'
import { TbBattery1, TbX } from "react-icons/tb"
import { IoIosWifi } from "react-icons/io"
import { HiChartBar } from "react-icons/hi"

const Draft = () => {

  useScrollToTop()

  const PhoneMockup = ({ children }) => {
    return (
      <div className='relative bg-gray-400 p-[3.2px] h-[40rem] w-[21.5rem] rounded-[48px]'>
        {/* Kempamparus */}
        {['right-16 top-0', 'left-0 top-16', 'right-0 top-16', 'left-0 bottom-16', 'right-0 bottom-16', 'left-16 bottom-0'].map((item, index) => (
          <div className={`absolute size-1 bg-gray-600 ${item}`} key={index} />
        ))}
        {/* Left Buttons */}
        <div className='absolute top-30 -left-[2px] flex flex-col gap-3'>
          {[0, 1, 2].map((index) => (
            <div className={`rounded-l-[1px] w-[2px] bg-gray-400 border-r border-gray-800 ${index === 0 ? 'h-7' : 'h-10'}`} key={index} />
          ))}
        </div>
        {/* Power Button */}
        <div className='absolute top-[10.3rem] -right-[2px] rounded-r-[1px] w-[2px] bg-gray-400 border-l border-gray-800 h-18' />
        {/* Phone */}
        <div className='relative border-[0.5rem] size-full rounded-[46px] ring-2 z-50 bg-gray-800 border-neutral-950 ring-gray-700 overflow-hidden'>
          {/* Speacker ba to?? */}
          <div className='absolute -top-2 -translate-x-1/2 left-1/2 w-[3rem] h-[3px] rounded-b-full bg-neutral-900 z-50' />
          {/* Camera */}
          <div className='absolute rounded-full h-[1.3rem] w-19 top-2.5 left-1/2 transform -translate-x-1/2 bg-neutral-950 z-50'>
            <div className='absolute right-1 -translate-y-1/2 top-1/2 size-3.5 rounded-full bg-black/30' />
          </div>
          {/* Phone Header */}
          {/* <div className='absolute w-full flex justify-between items-center pt-3 px-6 text-white z-50'>
            <span className="leading-relaxed text-xs font-semibold">4:17</span>
            <div className='flex items-center gap-1'>
              <HiChartBar className='size-3 me-0.5' />
              <IoIosWifi className='size-3.5' />
              <TbBattery1 className='size-5 stroke-[1.5px]' />
            </div>
          </div> */}
          {children}
        </div>
      </div>
    )
  }

  const Content = ({ children }) => {
    return (
      <>
        <img src="https://placehold.co/30x30" alt="Sampol wolpepah" className='absolute object-cover size-full z-10 opacity-10' />
        <div className='relative flex flex-col justify-between h-full w-full p-3.5 z-50'>
          <div className='space-y-10'>
            {/* Actions */}
            <div className='flex items-center justify-between border border-yellow-500/30'>
              <button className='px-4 py-1 rounded-xl bg-gray-500/40'>
                <TbX className='size-5 text-gray-200' />
              </button>
              <button className='px-4 py-1 rounded-xl bg-gray-500/40'>
                <TbX className='size-5 text-gray-200' />
              </button>
            </div>
            {/* Main Content */}
            <div className='space-y-3 border border-yellow-500/30'>
              <div className='p-3 rounded-xl border-2 border-gray-500/40'>
                <h1>11</h1>
                <h1>53</h1>
                <span className='text-xs text-gray-300'>Mon, Sep 01</span>
              </div>
              <div className='p-3 rounded-xl border-2 border-gray-500/40'>
                <div className='flex items-center gap-2 p-2 rounded-md bg-gray-500/30'>
                  <div className='size-7 bg-gray-600/40 rounded-md'></div>
                  <div className='space-y-2'>
                    <div className='bg-gray-600/40 w-14 h-2 rounded-md'></div>
                    <div className='bg-gray-600/40 w-26 h-2 rounded-md'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer */}
          <div className='flex items-center justify-between border border-yellow-500/30'>
            <button className='flex items-center justify-center size-12 rounded-full bg-gray-500/20 border-4 border-gray-50/5 ring-2 ring-gray-500/40'>
              <TbX className='size-5 text-gray-200' />
            </button>
            <button className='flex items-center justify-center size-12 rounded-full bg-gray-500/20 border-4 border-gray-50/5 ring-2 ring-gray-500/40'>
              <TbX className='size-5 text-gray-200' />
            </button>
          </div>
          {children}
        </div>
      </>
    )
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='min-h-screen flex items-center justify-center p-12 md:px-12 px-8 py-8'
    >
      <div className='flex items-center justify-center md:flex-nowrap flex-wrap gap-12 lg:gap-20 border border-yellow-500/30'>
        {/* First Mockup */}
        <PhoneMockup>
          <div className='relative h-full overflow-hidden'>
            <Content />
          </div>
        </PhoneMockup>
        {/* Second Mockup */}
        <PhoneMockup>
          <div className='relative h-full overflow-hidden'>
            <Content>
              {/* Drawer */}
              <div className='absolute left-0 bottom-0 w-full pt-5 p-4 space-y-2 rounded-t-3xl bg-gray-900 border border-yellow-300/20'>
                <div className='absolute top-2 -translate-x-1/2 left-1/2 h-1 w-9 rounded-full bg-gray-700' />
                <p>Time</p>
                {/* Time Position */}
                <div className='grid grid-cols-3 gap-2 border border-yellow-300/20'>
                  {[
                    { position: 'items-center justify-start' },
                    { position: 'items-center justify-center' },
                    { position: 'items-center justify-end' },
                    { position: 'items-center justify-start' },
                  ].map((item, index) => (
                    <div className={`${item.position} flex p-2 w-full h-22 border border-yellow-300/20 rounded-lg`} key={index}>
                      {index === 3 ? <h5>11 <br /> 53</h5> : <h5>11:53</h5>}
                    </div>
                  ))}
                  <div className='w-full h-22 border border-yellow-300/20 rounded-lg'>
                    {/* <h5>11:53</h5> */}
                  </div>
                  <div className='w-full h-22 border border-yellow-300/20 rounded-lg'>
                    {/* <h5>11:53</h5> */}
                  </div>
                </div>
                {/* Font */}
                <div className='mt-4 grid grid-cols-5 gap-2'>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div className={`flex items-center justify-center w-full h-13 rounded-lg ${index === 1 ? 'border-[1.5px] border-indigo-400' : 'border border-yellow-300/20'}`} key={index}>
                      <h3>12</h3>
                    </div>
                  ))}
                </div>
                {/* Color Preferences */}
                <div className='mt-4 grid grid-cols-7 gap-4 border border-yellow-300/20'>
                  {Array.from({ length: 7 }).map((_, index) => (
                    <div className={`size-6.5 rounded-2xl bg-white ${index === 0 ? 'flex items-center justify-center border-2 border-gray-800 ring-[1.5px] ring-gray-500' : ''}`} key={index}>
                      {index === 0 && (<TbX className='size-3 text-gray-600' />)}
                    </div>
                  ))}
                </div>
              </div>
            </Content>
          </div>
        </PhoneMockup>
      </div>
    </motion.section>
  )
}

export default Draft
