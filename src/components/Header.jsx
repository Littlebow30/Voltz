import React from "react";
import { Route, Routes, useNavigate} from "react-router-dom";

export default function Header() {
   const navigate = useNavigate(); 
    
   const navigateToForm = () => {
        navigate('/SignUpForm');
   };

    return  <header>
            Voltz
            <button onClick={navigateToForm}className="sign-in-btn">Sign In</button>
            </header>;
            
};