import { Provider } from "react-redux";
import Body from "../src/components/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import appStore from "./utils/appStore";
import Feed from "../src/components/Feed";
import Login from "../src/components/Login";
import Profile from "../src/components/Profile";

function App() {

  return (
    <>
    <Provider store = {appStore}> 
     <BrowserRouter basename="/">
     <Routes>

     <Route  path = "/" element = {<Body/>}>
     <Route  path ="/" element ={<Feed/>}/>
     <Route  path = "/login" element = {<Login/>}/>
     <Route  path = "/profile" element = {<Profile/>}/>

     </Route>
     
     </Routes>
     
     
     </BrowserRouter>
     </Provider>
  
    </>
      
    
     
  );
}

export default App;
