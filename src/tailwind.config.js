module.exports = {
  theme: {
    colors: {
      blue: {
        default: '#0039CB',
        lighter: '#2962ff',
        graph: '#2962FF'
      },
      gray: {
        graph: '#f4f4f4',
        'graph-dark': '#757474',
        text: '#828282',
        spacer: '#dcdcdc'
      },
      green: {
        'on-track': '#388e3c'
      },
      orange: {
        'at-risk': '#f57c00'
      },
      purple: {
        advanced: '#512da8'
      },
      red: {
        default: '#d50000',
        'off-track': '#D32F2F'
      },
      yellow: {
        'likely-on-track': '#c5c909'
      },
      white: '#fff'
    },
    spacing: {
      0: '0',
      3: '3px',
      4: '4px',
      5: '5px',
      6: '6px',
      8: '8px',
      10: '10px',
      12: '12px',
      15: '15px',
      16: '16px',
      20: '20px',
      24: '24px',
      25: '25px',
      30: '30px',
      32: '32px',
      36: '36px',
      40: '40px',
      50: '50px',
      60: '60px',
      90: '90px',
      100: '100px'
    },
    borderWidth: {
      default: '1px',
      2: '2px',
      3: '3px'
    },
    borderRadius: {
      md: '10px',
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
