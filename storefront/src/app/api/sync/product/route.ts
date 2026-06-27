import { getPayload } from 'payload'
import config from '@payload-config'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get('authorization')
    // A simple shared secret authentication between Medusa and Payload
    if (authHeader !== `Bearer ${process.env.PAYLOAD_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const payload = await getPayload({ config })
    const body = await req.json()
    const { id: medusaId, title } = body.data

    if (!medusaId || !title) {
      return NextResponse.json({ error: 'Missing required product fields' }, { status: 400 })
    }

    // Upsert the product in Payload
    const existing = await payload.find({
      collection: 'products',
      where: {
        medusaId: {
          equals: medusaId,
        },
      },
    })

    if (existing.docs.length > 0) {
      // Update existing
      await payload.update({
        collection: 'products',
        id: existing.docs[0].id,
        data: { title },
      })
      return NextResponse.json({ message: 'Product updated successfully' })
    } else {
      // Create new
      await payload.create({
        collection: 'products',
        data: {
          medusaId,
          title,
        },
      })
      return NextResponse.json({ message: 'Product created successfully' }, { status: 201 })
    }
  } catch (error: any) {
    console.error('Payload sync error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
