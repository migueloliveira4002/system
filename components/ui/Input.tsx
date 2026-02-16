'use client'
import * as React from 'react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
}

export function Input({ label, error, className, ...props }: InputProps) {
  return (
    <div className="w-full space-y-2">
      {label ? (
        <label className="text-sm text-text-secondary">{label}</label>
      ) : null}
      <input
        className={[
          'w-full h-11 px-3 rounded-lg',
          'bg-[#141414] text-text-primary placeholder:text-text-secondary/60',
          'border border-border focus:border-brand-red',
          'brand-focus',
          className || '',
        ].join(' ')}
        {...props}
      />
      {error ? (
        <p className="text-xs text-brand-red">{error}</p>
      ) : null}
    </div>
  )
}
