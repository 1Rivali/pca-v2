import { INTRODUCTION } from '../constants/projectsPage'

function formatIntroWithBold(text: string, boldParts: string[]) {
  let result = text
  boldParts.forEach((part) => {
    result = result.replace(part, `**${part}**`)
  })
  return result.split(/(\*\*[^*]+\*\*)/g).map((segment) => {
    if (segment.startsWith('**') && segment.endsWith('**')) {
      return { text: segment.slice(2, -2), bold: true }
    }
    return { text: segment, bold: false }
  })
}

export default function IntroductionSection() {
  const segments = formatIntroWithBold(INTRODUCTION.paragraph, INTRODUCTION.boldParts)

  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-pca-black/90 text-base md:text-xl lg:text-2xl leading-relaxed">
          {segments.map((s, i) =>
            s.bold ? (
              <strong key={i} className="font-bold text-pca-black">
                {s.text}
              </strong>
            ) : (
              <span key={i}>{s.text}</span>
            )
          )}
        </p>
      </div>
    </section>
  )
}
