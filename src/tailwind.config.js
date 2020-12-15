module.exports = {
  theme: {
    colors: {
      blue: {
        default: '#0039CB',
        lighter: '#2962ff'
      },
      gray: {
        graph: '#f4f4f4',
        text: '#828282'
      },
      orange: '#f57c00',
      purple: '#512da8',
      white: '#ffffff'
    },
    spacing: {
      0: '0',
      4: '4px',
      6: '6px',
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
      50: '50px',
      60: '60px',
      90: '90px'
    },
    borderWidth: {
      default: '1px',
      2: '2px',
      3: '3px'
    },
    borderRadius: {
      lg: '15px',
      full: '9999px'
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
