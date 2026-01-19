interface CorporateOfficeCardProps {
  location: string
  address: string
  phone: string
  mobile: string
}

export default function CorporateOfficeCard({
  location,
  address,
  phone,
  mobile,
}: CorporateOfficeCardProps) {
  return (
    <div>
      <p className="text-pca-primary-hover text-xs md:text-sm mb-2 font-medium">{location}</p>
      <p className="text-white text-xs md:text-sm mb-2">{address}</p>
      <div className="flex flex-col sm:flex-row gap-2">
        <p className="text-white text-xs mb-1 md:mb-2">
          <span className="text-pca-primary">T</span> {phone}
        </p>
        <p className="text-white text-xs">
          <span className="text-pca-primary">M</span> {mobile}
        </p>
      </div>
    </div>
  )
}
