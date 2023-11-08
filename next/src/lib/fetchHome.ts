import type { Home } from '@/types/payload'

export const fetchHome = async (): Promise<Home | undefined | null> => {
  const home: Home = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/globals/home?depth=2`,
    {
      method: 'GET',
    },
  ).then(res => res.json())

  return home ?? null
}
