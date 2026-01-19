/** Placeholder images for 4 steps - replace with final assets */
const STEP_1_IMG = 'https://images.unsplash.com/photo-1586717799252-22cf3a6a8c52?w=800&q=80'
const STEP_2_IMG = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80'
const STEP_3_IMG = 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80'
const STEP_4_IMG = 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80'

export const INTRODUCTION = {
  paragraph:
    'Discover our world-class retail installations that define the future of brand experiences across four continents. As a trusted one-stop destination for turnkey solutions, we offer seamless end-to-end services from design and distribution to logistics and execution - making us the preferred partner for top-tier brands across Saudi Arabia. In today\'s rapidly evolving market, agility and forward-thinking innovation are essential.',
  boldParts: [
    'world-class retail installations',
    'end-to-end services',
    'design and distribution',
    'logistics and execution',
  ],
}

export interface Step {
  number: number
  title: string
  imageUrl: string
}

export const FOUR_STEPS: Step[] = [
  {
    number: 1,
    title: 'Production Drawing Approval',
    imageUrl: STEP_1_IMG,
  },
  {
    number: 2,
    title: 'Material Selection & Approval',
    imageUrl: STEP_2_IMG,
  },
  {
    number: 3,
    title: 'Step by Step quality Reporting',
    imageUrl: STEP_3_IMG,
  },
  {
    number: 4,
    title: 'Transfer & Installation',
    imageUrl: STEP_4_IMG,
  },
]


import {
  inStoreBrandings,
  installations,
  storeKilian,
  storeFredric,
  storeTomFord,
  storeGuerlain,
  installKillian,
  installFredric,
  installTomFord,
  installGuerlain,
} from '../../../assets/projects'

export interface ProjectShowcase {
  title: string
  imageUrl: string
  path: 'in-store-branding' | 'installations'
}

export const PROJECT_SHOWCASES: ProjectShowcase[] = [
  { title: 'In-store Brandings', imageUrl: inStoreBrandings, path: 'in-store-branding' },
  { title: 'Installations', imageUrl: installations, path: 'installations' },
]

export type ProjectCategory = 'in-store-branding' | 'installations'

export interface Project {
  id: string
  slug: string
  brand: string
  location: string
  /** Per-category images: used in category grid and in ProjectDetail (first category as default) */
  images: Record<ProjectCategory, string>
  categories: ProjectCategory[]
  description?: string
}

export const PROJECTS: Project[] = [
  {
    id: '1',
    slug: 'kilian',
    brand: 'KILIAN',
    location: '100 Mall, Olaya Riyadh',
    images: { 'in-store-branding': storeKilian, installations: installKillian },
    categories: ['in-store-branding', 'installations'],
    description:
      'An elaborate retail display for KILIAN featuring mirrored surfaces and premium beauty product presentation in a luxury mall setting.',
  },
  {
    id: '2',
    slug: 'frederic-malle',
    brand: 'FEDERIC MALLE',
    location: 'Riyadh Park, Riyadh',
    images: { 'in-store-branding': storeFredric, installations: installFredric },
    categories: ['in-store-branding', 'installations'],
    description:
      'A distinctive curved display with seasonal branding, showcasing perfume bottles and the FEDERIC MALLE identity in an elevated retail environment.',
  },
  {
    id: '3',
    slug: 'tom-ford',
    brand: 'TOM FORD',
    location: 'Al Nakheel Mall, Boutique Riyadh',
    images: { 'in-store-branding': storeTomFord, installations: installTomFord },
    categories: ['in-store-branding', 'installations'],
    description:
      'A sleek black counter with illuminated product shelves showcasing TOM FORD makeup and fragrance in a sophisticated boutique layout.',
  },
  {
    id: '4',
    slug: 'guerlain',
    brand: 'GUERLAIN',
    location: 'Faces, Hafir Bathin',
    images: { 'in-store-branding': storeGuerlain, installations: installGuerlain },
    categories: ['in-store-branding', 'installations'],
    description:
      'A vibrant purple-themed display unit for GUERLAIN with prominent branding, featuring perfume bottles and an inviting retail presence.',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug)
}
