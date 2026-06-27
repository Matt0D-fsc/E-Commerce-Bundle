import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true, // Publicly readable for storefront
  },
  fields: [
    {
      name: 'medusaId',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        readOnly: true,
        description: 'The product ID from MedusaJS',
      }
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        readOnly: true,
      }
    },
    {
      name: 'marketingDescription',
      type: 'richText',
      admin: {
        description: 'Rich text marketing content to enrich the product page',
      }
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
    }
  ],
}
