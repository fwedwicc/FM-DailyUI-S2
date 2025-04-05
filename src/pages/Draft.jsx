import React from 'react'
import { motion } from 'framer-motion'
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
      <aside className='z-50 h-screen fixed lg:flex hidden w-20 border border-yellow-300/40'>
        <p>asayd</p>
      </aside>
      {/* Navigation */}
      <nav className='z-40 fixed flex items-center lg:justify-end justify-between w-full p-2 border border-yellow-300/40'>
        {/* Button Toggle for Side Nav - Small Screen */}
        <div className='lg:hidden block border border-yellow-300/40'>
          <h5>Nav</h5>
        </div>
        <h5>Nav</h5>
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
