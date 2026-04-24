import type { Apartment, JournalPost } from '@/types'

export const apartments: Apartment[] = [
  {
    id: 'lodge',
    name: 'The Lodge',
    sleeps: 12,
    rooms: 5,
    area: 180,
    pricePerNight: 540,
    size: 'large',
    dark: false,
    description:
      'The largest of the three. Generous kitchen, two sitting rooms, a long wooden table that seats all twelve.',
  },
  {
    id: 'hearth',
    name: 'The Hearth',
    sleeps: 8,
    rooms: 3,
    area: 120,
    pricePerNight: 360,
    size: 'medium',
    dark: false,
    description:
      'Two floors of wood and stone. Open kitchen, three bedrooms, the balcony faces south.',
  },
  {
    id: 'eyrie',
    name: 'The Eyrie',
    sleeps: 2,
    rooms: 1,
    area: 48,
    pricePerNight: 180,
    size: 'small',
    dark: false,
    description:
      'A top-floor studio. Skylight over the bed; in clear weather, the Arlberg peaks line up through it.',
  },
]

export const journalPosts: JournalPost[] = [
  {
    id: 'pack-february',
    title: 'What to pack in February',
    readTime: '4 min read',
    category: 'Journal',
  },
  {
    id: 'quiet-season',
    title: 'The quiet season, mid-April',
    readTime: '6 min read',
    category: 'Journal',
  },
  {
    id: 'week-stanzertal',
    title: 'A week in the Stanzertal',
    readTime: '8 min read',
    category: 'Journal',
  },
]
