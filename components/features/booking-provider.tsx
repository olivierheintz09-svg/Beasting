'use client'

import { createContext, useContext, useState } from 'react'
import { BookingSheet } from './booking-sheet'

type BookingContextValue = {
  open: () => void
}

const BookingContext = createContext<BookingContextValue | null>(null)

export function useBooking(): BookingContextValue {
  const ctx = useContext(BookingContext)
  if (!ctx) throw new Error('useBooking must be used inside BookingProvider')
  return ctx
}

type Props = {
  children: React.ReactNode
}

export function BookingProvider({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <BookingContext.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      <BookingSheet open={isOpen} onClose={() => setIsOpen(false)} />
    </BookingContext.Provider>
  )
}
