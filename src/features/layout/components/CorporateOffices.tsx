import CorporateOfficeCard from './CorporateOfficeCard'
import type { CorporateOffice } from '../../home/constants/offices'

interface CorporateOfficesProps {
  offices: CorporateOffice[]
  title?: string
}

export default function CorporateOffices({
  offices,
  title = 'CORPORATE OFFICES',
}: CorporateOfficesProps) {
  return (
    <div className="md:w-2/3 lg:w-3/4">
      <h3 className="font-bold mb-4 md:mb-3 text-pca-beige text-sm md:text-base">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {offices.map((office, index) => (
          <CorporateOfficeCard
            key={index}
            location={office.location}
            address={office.address}
            phone={office.phone}
            mobile={office.mobile}
          />
        ))}
      </div>
    </div>
  )
}
