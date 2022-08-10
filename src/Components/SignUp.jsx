import React from "react";
import { Link } from "react-router-dom";
import pic from "../assets/images/nopic.png";
export default function SignUP() {
  return (
    <>
      <div className='container-fluid mb-3 p-3'>
      <div className="row">
        <div className='col-sm-6 col-12'>
          <img src={pic} className='w-100' />
        </div>
        <div className='col-sm-6 col-12'>
        <h5 className="background text-light text-center p-2 mt-2">SignUP Section</h5>
          <form>
          <div className='mb-3 '>
              <label for='Name' className='form-label'>
                Name
              </label>
              <input
                type='text'
                className='form-control'
                name='Name'
               placeholder='Enter The Your Name'
              /></div>
               <div className='mb-3 '>
              <label for='UserName' className='form-label'>
                UserName
              </label>
              <input
                type='text'
                className='form-control'
                name='UserName'
               placeholder='Enter The Your UserName'
              /></div>

            <div className='mb-3 '>
              <label for='email' className='form-label'>
                Email address
              </label>
              <input
                type='email'
                className='form-control'
                name='email'
               placeholder='Enter The Email Id'
              />
              
            </div>
            <div className='mb-3'>
              <label for='Password' className='form-label'>
                Password
              </label>
              <input
                type='password'
                className='form-control'
                name='password' placeholder="Enter The Password "
              />
            </div>
            <div className='mb-3'>
              <label for='ConfirmPassword' className='form-label'>
              ConfirmPassword
              </label>
              <input
                type='password'
                className='form-control'
                name='password' placeholder="Enter The  ConfirmPassword "
              />
            </div>
           
            <button type='submit' className='btn background text-light w-100'>
              login
            </button>
            <Link to="/login" className="text-decoration-none">Already User?Login</Link>
          </form>
          </div>
        </div>
      </div>
    </>
  );
}
