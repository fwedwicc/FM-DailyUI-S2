import React from 'react'
import { motion } from 'framer-motion'

const NoPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='h-screen flex items-center justify-center'
    >
      <h1>404</h1>
    </motion.div>
  )
}

export default NoPage
