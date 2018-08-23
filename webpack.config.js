const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');
const fonts = require('./webpack/fonts');
const json = require('./webpack/json');

const PATHS = {
	source: path.join(__dirname, 'source'),
	build: path.join(__dirname, 'build')
};

const common = merge([
	{
		entry: {
			'bundle': PATHS.source + '/bundle/bundle.js',
		},

		output: {
			path: PATHS.build,
			filename: 'js/[name].js'
		},

		plugins: [
			new HtmlWebpackPlugin({
				filename: 'index.html',
				chunks: ['bundle'],
				template: PATHS.source + '/pug/pages/index.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'blog.html',
				chunks: ['bundle'],
				template: PATHS.source + '/pug/pages/blog.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'portfolio.html',
				chunks: ['bundle'],
				template: PATHS.source + '/pug/pages/portfolio.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'contacts.html',
				chunks: ['bundle'],
				template: PATHS.source + '/pug/pages/contacts.pug'
			}),
			// new webpack.optimize.CommonsChunkPlugin({
			// 	name: 'common'
			// }),
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery'
			})
		]
	},
	pug(),
	images(),
	fonts(),
	json()
]);

module.exports = function(env) {
	if (env === 'production') {
		return merge([
			common,
			extractCSS(),
			uglifyJS()
		]);
	}
	if (env === 'development') {
		return merge([
			common,
			devserver(),
			sass(),
			css()
		])
	}
};