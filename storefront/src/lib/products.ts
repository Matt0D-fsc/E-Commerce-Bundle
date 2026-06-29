import { medusaClient } from './medusa'
import { getPayload } from 'payload'
import config from '@payload-config'

export interface UnifiedProduct {
  id: string
  title: string
  subtitle?: string
  description?: string
  thumbnail?: string
  price: string
  currency: string
  handle: string
  marketingDescription?: any
  category?: string
}

export async function getUnifiedProducts(): Promise<UnifiedProduct[]> {
  try {
    // 1. Fetch products from Medusa Store API
    const response = await fetch(`${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || 'http://localhost:9000'}/store/products`, {
      next: { revalidate: 60 }, // Cache for 60 seconds
    })
    
    let medusaProducts: any[] = []
    if (response.ok) {
      const data = await response.json()
      medusaProducts = data.products || []
    }

    // 2. Fetch enriched data from Payload CMS Local API
    let payloadProductsMap: Record<string, any> = {}
    try {
      if (typeof window === 'undefined') {
        const payload = await getPayload({ config })
        if (payload && payload.find) {
          const payloadDocs = await payload.find({
            collection: 'products',
            limit: 100,
          })
          payloadDocs.docs.forEach((doc: any) => {
            if (doc.medusaId) {
              payloadProductsMap[doc.medusaId] = doc
            }
          })
        }
      }
    } catch (err) {
      console.warn('Payload CMS doc fetch deferred during startup.')
    }

    // If Medusa hasn't returned products yet (e.g. backend server starting up), return curated default items mapped to standard format
    if (medusaProducts.length === 0) {
      return getFallbackProducts()
    }

    // 3. Combine Medusa commerce data with Payload marketing content
    return medusaProducts.map((p) => {
      const payloadData = payloadProductsMap[p.id] || {}
      const cheapestVariant = p.variants?.[0]
      const priceAmount = cheapestVariant?.calculated_price?.calculated_amount || cheapestVariant?.prices?.[0]?.amount || 895
      const currencyCode = cheapestVariant?.calculated_price?.currency_code || cheapestVariant?.prices?.[0]?.currency_code || 'eur'

      return {
        id: p.id,
        title: p.title,
        subtitle: p.subtitle || 'La Collezione Principale',
        description: p.description,
        thumbnail: p.thumbnail || '/assets/hero_derby.png',
        price: `${currencyCode.toUpperCase() === 'EUR' ? '€' : '$'} ${priceAmount}`,
        currency: currencyCode.toUpperCase(),
        handle: p.handle || p.id,
        marketingDescription: payloadData.marketingDescription,
      }
    })
  } catch (error) {
    console.error('Error fetching unified products:', error)
    return getFallbackProducts()
  }
}

function getFallbackProducts(): UnifiedProduct[] {
  return [
    {
      id: 'derby',
      title: 'Il Derby Fiorentino',
      subtitle: 'La Collezione Principale · Oxford',
      price: '€ 895',
      currency: 'EUR',
      handle: 'derby',
      thumbnail: '/assets/hero_derby.png',
    },
    {
      id: 'loafer',
      title: 'Il Morsetto Romano',
      subtitle: 'Penny Loafer · Vitello',
      price: '€ 720',
      currency: 'EUR',
      handle: 'loafer',
      thumbnail: '/assets/loafer_romano.png',
    },
    {
      id: 'belt',
      title: 'La Cintura Milano',
      subtitle: 'Cintura · Full-Grain',
      price: '€ 285',
      currency: 'EUR',
      handle: 'belt',
      thumbnail: '/assets/cintura_milano.png',
    },
    {
      id: 'weekender',
      title: 'Il Viaggio Veneziano',
      subtitle: 'Borsa da Viaggio · Cuoio',
      price: '€ 1,480',
      currency: 'EUR',
      handle: 'weekender',
      thumbnail: '/assets/weekender_bag.png',
    },
    {
      id: 'brogue',
      title: 'Il Brogue Britannico',
      subtitle: 'Full Brogue · Vitello Verde',
      price: '€ 945',
      currency: 'EUR',
      handle: 'brogue',
      thumbnail: '/assets/brogue_shoe.png',
    },
  ]
}
