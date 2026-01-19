interface BrandLogoCardProps {
  brand: string
  logoUrl?: string
}

export default function BrandLogoCard({ brand, logoUrl }: BrandLogoCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 flex items-center justify-center h-24 border border-pca-beige hover:shadow-md transition-shadow">
      {logoUrl ? (
        <img src={logoUrl} alt={brand} className="max-w-full max-h-full object-contain" />
      ) : (
        <span className="text-gray-800 font-semibold text-sm">{brand}</span>
      )}
    </div>
  )
}
