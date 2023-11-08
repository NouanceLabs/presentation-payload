import { Block } from 'payload/types'

const Testimonial: Block = {
  slug: 'testimonialBlock',
  fields: [
    {
      name: 'quote',
      type: 'textarea',
    },
    {
      name: 'author',
      type: 'text',
    },
  ],
}

export default Testimonial
