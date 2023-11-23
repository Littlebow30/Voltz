import React from "react";
import { Route, Routes, useNavigate} from "react-router-dom";


export default function Header() {
   const navigate = useNavigate();
   
   const navigateToForm = () => {
    console.log("navigateToLogin");
     navigate('/LoginPage');
   };
   const navigateToSignIn = () => {
     navigate('/SignUpForm') 
   };
    return  <header>
            Voltz
            <button onClick={navigateToSignIn}className="sign-in-btn">Create Account</button><br/>
            <button onClick={navigateToForm} className="sign-in-btn">Login!</button>
            </header>;
            
};