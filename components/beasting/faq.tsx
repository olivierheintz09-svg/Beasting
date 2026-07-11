'use client'

import { useState } from 'react'
import Icon from './icon'

const ITEMS = [
  {
    q: 'Voor wie is Beasting geschikt?',
    a: 'Voor sportieve mensen die uitgedaagd willen worden. Je kunt minimaal vijf kilometer ononderbroken hardlopen en hebt een zekere mate van fysieke en mentale belastbaarheid. Individuen, sportteams, scholen en bedrijven — allemaal welkom.',
  },
  {
    q: 'Hoe lang duurt een Beasting?',
    a: 'Minimaal 3 uur, maar we kunnen uitbreiden naar 4, 8, 12 of 24 uur. Wat je programma wordt, hangt af van de groep, het doel en de gewenste intensiteit.',
  },
  {
    q: 'Waar vinden de programma’s plaats?',
    a: 'In de buitenlucht, midden in de natuur. De exacte locatie hoor je vooraf — Beasting = expect the unexpected.',
  },
  {
    q: 'Wat maakt het team achter Beasting anders?',
    a: 'Ons team bestaat uit ervaren sportinstructeurs en militairen die hun sporen hebben verdiend bij speciale eenheden van Defensie. We werken ook samen met coaches voor gedrag, groepsdynamiek en reflectie.',
  },
  {
    q: 'Kan mijn bedrijf een Beasting op maat laten organiseren?',
    a: 'Ja. Voor bedrijven plannen we voorafgaand een intake om samen de doelstelling te bepalen. Kernwaarden, missie en targets nemen we mee in het ontwerp — aangevuld met elementen als effectief communiceren en samenwerken, leiderschap en respect.',
  },
  {
    q: 'Is er catering aanwezig?',
    a: 'Ja, voorafgaand, tijdens en/of na de Beasting. Ook houden we rekening met de fitheid van de deelnemers.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div>
      {ITEMS.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div key={i} style={{ borderBottom: '1px solid rgba(10,7,7,0.18)' }}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 24,
                padding: '24px 0',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                font: '700 16px/1.3 var(--font-sans)',
                textTransform: 'uppercase',
                letterSpacing: 'var(--track-wider)',
                color: 'var(--ink-black)',
              }}
            >
              <span>{item.q}</span>
              <Icon name={isOpen ? 'minus' : 'plus'} size={22} color="var(--ink-black)" />
            </button>
            <div
              style={{
                overflow: 'hidden',
                maxHeight: isOpen ? 400 : 0,
                transition: 'max-height 400ms var(--ease-out)',
              }}
            >
              <p style={{
                margin: 0,
                padding: '0 0 24px',
                maxWidth: '68ch',
                font: 'var(--type-body)',
                color: '#2a2222',
              }}>
                {item.a}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
