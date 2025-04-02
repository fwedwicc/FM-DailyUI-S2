import React from 'react'

const Radio = ({ variant, name, value, id, label, styles, radioStyles, icon, children }) => {
  return (
    <>
      {variant === 'default' ? (
        <div className={`${styles} flex items-center gap-2`}>
          <input
            type="radio"
            name={name}
            value={value}
            id={id}
            className="accent-indigo-500"
          />
          <label htmlFor={id} className='text-gray-300'>{label}</label>
        </div>
      ) : variant === 'group-radio' ? (
        <label
          htmlFor={id}
          className={`${styles} flex justify-between gap-4 rounded-lg border border-gray-700/40 bg-gray-800/20 p-3 transition-all duration-300 ease-in-out hover:bg-gray-800/60 cursor-pointer has-checked:border-indigo-500 has-checked:ring-1 has-checked:ring-indigo-500`}
        >
          {children}
          <input
            type="radio"
            name={name}
            value={value}
            id={id}
            className={`${radioStyles} accent-indigo-500 shrink-0`}
          />
        </label>
      ) : variant === 'custom-radio' ? (
        <label
          htmlFor={id}
          className={`${styles} flex justify-between gap-4 rounded-lg border border-gray-700/40 bg-gray-800/20 p-3 transition-all duration-300 ease-in-out hover:bg-gray-800/60 cursor-pointer has-checked:border-indigo-500 has-checked:ring-1 has-checked:ring-indigo-500`}
        >
          <input
            type="radio"
            name={name}
            value={value}
            id={id}
            className='sr-only peer'
          />
          {children}
          <div className='opacity-0 peer-checked:opacity-100 transition duration-300 ease-in-out'>
            {icon}
          </div>
        </label>
      ) : null}
    </>
  )
}

export default Radio
