import React from 'react'
import { motion } from 'framer-motion'
import { Button, Badge } from '../components/ui'
import { HiOutlineStar, HiOutlineCheck } from "react-icons/hi"
import { FMLogo } from '../assets'
import { DogImage } from '../assets/day32'
import useScrollToTop from '../hooks/useScrollToTop'

const Draft = () => {

  useScrollToTop()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='flex lg:flex-row flex-col md:min-h-screen'
    >
      {/* Main Content */}
      <div className='w-full p-7 border border-yellow-300/40'>
        <div className='flex flex-col justify-between h-full gap-8 border border-yellow-300/40'>
          {/* Headings */}
          <div className='space-y-4 border border-yellow-300/40'>
            {/* Campaign Info */}
            <div className='mb-8 space-y-8 border border-yellow-300/40'>
              {/* Logo */}
              <div className='flex items-center gap-4.5 border border-yellow-300/40'>
                <div className='size-10 flex items-center justify-center rounded-lg bg-gray-900 outline-2 outline-offset-4 outline-indigo-500 border border-gray-800'>
                  <img src={FMLogo} alt="FM Logo" className='size-5' />
                </div>
                <h4>Hello, World!</h4>
              </div>
              {/* Heading and Subheadings */}
              <div className='flex flex-col justify-center items-center border border-yellow-300/40'>
                <div className='space-y-1 border border-yellow-300/40'>
                  <h1 className='text-center'><span className='bg-gradient-to-r from-blue-300 to-indigo-500 bg-clip-text text-transparent font-bold'>Be the Reason</span> a Tail Wags Today</h1>
                  <span className='text-gray-200 text-2xl block text-center italic'>One donation. One life changed forever.</span>
                  <p className='text-center w-full max-w-2xl mt-4'>Thousands of stray dogs and cats are surviving on scraps and fear. Your kindness can rewrite their story — from the streets to safety, from hurt to healing.</p>
                </div>
              </div>
            </div>
            {/* Timeline */}
            <div className='mx-12 border border-yellow-300/40 pb-14'>
              <div className='relative h-3 w-full rounded-full bg-gray-700'>
                {/* Progress */}
                <div className='relative h-3 rounded-full w-[69.64%] bg-indigo-500'>
                  {/* First Pin */}
                  <div className='absolute left-[3px] -translate-y-1/2 top-1/2 size-2 shrink-0 rounded-full bg-indigo-700'>
                    <span className='absolute left-0 top-6'>
                      <span className='text-gray-200 text-sm text-nowrap block'>01 • 25 • 2025</span>
                      <span className='text-gray-400 text-xs text-nowrap block'>Campaign Launch</span>
                    </span>
                  </div>
                  {/* Progress and Mid Pin */}
                  <div className='absolute right-[3px] -translate-y-1/2 top-1/2 size-2 shrink-0 rounded-full bg-indigo-700'>
                    <div className='absolute w-[3px] h-6 -translate-x-1/2 left-1/2 rounded-full bg-indigo-700'></div>
                    <span className='absolute -translate-x-1/2 left-1/2 top-6'>
                      <span className='text-gray-200 text-sm text-nowrap block text-center'>Today</span>
                      <span className='text-gray-400 text-xs text-nowrap block text-center'>₱348,200</span>
                    </span>
                  </div>
                </div>
                {/* End Pin */}
                <div className='absolute right-1 -translate-y-1/2 top-1/2 size-[7px] shrink-0 rounded-full bg-gray-500'>
                  <span className='absolute right-0 top-6'>
                    <span className='text-gray-200 text-sm text-nowrap block text-end'>Goal</span>
                    <span className='text-gray-400 text-xs text-nowrap block text-end'>₱500,000</span>
                  </span>
                </div>
              </div>
            </div>
            {/* Numbers */}
            <div className='mx-28 grid grid-cols-3 divide-x divide-gray-700/50 rounded-xl bg-gray-800/20 border border-yellow-300/40'>
              {[
                { digit: '348,200', label: 'Raised Funds' },
                { digit: '479', label: 'Total Contributors' },
                { digit: '89', label: 'Days Since Started' },
              ].map((item, index) => (
                <div className='flex flex-col items-center my-2.5' key={index}>
                  <span className='flex gap-1 text-3xl text-indigo-400 text-center'>
                    {index === 0 && <span className='text-base'>₱</span>}
                    {item.digit}
                  </span>
                  <span className='text-gray-400 text-sm'>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Middle Content */}
          <div className='space-y-2 border border-yellow-300/40'>
            <p>Be their miracle today. Choose your impact:</p>
            <div className='grid grid-cols-2 gap-4 border border-yellow-300/40'>
              {[
                {
                  title: 'One-time Gift',
                  subtitle: 'Make a big difference today.',
                  impactTitle: 'Your Impact:',
                  buttonLabel: 'Donate today',
                  features: [
                    { price: '100+', desc: '3 meals for rescued dogs or cats' },
                    { price: '300+', desc: 'Basic medical checkup & vitamins' },
                    { price: '500+', desc: 'Temporary shelter materials (blankets, crates)' },
                    { price: '1000+', desc: 'Emergency vet care for an injured animal' },
                  ],
                  showBadge: false,
                },
                {
                  title: 'Monthly Supporter',
                  subtitle: 'Be a steady lifeline for rescues every month.',
                  impactTitle: 'Your Monthly Support Covers:',
                  buttonLabel: 'Become a lifeline',
                  features: [
                    { price: '200/month', desc: 'Ongoing food & clean water supply' },
                    { price: '500/month', desc: 'Vaccination & monthly vet checkups' },
                    { price: '1000/month', desc: 'Long-term foster care & training' },
                    { price: '2000/month', desc: 'Full rescue-to-rehome care package' },
                  ],
                  showBadge: true,
                }
              ].map((option, index) => (
                <div key={index} className='space-y-4 p-4 rounded-xl bg-gray-800/30 border border-yellow-300/40'>
                  <div>
                    <div className='flex items-start justify-between'>
                      <h4>{option.title}</h4>
                      {option.showBadge && (
                        <Badge text='Best Impact' variant='main'>
                          <HiOutlineStar className='size-3.5' />
                        </Badge>
                      )}
                    </div>
                    <p>{option.subtitle}</p>
                  </div>
                  <div className='space-y-2 mb-6'>
                    <p>{option.impactTitle}</p>
                    <div className='flex items-center justify-center'>
                      <ul className='space-y-1.5'>
                        {option.features.map((item, i) => (
                          <li key={i} className={`flex items-center gap-1 ${index === 0 ? 'text-gray-200' : 'text-gray-300'}`}>
                            <HiOutlineCheck className='size-4 text-gray-400' />
                            <span className='text-indigo-400'>₱{item.price}</span> → {item.desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Button label={option.buttonLabel} variant='secondary' styles='w-full justify-center'>
                    <HiOutlineStar className='size-5' />
                  </Button>
                </div>
              ))}
            </div>
          </div>
          {/* Footer */}
          <div className='flex flex-col items-center justify-center gap-[1px] border border-yellow-300/40'>
            <span className='text-gray-300 text-center'>Join Our Family of Heroes</span>
            <span className='text-sm text-gray-400 leading-4.5 text-center w-full max-w-md'>Your generosity changes lives — not someday, but today.
              Every peso brings wagging tails and purring hearts closer to home.</span>
          </div>
        </div>
      </div>
      {/* Pet Stories */}
      <div className='lg:max-w-xl w-full py-6 pr-6 border border-yellow-300/40'>
        <div className='relative flex flex-col justify-between h-full rounded-2xl overflow-hidden border border-yellow-300/40'>
          {/* Top Blur */}
          <div className='-left-12 -top-12 z-20 absolute w-[120%] h-64 blur-3xl bg-gray-900'></div>
          <div className='-left-12 -bottom-12 z-20 absolute w-[120%] h-78 blur-3xl bg-gray-900'></div>
          {/* Background Pet Image */}
          <img src={DogImage} alt="Dog Image" className='z-10 top-0 left-0 absolute w-full h-full object-cover' />
          {/* Content */}
          <div className='z-30 p-6 flex flex-col justify-between h-full border border-yellow-300/40'>
            {/* Pet Infor */}
            <div>
              <h2>Mochi</h2>
              <span className='text-xl font-medium text-gray-200'>3 years old • Aspin (Asong Pinoy)</span>
              <p className='mt-2'>Max was found tied to a rusty pole in the pouring rain, malnourished and afraid of every sound.</p>
            </div>
            {/* Quote */}
            <div className='flex justify-center'>
              <span className='italic text-center text-gray-100 font-light text-2xl block w-full max-w-sm'>"I used to flinch at footsteps. Now I race to the door when I hear love coming home."</span>
            </div>
          </div>
          {/* Slide Button */}
          <div className='z-30 p-6 flex items-center justify-center gap-3 border border-yellow-300/40'>
            {new Array(4).fill().map((_, index) => (
              <div key={index} className="w-14 h-1 rounded-full bg-gray-100 cursor-pointer"></div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Draft