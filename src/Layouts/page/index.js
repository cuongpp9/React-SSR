import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header';
if(process.env.WEBPACK) require('./index.scss');

export default () => (
	<div className='page'>
		<div className= "test1">1112</div>
        <div className= "test2">asdasdasd</div>
	</div>
);
