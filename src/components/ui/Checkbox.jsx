import React from 'react'

const Checkbox = ({ variant, name, value, id, label, styles, checkboxStyles, icon, children }) => {
  return (
    <>
      {variant === 'default' ? (
        <div className={`${styles} flex items-center gap-2`}>
          <input
            type="checkbox"
            name={name}
            value={value}
            id={id}
            className="accent-indigo-500"
          />
          {children}
        </div>
      ) : variant === 'group-checkbox' ? (
        <label
          htmlFor={id}
          className={`${styles} flex justify-between gap-4 rounded-lg border border-gray-700/40 bg-gray-800/20 p-3 transition-all duration-300 ease-in-out hover:bg-gray-800/60 cursor-pointer has-checked:border-indigo-500 has-checked:ring-1 has-checked:ring-indigo-500`}
        >
          {children}
          <input
            type="checkbox"
            name={name}
            value={value}
            id={id}
            className={`${checkboxStyles} accent-indigo-500`}
          />
        </label>
      ) : variant === 'custom-checkbox' ? (
        <label
          htmlFor={id}
          className={`${styles} flex justify-between gap-4 rounded-lg border border-gray-700/40 bg-gray-800/20 p-3 transition-all duration-300 ease-in-out hover:bg-gray-800/60 cursor-pointer has-checked:border-indigo-500 has-checked:ring-1 has-checked:ring-indigo-500`}
        >
          <input
            type="checkbox"
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

export default Checkbox
