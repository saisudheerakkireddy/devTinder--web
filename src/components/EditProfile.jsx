import React from 'react';
import { useState } from 'react';

const EditProfile = () => {


 
  return (
    <div className='flex justify-center'>
    <div className="card bg-base-300 w-96 shadow-xl ">
    <figure className="px-10 pt-10">
    
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title flex justify-center">Login</h2>

      <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Email ID</span>
  </div>
  <input type="text"
        value={emailId}
  placeholder="" 
  className="input input-bordered w-full max-w-xs" 
  onChange={(e) => setEmailId(e.target.value)} //binding state variable to input component
  />
  <div className="label">
    
  </div>
</label>

<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Password</span>
  </div>
  <input type="text" 
        value={password}
  placeholder="" 
  className="input input-bordered w-full max-w-xs" 
  onChange={(e) => setPassword(e.target.value)}
  />
  <div className="label">
    
  </div>
</label>
     <p className='bg-red-600'> {error} </p>
      <div className="card-actions">
        <button className="btn btn-primary" onClick={handleLogin}>Login</button>
      </div>
    </div>
  </div>
  </div>
  )
}

export default EditProfile