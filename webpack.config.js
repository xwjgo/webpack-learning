const path = require('path');
const webpack = require('webpack');


module.exports = {
    entry: {
        main: './app/index.js',
        vendor: 'lodash'
    },
    output: {
        filename: '[chunkhash].[name].js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'manifest']
        })
    ]
};