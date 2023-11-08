'use client'

import { useLivePreview } from '@payloadcms/live-preview-react'

import { Home } from '@/types/payload'
import BlockSerialiser from '@/components/BlockSerialiser'

export const HomeTemplate: React.FC<{ initialData: Home | null | undefined }> = ({
  initialData,
}) => {
  const { data } = useLivePreview({
    serverURL: process.env.NEXT_PUBLIC_PAYLOAD_URL || '',
    depth: 2,
    initialData,
  })

  return (
    <main>
      <BlockSerialiser blocks={data?.sections} />
    </main>
  )
}
