import React from 'react'
export default function Footer() {
  return (
      <>
    <div className='container-fluid background  text-center p-3 text-light'>
        <p>CopyRight@myshop</p>
      <div className='row d-flex justify-content-center'>
        <div className='col-4 '>
        <form>
  <div class="mb-3">
    <label for="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" placeholder='Enter Email Id To Subscribe Our NewsLatter'/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

        </div>
      </div>
    </div>
    </>
  )
}
