import { useParams, Link } from 'react-router-dom'
import Header from '../layout/components/Header'
import Footer from '../layout/components/Footer'
import { getProjectBySlug } from './constants/projectsPage'

const CATEGORY_LABELS: Record<string, string> = {
  'in-store-branding': 'In-Store Branding',
  installations: 'Installations',
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
          <h1 className="text-2xl md:text-3xl font-bold text-pca-black mb-4">
            Project not found
          </h1>
          <p className="text-pca-black/80 mb-6 text-center">
            The project you&apos;re looking for doesn&apos;t exist or has been removed.
          </p>
          <Link
            to="/projects"
            className="px-6 py-3 bg-pca-primary text-white font-medium rounded-lg hover:bg-pca-primary-hover transition-colors"
          >
            Back to Projects
          </Link>
        </main>
        <Footer copyright="All Rights Reserved @PCA 2026" />
      </div>
    )
  }

  const categoryLabel = CATEGORY_LABELS[project.categories[0]] ?? project.categories[0]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero: full-width image with overlay, brand at bottom-left (like Projects list hero) */}
        <section className="relative h-[400px] md:h-[600px] lg:h-[700px] overflow-hidden pt-16 md:pt-20">
          <img
            src={project.images[project.categories[0]]}
            alt={project.brand}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute bottom-12 md:bottom-20 left-4 md:left-12 lg:left-20 z-20 max-w-[90%] md:max-w-none">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white drop-shadow-lg">
              {project.brand}
            </h1>
          </div>
        </section>

        {/* Breadcrumb + content (matching OUR Projects / In-Store Branding style) */}
        <section className="bg-pca-cream py-8 md:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <p className="text-pca-black/80 text-sm md:text-base mb-6">
              <Link to="/projects" className="hover:text-pca-primary transition-colors">
                OUR Projects
              </Link>
              <span className="mx-2">/</span>
              <span className="font-medium text-pca-black">{categoryLabel}</span>
              <span className="mx-2">/</span>
              <span className="font-medium text-pca-black">{project.brand}</span>
            </p>

            <p className="text-pca-black font-bold text-lg md:text-xl mb-6">
              {project.location}
            </p>

            {project.description && (
              <p className="text-pca-black/90 text-base md:text-lg leading-relaxed max-w-3xl">
                {project.description}
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer copyright="All Rights Reserved @PCA 2026" />
    </div>
  )
}
