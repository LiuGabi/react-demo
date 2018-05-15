const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

const webpackConfig = require('./webpack.config');

let compiler = webpack(webpackConfig);
let devServer = new webpackDevServer(compiler, {
	publicPath: webpackConfig.output.publicPath,
	stats: {
		colors: true,
		chunks: true
	},
	contentBase: 'src/',
	historyApiFallback: true,
	disableHostCheck: true,
	proxy: [{
		context: ['/api'],
		target: 'http://10.100.15.17:8080',
		// target: 'http://10.100.15.17:7070', //测试
		secure: false
	}]
});

devServer.listen(3400, error => {
	if(error) {
		console.log(error);
		return;
	}
	console.log('http://localhost:' + 3400);
});