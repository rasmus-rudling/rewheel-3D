const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'

const devExport = {
	entry: './src/index.tsx',
	devServer: {
		hot: true,
		open: false,
		historyApiFallback: true,
	},
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'index.bundle.js',
		publicPath: '/',
	},
	mode: process.env.NODE_ENV || 'development',
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	// devServer: { static: path.join(__dirname, 'src'), historyApiFallback: true },
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: ['ts-loader'],
			},
			{
				test: /\.(css|scss)$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
				use: ['file-loader'],
			},
			{
				test: /\.(glb|gltf)$/,
				loader: 'file-loader',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'public', 'index.html'),
			favicon: './public/512x512_icon.png',
		}),
		new Dotenv(),
		new ReactRefreshWebpackPlugin(),
	],
}

const prodExport = {
	entry: './src/index.tsx',
	output: { path: path.join(__dirname, 'build'), filename: 'index.bundle.js' },
	mode: process.env.NODE_ENV || 'development',
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	devServer: { static: path.join(__dirname, 'src'), historyApiFallback: true },
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: ['ts-loader'],
			},
			{
				test: /\.(css|scss)$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
				use: ['file-loader'],
			},
			{
				test: /\.(glb|gltf)$/,
				loader: 'file-loader',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'public', 'index.html'),
			favicon: './public/512x512_icon.png',
		}),
		new Dotenv(),
	],
}

module.exports = isDevelopment ? devExport : prodExport
