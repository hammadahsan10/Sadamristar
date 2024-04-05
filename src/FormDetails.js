import React from 'react';
import logo from '../src/Assets/sad-logo.png'
import logo2 from '../src/Assets/logo.png'

const FormDetails = () => {
  return (
    <div className="main-details-container">
      <div className="center-container">
        <div className="col-12 row resp-login" style={{ display: "flex", alignItems: "center" }}>
          <div className='col-12 col-xl-5 col-lg-5 col-md-12 col-sm-12 text-center'>
            <img src={logo} alt="Logo" className="home-logo" />
          </div>
          <div className='col-12 col-xl-7 col-lg-7 col-md-12 col-sm-12'>
            <h1 className="xyz-text">Shiromani Akali Dal Amritsar Member Details</h1>
          </div>
        </div>
        <span className='border-bottom mt-3'></span>
        <div className="register-form-container">
          <form className='register-form'>
            <div className='flexRow col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12'>
              <div className='flexColumn col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 px-1'>
                <label className='mb-2 bold-label'>Photo:</label>
              </div>
              <div className='flexColumn col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 ml-3'>
                <img src={logo2} alt="Logo" className="logo2 ml-3" />
              </div>
            </div>

            <span className='border-bottom mt-2 mb-2'></span>

            <div className='flexRow col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12'>
              <div className='flexColumn col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 px-1'>
                <label className='mb-2 bold-label'>Name:</label>
              </div>
              <div className='flexColumn col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 px-1'>
                <label className='mb-2 semibold-label'>Bagich Singh</label>
              </div>
            </div>
            <span className='border-bottom mt-2 mb-2'></span>

            <div className='flexRow col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12'>
              <div className='flexColumn col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 px-1'>
                <label className='mb-2 bold-label'>Father Name:</label>
              </div>
              <div className='flexColumn col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 px-1'>
                <label className='mb-2 semibold-label'>Nachhattar Singh</label>
              </div>
            </div>
            <span className='border-bottom mt-2 mb-2'></span>

            <div className='flexRow col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12'>
              <div className='flexColumn col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 px-1'>
                <label className='mb-2 bold-label'>Adhaar Card:</label>
              </div>
              <div className='flexColumn col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 px-1'>
                <label className='mb-2 semibold-label'>xyz</label>
              </div>
            </div>
            <span className='border-bottom  mt-2 mb-2'></span>

            <div className='flexRow col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12'>
              <div className='flexColumn col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 px-1'>
                <label className='mb-2 bold-label'>Country:</label>
              </div>
              <div className='flexColumn col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 px-1'>
                <label className='mb-2 semibold-label'>India</label>
              </div>
            </div>
            <span className='border-bottom  mt-2 mb-2'></span>

            <div className='flexRow col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12'>
              <div className='flexColumn col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 px-1'>
                <label className='mb-2 bold-label'>State:</label>
              </div>
              <div className='flexColumn col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 px-1'>
                <label className='mb-2 semibold-label'>Punjab</label>
              </div>
            </div>
            <span className='border-bottom  mt-2 mb-2'></span>

            <div className='flexRow col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12'>
              <div className='flexColumn col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 px-1'>
                <label className='mb-2 bold-label'>District:</label>
              </div>
              <div className='flexColumn col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 px-1'>
                <label className='mb-2 semibold-label'>	Tarn-Taran</label>
              </div>
            </div>
            <span className='border-bottom  mt-2 mb-2'></span>

            <div className='flexRow col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12'>
              <div className='flexColumn col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 px-1'>
                <label className='mb-2 bold-label'>Address:</label>
              </div>
              <div className='flexColumn col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 px-1'>
                <label className='mb-2 semibold-label'>Thakarpura</label>
              </div>
            </div>
            <span className='border-bottom  mt-2 mb-2'></span>

            <div className='flexRow col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12'>
              <div className='flexColumn col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 px-1'>
                <label className='mb-2 bold-label'>Phone:</label>
              </div>
              <div className='flexColumn col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 px-1'>
                <label className='mb-2 semibold-label'>03xxxxxxxx</label>
              </div>
            </div>
            <span className='border-bottom  mt-2 mb-2'></span>

            <div className='flexRow col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12'>
              <div className='flexColumn col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 px-1'>
                <label className='mb-2 bold-label'>Email</label>
              </div>
              <div className='flexColumn col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 px-1'>
                <label className='mb-2 semibold-label'>Bagich@gmail.com</label>
              </div>
            </div>
            <span className='border-bottom  mt-2 mb-2'></span>

            <div className='flexRow col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12'>
              <div className='flexColumn col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 px-1'>
                <label className='mb-2 bold-label'>Member Verification Status:</label>
              </div>
              <div className='flexColumn col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 px-1'>
                <label className='mb-2 semibold-label'>Verified</label>
              </div>
            </div>

            <div style={{ display: 'none' }}>
              <button className="login-button mt-5">Register Now</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default FormDetails;
