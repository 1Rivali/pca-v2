import { useEffect } from 'react'
import { logo } from '../../../assets/logo'

interface ContactOffice {
  location: string
  address: string
  phone: string
  mobile?: string
}

const CONTACT_OFFICES: ContactOffice[] = [
  {
    location: 'Riyadh, Saudi Arabia',
    address: 'Riyadh Malaz 2410, Riyadh 12836',
    phone: '+966 (0) 11 291 0458',
  },
  {
    location: 'Dubai, United Arab Emirates',
    address: 'No-M18, Al Quoz Commercial Building, PO Box 118041, Sheikh Zayed Road (Exit 43)',
    phone: '+971 (0) 48 861 909',
    mobile: '+971 (0) 56 577 9841',
  },
  {
    location: 'Houston Texas, United State of America',
    address: '5150 Hidalgo St, Suit 1701, Houston Tx. 77056',
    phone: '+1 (713) 291 - 4779',
    mobile: '+1 (832) 878 – 8080',
  },
  {
    location: 'Toronto, Canada',
    address: '4991, Middlesex Gate, Mississauga on L5M 7P2',
    phone: '+1 (514) 582 - 6410',
    mobile: '+1 (514) 804 - 6410',
  },
]

interface ContactUsDialogProps {
  open: boolean
  onClose: () => void
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  )
}

function MapFoldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M8 8h24l8 8v24H8V8z" />
      <path d="M32 8v8h8" />
    </svg>
  )
}

export default function ContactUsDialog({ open, onClose }: ContactUsDialogProps) {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/40"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-dialog-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-1.5 text-pca-primary hover:text-pca-primary-hover transition-colors rounded"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="px-6 py-8 md:px-10 md:py-10">
          {/* Logo & brand */}
          <div className="flex flex-col items-center text-center mb-8">
            <img src={logo} alt="PCA" className="h-12 md:h-14 mb-2" />
            <p className="text-pca-black uppercase text-xs tracking-wider font-medium">PRIVATE COLLECTION ARABIA</p>
            <p className="text-pca-black/70 text-[10px] md:text-xs uppercase tracking-widest mt-1">KSA / UAE / USA / CANADA</p>
          </div>

          {/* LET'S GET IN TOUCH */}
          <div className="relative mb-8">
            <h2 id="contact-dialog-title" className="text-2xl md:text-3xl lg:text-4xl font-bold text-pca-black">
              LET&apos;S GET IN TOUCH
            </h2>
            <div className="h-2.5 w-full mt-3 bg-pca-beige" />

          </div>

          {/* Contact grid 2x2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {CONTACT_OFFICES.map((office) => (
              <div
                key={office.location}
                className="relative bg-pca-cream rounded-lg p-4 md:p-5 overflow-hidden"
              >
                <p className="text-pca-primary text-sm font-semibold mb-2">{office.location}</p>
                <p className="text-pca-black/90 text-sm leading-snug mb-3">{office.address}</p>
                <p className="text-pca-black text-sm">
                  <span className="text-pca-primary font-medium">T:</span>{' '}
                  <span className="font-semibold">{office.phone}</span>
                </p>
                {office.mobile && (
                  <p className="text-pca-black text-sm mt-1">
                    <span className="text-pca-primary font-medium">M:</span>{' '}
                    <span className="font-semibold">{office.mobile}</span>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
