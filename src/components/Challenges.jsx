import React from 'react'
import { Link } from 'react-router-dom'
import { Cards, titles } from '../data'
import { SiGithub, SiDribbble } from "react-icons/si"
import { Button } from './ui'

const Challenges = () => {
  return (
    <section>
      <h1>Challenges Section</h1>
      {/* Cards */}
      <div className='grid grid-cols-3'>
        {Cards.map((item, index) => (
          <div key={index} className='border p-2'>
            <p>{item.title}</p>
            <p>{item.day}</p>
            <p>{item.desc}</p>
            <Link to={item.link}>Link</Link>
          </div>
        ))}
      </div>
      <footer className='flex flex-col items-center gap-12 py-12 px-4'>
        {/* Appreciation */}
        <div className='w-full max-w-md text-center space-y-4'>
          <p>Your support means the world! If you find this helpful, please consider giving my <span className='text-white font-semibold'>GitHub repository</span> a star. Feel free to explore those works on <span className='text-white font-semibold'>Dribbble</span>. Thank you so much for your appreciation!</p>
          <div className='flex justify-center gap-3'>
            {/* Primary Button with icon-end */}
            <a href="https://github.com/fwedwicc/FM-DailyUI-S2" target='_blank' rel='noopener noreferrer'>
              <Button label={'@fwedwicc'} styles='bg-gray-800 hover:bg-gray-700 focus-visible:outline-gray-800 flex-row-reverse'>
                <SiGithub className='size-5' />
              </Button>
            </a>
            {/* Secondary Button with icon-end */}
            <a href="https://dribbble.com/fwedwic" target='_blank' rel='noopener noreferrer'>
              <Button label={'@fwedwic'} styles='bg-pink-500 hover:bg-pink-400 focus-visible:outline-pink-500 flex-row-reverse'>
                <SiDribbble className='size-5' />
              </Button>
            </a>
          </div>
        </div>
        {/* Disclaimer */}
        <div className='text-center space-y-1'>
          <h5>Disclaimer</h5>
          <span className='block w-full max-w-2xl italic text-sm text-gray-400'>All works presented here are <span className='text-gray-200'>my original creations</span>. Special thanks to <a href="https://www.dailyui.co/" target='_blank' rel='noopener noreferrer' className='underline text-indigo-400'>Daily UI</a> for providing the prompts that inspired these designs. Additionally, some assets and resources used in these projects are credited to their <span className='text-gray-200'>respective creators</span> found on the internet.</span>
        </div>
      </footer>
    </section>
  )
}

export default Challenges
