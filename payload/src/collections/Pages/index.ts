import type { CollectionConfig } from 'payload/types'

import RichTextSimple from '../../fields/RichTextSimple'
import { loggedIn } from './access/loggedIn'
import formatSlug from './hooks/formatSlug'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data }) => `${process.env.PAYLOAD_PUBLIC_SITE_URL}/${data.slug}`,
    },
  },
  access: {
    read: () => true,
    create: loggedIn,
    update: loggedIn,
    delete: loggedIn,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      index: true,
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [formatSlug('title')],
      },
    },
    {
      name: 'likes',
      type: 'number',
      defaultValue: () => 0,
      required: true,
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
      access: {
        read: () => true,
        update: () => false,
        create: () => false,
      },
    },
    RichTextSimple,
  ],
}
