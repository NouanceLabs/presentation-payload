'use client'

import { useLivePreview } from '@payloadcms/live-preview-react'

import { Page } from '@/types/payload'
import RichText from '@/components/RichText'
import { useEffect, useState } from 'react'

export const PageTemplate: React.FC<{ initialData: Page | null | undefined }> = ({
  initialData,
}) => {
  const { data } = useLivePreview({
    serverURL: process.env.NEXT_PUBLIC_PAYLOAD_URL || '',
    depth: 2,
    initialData,
  })

  const [clicked, setClicked] = useState(false)
  const [counter, updateCounter] = useState(initialData?.likes ?? 0)

  const date = data?.createdAt ? new Date(data.createdAt).toLocaleDateString() : null

  return (
    <main className={'container max-w-[60rem]'}>
      <div className="flex flex-col gap-16 md:flex-row-reverse justify-between">
        <div>
          <div className="sticky top-4 flex gap-8">
            <div>
              <p className="uppercase text-sm font-600">Updated at</p>
              <p>{date}</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <p className="uppercase text-sm font-600">{counter} likes</p>

              <button
                disabled={clicked}
                onClick={() => {
                  setClicked(true)
                  updateCounter(counter + 1)
                  fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/interactions/addLikes`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: new URLSearchParams({
                      pageId: String(data?.id),
                    }),
                  })
                    .then(res => res.json())
                    .then(data => {
                      updateCounter(data.likes)
                    })
                }}
                className="button"
              >
                {clicked ? 'Liked!' : '+1'}
              </button>
            </div>
          </div>
        </div>
        <RichText content={data?.content} />
      </div>
    </main>
  )
}
