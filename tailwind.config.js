module.exports = {
  content: ["./**/*.{html,md,njk,liquid}"],
  theme: {
    extend: {
      colors: {
        gross: {
          pink: '#ff6b6b',
          purple: '#764ba2',
          blue: '#667eea'
        }
      },
      fontFamily: {
        'mono': ['"Courier New"', 'monospace']
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
