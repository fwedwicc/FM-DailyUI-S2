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
      <div className='flex items-center flex-wrap gap-3'>
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
        {/* Avatar with Outline - Initials */}
        <Avatar
          type='initials'
          initials='FM'
          size='size-9'
          styles='bg-gray-800 text-white'
          outline='outline-2 outline-offset-2 outline-indigo-500'
        />
        {/* Avatar with Outline - Profile */}
        <Avatar
          type='profile'
          size='size-9'
          image='https://placehold.co/30x30'
          outline='outline-2 outline-offset-2 outline-indigo-500'
        />
        {/* Avatar with status - Online */}
        <Avatar
          type='initials'
          initials='FM'
          size='size-10'
          styles='bg-gray-800 text-white'
          status='online'
        />
        {/* Avatar with status - Idle */}
        <Avatar
          type='initials'
          initials='FM'
          size='size-10'
          styles='bg-gray-800 text-white'
          status='idle'
        />
        {/* Avatar with status - Offline/Default */}
        <Avatar
          type='initials'
          initials='FM'
          size='size-10'
          styles='bg-gray-800 text-white'
          status='offline'
        />
      </div>
    </motion.section>
  )
}

export default AvatarCollection
