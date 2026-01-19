import { VISION } from '../constants/about'

export default function VisionSection() {
  return (
    <section className="bg-pca-cream py-12 md:py-8 lg:py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          <span className='text-pca-red'>{VISION.titleRed}</span> {VISION.title}
        </h2>
        <p className="text-pca-black/90 text-base md:text-xl lg:text-2xl leading-relaxed">
          {VISION.text}
        </p>
      </div>
    </section>
  )
}
