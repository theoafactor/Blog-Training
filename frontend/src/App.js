import "bootstrap/dist/css/bootstrap.min.css"
import "./album.css"
import "bootstrap/dist/js/bootstrap.min.js"
import  {BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "./Register"
import Login from "./Login"
import AdminLogin from "./admins/AdminLogin"
import Home from "./Home"
import AdminHome from "./admins/Adminhome"
import axios from "axios"

import { useNavigate } from "react-router-dom"

import { useState, useEffect } from "react"

function App(){



    //define the global state
    const [currentGlobalState, setGlobalState] = useState({
        is_admin_logged_in: checkCurrentAdminLoggedIn(),
        current_admin: getCurrentAdmin()
    });


    function checkCurrentAdminLoggedIn(){
        //check for session token returned from the backend

        return false;
    }

    function getCurrentAdmin(){
        //check current token and use that token to get current user

        return null
    }



    // const navigate = useNavigate()

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


    const globalLogoutAdmin = () => {
        //update the state of the application
        // setGlobalState({
        //     is_admin_logged_in: false,
        //     current_admin: null
        // })

        // setGlobalState({
        //     is_admin_logged_in: false
        // })


    }

    useEffect(() => {

        console.log(currentGlobalState)
        
        // if(currentGlobalState.is_admin_logged_in === false){
        //       console.log("logged out")
        // } 

    }, [currentGlobalState])

   
  return  <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/login" element={<Login/>}></Route>
                  <Route path="/admin"  element={<AdminLogin loginAdmin={(admin) => loginAdmin(admin)} globalState={currentGlobalState}/>}></Route>
                  <Route path="/register" element={<Register/>}></Route>
                  <Route path="/admin/adminhome" element={<AdminHome current_admin="testadmin" logout_admin={globalLogoutAdmin} />}></Route>
              </Routes>
          </BrowserRouter>

}

export default App;
