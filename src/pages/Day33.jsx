import React from 'react'
import { motion } from 'framer-motion'
import useScrollToTop from '../hooks/useScrollToTop'
import { TbBattery1, TbX, TbCameraFilled, TbCheck, TbColorPicker } from "react-icons/tb"
import { MdFlashlightOn } from "react-icons/md"
import { IoIosWifi } from "react-icons/io"
import { HiChartBar } from "react-icons/hi"

const Day33 = () => {

  useScrollToTop()

  const PhoneMockup = ({ children }) => {
    return (
      <div className='relative bg-indigo-300 p-[3.2px] h-[40rem] w-[21.5rem] rounded-[48px]'>
        {/* Kempamparus */}
        {['right-16 top-0', 'left-0 top-16', 'right-0 top-16', 'left-0 bottom-16', 'right-0 bottom-16', 'left-16 bottom-0'].map((item, index) => (
          <div className={`absolute size-1 bg-gray-600 ${item}`} key={index} />
        ))}
        {/* Left Buttons */}
        <div className='absolute top-30 -left-[2px] flex flex-col gap-3'>
          {[0, 1, 2].map((index) => (
            <div className={`rounded-l-[1px] w-[2px] bg-indigo-300 border-r border-gray-800 ${index === 0 ? 'h-7' : 'h-10'}`} key={index} />
          ))}
        </div>
        {/* Power Button */}
        <div className='absolute top-[10.3rem] -right-[2px] rounded-r-[1px] w-[2px] bg-indigo-300 border-l border-gray-800 h-18' />
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
        <img src="https://images.unsplash.com/photo-1747697006653-569b3f418cf9?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Wallpaper" className='absolute object-cover size-full z-10 hue-rotate-240' />
        <div className='relative flex flex-col justify-between h-full w-full p-3.5 z-50'>
          <div className='space-y-10'>
            {/* Actions */}
            <div className='flex items-center justify-between'>
              <button className='px-4 py-1 rounded-2xl bg-gray-400/40'>
                <TbX className='size-5 text-gray-200' />
              </button>
              <button className='px-4 py-1 rounded-2xl bg-gray-400/40'>
                <TbCheck className='size-5 text-gray-200' />
              </button>
            </div>
            {/* Main Content */}
            <div className='space-y-3'>
              <div className='p-3 rounded-xl border-2 border-gray-400/60'>
                <h1>11</h1>
                <h1>07</h1>
                <span className='text-xs text-gray-300'>Mon, Feb 19</span>
              </div>
              <div className='p-3 rounded-xl border-2 border-gray-400/60'>
                <div className='flex items-center gap-2 p-2 rounded-md bg-gray-500/30'>
                  <div className='size-7 bg-gray-400/50 rounded-md' />
                  <div className='space-y-2'>
                    <div className='bg-gray-400/50 w-14 h-2 rounded-md' />
                    <div className='bg-gray-400/50 w-26 h-2 rounded-md' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer */}
          <div className='flex items-center justify-between'>
            <button className='flex items-center justify-center size-12 rounded-full bg-gray-500/20 border-4 border-gray-50/5 ring-2 ring-gray-400/60'>
              <MdFlashlightOn className='size-5 text-gray-200' />
            </button>
            <button className='flex items-center justify-center size-12 rounded-full bg-gray-500/20 border-4 border-gray-50/5 ring-2 ring-gray-400/60'>
              <TbCameraFilled className='size-5 text-gray-200' />
            </button>
          </div>
          {children}
        </div>
      </>
    )
  }

  const StaticClock = ({ variant }) => {
    const radius = 42
    const clockSize = 80
    const hourHand = clockSize * 0.25
    const minuteHand = clockSize * 0.35
    const secondHand = clockSize * 0.45
    return (
      <div className="relative size-20 flex items-center justify-center">
        {/* Clock Face */}
        {variant === "numbers"
          ? Array.from({ length: 12 }).map((_, i) => {
            const angle = (i + 1) * 30
            const x = 50 + 42 * Math.sin((angle * Math.PI) / 180)
            const y = 50 - 42 * Math.cos((angle * Math.PI) / 180)
            const isQuarter = (i + 1) % 3 === 0
            return (
              <div
                key={i}
                className={`absolute ${isQuarter ? "text-[13px] text-gray-200" : 'text-[9px] text-gray-300'}`}
                style={{
                  top: `${y}%`,
                  left: `${x}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {i + 1}
              </div>
            )
          })
          : Array.from({ length: 12 }).map((_, i) => {
            const angle = (i + 1) * 30
            const x = 50 + 42 * Math.sin((angle * Math.PI) / 180)
            const y = 50 - 42 * Math.cos((angle * Math.PI) / 180)
            const isQuarter = (i + 1) % 3 === 0
            return (
              <div
                key={i}
                className={`absolute rounded-full ${isQuarter ? 'h-1.5 w-[2px] bg-gray-100' : 'h-1 w-[1px] bg-gray-300'}`}
                style={{
                  top: `${y}%`,
                  left: `${x}%`,
                  transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                }}
              />
            )
          })}
        {/* Hour Hand */}
        <div className="w-[1.5px] absolute bg-gray-300 rounded origin-bottom top-5" style={{ height: `${hourHand}px`, transform: "rotate(333.5deg)" }} />
        {/* Minute Hand */}
        <div className="w-[1.5px] absolute bg-gray-600 rounded origin-bottom top-3" style={{ height: `${minuteHand}px`, transform: "rotate(42deg)", }} />
        {/* Seconds Hand */}
        <div className="w-[1px] absolute bg-indigo-500 rounded origin-bottom top-1" style={{ height: `${secondHand}px`, transform: "rotate(199deg)", }} />
        {/* Center Dot */}
        <div className="absolute size-1.5 bg-gray-200 rounded-full" />
      </div>
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
      <div className='flex items-center justify-center md:flex-nowrap flex-wrap gap-12 lg:gap-20'>
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
              <div className='absolute left-0 bottom-0 w-full pt-5 p-4 space-y-2 rounded-t-3xl bg-gray-900 border border-gray-800/60'>
                <div className='absolute top-2 -translate-x-1/2 left-1/2 h-1 w-9 rounded-full bg-gray-700' />
                <p>Time</p>
                {/* Time Position */}
                <div className='grid grid-cols-3 gap-2'>
                  {[
                    { position: 'items-center justify-start' },
                    { position: 'items-center justify-center' },
                    { position: 'items-center justify-end' },
                    { position: 'items-center justify-start' },
                  ].map((item, index) => (
                    <div className={`${item.position} ${index === 3 ? 'border-[2px] border-indigo-500' : 'border border-gray-800'} flex p-2 w-full h-22 rounded-[10px]`} key={index}>
                      {index === 3 ? <h5 className='leading-5'>11 <br /> 07</h5> : <h5>11:07</h5>}
                    </div>
                  ))}
                  <div className='w-full h-22 border border-gray-800 rounded-[10px] flex items-center justify-center'>
                    <StaticClock variant="numbers" />
                  </div>
                  <div className='w-full h-22 border border-gray-800 rounded-[10px] flex items-center justify-center'>
                    <StaticClock variant="ticks" />
                  </div>
                </div>
                {/* Font */}
                <div className='mt-4.5 grid grid-cols-5 gap-2'>
                  {['inter', 'auto', 'cossette-titre-bold', 'montserrat', 'epunda-slab'].map((style, index) => (
                    <div className={`flex items-center justify-center w-full h-13 rounded-lg ${index === 1 ? 'border-[2px] border-indigo-500' : 'border border-gray-800'}`} key={index}>
                      <h4 className={`${style}`}>11</h4>
                    </div>
                  ))}
                </div>
                {/* Color Preferences */}
                <div className='mt-4.5 grid grid-cols-8 gap-4'>
                  <div className='size-5.5 rounded-2xl bg-white flex items-center justify-center border-2 border-gray-800 ring-[1.5px] ring-gray-500'>
                    <TbColorPicker className='size-3 text-gray-600' />
                  </div>
                  {['bg-green-300', 'bg-blue-300', 'bg-teal-300', 'bg-indigo-300', 'bg-purple-300', 'bg-rose-300', , 'bg-amber-200'].map((item, index) => (
                    <div className={`size-5.5 rounded-2xl ${item}`} key={index} />
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

export default Day33