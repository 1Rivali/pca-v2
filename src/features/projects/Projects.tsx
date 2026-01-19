import Header from '../layout/components/Header'

import ProjectsHero from './components/ProjectsHero'
import IntroductionSection from './components/IntroductionSection'
import FourStepsSection from './components/FourStepsSection'
import OurProjectsShowcase from './components/OurProjectsShowcase'

export default function Projects() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ProjectsHero />
      <IntroductionSection />
      <FourStepsSection />
      <OurProjectsShowcase />
      {/* <Footer copyright="All Rights Reserved @PCA 2026" /> */}
    </div>
  )
}
