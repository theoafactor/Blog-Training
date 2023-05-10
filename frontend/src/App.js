import "bootstrap/dist/css/bootstrap.min.css"
import "./album.css"
import "bootstrap/dist/js/bootstrap.min.js"
import  {BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "./Register"
import Login from "./Login"
import AdminLogin from "./admins/AdminLogin"
import Home from "./Home"
import axios from "axios"

function App(){

  return  <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/login" element={<Login/>}></Route>
                  <Route path="/admin" element={<AdminLogin />}></Route>
                  <Route path="/register" element={<Register/>}></Route>
              </Routes>
          </BrowserRouter>

}

export default App;
