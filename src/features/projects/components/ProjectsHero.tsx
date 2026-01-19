import { projectsBanner } from '../../../assets/projects'

export default function ProjectsHero() {
  return (
    <section className="relative h-[400px] md:h-[600px] lg:h-[700px] overflow-hidden pt-16 md:pt-20">
      <img
        src={projectsBanner}
        alt="Portfolio of excellence - luxury retail"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute bottom-12 md:bottom-20 left-4 md:left-12 lg:left-20 z-20 max-w-[90%] md:max-w-none">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white drop-shadow-lg">
          Portfolio Of Excellence
        </h1>
      </div>
    </section>
  )
}
