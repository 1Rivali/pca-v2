import Header from '../layout/components/Header'
import AboutHero from './components/AboutHero'
import WhoWeAre from './components/WhoWeAre'
import BrandShowcase from './components/BrandShowcase'
import MissionSection from './components/MissionSection'
import VisionSection from './components/VisionSection'
import GlobalLocations from './components/GlobalLocations'
import CredentialsSection from './components/CredentialsSection'

export default function About() {
  return (
    <div className="min-h-screen bg-pca-cream">
      <Header />
      <AboutHero />
      <WhoWeAre />
      <BrandShowcase />
      <MissionSection />
      <VisionSection />
      <GlobalLocations />
      <CredentialsSection />
      {/* <Footer copyright="All Rights Reserved @PCA 2024" /> */}
    </div>
  )
}
