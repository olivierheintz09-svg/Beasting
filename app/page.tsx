import Hero from '@/components/features/hero'
import { AboutSection } from '@/components/features/about-section'
import { StatsSection } from '@/components/features/stats-section'
import { HousesSection } from '@/components/features/houses-section'
import { AtmosphereSection } from '@/components/features/atmosphere-section'
import { ApartmentTile } from '@/components/features/apartment-tile'
import { LocationSection } from '@/components/features/location-section'
import { ArlbergSection } from '@/components/features/arlberg-section'
import { ReviewsSection } from '@/components/features/reviews-section'
import { FaqSection } from '@/components/features/faq-section'
import { JournalSection } from '@/components/features/journal-section'
import { SiteFooter } from '@/components/features/site-footer'
import { StickyCta } from '@/components/features/sticky-cta'
import { apartments } from '@/lib/mock-data'

export default function HomePage() {
  return (
    <>
      <Hero />
      <StickyCta />
      <AboutSection />
      <StatsSection />
      <HousesSection />
      <AtmosphereSection />

      <div>
        {apartments.map((apartment) => (
          <ApartmentTile key={apartment.id} apartment={apartment} />
        ))}
      </div>

      <LocationSection />
      <ArlbergSection />
      <ReviewsSection />
      <FaqSection />
      <JournalSection />
      <SiteFooter />
    </>
  )
}
