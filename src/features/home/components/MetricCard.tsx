

interface MetricCardProps {
  icon: string
  value: string
  label: string
}

export default function MetricCard({ icon, value, label }: MetricCardProps) {
  return (
    <div className="text-center">
      <div className="mb-3 md:mb-4 flex justify-center">
        <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
          <img src={icon} alt={label} className="w-full h-full object-contain" />
        </div>
      </div>
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-pca-red mb-1 md:mb-2">{value}</h3>
      <p className="text-gray-700 text-sm md:text-base">{label}</p>
    </div>
  )
}
