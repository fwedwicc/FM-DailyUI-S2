import React from 'react'
import { motion } from 'framer-motion'
import { Radio } from '../components/ui'
import { HiBadgeCheck } from "react-icons/hi"

const RadioCollection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='border border-gray-800 p-4 rounded-2xl space-y-4'
    >
      <h3>Radio Components</h3>
      <div className='flex items-center flex-wrap gap-5'>
        {/* Default Radio */}
        <div className='flex gap-3'>
          <Radio
            variant='default'
            name='default-radio'
            value='default-radio-1'
            id='default-radio-1'
            label='Standard'
          />
          <Radio
            variant='default'
            name='default-radio'
            value='default-radio-2'
            id='default-radio-2'
            label='Premium'
          />
        </div>
        {/* Default Radio - reverse */}
        <div className='flex gap-3'>
          <Radio
            variant='default'
            name='default-reverse-radio'
            value='default-reverse-radio-1'
            id='default-reverse-radio-1'
            label='Standard'
            styles='flex-row-reverse'
          />
          <Radio
            variant='default'
            name='default-reverse-radio'
            value='default-reverse-radio-2'
            id='default-reverse-radio-2'
            label='Premium'
            styles='flex-row-reverse'
          />
        </div>
        {/*  */}
        {/* Group Radio with hidden toggle */}
        <div className='flex w-auto gap-3'>
          {/* Radio 1 */}
          <Radio
            variant='group-radio'
            name='hidden-toggle-radio'
            value='hidden-toggle-radio-1'
            id='hidden-toggle-radio-1'
            styles='w-auto items-center'
            radioStyles='hidden'
          >
            <p>Standard</p>
          </Radio>
          {/* Radio 2 */}
          <Radio
            variant='group-radio'
            name='hidden-toggle-radio'
            value='hidden-toggle-radio-2'
            id='hidden-toggle-radio-2'
            styles='w-auto items-center'
            radioStyles='hidden'
          >
            <p>Premium</p>
          </Radio>
        </div>
        {/* Group Radio with top-end radio */}
        <div className='flex w-full max-w-md gap-3'>
          {/* Radio 1 */}
          <Radio
            variant='group-radio'
            name='top-end-radio'
            value='top-end-radio-1'
            id='top-end-radio-1'
            styles='w-full'
          >
            <div>
              <p>Standard</p>
              <p>Free</p>
            </div>
          </Radio>
          {/* Radio 2 */}
          <Radio
            variant='group-radio'
            name='top-end-radio'
            value='top-end-radio-2'
            id='top-end-radio-2'
            styles='w-full'
          >
            <div>
              <p>Premium</p>
              <p>$9.99</p>
            </div>
          </Radio>
        </div>
        {/* Group Radio with center-end radio */}
        <div className='flex w-full max-w-md gap-3'>
          {/* Radio 1 */}
          <Radio
            variant='group-radio'
            name='center-end-radio'
            value='center-end-radio-1'
            id='center-end-radio-1'
            styles='w-full items-center'
          >
            <div>
              <p>Standard</p>
              <p>Free</p>
            </div>
          </Radio>
          {/* Radio 2 */}
          <Radio
            variant='group-radio'
            name='center-end-radio'
            value='center-end-radio-2'
            id='center-end-radio-2'
            styles='w-full items-center'
          >
            <div>
              <p>Premium</p>
              <p>$9.99</p>
            </div>
          </Radio>
        </div>
        {/* Group Radio with top-start radio */}
        <div className='flex w-full max-w-md gap-3'>
          {/* Radio 1 */}
          <Radio
            variant='group-radio'
            name='top-start-radio'
            value='top-start-radio-1'
            id='top-start-radio-1'
            styles='w-full flex-row-reverse'
          >
            <div className='text-end'>
              <p>Standard</p>
              <p>Free</p>
            </div>
          </Radio>
          {/* Radio 2 */}
          <Radio
            variant='group-radio'
            name='top-start-radio'
            value='top-start-radio-2'
            id='top-start-radio-2'
            styles='w-full flex-row-reverse'
          >
            <div className='text-end'>
              <p>Premium</p>
              <p>$9.99</p>
            </div>
          </Radio>
        </div>
        {/* Group Radio with center-start radio */}
        <div className='flex w-full max-w-md gap-3'>
          {/* Radio 1 */}
          <Radio
            variant='group-radio'
            name='center-start-radio'
            value='center-start-radio-1'
            id='center-start-radio-1'
            styles='w-full items-center flex-row-reverse'
          >
            <div className='text-end'>
              <p>Standard</p>
              <p>Free</p>
            </div>
          </Radio>
          {/* Radio 2 */}
          <Radio
            variant='group-radio'
            name='center-start-radio'
            value='center-start-radio-2'
            id='center-start-radio-2'
            styles='w-full items-center flex-row-reverse'
          >
            <div className='text-end'>
              <p>Premium</p>
              <p>$9.99</p>
            </div>
          </Radio>
        </div>
        {/* Group Radio with custom toggle-icon */}
        <div className='flex w-full max-w-md gap-3'>
          {/* Radio 1 */}
          <Radio
            variant='custom-radio'
            name='custom-radio'
            value='custom-radio-1'
            id='custom-radio-1'
            styles='w-full items-center'
            icon={<HiBadgeCheck className='size-6 text-indigo-500' />}
          >
            <div>
              <p>Standard</p>
              <p>Free</p>
            </div>
          </Radio>
          {/* Radio 2 */}
          <Radio
            variant='custom-radio'
            name='custom-radio'
            value='custom-radio-2'
            id='custom-radio-2'
            styles='w-full items-center'
            icon={<HiBadgeCheck className='size-6 text-indigo-500' />}
          >
            <div>
              <p>Premium</p>
              <p>$9.99</p>
            </div>
          </Radio>
        </div>
      </div>
    </motion.section>
  )
}

export default RadioCollection
