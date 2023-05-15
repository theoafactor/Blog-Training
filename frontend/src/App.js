import "bootstrap/dist/css/bootstrap.min.css"
import "./album.css"
import "bootstrap/dist/js/bootstrap.min.js"
import  {BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "./Register"
import Login from "./Login"
import AdminLogin from "./admins/AdminLogin"
import Home from "./Home"
import axios from "axios"

import { useState } from "react"

function App(){


    //define the global state
    const [currentGlobalState, setGlobalState] = useState({
        is_admin_logged_in: false,
        current_admin: null
    });

    const checkAdminLoggedIn = () => {

    }

    const loginAdmin = (admin) => {

        //update the state
        setGlobalState({
            ...currentGlobalState,
            is_admin_logged_in: true,
            current_admin: admin
        })


    }

  return  <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/login" element={<Login/>}></Route>
                  <Route path="/admin"  element={<AdminLogin loginAdmin={(admin) => loginAdmin(admin)} globalState={currentGlobalState}/>}></Route>
                  <Route path="/register" element={<Register/>}></Route>
              </Routes>
          </BrowserRouter>

}

export default App;
