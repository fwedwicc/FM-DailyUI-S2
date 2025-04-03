import React from 'react'
import { motion } from 'framer-motion'
import { Checkbox } from '../components/ui'
import { HiBadgeCheck } from "react-icons/hi"

const CheckboxCollection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='border border-gray-800 p-4 rounded-2xl space-y-4'
    >
      <h3>Checkbox Components</h3>
      <div className='flex flex-wrap gap-3'>
        {/* Default Checkbox */}
        <div className='flex gap-3'>
          <Checkbox
            variant='default'
            name='default-checkbox'
            value='default-checkbox-1'
            id='default-checkbox-1'
          >
            <label htmlFor='default-checkbox-1' className='text-gray-300'>Standard</label>
          </Checkbox>
          <Checkbox
            variant='default'
            name='default-checkbox'
            value='default-checkbox-2'
            id='default-checkbox-2'
          >
            <label htmlFor='default-checkbox-2' className='text-gray-300'>Premium</label>
          </Checkbox>
        </div>
        {/* Default Checkbox - reverse */}
        <div className='flex gap-3'>
          <Checkbox
            variant='default'
            name='reverse-checkbox'
            value='reverse-checkbox-1'
            id='reverse-checkbox-1'
            styles='flex-row-reverse'
          >
            <label htmlFor='reverse-checkbox-1' className='text-gray-300'>Standard</label>
          </Checkbox>
          <Checkbox
            variant='default'
            name='reverse-checkbox'
            value='reverse-checkbox-2'
            id='reverse-checkbox-2'
            styles='flex-row-reverse'
          >
            <label htmlFor='reverse-checkbox-2' className='text-gray-300'>Premium</label>
          </Checkbox>
        </div>
        {/* Group Checkbox with hidden toggle */}
        <div className='flex w-auto gap-3'>
          {/* Checkbox 1 */}
          <Checkbox
            variant='group-checkbox'
            name='hidden-toggle-checkbox'
            value='hidden-toggle-checkbox-1'
            id='hidden-toggle-checkbox-1'
            styles='w-auto items-center'
            checkboxStyles='hidden'
          >
            <p>Standard</p>
          </Checkbox>
          {/* Checkbox 2 */}
          <Checkbox
            variant='group-checkbox'
            name='hidden-toggle-checkbox'
            value='hidden-toggle-checkbox-2'
            id='hidden-toggle-checkbox-2'
            styles='w-auto items-center'
            checkboxStyles='hidden'
          >
            <p>Premium</p>
          </Checkbox>
        </div>


        {/* Dito yung iba */}


        {/* Group Checkbox with custom toggle-icon */}
        <div className='flex w-full max-w-md gap-3'>
          {/* Checkbox 1 */}
          <Checkbox
            variant='custom-checkbox'
            name='custom-checkbox'
            value='custom-checkbox-1'
            id='custom-checkbox-1'
            styles='w-full items-center'
            icon={<HiBadgeCheck className='size-6 text-indigo-500' />}
          >
            <p>Standard</p>
          </Checkbox>
          {/* Checkbox 2 */}
          <Checkbox
            variant='custom-checkbox'
            name='custom-checkbox'
            value='custom-checkbox-2'
            id='custom-checkbox-2'
            styles='w-full items-center'
            icon={<HiBadgeCheck className='size-6 text-indigo-500' />}
          >
            <p>Premium</p>
          </Checkbox>
        </div>
      </div>
    </motion.section>
  )
}

export default CheckboxCollection
