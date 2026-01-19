interface ContactInfoProps {
  title: string
  location: string
  address?: string
  phone?: string
  email?: string
}

export default function ContactInfo({
  title,
  location,
  address,
  phone,
  email,
}: ContactInfoProps) {
  return (
    <div>
      <h3 className="font-bold mb-3 md:mb-4 text-pca-beige text-sm md:text-base">{title}</h3>
      <p className="text-pca-primary-hover text-xs md:text-sm mb-2 font-medium">{location}</p>
      {address && <p className="text-white text-xs md:text-sm mb-2 leading-relaxed">{address}</p>}
      <div className="flex flex-col sm:flex-row gap-2">
        {phone && <p className="text-white text-xs md:text-sm mb-1 md:mb-2"><span className="text-pca-primary">T</span> {phone}</p>}
        {email && <p className="text-white text-xs md:text-sm"><span className="text-pca-primary">M</span> {email}</p>}
      </div>
    </div>
  )
}
