module.exports = {
  entry: './js/app.js',
  output: { filename: "./js/out.js"},
  devServer: {
    inline: true,
    contentBase: './'  ,
    port: 3001
  },
  watch: true,
  module: {
  loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: ['es2015','stage-2', 'react'] },
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader?-url']
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader?-url', 'sass-loader']
      },
      {
				test:/\.(png|jpe?g|gif)$/,
				exclude:/node_modules/,
				loader: 'url-loader?limit=1024&name=/images/[name].[ext]'
			}
    ]
  }
}
