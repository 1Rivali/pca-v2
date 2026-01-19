export interface Office {
  title: string
  location: string
  address?: string
  phone?: string
  mobile?: string
  email?: string
}

export interface CorporateOffice {
  location: string
  address: string
  phone: string
  mobile: string
}

export const HEAD_OFFICE: Office = {
  title: 'HEAD OFFICE',
  location: 'Riyadh, Saudi Arabia',
  address: 'Building No #3127, Dareen Street, Al Sulay District, Postal Code #14264',
  phone: '+966 (0) 11 291 0458',
  email: 'info@arabiapc.com',
}

export const CORPORATE_OFFICES: CorporateOffice[] = [
  {
    location: 'Dubai, United Arab Emirates',
    address: 'No-M18, Al Quoz Commercial Bldg, Sheikh Zayed Road (Exit 43) Dubai, UAE',
    phone: '+971 (0) 48 861 909',
    mobile: '+971 (0) 56 577 9842',
  },
  {
    location: 'United States of America',
    address: '5150 Hidalgo Street, Suit 1701, Houston Texas 7705',
    phone: '+1 (713) 291-4779',
    mobile: '+1 (832) 878 - 8080',
  },
  {
    location: 'Toronto, Canada',
    address: '4991, Middlesex Gate, Mississauga on L5M 7P2',
    phone: '+1 (514) 582-6410',
    mobile: '+1 (514) 804 - 6410',
  },
]
