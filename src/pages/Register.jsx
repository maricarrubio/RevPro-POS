import React from 'react'
import { Link } from 'react-router-dom'


function Register() {
  return (
    <div className='register template d-flex justify-content-center align-items-center vh-100 bg-primary'>
    <div className='form_container p-5 rounded bg-white'>
      <form>
        <h3 className='text-center'>Register</h3>
        <div className='mb-2'>
          <label htmlFor="fname">First Name</label>
          <input type="text" placeholder='Enter First Name' className='form-control'/>
        </div>
        <div className='mb-2'>
          <label htmlFor="lname">Last Name</label>
          <input type="text" placeholder='Enter Last Name' className='form-control'/>
        </div>
        <div className='mb-2'>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder='Enter Email' className='form-control'/>
        </div>
        <div className='mb-2'>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder='Enter Password' className='form-control'/>
        </div>
        <div className='d-grid'>
            <button className='btn btn-primary'>Register</button>
          </div>
          <p className='text=end mt-2'>
            Already Registered? <Link to ="/login" className='ms-2'>Login</Link>
          </p>
        
          
      
      </form>
    </div>
  </div>
  )
}

export default Register