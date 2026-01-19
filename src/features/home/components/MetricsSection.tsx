import MetricCard from './MetricCard'

interface Metric {
  icon: string
  value: string
  label: string
}

interface MetricsSectionProps {
  metrics: Metric[]
  initiatives: string[]
}

export default function MetricsSection({ metrics, initiatives }: MetricsSectionProps) {
  return (
    <section className="bg-pca-cream py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              icon={metric.icon}
              value={metric.value}
              label={metric.label}
            />
          ))}
        </div>

        {/* Initiatives Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-24 md:h-32"
            >
              <img src={initiative} alt="Initiative" className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
