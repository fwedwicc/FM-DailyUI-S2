import React from 'react'
import { motion } from 'framer-motion'
import useScrollToTop from '../hooks/useScrollToTop'
import { ButtonCollection, InputCollection, BadgeCollection, AvatarCollection, RadioCollection, CheckboxCollection } from '../components'

const UICollection = () => {

  useScrollToTop()

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
      {/* Badge Components */}
      <BadgeCollection />
      {/* Avatar Components */}
      <AvatarCollection />
      {/* Radio Components */}
      <RadioCollection />
      {/* Checkbox Components */}
      <CheckboxCollection />
    </motion.main>
  )
}

export default UICollection
