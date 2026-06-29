import { getPayload } from 'payload'
import config from '@payload-config'

export interface HomepageData {
  heroEyebrow: string
  heroTitle: string
  heroSubtitle: string
  marqueeItems: string[]
  craftQuote: string
  craftAuthor: string
}

export async function getHomepageData(): Promise<HomepageData> {
  const fallback: HomepageData = {
    heroEyebrow: 'Milano · Firenze · Napoli — Est. MMXII',
    heroTitle: 'Crafted by hand, worn for generations.',
    heroSubtitle: 'Each piece emerges from the same Florentine ateliers that dressed the Medici. Full-grain leather selected by our maestri, stitched with linen thread in the Goodyear tradition.',
    marqueeItems: [
      'Full-Grain Florentine Leather',
      'Goodyear Welt Construction',
      'Hand-Stitched in Napoli',
      'Vegetable-Tanned Patina',
      'Made in Italia',
    ],
    craftQuote: 'La pelle non mente. Ogni segno è una storia.',
    craftAuthor: 'Marco Ferrante, Maestro Calzolaio, Napoli',
  }

  try {
    if (typeof window === 'undefined') {
      const payload = await getPayload({ config })
      if (payload && payload.findGlobal) {
        const globalData: any = await payload.findGlobal({
          slug: 'homepage',
        })

        if (globalData) {
          return {
            heroEyebrow: globalData.heroEyebrow || fallback.heroEyebrow,
            heroTitle: globalData.heroTitle || fallback.heroTitle,
            heroSubtitle: globalData.heroSubtitle || fallback.heroSubtitle,
            marqueeItems: globalData.marqueeItems?.map((item: any) => item.text) || fallback.marqueeItems,
            craftQuote: globalData.craftQuote || fallback.craftQuote,
            craftAuthor: globalData.craftAuthor || fallback.craftAuthor,
          }
        }
      }
    }
  } catch (error) {
    console.warn('Deferred Payload CMS homepage global fetch during initialization:', error)
  }

  return fallback
}
