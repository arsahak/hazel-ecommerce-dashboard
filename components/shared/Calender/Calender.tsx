'use client'

import { useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'

interface CalendarProps {
  selectedRange: string
  onClose: () => void
  onSelect: (range: string) => void
}

export function Calendar({ selectedRange, onClose, onSelect }: CalendarProps) {
  const [currentDate] = useState(new Date())
  const [viewDate, setViewDate] = useState(new Date())
  
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const generateMonthDays = (date: Date) => {
    const daysInMonth = getDaysInMonth(date)
    const firstDay = getFirstDayOfMonth(date)
    const days = []

    // Previous month days
    const prevMonthDays = getDaysInMonth(new Date(date.getFullYear(), date.getMonth() - 1, 1))
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        day: prevMonthDays - i,
        isCurrentMonth: false,
        date: new Date(date.getFullYear(), date.getMonth() - 1, prevMonthDays - i)
      })
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
        date: new Date(date.getFullYear(), date.getMonth(), i)
      })
    }

    // Next month days
    const remainingDays = 42 - days.length
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        date: new Date(date.getFullYear(), date.getMonth() + 1, i)
      })
    }

    return days
  }

  const nextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1))
  }

  const prevMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1))
  }

  const isToday = (date: Date) => {
    const today = new Date()
    return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-[700px]">
      <div className="flex flex-col space-y-4">
        <div className="text-lg font-semibold text-[#0f172a]">Sales period:</div>
        <div className="border border-gray-200 rounded-lg p-3">
          <div className="text-gray-600">{selectedRange}</div>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-2">
            <button className="p-1 hover:bg-gray-100 rounded">
              <FiChevronsLeft className="w-5 h-5 text-blue-600" />
            </button>
            <button onClick={prevMonth} className="p-1 hover:bg-gray-100 rounded">
              <FiChevronLeft className="w-5 h-5 text-blue-600" />
            </button>
          </div>
          <div className="flex space-x-4">
            <div className="font-medium">
              {months[viewDate.getMonth()]} {viewDate.getFullYear()}
            </div>
            <div className="font-medium">
              {months[(viewDate.getMonth() + 1) % 12]} {viewDate.getMonth() === 11 ? viewDate.getFullYear() + 1 : viewDate.getFullYear()}
            </div>
          </div>
          <div className="flex space-x-2">
            <button onClick={nextMonth} className="p-1 hover:bg-gray-100 rounded">
              <FiChevronRight className="w-5 h-5 text-blue-600" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <FiChevronsRight className="w-5 h-5 text-blue-600" />
            </button>
          </div>
        </div>

        <div className="flex space-x-4">
          {/* Current Month Calendar */}
          <div className="flex-1">
            <div className="grid grid-cols-7 mb-2">
              {days.map((day) => (
                <div key={day} className="text-center text-sm font-medium text-blue-600">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {generateMonthDays(viewDate).slice(0, 35).map((day, index) => (
                <button
                  key={index}
                  className={`
                    h-8 text-sm rounded-full
                    ${!day.isCurrentMonth ? 'text-gray-400' : 'text-gray-900'}
                    ${isToday(day.date) ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}
                  `}
                >
                  {day.day}
                </button>
              ))}
            </div>
          </div>

          {/* Next Month Calendar */}
          <div className="flex-1">
            <div className="grid grid-cols-7 mb-2">
              {days.map((day) => (
                <div key={day} className="text-center text-sm font-medium text-blue-600">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {generateMonthDays(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1))
                .slice(0, 35)
                .map((day, index) => (
                  <button
                    key={index}
                    className={`
                      h-8 text-sm rounded-full
                      ${!day.isCurrentMonth ? 'text-gray-400' : 'text-gray-900'}
                      ${isToday(day.date) ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}
                    `}
                  >
                    {day.day}
                  </button>
                ))}
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  )
}

