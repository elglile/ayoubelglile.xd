import { Route, Routes } from "react-router-dom"
import './App.css'
import { Navbar } from './Pages/Navbar';
import Fct from "./Pages/Home";
import { useEffect, useState } from "react";
import Loading from "./Pages/Loading";
import AdminLogin from "./Pages/Admin/Login";
import Admin from "./Pages/Admin/Admin";
// import { Suspense } from "react";


function App() {
  const [isloading, setisloading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setisloading(false); 
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  
  return isloading ?(
  <Loading/>
):(
    <Routes>
      <Route path="/" element={<>
          <Navbar />
          <Fct />
      </>} />
      <Route path="/AdminLogin" element={<AdminLogin />} />
      <Route path="/Admin" element={<Admin />} />

    </Routes>
  )
}
export default App
