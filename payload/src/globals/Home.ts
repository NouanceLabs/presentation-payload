import type { GlobalConfig } from 'payload/types'

import Testimonial from '../blocks/Testimonial'
import Text from '../blocks/Text'

export const Home: GlobalConfig = {
  slug: 'home',
  admin: {
    livePreview: {
      url: ({ data }) => `${process.env.PAYLOAD_PUBLIC_SITE_URL}`,
    },
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'sections',
      type: 'blocks',
      blocks: [Testimonial, Text],
    },
  ],
}
