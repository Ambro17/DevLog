module.exports = {
    // Hold until tailwind 2.0 darkMode: 'media',
    purge: [
      './src/**/*.html',
      './src/**/*.vue',
    ],
    experimental: {
      darkModeVariant: true
    },
    future: {
      purgeLayersByDefault: true,
    },
    theme: {},
    variants: {},
    plugins: [],
}
