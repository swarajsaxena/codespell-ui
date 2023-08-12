import React, { FC, HTMLProps } from 'react'

interface ButtonProps {
  size?: 'sm' | 'md' | 'lg'
  type?: 'solid' | 'transparent' | 'outline' | 'soft'
  label: string
}

const Button: FC<ButtonProps> = ({
  size = 'md',
  type = 'solid',
  label,
  ...props
}) => {
  const sizeStyles = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  const backgroundStyles = {
    solid:
      'bg-[--primary] hover:bg-[--muted-foreground] text-[--primary-foreground]',
    transparent: 'text-[--primary] hover:bg-[--muted] font-medium',
    outline:
      'border bg-[--muted] border-[--muted-darker] text-[--primary] hover:bg-[--muted-darker] font-medium',
    soft: 'bg-[--muted] hover:bg-[--muted-darker] text-[--primary] font-medium text-[--primary-foreground]',
  }

  const baseStyles = 'transition-all rounded-[--radius]'

  return (
    <button
      type='button'
      className={[sizeStyles[size], backgroundStyles[type], baseStyles].join(
        ' '
      )}
      {...props}
    >
      {label}
    </button>
  )
}

export default Button
