import React from "react";
import { Link } from "react-router-dom";

export default function ContactUs() {
  return (
    <>
      <div className='container-fluid mb-3 p-3'>
      <div className="row">
        <div className='col-sm-6 col-12'>
        <div className="contact">
           Nikhilshrma127640@gmail.com 
        </div>
        <div className="contact">
           8512012572
        </div>
        <div className="contact">
           Village Bisrakh Sector-1 Greater Noida West Knoweldge Park-5
        </div>
        
        </div>
        <div className='col-sm-6 col-12'>
        <h5 className="background text-light text-center p-2 mt-2">Contact-Us Section</h5>
          <form>
          <div className="mb-3">
           <label for="name" className="from-lable">Name</label>
           <input type="text" className="form-control" name="phone" placeholder="Enter Your Name"></input>
           </div>
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

           <div className="mb-3">
           <label for="phone" className="from-lable">Phone</label>
           <input type="text" className="form-control" name="phone" placeholder="Enter Your Phone Number"></input>
           </div>

           <div className="mb-3">
           <label for="subject" className="from-lable">Subject</label>
           <input type="text" className="form-control" name="phone" placeholder="Enter Your Subject"></input>
           </div>
           <div className="mb-3">
           <label for="subject" className="from-lable">Message</label>
           <textarea name="message " className="form-control" rows={5}></textarea>
           </div>
           
            <button type='submit' className='btn background text-light w-100'>
              Send
            </button>
           
          </form>
          </div>
        </div>
      </div>
    </>
  );
}
