module.exports = {
  theme: {
    colors: {
      blue: '#0039CB',
      white: '#ffffff'
    },
    spacing: {
      0: '0',
      4: '4px',
      8: '8px',
      10: '10px',
      12: '12px',
      16: '16px',
      20: '20px',
      24: '24px',
      30: '30px',
      32: '32px',
      36: '36px',
      40: '40px',
      60: '60px'
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'src/components/**/*.{vue,js}',
      'src/layouts/**/*.vue',
      'src/pages/**/*.vue',
      'src/plugins/**/*.{js,ts}',
      'nuxt.config.{js,ts}'
    ]
  }
}
