import React from 'react'
import { motion } from 'framer-motion'
import useScrollToTop from '../hooks/useScrollToTop'

const Draft = () => {

  useScrollToTop()

  const PhoneMockup = ({ children }) => {
    return (
      <div className='relative border-[0.5rem] h-[40rem] w-[21.5rem] rounded-[2rem] ring-2 z-50 bg-gray-700/40 border-gray-900 ring-gray-400'>
        {/* Sound Buttons */}
        <div className='absolute top-20 -left-3 flex flex-col gap-3'>
          {[0, 1, 2].map((index) => (
            <div
              className={`rounded-full w-2 bg-gray-900 border-l-2 border-gray-400 ${index === 0 ? 'h-7' : 'h-10'}`} key={index}>
            </div>
          ))}
        </div>
        {/* Power Button */}
        <div className='absolute top-[9.2rem] border-gray-400 border-r-2 -right-3 rounded-full h-16 w-2 bg-gray-900' />
        {/* Camera */}
        <div className='absolute rounded-full h-[1.3rem] w-20 top-3 left-1/2 transform -translate-x-1/2 bg-gray-900' />
        {/* Phone Header */}
        <div className='absolute w-full flex justify-between items-center pt-2.5 px-3.5 text-white'>
          <span className="leading-relaxed text-xs font-semibold">4:17</span>
          <div className='flex items-center gap-1.5'>
            {['M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z', 'M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.062 0 8.25 8.25 0 0 0-11.667 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.204 3.182a6 6 0 0 1 8.486 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0 3.75 3.75 0 0 0-5.304 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182a1.5 1.5 0 0 1 2.122 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0l-.53-.53a.75.75 0 0 1 0-1.06Z', 'M3.75 6.75a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-.037c.856-.174 1.5-.93 1.5-1.838v-2.25c0-.907-.644-1.664-1.5-1.837V9.75a3 3 0 0 0-3-3h-15Zm15 1.5a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-15a1.5 1.5 0 0 1-1.5-1.5v-6a1.5 1.5 0 0 1 1.5-1.5h15Z'].map((icon, index) => (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`${index === 2 ? 'size-4' : 'size-3'}`} key={index}>
                <path d={icon} />
              </svg>
            ))}
          </div>
        </div>
        {children}
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

        </PhoneMockup>
        {/* Second Mockup */}
        <PhoneMockup>

        </PhoneMockup>
      </div>
    </motion.section>
  )
}

export default Draft
