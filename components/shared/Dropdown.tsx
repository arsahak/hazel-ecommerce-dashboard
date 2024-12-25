'use client'

import { useState, useRef, useEffect } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

interface DropdownProps {
  options: string[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function Dropdown({ options, value, onChange, placeholder = 'Select option' }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative w-[200px]" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full px-4 py-2 
          flex items-center justify-between
          bg-white border rounded-lg
          ${isOpen ? 'ring-2 ring-primary' : 'border-gray-300'}
          transition-colors duration-200
        `}
      >
        <span className="text-gray-900">{value || placeholder}</span>
        {isOpen ? (
          <FiChevronUp className="w-5 h-5 text-primary" />
        ) : (
          <FiChevronDown className="w-5 h-5 text-primary" />
        )}
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                onChange(option)
                setIsOpen(false)
              }}
              className="w-full px-4 py-2 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
            >
              <span>{option}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

