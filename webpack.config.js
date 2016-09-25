var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
	context: __dirname,
	// devtool: 'eval',
	entry: {
		app: ['./src'],
		webtest: ['mocha!./test'],
        test:['./test'],
	},
	output: {
		path          : path.join(__dirname, 'dist'),
		filename      : '[name].bundle.js',
		libraryTarget : 'umd',
		pathinfo      : true,
	},
	devServer: {
		contentBase: '/',
		inline: true
	},
	module: {
		loaders: [
            {
                test    : /\.js$/,
                exclude : /node_modules/,
                loader  : 'babel-loader'
            },
            {
                test    : /\.json$/,
                loader  : 'json-loader'
            }
		],
		noParse: /\.min\.js$/
	},
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            chunks: ['app']
        })
    ]
};
