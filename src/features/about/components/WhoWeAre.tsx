import { aboutBuildingImage } from '../../../assets/about'
import { WHO_WE_ARE } from '../constants/about'

export default function WhoWeAre() {
  return (
    <section className="bg-pca-cream py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold  mb-6 md:mb-8">
          <span className='text-pca-red'>Who</span> We Are
        </h2>
        <p className="text-pca-black/90 text-base md:text-2xl leading-relaxed max-w-7xl mb-10 md:mb-12">
          <span className='font-bold'>{WHO_WE_ARE.descriptionBold}</span> {WHO_WE_ARE.description}
        </p>
        <div className="w-full overflow-hidden">
          <img
            src={aboutBuildingImage}
            alt="PCA facility"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="mt-6 md:mt-8">
          <p className="text-2xl md:text-3xl font-bold text-pca-red">{WHO_WE_ARE.metric}</p>
          <p className="text-pca-black/80 text-sm md:text-base mt-1">
            {WHO_WE_ARE.metricLabel}
          </p>
        </div>
      </div>
    </section>
  )
}
