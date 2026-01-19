import { about2 } from '../../../assets/about'

export default function BrandShowcase() {
  return (
    <section className="bg-pca-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="w-full overflow-hidden">
          <img
            src={about2}
            alt="Luxury brand retail"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  )
}
