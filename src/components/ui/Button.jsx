import React from 'react'

const baseStyle = 'flex items-center gap-1.5 rounded-lg md:px-3.5 px-3 md:py-2.5 py-2 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 transition duration-300 ease-in-out'
const primaryStyle = 'bg-indigo-500 hover:bg-indigo-400 focus-visible:outline-indigo-500'
const secondaryStyle = 'bg-gray-800 hover:bg-gray-700 focus-visible:outline-gray-800'
const ghostyStyle = 'hover:bg-gray-800 focus-visible:outline-none'
const outlineStyle = 'border border-gray-700 hover:bg-gray-800 focus-visible:outline-none'

const Button = ({ styles, variant, label, disabled, onClick, children }) => {
  return (
    <button type="submit" disabled={disabled} onClick={onClick} className={`${disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'} ${baseStyle} ${styles} ${variant === 'primary' ? primaryStyle : variant === 'secondary' ? secondaryStyle : variant === 'ghost' ? ghostyStyle : variant === 'outline' ? outlineStyle : ''}`}>
      {label}
      {children}
    </button>
  )
}

export default Button
