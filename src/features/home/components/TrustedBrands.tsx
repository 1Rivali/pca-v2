import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface TrustedBrandsProps {
  brands: string[]
}

export default function TrustedBrands({ brands }: TrustedBrandsProps) {
  // Duplicate brands for seamless loop
  const duplicatedBrands = [...brands, ...brands]
  const leftRowRef = useRef<HTMLDivElement>(null)
  const rightRowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const leftRow = leftRowRef.current
    const rightRow = rightRowRef.current

    if (!leftRow || !rightRow) return

    // Calculate the width of the duplicated content
    const leftRowWidth = leftRow.scrollWidth / 2
    const rightRowWidth = rightRow.scrollWidth / 2

    // Set initial position for right row
    gsap.set(rightRow, { x: -rightRowWidth })

    // Animation for left row (moving left to right)
    const leftAnimation = gsap.to(leftRow, {
      x: -leftRowWidth,
      duration: 30,
      ease: 'none',
      repeat: -1,
    })

    // Animation for right row (moving right to left)
    const rightAnimation = gsap.to(rightRow, {
      x: 0,
      duration: 30,
      ease: 'none',
      repeat: -1,
    })

    // Cleanup function
    return () => {
      leftAnimation.kill()
      rightAnimation.kill()
    }
  }, [brands])

  return (
    <section className="bg-pca-cream py-12 md:py-16 px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="w-full justify-center items-center flex flex-col mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pca-primary mb-4 md:mb-8 text-center">
            Trusted by leading brands
          </h2>
          <p className="text-gray-500 text-lg sm:text-xl md:text-2xl text-center px-4">
            Global leaders in luxury, retail, and design trust us to bring their vision to life
          </p>
        </div>

        {/* Animated Brand Logos - GSAP Crawling Animation */}
        <div className="mb-8">
          {/* First Row - Moving Left to Right */}
          <div
            ref={leftRowRef}
            className="flex gap-8 md:gap-12 mb-6 md:mb-8"
            style={{ willChange: 'transform' }}
          >
            {duplicatedBrands.map((brand, index) => (
              <div key={`left-${index}`} className="shrink-0 w-24 h-16 md:w-32 md:h-24 flex items-center justify-center">
                <img src={brand} alt={`Brand ${index}`} className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all" />
              </div>
            ))}
          </div>

          {/* Second Row - Moving Right to Left */}
          <div
            ref={rightRowRef}
            className="flex gap-8 md:gap-12"
            style={{ willChange: 'transform' }}
          >
            {duplicatedBrands.map((brand, index) => (
              <div key={`right-${index}`} className="shrink-0 w-24 h-16 md:w-32 md:h-24 flex items-center justify-center">
                <img src={brand} alt={`Brand ${index}`} className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
