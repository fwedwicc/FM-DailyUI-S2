import React, { useState } from 'react'
import { HiOutlineChevronDown } from "react-icons/hi"

const baseStyle = 'flex items-center justify-between rounded-lg text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 transition duration-300 ease-in-out'
const sm = 'px-2.5 py-2 text-sm font-medium rounded-md leading-none gap-1'
const md = 'md:px-2.5 px-1.5 md:py-2 py-1 text-sm font-semibold gap-1.5'
const lg = 'md:px-3.5 px-3 md:py-2.5 py-2 text-sm font-semibold gap-1.5'
const secondaryStyle = 'bg-gray-800 hover:bg-gray-700 focus-visible:outline-gray-800'
const ghostStyle = 'hover:bg-gray-800 focus-visible:outline-none'
const outlineStyle = 'border border-gray-700 hover:bg-gray-800 focus-visible:outline-none'

const Dropdown = ({ styles, variant, size, label, disabled, onClick, icon, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (e) => {
    setIsOpen(!isOpen)
    if (onClick) onClick(e)
  }

  return (
    <div className="relative">
      <button
        type="button"
        disabled={disabled}
        onClick={handleClick}
        className={`${size === 'sm' ? sm : size === 'md' ? md : lg} ${disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'} ${baseStyle} ${styles} ${variant === 'secondary' ? secondaryStyle :
          variant === 'ghost' ? ghostStyle :
            variant === 'outline' ? outlineStyle : secondaryStyle
          }`}
      >
        {icon && <span>{icon}</span>}
        <span>{label}</span>
        <HiOutlineChevronDown
          className={`${size === 'sm' ? 'size-3.5' : 'size-4'} transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-auto min-w-max rounded-md bg-gray-800 shadow-lg z-10">
          <div className="p-1.5">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

export default Dropdown