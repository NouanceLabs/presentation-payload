import { defineConfig, presetTypography, presetUno, presetIcons, toEscapedSelector as e } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import presetWebFonts from '@unocss/preset-web-fonts'

const sizeMap = {
  sm: {
    y: '0.5rem',
    x: '0.75rem',
  },
  BASE: {
    y: '0.75rem',
    x: '1rem',
  },
  lg: {
    y: '1rem',
    x: '1.5rem',
  },
}

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography(),
    presetIcons({}),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: [
          {
            name: 'Inter',
            weights: ['400', '600', '700', '900'],
            italic: true,
          },
          {
            name: 'sans-serif',
            provider: 'none',
          },
        ],
      },
    }),
  ],
  include: [/(styles|lib|pages|components|routes|src|layouts).*\.(s?css|astro|[jt]sx?)$/],
  exclude: [],
  transformers: [
    transformerDirectives({
      enforce: 'pre',
    }),
  ],
  shortcuts: [
    {
      container: 'max-w-[116.5rem] m-x-auto px-[1rem] md:px-[2rem]',
    },
    {
      button: 'bg-off-white hover:bg-white transition-colors duration-200 text-black rounded-full px-[0.9rem] py-2',
    },
    {
      'glass-bg':
        'border-solid border-1px border-transparent border-opacity-5 bg-white bg-opacity-1  backdrop-filter backdrop-blur-md border-white',
    },
  ],
  theme: {
    breakpoints: {
      xs: '22.5rem' /* 360px */,
      sm: '50rem' /* 768px */,
      md: '64rem' /* 1024px */,
      lg: '85.375rem' /* 1366px */,
      xl: '120rem' /* 1920px */,
      '2xl': '160rem' /* 2560px */,
    },
    colors: {
      'off-white': '#D9D9D9',
      green: {
        DEFAULT: 'hsla(191, 83%, 8%, 1)',
        darker: '#040f10',
        bright: '#3cc97c',
      },
      red: '#DF3E3E',
      tinted: {
        black: 'hsla(187, 40%, 2%, 1)',
        green: '#051112',
      },
    },
  },
})
