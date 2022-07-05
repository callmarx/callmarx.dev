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
    extend: {
      height: {
      '112': '28rem',
      }
    },
  },
  plugins: [require('@tailwindcss/typography')]
}
