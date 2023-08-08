import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Register() {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, id, password, confirmPassword);
  };

  return (
    <div className='register template d-flex justify-content-center align-items-center vh-100 bg-primary'>
    <div className='form_container p-5 rounded bg-white'>
      <form onSubmit={handleSubmit}>
        <h3 className='text-center'>Register</h3>
        <div className='mb-2'>
          <label htmlFor="ename">Employee/ Admin Name</label>
          <input type="text" placeholder='Enter Employee/ Admin Name' className='form-control' value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div className='mb-2'>
          <label htmlFor="eID">Employee/ Admin ID</label>
          <input type="text" placeholder='Enter Employee/ Admin ID' className='form-control' value={id} onChange={(event) => setId(event.target.value)} />
        </div>
        <div className='mb-2'>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder='Enter Password' className='form-control' value={password} onChange={(event) => setPassword(event.target.value)}/>
        </div>
        <div className='mb-2'>
          <label htmlFor="password"> Confirm Password</label>
          <input type="password" placeholder='Enter Password' className='form-control' value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}/>
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
};

export default Register