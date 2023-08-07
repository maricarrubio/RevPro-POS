import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Login() {
  return (
    <>
      <div className='login template d-flex justify-content-center align-items-center vh-100 bg-primary'>
        <div className='form_container p-5 rounded bg-white'>
          <form>
            <h3 className='text-center'> Sign In</h3>
            <div className='mb-2'>
              <label htmlFor="email">Employee/Admin ID</label>
              <input type="ea_id" placeholder='Enter Employee/Admin ID' className='form-control'/>
            </div>
            <div className='mb-2'>
              <label htmlFor="password">Password</label>
              <input type="password" placeholder='Enter Password' className='form-control'/>
            </div>
            <div className='mb-2'>
              <input type="checkbox" className='custom-control custom-check' id='check' />
              <label htmlFor="check" className='custom-input-label ms-2'>
                Remember me
              </label>
              <div className='d-grid'>
                <button className='btn btn-primary'>Sign in</button>
              </div>
              <p className='text=end mt-2'>
                Forgot <a href="">Password?</a>
                <Link to ="/" className='ms-2'>Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login