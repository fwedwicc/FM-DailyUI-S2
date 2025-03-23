import React from 'react'
import { motion } from 'framer-motion'
import { Input, Button } from '../components/ui'
import { HiOutlineStar } from "react-icons/hi"

const InputCollection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='border border-gray-800 p-4 rounded-2xl space-y-4'
    >
      <h3>Input Components</h3>
      <div className='flex flex-wrap items-end gap-4'>
        {/* Without Label */}
        <Input
          id="username"
          name="username"
          type="text"
          placeholder="E.g fwedwicc"
          styles="w-auto"
        />
        {/* With Icon-start */}
        <div className='relative'>
          <Input
            id="username"
            name="username"
            type="text"
            placeholder="E.g fwedwicc"
            styles="w-auto"
            inputStyles='pr-9'
          />
          <HiOutlineStar className='size-5 absolute right-2 top-1/2 -translate-y-1/2 text-gray-600' />
        </div>
        {/* With Icon-end */}
        <div className='relative'>
          <HiOutlineStar className='size-5 absolute left-2 top-1/2 -translate-y-1/2 text-gray-600' />
          <Input
            id="username"
            name="username"
            type="text"
            placeholder="E.g fwedwicc"
            styles="w-auto"
            inputStyles='pl-9'
          />
        </div>
        {/* With Label */}
        <Input
          id="username"
          name="username"
          type="text"
          label="Username"
          placeholder="E.g fwedwicc"
          styles="w-auto"
        />
        {/* With Button Child */}
        <div className='relative'>
          <Input
            id="username"
            name="username"
            type="text"
            placeholder="E.g fwedwicc"
            styles="w-auto"
            inputStyles='pr-24 px-4 py-4 rounded-xl'
          />
          <Button label={'Primary'} variant='primary' styles='absolute top-1/2 -translate-y-1/2 right-2' />
        </div>
        {/* With Button Child and start-icon */}
        <div className='relative'>
          <HiOutlineStar className='size-6 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-600' />
          <Input
            id="username"
            name="username"
            type="text"
            placeholder="E.g fwedwicc"
            styles="w-auto"
            inputStyles='pr-24 px-12 py-4 rounded-xl'
          />
          <Button label={'Primary'} variant='primary' styles='absolute top-1/2 -translate-y-1/2 right-2' />
        </div>
      </div>
    </motion.section >
  )
}

export default InputCollection
