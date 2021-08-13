//craco.config.js
module.exports = {
    style: {
        postcss: [
            require('tailwindcss'),
            require('autoprefixer'),
        ]
    }
}