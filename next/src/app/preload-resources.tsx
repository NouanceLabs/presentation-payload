'use client'

import ReactDOM from 'react-dom'

export function PreloadResources() {
  ReactDOM.preload('/noise-full.png')

  return null
}
