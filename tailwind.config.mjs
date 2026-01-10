/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Primary
        black: '#0a0a0b',
        white: '#fafafa',

        // Accent - Electric Violet (Modern/Tech)
        accent: {
          DEFAULT: '#7c3aed',
          light: '#a78bfa',
          glow: 'rgba(124, 58, 237, 0.4)',
        },

        // Neutrals (overriding Tailwind grays for consistency)
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },

        // Semantic
        success: '#10b981',
        error: '#ef4444',
      },

      fontFamily: {
        sans: ['Satoshi', 'system-ui', 'sans-serif'],
        display: ['General Sans', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        xs: ['clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)', { lineHeight: '1.5' }],
        sm: ['clamp(0.875rem, 0.8rem + 0.375vw, 1rem)', { lineHeight: '1.5' }],
        base: ['clamp(1rem, 0.925rem + 0.375vw, 1.125rem)', { lineHeight: '1.6' }],
        lg: ['clamp(1.125rem, 1rem + 0.625vw, 1.375rem)', { lineHeight: '1.5' }],
        xl: ['clamp(1.25rem, 1.1rem + 0.75vw, 1.625rem)', { lineHeight: '1.4' }],
        '2xl': ['clamp(1.5rem, 1.25rem + 1.25vw, 2.25rem)', { lineHeight: '1.3' }],
        '3xl': ['clamp(1.875rem, 1.5rem + 1.875vw, 3rem)', { lineHeight: '1.2' }],
        '4xl': ['clamp(2.25rem, 1.75rem + 2.5vw, 4rem)', { lineHeight: '1.1' }],
        '5xl': ['clamp(3rem, 2rem + 5vw, 6rem)', { lineHeight: '1.05' }],
        '6xl': ['clamp(3.75rem, 2.5rem + 6.25vw, 8rem)', { lineHeight: '1' }],
      },

      letterSpacing: {
        tighter: '-0.03em',
        tight: '-0.02em',
        snug: '-0.01em',
      },

      transitionDuration: {
        instant: '100ms',
        fast: '200ms',
        normal: '300ms',
        slow: '500ms',
        slower: '800ms',
        slowest: '1200ms',
      },

      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
        'in-out-quart': 'cubic-bezier(0.76, 0, 0.24, 1)',
        'out-back': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },

      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
