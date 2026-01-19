import { letsCreateSomethingBg, letsCreateSomethingMask } from '../../../assets/letsCreateSomething'

interface CTASectionProps {
  title: string
  description: string
  buttonText?: string
  onButtonClick?: () => void
}

export default function CTASection({
  title,
  description,
  buttonText = "let's collaborate",
  onButtonClick,
}: CTASectionProps) {
  return (
    <section className="relative py-12 md:py-20 px-4 md:px-6 overflow-hidden min-h-[400px] md:min-h-[600px] flex items-center justify-center">
      {/* Primary Color Background */}


      {/* Background Image Mask */}
      <div className="absolute inset-0 z-22 opacity-20">
        <img
          src={letsCreateSomethingMask}
          alt="Background"
          className="w-full h-full object-cover "
        />
      </div>
      <div className="absolute inset-0  z-20">
        <img
          src={letsCreateSomethingBg}
          alt="Background"
          className="w-full h-full object-cover "
        />
      </div>

      {/* Content */}
      <div className="relative z-30 max-w-5xl mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-4 md:mb-6 leading-tight">
          {title}
        </h2>
        <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-10 font-light leading-relaxed max-w-4xl mx-auto">
          {description}
        </p>
        <button
          onClick={onButtonClick}
          className="bg-white border border-gray-800 text-gray-900 px-6 md:px-8 py-2.5 md:py-3 w-full sm:w-auto min-w-[280px] sm:min-w-[350px] h-[55px] md:h-[65px] font-bold hover:bg-gray-50 transition-colors text-lg md:text-xl"
        >
          {buttonText}
        </button>
      </div>
    </section>
  )
}
