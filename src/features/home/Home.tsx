import Header from '../layout/components/Header'
import Footer from '../layout/components/Footer'
import Hero from './components/Hero'
import DescriptionSection from './components/DescriptionSection'
import WhatWeOffer from './components/WhatWeOffer'
import MetricsSection from './components/MetricsSection'
import VisionMeetsCraftsmanship from './components/VisionMeetsCraftsmanship'
import TrustedBrands from './components/TrustedBrands'
import CTASection from './components/CTASection'
import { SERVICES } from './constants/services'
import { METRICS } from './constants/metrics'
import { INITIATIVES } from './constants/initiatives'
import { PROJECTS } from './constants/projects'
import { BRANDS } from './constants/brands'
import { whatWeOfferImage } from '../../assets/whatWeOffer'

export default function Home() {

    return (
        <div className="min-h-screen bg-pca-cream">
            <Header />
            <Hero />
            <DescriptionSection />
            <WhatWeOffer services={SERVICES} imageUrl={whatWeOfferImage} />
            <MetricsSection metrics={METRICS} initiatives={INITIATIVES} />
            <VisionMeetsCraftsmanship projects={PROJECTS} />
            <TrustedBrands brands={BRANDS} />
            <CTASection
                title="Let's Create Something Extraordinary"
                description="From concept to final installation, we handle every detail ensuring a flawless execution that exceeds expectations."
            />
            <Footer />
        </div>
    )
}
