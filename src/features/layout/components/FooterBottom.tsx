import SocialMediaLinks from './SocialMediaLinks'

interface FooterBottomProps {
  socialPlatforms: string[]
  copyright: string
}

export default function FooterBottom({ socialPlatforms, copyright }: FooterBottomProps) {
  return (
    <div className="border-t border-white/20 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <SocialMediaLinks platforms={socialPlatforms} />
      <p className="text-white text-xs md:text-sm text-center md:text-left">{copyright}</p>
    </div>
  )
}
