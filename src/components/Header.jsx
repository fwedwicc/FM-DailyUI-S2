import React from 'react'
import { Button } from './ui'
import { FMLogo } from '../assets'

const Header = () => {
  return (
    <header className='flex justify-between items-center md:p-4 p-2'>
      <img src={FMLogo} alt="FM Logo" className='md:w-6 w-5 h-auto' />
      <Button label={'Star it on GitHub'} variant='secondary' styles='flex-row-reverse'>
        {/* <HiOutlineStar className='size-5' /> */}
      </Button>
    </header>
  )
}

export default Header
