module.exports = {
  plugins: [
    require('postcss-import'), // must be first! Otherwise syntax highlight don't work
    require('tailwindcss'),
    require('autoprefixer'),
    require("postcss-nested"),
    ...(process.env.JEKYLL_ENV == 'production' ? [require('cssnano')({ preset: 'default' })] : [])
  ]
}
