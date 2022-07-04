module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  theme: {
    colors: {
      'beige' : { // source: https://www.colorhexa.com/f1ece4
        100: '#f8f5f1',
        200: '#f1eae4',
        300: '#eae3d7',
        400: '#e4daca',
        500: '#ddd1bd',
        600: '#d6c8b0',
        700: '#d0bfa3',
        800: '#c9b596',
        900: '#c2ac8a',
      }
    },
    theme: {
      extend: {},
    },
  },
  plugins: [require('@tailwindcss/typography')]
}
