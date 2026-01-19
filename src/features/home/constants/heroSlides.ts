import { hero1, hero2, hero3 } from "../../../assets/hero"

export interface HeroSlide {
  imageUrl?: string
  title: string
  placeholder?: string
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    title: 'Refining Retail Environments',
    placeholder: 'Luxury Retail Space',
    imageUrl: hero2,
  },
  {
    title: 'Elevating Experiences',
    placeholder: 'Premium Brand Display',
    imageUrl: hero1,
  },
  {
    title: 'Shaping the Future',
    placeholder: 'Modern Retail Design',
    imageUrl: hero3,
  },
]
