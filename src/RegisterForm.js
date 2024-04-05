import React from 'react';
import logo from '../src/Assets/sad-logo.png'

const RegisterForm = () => {
  return (
    <div className="main-register-container">
      <div className="center-container">
        <div className="col-12 row resp-login" style={{ display: "flex", alignItems: "center" }}>
          <div className='col-12 col-xl-5 col-lg-5 col-md-12 col-sm-12 text-center'>
            <img src={logo} alt="Logo" className="home-logo" />
          </div>
          <div className='col-12 col-xl-7 col-lg-7 col-md-12 col-sm-12'>
            <h1 className="xyz-text">Shiromani Akali Dal Amritsar Member Registration Form</h1>
          </div>
        </div>
        <span className='border-bottom mt-3'></span>

        <div className="register-form-container">

          <form className='register-form'>
            <div className='flexRow col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12'>
              <div className='flexColumn col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 px-1'>
                <label className='mb-2'>Enter Full Name / ਤੁਹਾਡਾ ਪੂਰਾ ਨਾਮ <span className='label_required'> * </span> </label>
                <input placeholder='Enter Full Name' className='register-input'></input>
              </div>
              <div className='flexColumn col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 px-1'>
                <label className='mb-2'>Enter Email / ਤੁਹਾਡੀ ਈ-ਮੇਲ ਆਈਡੀ <span className='label_required'> * </span></label>
                <input placeholder='Enter Email' className='register-input'></input>
              </div>
            </div>

            <div className='flexRow col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12'>
              <div className='flexColumn col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 px-1'>
                <label className='mb-2'>Enter Adhaar Card Number / ਤੁਹਾਡਾ ਅਧਾਰ ਕਾਰਡ ਨੰਬਰ <span className='label_required'> * </span></label>
                <input placeholder='Enter Adhaar Card Number' className='register-input'></input>
              </div>
              <div className='flexColumn col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 px-1'>
                <label className='mb-2'>Enter Father/Husband Name / ਤੁਹਾਡੇ ਪਿਤਾ / ਪਤੀ ਦਾ ਨਾਮ</label>
                <input placeholder='Enter Father/Husband Name' className='register-input'></input>
                <label className='mt-1'>
                  <input type='checkbox' className='register-input ml-2' />
                  <span className='ml-3'> Please Check This Box If Entering Husband Name </span>
                </label>
              </div>
            </div>

            <div className='flexRow col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12'>
              <div className='flexColumn col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 px-1'>
                <label className='mb-2'>Select Country / ਤੁਹਾਡਾ ਨਿਵਾਸ ਦੇਸ਼ <span className='label_required'> * </span> </label>
                <input placeholder='Select Country' className='register-input'></input>
              </div>
              <div className='flexColumn col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 px-1'>
                <label className='mb-2'>Enter Phone Number / ਤੁਹਾਡਾ ਫੋਨ ਨੰਬਰ  <span className='label_required'> * </span> </label>
                <input placeholder='Enter Phone Number' className='register-input'></input>
              </div>
            </div>

            <div className='flexRow col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12'>
              <div className='flexColumn col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 px-1'>
                <label className='mb-2'>Select State / ਤੁਹਾਡੀ ਸਟੇਟ <span className='label_required'> * </span> </label>
                <input placeholder='Select State ' className='register-input'></input>
              </div>
              <div className='flexColumn col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 px-1'>
                <label className='mb-2'>Select District / ਤੁਹਾਡਾ ਜ਼ਿਲ੍ਹਾ <span className='label_required'> * </span> </label>
                <input placeholder='Select District' className='register-input'></input>
              </div>
            </div>

            <div className='flexRow col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12'>
              <div className='flexColumn col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 px-1'>
                <label className='mb-2'>Enter Village / Town / ਤੁਹਾਡਾ ਪਿੰਡ </label>
                <input placeholder='Enter Village / Town' className='register-input'></input>
              </div>
              <div className='flexColumn col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 px-1'>
                <label className='mb-2'>Enter Tehsil / ਤੁਹਾਡੀ ਤਹਿਸੀਲ </label>
                <input placeholder='Enter Tehsil' className='register-input'></input>
              </div>
            </div>

            <div className='flexRow col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12'>
              <div className='flexColumn col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 px-1'>
                <label className='mb-2'>Enter Full Address / ਤੁਹਾਡਾ ਪੂਰਾ ਪਤਾ <span className='label_required'> * </span> </label>
                <input placeholder='Enter Full Address' className='register-input'></input>
              </div>
            </div>

            <div className='flexRow col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12'>
              <div className='flexColumn col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 px-1'>
                <label className='mb-2'>Upload Your Photo / ਤੁਹਾਡੀ ਫੋਟੋ  <span className='label_required'> * </span> </label>
                <input placeholder='Upload Your Photo' type='file' className='register-input'></input>
              </div>
            </div>

            <div className='flexRow col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12'>
              <div className='flexColumn col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 px-1'>
                <label className='mb-2'>Select Skills / Expertise / ਤੁਹਾਡੇ ਹੁਨਰ <span className='label_required'> * </span> </label>
                <label className='mx-3'>
                  <input type='checkbox' className='register-input ml-2' />
                  <span className='ml-3'> Journalism </span>
                </label>
                <label className='mx-3'>
                  <input type='checkbox' className='register-input' />
                  <span className='ml-3'> Public Speaking </span>
                </label>
                <label className='mx-3'>
                  <input type='checkbox' className='register-input' />
                  <span className='ml-3'> Social Media Campaign </span>
                </label>
                <label className='mx-3'>
                  <input type='checkbox' className='register-input' />
                  <span className='ml-3'> Community Organizer </span>
                </label>
                <label className='mx-3'>
                  <input type='checkbox' className='register-input' />
                  <span className='ml-3'> Audio / Video Editing </span>
                </label>
                <label className='mx-3'>
                  <input type='checkbox' className='register-input' />
                  <span className='ml-3'> Graphics Designer </span>
                </label>
                <label className='mx-3'>
                  <input type='checkbox' className='register-input' />
                  <span className='ml-3'> Web Designer </span>
                </label>
                <label className='mx-3'>
                  <input type='checkbox' className='register-input' />
                  <span className='ml-3'> Writer (Literature / Philosophy / Short Story) </span>
                </label>
                <label className='mx-3'>
                  <input type='checkbox' className='register-input' />
                  <span className='ml-3'> Other (Please Specify) </span>
                </label>

              </div>
            </div>

            <div className='flexRow col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12'>
              <div className='flexColumn col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 px-1'>
                <label className='mb-2'>Region In Which You Can Volunteer / ਤੁਸੀ ਕਿਸ ਜਿਲ੍ਹੇ ਵਿੱਚੋ ਵਲੰਟੀਅਰ ਕਰ ਸਕਦੇ <span className='label_required'> * </span> </label>
                <input placeholder='Region In Which You Can Volunteer' className='register-input'></input>
              </div>
            </div>

            <div>
              <button className="login-button mt-3 mb-2">Register Now</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
