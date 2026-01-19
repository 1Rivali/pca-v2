
import { fourSteps } from '../../../assets/projects'

export default function FourStepsSection() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-start mb-10 md:mb-14">
          Seamless <span className="text-pca-red">4 </span>Steps Executions
        </h2>

        <img src={fourSteps} alt="Four Steps" className="w-full h-full object-cover" />
      </div>
    </section>
  )
}
