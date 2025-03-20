import React from 'react'
import { motion } from 'framer-motion'

const Draft = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Hello, World</h1>
    </motion.div>
  )
}

export default Draft
