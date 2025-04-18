import React from 'react'

const baseStyle = 'flex items-center rounded-lg shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 transition duration-300 ease-in-out'
const sm = 'px-2.5 py-2 text-sm font-medium rounded-md leading-none gap-1'
const md = 'md:px-2.5 px-1.5 md:py-2 py-1 text-sm font-semibold gap-1.5'
const lg = 'md:px-3.5 px-3 md:py-2.5 py-2 text-sm font-semibold gap-1.5'
const primaryStyle = 'text-white bg-indigo-500 hover:bg-indigo-400 focus-visible:outline-indigo-500'
const secondaryStyle = 'text-white bg-gray-800 hover:bg-gray-700 focus-visible:outline-gray-800'
const ghostyStyle = 'text-white hover:bg-gray-800 focus-visible:outline-none'
const outlineStyle = 'text-white border border-gray-700 hover:bg-gray-800 focus-visible:outline-none'
const dangerStyle = 'text-red-400 bg-red-400/10 hover:bg-red-400/20 focus-visible:outline-red-400/10'
const infoStyle = 'text-blue-400 bg-blue-400/10 hover:bg-blue-400/20 focus-visible:outline-blue-400/10'


const Button = ({ styles, variant, label, disabled, onClick, size, iconButton, children }) => {
  return (
    <button type="submit" disabled={disabled} onClick={onClick} className={`${styles} ${iconButton ? 'md:p-2.5 p-2' : size === 'sm' ? sm : size === 'md' ? md : lg} ${disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'} ${baseStyle} ${variant === 'primary' ? primaryStyle : variant === 'secondary' ? secondaryStyle : variant === 'ghost' ? ghostyStyle : variant === 'outline' ? outlineStyle : variant === 'danger' ? dangerStyle : variant === 'info' ? infoStyle : ''}`}>
      {label}
      {children}
    </button>
  )
}

export default Button
