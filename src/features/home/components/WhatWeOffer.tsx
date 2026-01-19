import ServiceCard from './ServiceCard'

interface WhatWeOfferProps {
  services: string[]
  imageUrl?: string
}

export default function WhatWeOffer({ services, imageUrl }: WhatWeOfferProps) {
  return (
    <section className="bg-white py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-8 md:mb-12">
          <span className="text-pca-primary">What</span> We Offer
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Services List */}
          <div className="space-y-3 md:space-y-4">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>

          {/* Image Placeholder */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[620px] rounded-lg overflow-hidden">
            <img src={imageUrl} alt="Project showcase" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
