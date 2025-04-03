import React from 'react'
import { VRGlass } from '../assets'
import { motion } from 'framer-motion'

const Day29 = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <main>
        <section className='h-screen flex flex-col justify-center items-center'>
          <img src={VRGlass} alt="VR Glass Illustration" className='' />
          <h3 className='absolute bottom-1/3'>Still Crafting...</h3>
        </section>
      </main>
    </motion.div>
  )
}

export default Day29