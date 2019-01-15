import React, { Component } from 'react';
if (process.env.WEBPACK) require('./stype.scss');
// import './stype.scss';

class LoginForm extends Component {
    render() {
        return (
            <div className="login-form" >
                <div className="get-out">
                    <div className="right-mid">
                        <div className="container-login">
                            <div className="card-container">
                                <div className="title-login">
                                    <h3>LOGIN</h3>
                                </div>
                                <div className="row">
                                    <form className="col s12">
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="userName" type="email" className="validate" />
                                                <label>Email</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="password" type="password" className="validate" />
                                                <label>Password</label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="card-action">
                                    <a className="waves-effect waves-light btn" onSubmit={this.onHandleSubmit} href='/Dashboard'>Submit</a>
                                    <a href="" className="right text-lighten">FORGOT PASSWORD </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginForm;
