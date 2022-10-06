module.exports = {
  content: [
    './src/components/modals/*.{html,js}',
    './src/components/global/main/*.{html,js}',
    './src/components/global/main/components/*.{html,js}',
    './src/components/global/main/themes/xp/*.{html,js}',
    './src/components/global/main/themes/xp/**/*.{html,js}',
    './src/components/global/main/themes/mac/*.{html,js}',
    './src/components/global/main/themes/mac/**/*.{html,js}',
    './src/components/global/main/homepage/*.{html,js}',
    './src/components/global/tools/*.{html,js}',
    './src/components/global/*.{html,js}',
    './src/index.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        "homepage-bg": "var(--colorPallete-homepage-bg)",
        "homepage-text": "var(--colorPallete-homepage-text)",
        "homepage-alt": "var(--colorPallete-homepage-alt)"
      },
    },
    fontFamily: {
      'serif': ['Playfair Display', 'serif'],
      'sans': ['Quicksand', 'sans-serif'],
      'mono': ['Open Sans'],
    }
  },

}
