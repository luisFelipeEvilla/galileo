const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = (env) => {
  optimization: {
      minimizer: [
          new OptimizeCssAssetsPlugin({
              assetNameRegExp: /\.optimize\.css$/g,
              cssProcessor: require('cssnano'),
              cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
              canPrint: true
          })
      ]
  }

  const plugins = [
      new MiniCssExtractPlugin({
          filename: "../css/[name].[hash].css",
          chunkFilename: "[id].[hash].css"
      })
  ]
  if (env.NODE_ENV === 'production') {
      plugins.push(
          new CleanWebpackPlugin(['dist'], { root: __dirname })
      )
  }

  return {
      entry: {
          home: path.resolve(__dirname, '../src/entries/home.js')
      },

      output: {
          path: path.resolve(__dirname, '../dist/js'),
          filename:  '[name].[hash].js',
          publicPath: path.resolve(__dirname, 'dist') + "/"
      },

      module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /(node_modules)/,
              use: {
                  loader: 'babel-loader',
                  options: {
                      "presets": [
                          ["env", {
                              "targets": {
                                  // The % refers to the global coverage of users from browserslist
                                  "browsers": [">0.25%", "not ie 11", "not op_mini all"]
                              }
                          }],
                          ['react']
                      ]
                  }
              }
          },

          {
            test: /\.css$/,
            use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: path.resolve(__dirname, 'dist') + "/"
                  }
                },
                "css-loader"
            ]
          },

          {
              test: /\.(jpg|png|gif|svg)$/,
              use: {
                  loader: 'url-loader',
                  options: {
                      limit: 10000,
                      fallback: 'file-loader',
                      name: 'images/[name].[hash].[ext]',
                  }
              }
          },
      ]},

      plugins
  }
}
