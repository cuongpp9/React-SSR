import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleTodo } from '../../redux/actions/todos';
import Header from '../header';
if (process.env.WEBPACK) require('./index.scss');
import LoginForm from './components/login/index';

console.log("process.env.WEBPACK", process.env.WEBPACK)
const Home = ({ dispatch, todos }) => (
	<div className="login-layout">
        {/* Left Login layout */}
        <div className="left-layout">
          <div className="get-out">
            <div className="leftmid">
              <div className="center-align">
                {/* <img src="/assets/pill-white-trans.png" alt="logo" className="cicle" /> */}
              </div>
              <div className="center-align">
                {/* <img src="/assets/wordmark-white.png" alt="mark" className="medly" /> */}
              </div>
              {/* <h5 className="info">Prescriptions Made Easy</h5> */}
            </div>
          </div>
        </div>
        <LoginForm/>
        <div className="copy-right">
          {/* <h5 className="center-align">© 2017 Lindenwood Health, Inc</h5> */}
        </div>
      </div>
);

export default connect((state) => {
	const { todos } = state;
	return { todos };
})(Home);
