import React from 'react'

export default function Button({children, className = '', variant = 'primary', size = 'medium', ...props}) {
  const baseClasses = 'modern-button'
  const variantClasses = {
    primary: 'button-primary',
    secondary: 'button-secondary',
    ghost: 'button-ghost'
  }
  const sizeClasses = {
    small: 'button-small',
    medium: 'button-medium',
    large: 'button-large'
  }
  
  const buttonClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  ].filter(Boolean).join(' ')

  return (
    <button
      className={buttonClasses}
      {...props}
    >
      <span className="button-content">
        {children}
      </span>
    </button>
  )
}
