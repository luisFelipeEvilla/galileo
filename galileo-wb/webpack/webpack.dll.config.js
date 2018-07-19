const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: {
        modules: [
            'react',
            'react-dom',
        ],
    },
    output: {
        path: path.resolve(__dirname,'../dist/js'),
        filename: '[name].dll.js',
        library: '[name]',
    },

    plugins: [
        new webpack.DllPlugin({
            name: "[name]",
            path: './dist/js/[name]-manifest.json'
        })
    ]
}
