const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	stats: { children: false },
	cache: { type: 'filesystem' },
	optimization: { minimizer: [new TerserPlugin({ extractComments: false })] },
	entry: {
		'cookies-info.min': ['./src/scss/cookies-info.scss', './src/js/cookies-info.js']
	},
	output: {
		libraryTarget: 'umd',
		path: __dirname + '/build',
		filename: '[name].js?[contenthash]',
		publicPath: '',
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				exclude: '/node_modules/',
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader?url=false',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: ['autoprefixer']
							}
						}
					},
					'sass-loader',
				]
			}
		]
	},
	watchOptions: {
		ignored: [
			'/node_modules/',
		]
	},
	plugins: [
		// new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].css?[contenthash]'
		}),
	]
};
