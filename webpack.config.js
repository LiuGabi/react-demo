// Webpack version 4.8.3 及以上
const webpack = require('webpack');
const path  = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// 设置统一插件
const plugins = [
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
	}),
	new MiniCssExtractPlugin({
		filename: "static/css/[name].[hash].css",
		disable: false,
		allChunks: true
	}),
	new HtmlWebpackPlugin({
		favicon: './src/favicon.ico',
		template: './src/index.html',
		inject: 'body',
	})
];
// 非开发环境对js进行混淆，以及清除老版 dist 文件
if (process.env.NODE_ENV !== 'development') {
	plugins.push(new UglifyJsPlugin(), new CleanWebpackPlugin(['dist']));
}

const config = {
	mode: process.env.NODE_ENV,
	entry: {
		app: './src/app.js', // 程序启动入口
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: 'http://cdn.baidu.com/', // cdn 地址
		publicPath: '/',
		filename: 'static/js/[name].[hash].js', // 设置文件夹 和 文件的文字
		chunkFilename: 'static/js/[name][id].[chunkhash].js' // 针对多个 entry 点
	},
	module: {
		rules: [{
			test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
			loader: 'file-loader',
			options:{
				name: 'static/image/[name].[hash].[ext]'
			}
		}, {
			test: /\.less$/,
			use: [MiniCssExtractPlugin.loader, "less-loader"]
		}, {
			test: /\.css$/,
			use: [MiniCssExtractPlugin.loader, "css-loader"]
		}, {
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader'
			}
		}, {
			test: /\.(html)$/,
			use: {
				loader: 'html-loader',
				options: {
					minimize: process.env.NODE_ENV !== 'development'
				}
			}
		}],
	},
	devtool: "source-map",
	plugins: plugins,
	resolve: {
		alias: {
			'react': 'react/dist/react.js'
		}
	}
};

module.exports = config;