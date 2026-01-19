import { global } from '../../../assets/about'

export default function GlobalLocations() {
  return (
    <section className="bg-pca-cream py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10 md:mb-14">
          <span className="text-pca-red">Global</span> Locations
        </h2>
        <div className="w-full rounded overflow-hidden">
          <img src={global} alt="Global map" className="w-full h-auto" />
        </div>
      </div>
    </section>
  )
}
