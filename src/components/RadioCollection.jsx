import React from 'react'
import { motion } from 'framer-motion'
import { HiOutlineStar } from "react-icons/hi"

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
      <div className='flex flex-wrap items-end gap-4'>
        {/* Custom Radio */}
        <div className='flex w-full max-w-xl gap-3'>
          {/* Radio 1 */}
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
          {/* Radio 2 */}
          <label
            htmlFor="radio-2"
            className="flex w-full items-center justify-between gap-4 rounded-lg border border-gray-700/40 bg-gray-800/20 p-3 transition-all duration-300 ease-in-out hover:bg-gray-800/60 cursor-pointer has-checked:border-indigo-500 has-checked:ring-1 has-checked:ring-indigo-500"
          >
            <div>
              <p>Next Day</p>
              <p>$9.99</p>
            </div>
            <input
              type="radio"
              name="custom-radio"
              value="radio-2"
              id="radio-2"
              className="size-5 border-gray-700"
            />
          </label>
        </div>
      </div>
    </motion.section>
  )
}

export default RadioCollection
