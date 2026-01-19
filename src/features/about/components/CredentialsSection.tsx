import { iso1, iso2, iso3 } from '../../../assets/about'
import { CREDENTIALS } from '../constants/about'

export default function CredentialsSection() {
  return (
    <section className="bg-pca-cream py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-pca-red mb-10 md:mb-12">
          {CREDENTIALS.title}
        </h2>

        {/* Two-column: left = subtitle + ISO badges, right = image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className='mb-8'>
            <p className="text-pca-black font-bold text-base md:text-2xl mb-6 max-w-[60%]">
              {CREDENTIALS.subtitle}
            </p>
            <div className="flex gap-6 h-full">
              <img src={iso1} alt="ISO 9001:2015 Certified" className="w-32 h-32 md:w-54 md:h-54 object-cover rounded-full" />
              <img src={iso2} alt="ISO 14001 Certified" className="w-32 h-32 md:w-54 md:h-54 object-cover rounded-full" />
            </div>
          </div>
          <div className="relative w-full">
            <img
              src={iso3}
              alt="Craftsmanship"
              className="w-full h-auto object-cover max-h-[320px] md:max-h-[400px] rounded-lg"
            />
            <div
              className="absolute -bottom-4 -right-4 w-[90%] h-[90%] border-2 border-pca-beige -z-10 rounded-lg"
              aria-hidden
            />
          </div>
        </div>

        {/* Description and bullets */}
        <div className="mt-10 md:mt-14">
          <p className="text-pca-black/90 text-base leading-relaxed mb-6">
            {CREDENTIALS.description}
          </p>
          <ul className="space-y-2 text-pca-black/90 text-sm md:text-base list-disc list-inside">
            {CREDENTIALS.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
