import React from 'react'

const Textarea = ({ id, label, rows, required, placeholder, styles }) => {
  return (
    <div className={`flex flex-col gap-y-1.5 ${styles}`}>
      <div className='flex items-start gap-1'>
        <label htmlFor={id} className={`${label ? '' : 'sr-only'} md:text-base text-sm text-gray-200`}>
          {label}
        </label>
        {required && <span className='text-red-400'>*</span>}
      </div>
      <textarea id={id} rows={rows} placeholder={placeholder} className='flex w-full rounded-lg bg-white/5 px-3.5 py-2 md:text-base text-sm text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 transition duration-300 ease-in-out'>
      </textarea>
    </div>
  )
}

export default Textarea
