const path = require('path')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: {
        home: path.resolve('./src/entries/home.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    devServer: {
        port: 9000,
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['env', {
                            "targets": {
                                "browsers": [">0.25%", "not op_mini all"]
                                }
                            }],
                            ['react']
                        ]
                    }
                }
            },

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },

            {
                test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1000000,
                        fallback: 'file-loader',
                        name: 'images/[name].[hash].[ext]',
                    }
                }
            }
        ]
    },

    plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('../dist/js/modules-manifest.json')
    })
  ]

}
