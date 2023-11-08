import { notFound } from 'next/navigation'

import { Page } from '@/types/payload'
import { fetchHome } from '@/lib/fetchHome'
import { fetchPage } from '@/lib/fetchPage'
import { fetchPages } from '@/lib/fetchPages'
import BlockSerialiser from '@/components/BlockSerialiser'

import { HomeTemplate } from '@/app/page.client'

export default async function Homepage() {
  const data = await fetchHome()

  if (data === null) {
    return notFound()
  }

  return <HomeTemplate initialData={data} />
}
