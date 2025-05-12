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
    >
      <h1>Cheat push. I forgot again</h1>
    </motion.div>
  )
}

export default Draft
