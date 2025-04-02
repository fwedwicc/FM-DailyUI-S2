import React from 'react'
import { motion } from 'framer-motion'
import { Input, Button } from '../components/ui'
import { HiOutlineStar } from "react-icons/hi"

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
            <form className='grid grid-cols-2 gap-3'>
              <p className='col-span-full'>What kind of client are you?</p>
              <label
                htmlFor="radio-1"
                className="flex w-full items-center justify-between gap-4 rounded-lg border border-gray-700/40 bg-gray-800/20 p-3 transition-all duration-300 ease-in-out hover:bg-gray-800/60 cursor-pointer has-checked:border-indigo-500 has-checked:ring-1 has-checked:ring-indigo-500"
              >
                <div>
                  <p>Standard</p>
                  <p>Free</p>
                </div>
                <input
                  type="radio"
                  name="custom-radio"
                  value="radio-1"
                  id="radio-1"
                  className="size-5 border-gray-700"
                />
              </label>
              <label
                htmlFor="radio-2"
                className="flex w-full items-center justify-between gap-4 rounded-lg border border-gray-700/40 bg-gray-800/20 p-3 transition-all duration-300 ease-in-out hover:bg-gray-800/60 cursor-pointer has-checked:border-indigo-500 has-checked:ring-1 has-checked:ring-indigo-500"
              >
                <div>
                  <p>Standard</p>
                  <p>Free</p>
                </div>
                <input
                  type="radio"
                  name="custom-radio"
                  value="radio-2"
                  id="radio-2"
                  className="size-5 border-gray-700"
                />
              </label>
              <Input
                id="username"
                name="username"
                type="text"
                label="Username"
                placeholder="E.g fwedwicc"
                styles="w-auto"
              />
              <Input
                id="username"
                name="username"
                type="text"
                label="Username"
                placeholder="E.g fwedwicc"
                styles="w-auto"
              />
              <Input
                id="username"
                name="username"
                type="text"
                label="Username"
                placeholder="E.g fwedwicc"
                styles="col-span-full"
              />
              <div className='mt-4'>
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
