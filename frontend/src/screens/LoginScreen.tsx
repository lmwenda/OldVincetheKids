import React from "react";
import LoginForm from "../components/LoginForm";
import Vincents from "../components/Images/VincentsEgyptArt.jpg";

import './Login/LoginScreen.css';

function LoginScreen(){
    return(
        <div className="login-container">
            <div className="image">
                <img src={Vincents} alt="" />
            </div>

            <div className="form">
                <LoginForm />
            </div>
        </div>
    );
}

export default LoginScreen;