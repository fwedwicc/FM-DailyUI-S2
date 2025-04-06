import React from 'react'
import { motion } from 'framer-motion'
import { Avatar } from '../components/ui'
import { HiStar } from "react-icons/hi"

const AvatarCollection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='border border-gray-800 p-4 rounded-2xl space-y-4'
    >
      <h3>Avatar Components</h3>
      <div className='flex flex-wrap gap-3'>
        {/* Default Avatar - Initials */}
        <Avatar
          type='initials'
          initials='FM'
          size='size-10'
          styles='bg-gray-800 text-white'
        />
        {/* Default Avatar - Profile */}
        <Avatar
          type='profile'
          size='size-10'
          image='https://placehold.co/30x30'
        />
      </div>
    </motion.section>
  )
}

export default AvatarCollection
