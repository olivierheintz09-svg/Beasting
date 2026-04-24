'use client'

import { useState, useEffect, useRef } from 'react'
import { useReveal } from '@/lib/use-reveal'

const BG_VIDEO = '/schnann-background.mp4'
const POSTER = '/stanzertal-valley.jpg'

function PlayIcon() {
  return (
    <svg width="18" height="20" viewBox="0 0 18 20" fill="white" aria-hidden="true">
      <path d="M17 10L1 19.5V0.5L17 10Z" />
    </svg>
  )
}

export function AtmosphereSection() {
  const [playHovered, setPlayHovered] = useState(false)
  const [closeHovered, setCloseHovered] = useState(false)
  const [lightboxMounted, setLightboxMounted] = useState(false)
  const [lightboxVisible, setLightboxVisible] = useState(false)

  const { ref: headerRef, style: headerStyle } = useReveal(0.2)
  const { ref: revealRef, style: revealStyle } = useReveal(0.1)

  const bgVideoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const lightboxVideoRef = useRef<HTMLVideoElement>(null)
  const srcLoaded = useRef(false)

  // Ensure muted is set imperatively (React muted prop quirk on some browsers)
  useEffect(() => {
    if (bgVideoRef.current) bgVideoRef.current.muted = true
  }, [])

  // Lazy-load background video + pause/resume on scroll
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = bgVideoRef.current
        if (!video) return

        if (entry.isIntersecting) {
          if (!srcLoaded.current) {
            video.src = BG_VIDEO
            video.load()
            srcLoaded.current = true
          }
          video.play().catch(() => {})
        } else if (srcLoaded.current) {
          video.pause()
        }
      },
      { threshold: 0, rootMargin: '200px 0px' }
    )
    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  const closeLightbox = () => {
    setLightboxVisible(false)
    lightboxVideoRef.current?.pause()
    setTimeout(() => setLightboxMounted(false), 300)
  }

  const openLightbox = () => {
    setLightboxMounted(true)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setLightboxVisible(true))
    })
  }

  // Escape key closes lightbox
  useEffect(() => {
    if (!lightboxMounted) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [lightboxMounted]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="py-20 md:py-[120px]" style={{ background: '#fff' }}>

      {/* Heading */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-20">
        <div ref={headerRef} style={headerStyle}>
          <div className="flex items-center gap-4 mb-6">
            <span style={{ display: 'block', width: 48, height: 1, background: '#836953', flexShrink: 0 }} />
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              fontWeight: 500,
              color: 'rgba(0,0,0,0.50)',
              letterSpacing: '0.04em',
            }}>
              Discover the surroundings
            </span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 600,
            color: '#1a1a1a',
            margin: '0 0 56px',
            letterSpacing: '-0.02em',
          }}>
            Schnann, slowly.
          </h2>
        </div>
      </div>

      {/* Video container */}
      <div ref={revealRef} style={revealStyle} className="mx-5 md:mx-20">
        <div
          ref={containerRef}
          style={{
            position: 'relative',
            borderRadius: 20,
            overflow: 'hidden',
            aspectRatio: '16/9',
          }}
        >
          {/* Muted autoplay background loop — src set lazily via IntersectionObserver */}
          <video
            ref={bgVideoRef}
            loop
            playsInline
            preload="metadata"
            poster={POSTER}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />

          {/* Dark tint */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.15)',
            pointerEvents: 'none',
          }} />

          {/* Glass play button */}
          <button
            onClick={openLightbox}
            onMouseEnter={() => setPlayHovered(true)}
            onMouseLeave={() => setPlayHovered(false)}
            aria-label="Play video"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) scale(${playHovered ? 1.05 : 1})`,
              width: 80,
              height: 80,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: playHovered ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(12px) saturate(180%)',
              WebkitBackdropFilter: 'blur(12px) saturate(180%)',
              border: '1px solid rgba(255,255,255,0.35)',
              boxShadow: [
                'inset 0 1.5px 1px 0 rgba(255,255,255,0.50)',
                'inset 0 -1px 1px 0 rgba(255,255,255,0.15)',
                '0 8px 32px rgba(0,0,0,0.20)',
              ].join(', '),
              cursor: 'pointer',
              transition: 'transform 0.3s ease-out, background 0.25s ease',
            }}
          >
            <span style={{ marginLeft: 3 }}>
              <PlayIcon />
            </span>
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxMounted && (
        <div
          onClick={closeLightbox}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 300,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 24,
            background: 'rgba(0,0,0,0.92)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            opacity: lightboxVisible ? 1 : 0,
            transition: 'opacity 0.3s ease-out',
          }}
        >
          {/* Close button */}
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox() }}
            onMouseEnter={() => setCloseHovered(true)}
            onMouseLeave={() => setCloseHovered(false)}
            aria-label="Close video"
            style={{
              position: 'absolute',
              top: 24,
              right: 24,
              width: 40,
              height: 40,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: closeHovered ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.10)',
              border: '1px solid rgba(255,255,255,0.25)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.25)',
              cursor: 'pointer',
              color: '#fff',
              fontSize: 20,
              lineHeight: 1,
              flexShrink: 0,
              transition: 'background 0.2s ease',
              zIndex: 1,
            }}
          >
            ×
          </button>

          {/* Lightbox video */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '90vw',
              maxHeight: '85vh',
              borderRadius: 12,
              overflow: 'hidden',
              transform: lightboxVisible ? 'scale(1)' : 'scale(0.96)',
              transition: 'transform 0.3s ease-out',
            }}
          >
            <video
              ref={lightboxVideoRef}
              src={BG_VIDEO}
              autoPlay
              controls
              style={{
                display: 'block',
                width: '100%',
                maxHeight: '85vh',
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
      )}

    </section>
  )
}
