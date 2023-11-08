import { Field, RichTextField } from 'payload/types'

const RichTextSimple: RichTextField = {
  name: 'content',
  type: 'richText',
  label: false,
  admin: {
    style: {
      margin: 0,
      marginBottom: 24,
      padding: 0,
    },
  },
}

export default RichTextSimple
