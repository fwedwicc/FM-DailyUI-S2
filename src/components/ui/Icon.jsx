import React from 'react'

const Icon = ({ children, styles }) => {
  return (
    <div className={`${styles} bg-gray-800/50 inline-flex items-center justify-center p-1 rounded-md border border-gray-700/50`}>
      {children}
    </div>
  )
}

export default Icon
