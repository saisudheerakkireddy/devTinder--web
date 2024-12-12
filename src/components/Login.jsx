import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';


const Login = () => {
    const [emailId, setEmailId] = useState('Elon@gmail.com');
    const [password, setPassword]= useState('Elon@123');
    const dispatch = useDispatch(); 
    const navigate = useNavigate();

const handleLogin = async () => {

  try{ 
    
    const res = await axios.post( BASE_URL + "login", {

        emailId,
        password

    },{withCredentials: true});

 
    dispatch(addUser(res.data));
    return navigate("/"); 
    


}catch(err){
        console.error(err);
    }

};


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
     
      <div className="card-actions">
        <button className="btn btn-primary" onClick={handleLogin}>Login</button>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Login;


