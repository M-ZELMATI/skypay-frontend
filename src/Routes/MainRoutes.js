import React, { useState } from 'react'
import Login from '../Auth/Login'
import Transaction from '../Transaction/Transaction'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from 'react-router-dom';
import { isExpired } from 'react-jwt';
import Register from '../Auth/Register';
export default function MainRoutes() {
    const [isAuthenticated,setisAuthenticated]=useState(isExpired(localStorage.getItem('access_token'))?false:true)

    return (
    <Router>
        <Routes>
            <Route path="/login" element={ !isAuthenticated && <Login onLoginSuccess={(value)=>setisAuthenticated(value)} />} />
            <Route path="/register" element={ !isAuthenticated && <Register />} />
            
            <Route path="/transaction" element={isAuthenticated && <Transaction lougout={()=>{   
                    setisAuthenticated(false)
                }} />} />
        </Routes>
                       
    </Router>
  )
}
