import type { GlobalConfig } from 'payload'

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  label: 'Homepage Content',
  access: {
    read: () => true, // Publicly readable for storefront
  },
  fields: [
    {
      name: 'heroEyebrow',
      type: 'text',
      defaultValue: 'Milano · Firenze · Napoli — Est. MMXII',
    },
    {
      name: 'heroTitle',
      type: 'text',
      defaultValue: 'Crafted by hand, worn for generations.',
    },
    {
      name: 'heroSubtitle',
      type: 'textarea',
      defaultValue: "Each piece emerges from the same Florentine ateliers that dressed the Medici. Full-grain leather selected by our maestri, stitched with linen thread in the Goodyear tradition.",
    },
    {
      name: 'marqueeItems',
      type: 'array',
      label: 'Marquee Strip Items',
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
      ],
      defaultValue: [
        { text: 'Full-Grain Florentine Leather' },
        { text: 'Goodyear Welt Construction' },
        { text: 'Hand-Stitched in Napoli' },
        { text: 'Vegetable-Tanned Patina' },
        { text: 'Made in Italia' },
      ],
    },
    {
      name: 'craftQuote',
      type: 'textarea',
      defaultValue: 'La pelle non mente. Ogni segno è una storia.',
    },
    {
      name: 'craftAuthor',
      type: 'text',
      defaultValue: 'Marco Ferrante, Maestro Calzolaio, Napoli',
    },
  ],
}
