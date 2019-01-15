import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './Layouts/app';
import reducers from './Redux/reducers';
import fs from 'fs';

export default (req, res) => {
    if (process.env.NODE_ENV === 'development') {
        res.send(`
			<!doctype html>
			<html>
				<head>
					<title>My App</title>
					<link rel="shortcut icon" href="ico.png">
					<link rel='stylesheet' href='bundle.css'>
					<link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
                    <link rel="stylesheet" href="/bootstrap/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
                    <!--Import Google Icon Font-->
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                    <!--Import materialize.css-->
                    <link type="text/css" rel="stylesheet" href="materialize/css/materialize.min.css"  media="screen,projection"/>

                    <!--Let browser know website is optimized for mobile-->
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				</head>
				<body>
					<div id='app'></div>
                    <script src='bundle.js'></script>
					<script src="/jquery.com/jquery-3.3.1.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
					<!-- Latest compiled and minified JavaScript -->
					<script src="/bootstrap/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
                    <script src="/materialize/js/materialize.min.js"></script>
                </body>
			</html>
		`);
    } else if (process.env.NODE_ENV === 'production') {
        const chunkContent = JSON.parse(fs.readFileSync('./dist/chunkContent.json', 'utf8')) || {};
        res.send(`
			<!doctype html>
			<html>
				<head>
					<title>My App</title>
					<link rel="shortcut icon" type="image/x-icon" href="ico.png">
					<link rel='stylesheet' href='${chunkContent.assetsByChunkName.main[1]}'>
					<link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
					<link rel="stylesheet" href="/bootstrap/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
				</head>
				<body>
					<div id='app'>${renderToString(
            <Provider store={createStore(reducers)}>
                <StaticRouter location={req.url} context={{}}>
                    <App />
                </StaticRouter>
            </Provider>
        )}</div>
					<script src='${chunkContent.assetsByChunkName.main[0]}'></script>
					<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
					<!-- Latest compiled and minified JavaScript -->
					<script src="/bootstrap/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
				</body>
			</html>
		`);
    }
};
