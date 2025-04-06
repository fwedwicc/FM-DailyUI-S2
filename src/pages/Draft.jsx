import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../components/ui'
import { HiOutlineMenuAlt1, HiOutlineRefresh, HiOutlineBookmark, HiOutlineDeviceMobile, HiOutlineViewGrid } from "react-icons/hi"
import useScrollToTop from '../hooks/useScrollToTop'

const Draft = () => {

  useScrollToTop()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='md:min-h-screen border border-yellow-300/40'
    >
      {/* Side Navigation - Large Screen */}
      <aside className='z-50 h-screen fixed p-3 lg:flex flex-col items-center justify-between hidden w-20 border border-yellow-300/40'>
        {/* Start */}
        <div className='flex flex-col items-center gap-1'>
          <Button variant='ghost' iconButton styles='mb-3'>
            <HiOutlineMenuAlt1 className='size-5 stroke-[1.3px]' />
          </Button>
          <Button variant='ghost' label='Saved' styles='flex-col-reverse'>
            <HiOutlineBookmark className='size-6 stroke-[1.3px]' />
          </Button>
          <Button variant='ghost' label='Recent' styles='flex-col-reverse'>
            <HiOutlineRefresh className='size-6 stroke-[1.3px]' />
          </Button>
        </div>
        {/* End */}
        <Button variant='ghost' label='Install app' styles='flex-col-reverse'>
          <HiOutlineDeviceMobile className='size-6 stroke-[1.3px]' />
        </Button>
      </aside>
      {/* Navigation */}
      <nav className='z-40 fixed flex items-center lg:justify-end justify-between w-full p-2 border border-yellow-300/40'>
        {/* Button Toggle for Side Nav - Small Screen */}
        <Button variant='ghost' iconButton styles='lg:hidden flex'>
          <HiOutlineMenuAlt1 className='size-5 stroke-[1.3px]' />
        </Button>
        {/* Other Actions */}
        <div className='flex items-center gap-3 p-3'>
          <Button variant='ghost' iconButton>
            <HiOutlineViewGrid className='size-5 stroke-[1.3px]' />
          </Button>
          <Button variant='ghost' iconButton>
            <HiOutlineMenuAlt1 className='size-5 stroke-[1.3px]' />
          </Button>
        </div>
      </nav>
      {/* Main Content */}
      <main className='grid lg:grid-cols-3 grid-cols-1 lg:ml-20 ml-0 h-screen border border-yellow-300/40'>
        {/* Side Content */}
        <div className='lg:order-1 order-2 col-span-1 overflow-auto h-full border border-yellow-300/40'>
          <h1>Side Content</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto temporibus obcaecati non cumque nostrum eveniet nihil amet? Repellat odio quidem corporis, deserunt itaque ex nam nemo porro neque rem aspernatur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto temporibus obcaecati non cumque nostrum eveniet nihil amet? Repellat odio quidem corporis, deserunt itaque ex nam nemo porro neque rem aspernatur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto temporibus obcaecati non cumque nostrum eveniet nihil amet? Repellat odio quidem corporis, deserunt itaque ex nam nemo porro neque rem aspernatur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto temporibus obcaecati non cumque nostrum eveniet nihil amet? Repellat odio quidem corporis, deserunt itaque ex nam nemo porro neque rem aspernatur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto temporibus obcaecati non cumque nostrum eveniet nihil amet? Repellat odio quidem corporis, deserunt itaque ex nam nemo porro neque rem aspernatur?</p>
        </div>
        {/* Map */}
        <div className='lg:h-screen h-94 lg:order-2 order-1 col-span-2 border border-yellow-300/40'>
          <h1>Map</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dicta eos et ratione quam quos nam possimus at facere, recusandae ut vel assumenda alias illum dolorum, non doloremque. Quisquam, eveniet.</p>
        </div>
      </main>
    </motion.div>
  )
}

export default Draft
