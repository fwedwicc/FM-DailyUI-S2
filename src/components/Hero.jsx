import React from 'react'
import { SiReact, SiTailwindcss } from "react-icons/si"
import { HiSparkles, HiOutlinePlusSm } from "react-icons/hi"

const Hero = () => {
  return (
    <>
      {/*  */}
      <section className='text-yellow-200 grid md:grid-cols-2 grid-cols-1 border'>
        <div className='border p-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore nesciunt delectus cum hic eos nisi quas modi tempore officia totam harum reprehenderit, doloribus animi! Quae officiis unde suscipit soluta numquam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore nesciunt delectus cum hic eos nisi quas modi tempore officia totam harum reprehenderit, doloribus animi! Quae officiis unde suscipit soluta numquam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore nesciunt delectus cum hic eos nisi quas modi tempore officia totam harum reprehenderit, doloribus animi! Quae officiis unde suscipit soluta numquam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore nesciunt delectus cum hic eos nisi quas modi tempore officia totam harum reprehenderit, doloribus animi! Quae officiis unde suscipit soluta numquam?</div>
        <div className='relative md:h-auto h-64 right-0'>
          <img src="https://placehold.co/30x30" alt="" className='absolute object-cover w-full h-full' />
        </div>
      </section>
      {/*  */}
      <section className='p-4 border grid grid-cols-4 gap-2'>
        {/* Series Links */}
        <div className='border col-span-2 grid grid-cols-2 gap-2'>
          <a href="https://fwedwicc.github.io/FM-DailyUI/" target='_blank' rel='noopener noreferrer' className='inline-block border p-4'>
            FM DailyUI S1
          </a>
          <div className='inline-block border p-4'>
            FM DailyUI S2
            Upcoming Challenge
          </div>
          <div className='inline-block border p-4'>
            FM DailyUI S3
            Upcoming Challenge
          </div>
          <div className='inline-block border p-4'>
            FM DailyUI S4
            Upcoming Challenge
          </div>
        </div>
        {/* Total designs & Tech stack */}
        {[
          { icon: <HiSparkles className='size-9' />, title: '25 Curated Designs', desc: 'Lorem ipsum dolor site nihil nemo fugit voluptas arche id vitae magni!' },
          {
            icon: <>
              <SiReact className='size-9' />
              <HiOutlinePlusSm className='size-5 stroke-1.5' />
              <SiTailwindcss className='size-9' />
            </>, title: 'React + Tailwind', desc: 'Lorem ipsum dolor site nihil nemo fugit voluptas arche id vitae magni!'
          },
        ].map((item, index) => (
          <div key={index}>
            <div className='flex items-center gap-1 mb-1 text-gray-600'>
              {item.icon}
            </div>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>
      {/*  */}
      <section className='text-yellow-200 p-4'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum ullam qui cum et, vol fugit ex fuga possimus quaerat nihil aliquam cupiditate?
      </section>
    </>
  )
}

export default Hero
