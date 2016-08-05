var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        './index.js'
    ],
    output: {
        path: path.resolve(__dirname, './bin'),
        publicPath: '/bin/',
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders:[
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react']
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loaders: ['url-loader?limit=100000']
            }
        ]
    },
    postcss: function () {
        return [autoprefixer, precss];
    }
};