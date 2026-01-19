import { useState, useEffect } from 'react'
import { HERO_SLIDES, type HeroSlide } from '../constants/heroSlides'

interface HeroProps {
  slides?: HeroSlide[]
  autoPlayInterval?: number
}

export default function Hero({
  slides = HERO_SLIDES,
  autoPlayInterval = 5000,
}: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-play functionality
  useEffect(() => {
    if (autoPlayInterval > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, autoPlayInterval)

      return () => clearInterval(interval)
    }
  }, [slides.length, autoPlayInterval])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <section className="relative h-[400px] md:h-[700px] overflow-hidden pt-16 md:pt-20">
      {/* Carousel Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
          >
            {/* Background Image Placeholder - Replace with actual image */}
            <div className="absolute inset-0 bg-linear-to-r from-pca-primary to-pca-tan">
              {slide.imageUrl ? (
                <>
                  <img
                    src={slide.imageUrl}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Black shadow gradient from left to right */}
                  <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/30 to-transparent"></div>
                </>
              ) : (
                <>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white/10 text-6xl font-bold">
                    {slide.placeholder || slide.title}
                  </div>
                </>
              )}
            </div>

            {/* Overlay Text */}
            <div className="absolute bottom-12 md:bottom-20 left-4 md:left-12 lg:left-20 z-20 max-w-[90%] md:max-w-none">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white drop-shadow-lg">
                {slide.title}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all backdrop-blur-sm"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${index === currentSlide
              ? 'w-8 bg-white'
              : 'w-2 bg-white/50 hover:bg-white/75'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
