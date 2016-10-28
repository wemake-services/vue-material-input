var path = require('path')
var projectRoot = path.resolve(__dirname, '../')

var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: projectRoot,
    filename: 'index.js',
    library: 'VueMaterialInput',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'components': path.resolve(__dirname, '../src/components')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
    ]
  },
  vue: {
    loaders: {
      scss: ExtractTextPlugin.extract(
        'vue-style-loader', 'css-loader!sass-loader'
      )
    },
    postcss: [
      require('autoprefixer')({
        browsers: ['ie >= 9', 'last 5 versions']
      })
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
}
