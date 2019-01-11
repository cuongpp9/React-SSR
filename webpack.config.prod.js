const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const { StatsWriterPlugin } = require('webpack-stats-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[chunkhash].js',
		publicPath: '/'
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production'),
				WEBPACK: true
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		}),
		new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname, 'src', 'assets'),
				to: path.resolve(__dirname, 'dist', 'assets')
			}
		]),
		new WebpackMd5Hash(),
		new ExtractTextPlugin('[name].[contenthash].css'),
		new StatsWriterPlugin({
			filename: 'stats.json' // Default
		})
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader'
				},
				include: path.resolve(__dirname, 'src')
			},
			{
				test: /\.scss/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						'css-loader',
						'sass-loader',
						{
							loader: 'postcss-loader',
							options: {
								plugins: function () {
									return [
										require('autoprefixer')
									];
								}
							}
						}
					],
				}),
				include: path.resolve(__dirname, 'src')
			}
		]
	}
};
