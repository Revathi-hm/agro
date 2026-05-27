import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest:       '#125426',
        'forest-dark':'#0d3a1c',
        olive:        '#5D6B36',
        'olive-lt':   '#858367',
        ivory:        '#F3EEE9',
        cream:        '#F3EEE9',
        'card-white': '#FDFDFD',
        beige:        '#D2D0C9',
        earth:        '#AAA896',
        'text-dark':  '#2F2913',
        muted:        '#6B6B5A',
        gold:         '#C8963E',
        amber:        '#D4A843',
        sage:         '#2D6A4F',
        mint:         '#A8D5BA',
        'warm-white': '#FAF7F2',
      },
      fontFamily: {
        playfair:   ['var(--font-playfair)', 'Georgia', 'serif'],
        cormorant:  ['var(--font-cormorant)', 'Georgia', 'serif'],
        jakarta:    ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        inter:      ['var(--font-inter)', 'system-ui', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['96px', { lineHeight: '0.9', letterSpacing: '-2px' }],
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      animation: {
        'float':       'float 6s ease-in-out infinite',
        'float-slow':  'float 9s ease-in-out infinite',
        'spin-slow':   'spin 20s linear infinite',
        'marquee':     'marquee 32s linear infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up':   'accordion-up 0.2s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to:   { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to:   { height: '0' },
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        'glow':        '0 0 40px rgba(200,150,62,0.3)',
        'glow-green':  '0 0 40px rgba(18,84,38,0.35)',
        'card':        '0 2px 12px rgba(47,41,19,0.06)',
        'card-hover':  '0 24px 64px rgba(47,41,19,0.13)',
        'modal':       '0 40px 90px rgba(47,41,19,0.16)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
