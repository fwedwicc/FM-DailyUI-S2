import React from 'react'
import { motion } from 'framer-motion'
import { ButtonCollection, InputCollection } from '../components'

const UICollection = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='bg-gray-900 p-12 space-y-4'
    >
      {/* Button Components */}
      <ButtonCollection />
      {/* Input Components */}
      <InputCollection />
    </motion.main>
  )
}

export default UICollection
