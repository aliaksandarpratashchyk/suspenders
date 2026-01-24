const { resolve } = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	entry: './src/index.ts',	
	devtool: 'source-map',
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.module\.(css|s[ac]ss)$/i,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							esModule: true,
							modules: {
								localIdentName: '[local]__[hash:base64:5]',
								namedExport: false,
								exportOnlyLocals: false,
							},
						},
					},
					'sass-loader',
				],
			},
			{
				test: /\.(css|s[ac]ss)$/i,
				exclude: /\.module\.(css|s[ac]ss)$/i,
				use: [
					'style-loader', 
					'css-loader', 
					'sass-loader'
				],
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},			
		],
	},	
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				extractComments: false,
				parallel: true,
				terserOptions: { format: { comments: false } },
			}),
		],
	},
	output: {
		clean: true,
		filename: 'bundle.js',
		path: resolve(__dirname, 'dist'),
		library: {
			name: '@aliaksandarpratashchyk/suspenders',
			type: 'umd',
		},
	},
	target: ['node'],
};
