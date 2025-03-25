import React from 'react'

const Badge = ({ text, children, variant, styles }) => {

  const defaultVariant = 'border-indigo-500/20 bg-indigo-400/10 text-indigo-400'
  const successVariant = 'border-green-500/20 bg-green-400/10 text-green-400'
  const warningVariant = 'border-yellow-500/20 bg-yellow-400/10 text-yellow-400'
  const errorVariant = 'border-red-500/20 bg-red-400/10 text-red-400'

  return (
    <div className={`${styles} ${variant === 'success' ? successVariant : variant === 'warning' ? warningVariant : variant === 'error' ? errorVariant : defaultVariant} inline-flex items-center gap-1 text-sm border px-2 py-0.5 rounded-lg`}>
      {text}
      {children}
    </div>
  )
}

export default Badge
