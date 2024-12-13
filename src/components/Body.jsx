import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import Login from './Login'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'



const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);
 


const fetchUser = async() => {
try{
  const res = await axios.get(BASE_URL + "profile/view",
    {withCredentials:true});

    dispatch(addUser(res.data))
    // return navigate("")


}catch(err){
  if(err.status === 401 || 400){

     return navigate("/login")

  }
  console.error(err);

}
};

useEffect(() => {

  if(!userData){

    fetchUser(); 
  }



},[])



  return (
    <div> 

<NavBar/>
<Outlet/>
<Footer/>



</div>
  )
 

 
} 



export default Body