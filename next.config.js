const withSass = require('@zeit/next-sass');

const CopyWebpackPluginConfig = new CopyWebpackPlugin([
  { from: 'public/static/images', to: 'static/images' }
]);

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  }
});