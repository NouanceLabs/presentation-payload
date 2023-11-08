import type { Page } from '@/types/payload'

export const fetchPages = async (): Promise<Page[]> => {
  const pageRes: {
    docs: Page[]
  } = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/pages?depth=0&limit=100`).then(res =>
    res.json(),
  ) // eslint-disable-line function-paren-newline

  return pageRes?.docs ?? []
}
