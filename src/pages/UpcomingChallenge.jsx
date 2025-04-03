import React from 'react'
import { motion } from 'framer-motion'

const UpcomingChallenge = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='h-screen flex items-center justify-center'
    >
      <h1>Upcoming Challenge</h1>
    </motion.div>
  )
}

export default UpcomingChallenge
