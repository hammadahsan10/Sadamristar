import React from 'react';
import logo from '../src/Assets/sad-logo.png'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate()

  return (
    <div className="main-container">
      <div className="center-container mb-2">
        <div className="col-12 row resp-login" style={{ display: "flex", alignItems: "center" }}>
          <div className='col-12 col-xl-5 col-lg-5 col-md-12 col-sm-12 text-center'>
            <img src={logo} alt="Logo" className="home-logo" />
          </div>
          <div className='col-12 col-xl-7 col-lg-7 col-md-12 col-sm-12'>
            <h1 className="xyz-text">Welcome ToShiromani Akali Dal Amritsar</h1>
          </div>
        </div>
        <span className='border-bottom mt-3'></span>
        <div className="button-container">
          <h4> Select Registration Type</h4>
            <button className="card-button mt-3" onClick={() => navigate('/registerform')}>ID Card Registration</button>
            <button className="form-button mt-2" onClick={() => navigate('/login')}>Applicant Form</button>        
        </div>
      </div>
    </div>
  );
};

export default Home;
