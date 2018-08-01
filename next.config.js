const withSass = require('@zeit/next-sass');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

// const CopyWebpackPluginConfig = new CopyWebpackPlugin([
//   { from: 'public/static/images', to: 'static/images' }
// ]);

// module.exports = withSass(
//   withSass({
//     webpack(config) {
//       if (process.env.ANALYZE) {
//         config.plugins.push(new BundleAnalyzerPlugin({
//           analyzerMode: 'server',
//           analyzerPort: 8888,
//           openAnalyzer: true
//         }))
//       }
//       return config
//     },
//     cssModules: true
//   })
// )

module.exports = withSass({ cssModules: true })