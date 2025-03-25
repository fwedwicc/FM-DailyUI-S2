import React from 'react'
import { Button } from './ui'
import { FMLogo } from '../assets'
import { SiGithub } from "react-icons/si"


const Header = () => {
  return (
    <header className='flex justify-between items-center md:p-4 p-2'>
      <img src={FMLogo} alt="FM Logo" className='md:w-6 w-5 h-auto' />
      <a href="https://github.com/fwedwicc/FM-DailyUI-S2" target='_blank' rel='noopener noreferrer'>
        <Button label={'Star it on GitHub'} variant='secondary' styles='flex-row-reverse gap-2'>
          <SiGithub className='size-5' />
        </Button>
      </a>
    </header>
  )
}

export default Header
