'use client'

import Image from 'next/image'
import { ScrollReveal } from './scroll-reveal'
import { journalPosts } from '@/lib/mock-data'
import { useLocale } from '@/lib/locale-context'

const POST_IMAGES: Record<string, string> = {
  'pack-february': '/klosterle-village.webp',
  'quiet-season': '/st-anton-sunny.jpg',
  'week-stanzertal': '/verwallsee.jpg',
}

export function JournalSection() {
  const { lang, t } = useLocale()

  const localizedPosts = journalPosts.map((post, i) => ({
    ...post,
    title: t(`journal.posts.${i}.title`),
  }))

  return (
    <section id="journal" className="bg-canvas px-[22px] py-[88px]">
      <div className="max-w-[980px] mx-auto">
        <ScrollReveal>
          <h2 className="type-section mb-10">{t('journal.heading')}</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {localizedPosts.map((post, i) => (
            <ScrollReveal key={post.id} delay={i * 0.07}>
              <article className="bg-white rounded-[8px] overflow-hidden">
                <div className="relative overflow-hidden" style={{ aspectRatio: '3/2' }}>
                  {POST_IMAGES[post.id] ? (
                    <Image
                      src={POST_IMAGES[post.id]}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 320px"
                    />
                  ) : (
                    <div
                      className="flex items-center justify-center w-full h-full absolute inset-0"
                      style={{
                        background: '#cfcfd5',
                        color: 'rgba(0,0,0,0.32)',
                        fontSize: 11,
                        fontFamily: 'var(--font-sans)',
                      }}
                    >
                      [ editorial photo ]
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <p className="type-caption m-0" style={{ color: 'rgba(0,0,0,0.48)' }}>
                    {post.category} · {post.readTime}
                  </p>
                  <h3 className="type-tile mt-[6px] mb-3">{post.title}</h3>
                  <a
                    href={`/${lang}/journal/${post.id}`}
                    className="type-caption"
                    style={{ color: '#836953' }}
                  >
                    {t('journal.readMore')}
                  </a>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
