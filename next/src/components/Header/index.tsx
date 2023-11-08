import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { MainMenu } from '@/types/payload'

export async function Header() {
  const mainMenu: MainMenu = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/globals/main-menu`,
  ).then(res => res.json())

  const { navItems } = mainMenu

  const hasNavItems = navItems && Array.isArray(navItems) && navItems.length > 0

  return (
    <header className={'flex flex-col gap-12 items-center justify-center py-12'}>
      <Link href="/" className={'text-2xl font-600'}>
        <span>Demo</span>
      </Link>
      {hasNavItems && (
        <nav className={'text-center'}>
          <ul className="list-none flex gap-4">
            {navItems.map(({ link }, i) => {
              const href =
                typeof link.reference?.value === 'string'
                  ? link.reference?.value
                  : // @ts-expect-error
                    link.reference?.value.slug
              return (
                <li key={i}>
                  <Link href={`/${href}`}>{link.label}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
