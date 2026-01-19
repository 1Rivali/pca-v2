import ContactInfo from './ContactInfo'
import CorporateOffices from './CorporateOffices'
import FooterBottom from './FooterBottom'
import { HEAD_OFFICE, CORPORATE_OFFICES } from '../../home/constants/offices'

interface FooterProps {
  socialPlatforms?: string[]
  copyright?: string
}

export default function Footer({
  socialPlatforms = ['Facebook', 'Instagram', 'LinkedIn', 'X'],
  copyright = 'All Rights Reserved @PCA 2025',
}: FooterProps) {
  return (
    <footer className="bg-pca-black text-white py-8 md:py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 mb-8">
          <div className="md:w-1/3 lg:w-1/4">
            <ContactInfo
              title={HEAD_OFFICE.title}
              location={HEAD_OFFICE.location}
              address={HEAD_OFFICE.address}
              phone={HEAD_OFFICE.phone}
              email={HEAD_OFFICE.email}
            />
          </div>
          <CorporateOffices offices={CORPORATE_OFFICES} />
        </div>
        <FooterBottom socialPlatforms={socialPlatforms} copyright={copyright} />
      </div>
    </footer>
  )
}
