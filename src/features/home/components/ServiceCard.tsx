interface ServiceCardProps {
  service: string
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="relative rounded-lg p-4 md:p-6 overflow-hidden hover:shadow-md transition-shadow">
      {/* Gradient background - darker on left, lighter on right */}
      <div className="absolute inset-0 bg-linear-to-r from-pca-beige to-pca-cream"></div>

      {/* Text content */}
      <p className="relative text-left text-gray-700 font-medium leading-relaxed text-sm sm:text-base md:text-lg w-full sm:w-[70%] md:w-[50%] lg:w-[40%]">
        {service}
      </p>
    </div>
  )
}
