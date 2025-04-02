import React from 'react'
import { motion } from 'framer-motion'
import { Input, Button, Radio, Checkbox, Icon, Textarea } from '../components/ui'
import { HiOutlineStar, HiCheck } from "react-icons/hi"

const Draft = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='grid lg:grid-cols-2 grid-cols-1 lg:min-h-screen border border-yellow-400/30'>
        {/* Contact Form */}
        <div className='flex flex-col justify-center w-full md:p-12 p-8 border border-yellow-400/30'>
          <div className='border border-yellow-400/30 space-y-8'>
            {/* Header */}
            <div>
              <h2>Let's chat!</h2>
              <p>Please complete this form to discuss your concerns in detail.</p>
            </div>
            {/* Form */}
            <form className='grid grid-cols-2 gap-3 border border-yellow-400/30'>
              {/* Client Type */}
              <div className='space-y-2 col-span-full'>
                <p>What kind of client are you?</p>
                <div className='grid grid-cols-2 gap-3'>
                  {/* Radio 1 */}
                  <Radio
                    variant='group-radio'
                    name='center-end-radio'
                    value='center-end-radio-1'
                    id='center-end-radio-1'
                    styles='rounded-xl w-full items-center'
                  >
                    <div className='flex items-start gap-3'>
                      <Icon styles='size-12'>
                        <HiOutlineStar className='size-6 text-gray-300' />
                      </Icon>
                      <div>
                        <p>Standard</p>
                        <p>Free</p>
                      </div>
                    </div>
                  </Radio>
                  {/* Radio 2 */}
                  <Radio
                    variant='group-radio'
                    name='center-end-radio'
                    value='center-end-radio-2'
                    id='center-end-radio-2'
                    styles='rounded-xl w-full items-center'
                  >
                    <div className='flex items-start gap-3'>
                      <Icon styles='size-12'>
                        <HiOutlineStar className='size-6 text-gray-300' />
                      </Icon>
                      <div>
                        <p>Standard</p>
                        <p>Free</p>
                      </div>
                    </div>
                  </Radio>
                </div>
              </div>
              {/* Complete Name */}
              <Input
                id="username"
                name="username"
                type="text"
                label="Username"
                placeholder="E.g fwedwicc"
                styles="w-auto border border-yellow-400/30"
              />
              {/* Email Address */}
              <Input
                id="username"
                name="username"
                type="text"
                label="Username"
                placeholder="E.g fwedwicc"
                styles="w-auto border border-yellow-400/30"
              />
              {/* I am interested in: */}
              <div className='col-span-full space-y-2'>
                <p>What kind of client are you?</p>
                <div className='flex flex-wrap items-center gap-2'>
                  {/* Checkbox 1 */}
                  <Checkbox
                    variant='group-checkbox'
                    name='hidden-toggle-checkbox'
                    value='hidden-toggle-checkbox-1'
                    id='hidden-toggle-checkbox-1'
                    styles='w-auto items-center'
                    checkboxStyles='hidden'
                  >
                    <p>lorem</p>
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
                  {/* Checkbox 3 */}
                  <Checkbox
                    variant='group-checkbox'
                    name='hidden-toggle-checkbox'
                    value='hidden-toggle-checkbox-3'
                    id='hidden-toggle-checkbox-3'
                    styles='w-auto items-center'
                    checkboxStyles='hidden'
                  >
                    <p>Premium</p>
                  </Checkbox>
                  {/* Checkbox 4 */}
                  <Checkbox
                    variant='group-checkbox'
                    name='hidden-toggle-checkbox'
                    value='hidden-toggle-checkbox-4'
                    id='hidden-toggle-checkbox-4'
                    styles='w-auto items-center'
                    checkboxStyles='hidden'
                  >
                    <p>Premium</p>
                  </Checkbox>
                  {/* Checkbox 5 */}
                  <Checkbox
                    variant='group-checkbox'
                    name='hidden-toggle-checkbox'
                    value='hidden-toggle-checkbox-5'
                    id='hidden-toggle-checkbox-5'
                    styles='w-auto items-center'
                    checkboxStyles='hidden'
                  >
                    <p>Premium</p>
                  </Checkbox>
                  {/* Checkbox 6 */}
                  <Checkbox
                    variant='group-checkbox'
                    name='hidden-toggle-checkbox'
                    value='hidden-toggle-checkbox-6'
                    id='hidden-toggle-checkbox-6'
                    styles='w-auto items-center'
                    checkboxStyles='hidden'
                  >
                    <p>Premium</p>
                  </Checkbox>
                </div>
              </div>
              {/* Message */}
              <Textarea
                id="username"
                rows='2'
                label="Username"
                placeholder="E.g fwedwicc"
                styles="col-span-full border border-yellow-400/30"
              />
              {/* Submit Button */}
              <div className='mt-4 border border-yellow-400/30'>
                <Button label={'Submit Inquiry'} variant='primary'>
                  <HiOutlineStar className='size-5' />
                </Button>
              </div>
            </form>
            {/* Note */}
            <div className='p-4 rounded-xl bg-gray-800/30 border border-yellow-400/30'>
              <p><strong>Note:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus quos quasi eligendi vero magni, soluta aspernatur eum consequatur iusto quas, laudantium velit voluptas, expedita maxime atque est eos! Doloribus, quo!</p>
            </div>
          </div>
        </div>
        {/* Contact Information */}
        <div className='md:p-12 p-8 border border-yellow-400/30'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis nulla, amet accusantium, illo ea adipisci maiores corporis placeat in rerum deserunt nisi expedita ex! Minima dolor culpa ipsa voluptatem sed.</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Draft
