import { notFound } from 'next/navigation'

import { Page } from '@/types/payload'
import { fetchPage } from '@/lib/fetchPage'
import { fetchPages } from '@/lib/fetchPages'
import { PageTemplate } from './page.client'

interface PageParams {
  params: { slug: string }
}

export default async function Page({ params: { slug } }: PageParams) {
  const data = await fetchPage(slug)

  if (data === null) {
    return notFound()
  }

  return <PageTemplate initialData={data} />
}

export async function generateStaticParams() {
  const pages = await fetchPages()

  return pages.map(({ slug }) => {
    return {
      slug,
    }
  })
}
