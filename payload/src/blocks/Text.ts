import { Block } from 'payload/types'

const Text: Block = {
  slug: 'textBlock',
  fields: [
    {
      name: 'content',
      type: 'richText',
    },
  ],
}

export default Text
