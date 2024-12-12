import Body from "./Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <>
     <BrowserRouter basename="/">
     <Routes>

     <Route  path = "/" element = {<Body/>}>

     <Route  path = "/login" element = {<>Login Page</>}/>
     <Route  path = "/test" element = {<>Test Page</>}/>

     </Route>
     
     </Routes>
     
     
     </BrowserRouter>
  
    </>
      
    
     
  )
}

export default App;
