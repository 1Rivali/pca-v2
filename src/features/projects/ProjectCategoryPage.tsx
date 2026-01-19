import { Link } from 'react-router-dom'
import Header from '../layout/components/Header'

import { PROJECTS } from './constants/projectsPage'
import { inStoreBrandings, installations } from '../../assets/projects'

const CATEGORIES = [
  { id: 'in-store-branding' as const, label: 'In-Store Branding', heroLabel: 'In-Store Branding', heroImage: inStoreBrandings },
  { id: 'installations' as const, label: 'Installations', heroLabel: 'Installations', heroImage: installations },
]

type CategoryId = 'in-store-branding' | 'installations'

interface ProjectCategoryPageProps {
  category: CategoryId
}

export default function ProjectCategoryPage({ category }: ProjectCategoryPageProps) {
  const config = CATEGORIES.find((c) => c.id === category) ?? CATEGORIES[0]
  const projects = PROJECTS.filter((p) => p.categories.includes(category))

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero: same height and text overlay as home */}
        <section className="relative h-[400px] md:h-[700px] overflow-hidden pt-16 md:pt-20">
          <img
            src={config.heroImage}
            alt={config.label}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/30 to-transparent" />
          <div className="absolute bottom-12 md:bottom-20 left-4 md:left-12 lg:left-20 z-20 max-w-[90%] md:max-w-none">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white drop-shadow-lg">
              {config.heroLabel}
            </h1>
          </div>
        </section>

        {/* Breadcrumb, filter buttons, project grid */}
        <section className="bg-pca-cream py-8 md:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <p className="text-pca-black/80 text-sm md:text-base mb-6">
              <Link to="/projects" className="hover:text-pca-primary transition-colors">
                OUR Projects
              </Link>
              <span className="mx-2">/</span>
              <span className="font-medium text-pca-black">{config.label}</span>
            </p>

            {/* Category filter buttons */}
            <div className="flex flex-wrap gap-3 mb-8 md:mb-12">
              {CATEGORIES.map((c) => {
                const isActive = c.id === category
                return (
                  <Link
                    key={c.id}
                    to={`/projects/${c.id}`}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${isActive
                      ? 'bg-pca-primary text-white hover:bg-pca-primary-hover'
                      : 'bg-pca-tan text-pca-black/80 hover:bg-pca-beige'
                      }`}
                  >
                    {c.label}
                  </Link>
                )
              })}
            </div>

            {/* Project grid 2x2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}

                  className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-pca-primary focus-visible:ring-offset-2 rounded-lg overflow-hidden"
                >
                  <div className="relative h-[260px] md:h-[300px] overflow-hidden">
                    <img
                      src={project.images[category]}
                      alt={project.brand}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="pt-4">
                    <h3 className="text-lg md:text-3xl text-pca-black">
                      {project.brand}
                    </h3>
                    <p className="text-pca-red text-sm md:text-base mt-1">
                      {project.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {projects.length === 0 && (
              <p className="text-pca-black/70 text-center py-12">
                No projects in this category yet.
              </p>
            )}
          </div>
        </section>
      </main>
      {/* <Footer copyright="All Rights Reserved @PCA 2026" /> */}
    </div>
  )
}
