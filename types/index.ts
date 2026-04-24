export type ApartmentSize = 'large' | 'medium' | 'small'

export type Apartment = {
  id: string
  name: string
  sleeps: number
  rooms: number
  area: number
  pricePerNight: number
  size: ApartmentSize
  dark: boolean
  description: string
}

export type JournalPost = {
  id: string
  title: string
  readTime: string
  category: string
}
