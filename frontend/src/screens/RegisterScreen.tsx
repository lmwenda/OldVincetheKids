import React from "react";
import RegisterForm from "../components/RegisterForm";
import Vincents from "../components/Images/Vincents.jpg";

import './Register/RegisterScreen.css';

function RegisterScreen(){
    return(
        <div className="register-container">
            <div className="image">
                <img src={Vincents} alt="" />
            </div>

            <div className="form">
                <RegisterForm />
            </div>
        </div>
    );
}

export default RegisterScreen;