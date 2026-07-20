/**
 * Site Configuration
 *
 * Central configuration for site-wide constants.
 * Update these values for your production deployment.
 */

export const siteConfig = {
  // Site Identity
  name: 'SSMIT',
  tagline: 'Crafting Digital Experiences That Matter',
  description:
    'We build thoughtful mobile experiences that people love. Creators of SignScan — the scanner that signs. Based in Sacramento, California.',

  // URLs
  url: 'https://ssmit.com',
  ogImage: '/images/og-image.jpg',

  // Contact
  email: 'smit@ssmit.com',
  phone: '(530) 517-3365',
  address: {
    street: '2858 Lemon Twist Ave',
    city: 'Sacramento',
    state: 'CA',
    zip: '95833',
    country: 'USA',
  },

  // Social Links
  social: {
    twitter: '', // @handle (without @)
    linkedin: '',
    instagram: '',
    github: '',
  },

  // Theme
  themeColor: '#2563EB', // SignScan cobalt
  backgroundColor: '#0a0a0b', // Primary black

  // Flagship app
  app: {
    name: 'SignScan',
    tagline: 'Scan anything. Sign everything.',
    supportEmail: 'smit@ssmit.com',
    priceOwn: '$34.99',
    priceMonthly: '$4.99',
  },
} as const;

export type SiteConfig = typeof siteConfig;
