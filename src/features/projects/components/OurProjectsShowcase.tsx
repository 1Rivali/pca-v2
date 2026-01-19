import { Link } from 'react-router-dom'
import { PROJECT_SHOWCASES } from '../constants/projectsPage'

export default function OurProjectsShowcase() {
  return (
    <section className="bg-pca-tan py-12 md:py-16 lg:py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-4xl font-semibold text-start mb-8 md:mb-12">
          <span className="text-pca-red">Our</span> Projects
        </h2>

        <div className="space-y-6 md:space-y-8">
          {PROJECT_SHOWCASES.map((project) => (
            <Link
              key={project.title}
              to={`/projects/${project.path}`}
              className="block relative h-[360px] md:h-[480px] lg:h-[560px] overflow-hidden group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-pca-primary focus-visible:ring-offset-2"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 md:bottom-10 left-4 md:left-8 lg:left-12 z-10">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
