import path from 'path';
import express from 'express';
import webpack from 'webpack';
import middleware from './src/middleware';
import open from 'open';

const app = express();
const port = 3009;

if(process.env.NODE_ENV === 'development') {
	const config = require('./webpack.config.dev');
	const compiler = webpack(config);
	app.use(require('webpack-dev-middleware')(compiler, {
		noInfo: true,
		publicPath: config.output.publicPath,
		stats: {
			assets: false,
			colors: true,
			version: false,
			hash: false,
			timings: false,
			chunks: false,
			chunkModules: false
		}
	}));
	app.use(require('webpack-hot-middleware')(compiler));
	app.use(express.static(path.resolve(__dirname, 'src')));
	app.use(express.static(path.resolve(__dirname, 'public')));
} else if(process.env.NODE_ENV === 'production') {
	app.use(express.static(path.resolve(__dirname, 'dist')));
	app.use(express.static(path.resolve(__dirname, 'public')));
}

app.get('*', middleware);

app.listen(port, '0.0.0.0', (err) => {
	if(err) {
		console.error(err);
	} else {
		console.info(`Listening at http://localhost:${port}`);
		open(`http://localhost:${port}`);
	}
});
