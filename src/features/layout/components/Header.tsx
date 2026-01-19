import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { logo } from '../../../assets/logo'
import ContactUsDialog from './ContactUsDialog'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About PCA', path: '/about' },
  { label: 'Our Projects', path: '/projects' },
  { label: 'Our Facilities', path: '/#facilities' },
  { label: 'Contact us', path: '/#contact', opensContactDialog: true },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const handleNavClick = () => setIsMenuOpen(false)

  useEffect(() => {
    if (!contactOpen) return
    const onEscape = (e: KeyboardEvent) => e.key === 'Escape' && setContactOpen(false)
    window.addEventListener('keydown', onEscape)
    return () => window.removeEventListener('keydown', onEscape)
  }, [contactOpen])

  const NavLinkComponent = ({ item }: { item: (typeof navItems)[0] }) => {
    if ('opensContactDialog' in item && item.opensContactDialog) {
      return (
        <button
          type="button"
          onClick={() => { handleNavClick(); setContactOpen(true) }}
          className="text-gray-700 hover:text-pca-primary"
        >
          {item.label}
        </button>
      )
    }
    const isHash = item.path.includes('#')
    if (isHash) {
      return (
        <a
          href={item.path}
          onClick={handleNavClick}
          className="text-gray-700 hover:text-pca-primary"
        >
          {item.label}
        </a>
      )
    }
    return (
      <NavLink
        to={item.path}
        onClick={handleNavClick}
        className={({ isActive }) =>
          isActive
            ? 'text-pca-primary underline decoration-pca-primary underline-offset-4'
            : 'text-gray-700 hover:text-pca-primary'
        }
      >
        {item.label}
      </NavLink>
    )
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-pca-beige shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start justify-center">
            <img src={logo} alt="PCA Logo" className="h-10 md:h-12" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm lg:text-base">
            {navItems.map((item) => (
              <NavLinkComponent key={item.path} item={item} />
            ))}
            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className="ml-2 px-4 py-2 bg-pca-primary hover:bg-pca-primary-hover text-white text-sm font-medium rounded transition-colors"
            >
              Let&apos;s Collaborate →
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden transition-colors text-gray-700 hover:text-pca-primary"
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <nav
          className={`md:hidden mt-4 transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}
        >
          <div className="flex flex-col gap-4 pb-4">
            {navItems.map((item) => (
              <NavLinkComponent key={item.path} item={item} />
            ))}
            <button
              type="button"
              onClick={() => { handleNavClick(); setContactOpen(true) }}
              className="px-4 py-2 bg-pca-primary text-white text-center rounded inline-block mt-2 w-fit"
            >
              Let&apos;s Collaborate →
            </button>
          </div>
        </nav>
      </div>
      <ContactUsDialog open={contactOpen} onClose={() => setContactOpen(false)} />
    </header>
  )
}
