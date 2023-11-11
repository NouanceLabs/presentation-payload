import { webpackBundler } from '@payloadcms/bundler-webpack'
import { postgresAdapter } from '@payloadcms/db-postgres'
import {
  lexicalEditor,
  HeadingFeature,
  LinkFeature,
  BlocksFeature,
  BlockQuoteFeature,
  OrderedListFeature,
  UnoderedListFeature,
  ParagraphFeature,
  BoldTextFeature,
  ItalicTextFeature,
} from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload/config'
import Code from './blocks/Code'

import { Pages } from './collections/Pages'
import { Users } from './collections/Users'
import { MainMenu } from './globals/MainMenu'
import { Home } from './globals/Home'

import { customGraphQLQueries } from './graphql/customGraphQLQueries'
import rest from './REST'

import NavButton from './components/NavButton'

export default buildConfig({
  collections: [Pages, Users],
  admin: {
    bundler: webpackBundler(), // bundler-config
    components: {
      afterNavLinks: [NavButton],
    },
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
      ],
    },
  },
  cors: '*',
  endpoints: rest,
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  globals: [Home, MainMenu],
  graphQL: {
    queries: customGraphQLQueries,
  },
  editor: lexicalEditor({
    features: () => [
      HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
      ParagraphFeature(),
      BoldTextFeature(),
      ItalicTextFeature(),
      /* LinkFeature({}), */
      OrderedListFeature(),
      UnoderedListFeature(),
      BlocksFeature({ blocks: [Code] }),
    ],
  }),
  db: postgresAdapter({
    push: true,
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
})
