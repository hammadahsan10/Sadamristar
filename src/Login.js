import React from 'react';
import logo from '../src/Assets/sad-logo.png'

const Login = () => {

    return (
        <div className="main-container">
            <div className="center-container mb-2">
                <div className="col-12 row resp-login" style={{ display: "flex", alignItems: "center" }}>
                    <div className='col-12 col-xl-5 col-lg-5 col-md-12 col-sm-12 text-center'>
                        <img src={logo} alt="Logo" className="home-logo" />
                    </div>
                    <div className='col-12 col-xl-7 col-lg-7 col-md-12 col-sm-12'>
                        <h1 className="xyz-text">Shiromani Akali Dal Amritsar Login Form</h1>
                    </div>
                </div>
                <span className='border-bottom mt-3'></span>
                <div className="form-container">
                    <form className='login-form'>
                        <label className='mb-1'>Enter Username</label>
                        <input placeholder='Enter Username' className='login-input'></input>
                        <label className='mt-3 mb-1'>Enter Password</label>
                        <input placeholder='Enter Password' className='login-input'></input>
                        <button className="login-button mt-5 mb-2">Login Now</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
