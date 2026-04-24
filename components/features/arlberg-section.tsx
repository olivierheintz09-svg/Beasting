import Image from 'next/image'
import { ScrollReveal } from './scroll-reveal'
import { LinkPill } from '@/components/ui/link-pill'

export function ArlbergSection() {
  return (
    <section
      id="arlberg"
      className="bg-white text-center px-[22px] py-[110px]"
    >
      <div className="max-w-[980px] mx-auto">
        <ScrollReveal>
          <h2 className="type-hero m-0">The Arlberg, from the doorstep.</h2>
          <p
            className="type-sub mt-[18px] mb-10 max-w-[640px] mx-auto"
            style={{ color: 'rgba(0,0,0,0.64)' }}
          >
            305 km of pistes. 88 lifts. Ski-in on the bus; ski back to the apartment door
            by 16:30.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative overflow-hidden rounded-[8px]" style={{ aspectRatio: '16/9' }}>
              <Image
                src="/arlberg-skiing.jpg"
                alt="Powder skiing on the Arlberg"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 490px"
              />
            </div>
            <div className="relative overflow-hidden rounded-[8px]" style={{ aspectRatio: '16/9' }}>
              <Image
                src="/stanzertal-valley.jpg"
                alt="Stanzertal valley in summer"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 490px"
              />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex gap-[14px] justify-center flex-wrap">
            <LinkPill variant="outline-light" href="#">
              Ski season dates
            </LinkPill>
            <LinkPill variant="outline-light" href="#">
              Summer hiking
            </LinkPill>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
