module.exports = {
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  vue: {
    loaders: {
      css: 'vue-style-loader!css-loader',
      scss: 'vue-style-loader!css-loader!sass-loader'
    }
  }
}
