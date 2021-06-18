import React from "react";
import { Link } from "react-router-dom";
import axios, { AxiosError } from "axios";

import './Styles/LoginForm.css';
import AuthSuccess from "./AuthSuccess";
import AuthFail from "./AuthFail";

interface ResponseState{
    success?: string,
    error?: string
}

function LoginForm(props: any){

    /* eslint-disable @typescript-eslint/no-unused-vars */
    const [ email, setEmail ] = React.useState<string>("");
    const [ password, setPassword ] = React.useState<string>("");
    const [ requestResponse, setRequestResponse ] = React.useState<ResponseState>({ success: '', error: '' })

    const loginUser = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();

        // Backend User Post Register
        axios.post("http://localhost:5000/api/users/login", {
            email: email,
            password: password
        })
            .then(async response => {
                console.log(response);

                localStorage.setItem("token", response.headers["verification-token"]);

                setRequestResponse({ success: 'Successfully Signed in.' });
                await new Promise(resolve => setTimeout(resolve, 3000));
                setRequestResponse({ success: "", error: "" });

                props.history.push('/login');
            })
            .catch(async(err: AxiosError) => {
                try{
                    setRequestResponse({ success: "", error: err.request.response });
                    console.log(err.request.response);
    
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    setRequestResponse({ success: "", error: "" });
                } catch(e){
                    console.error(e);
                    return e;
                }
            });        
    }

    return(
        <div className="login-form">

            <div id="title">
                <h3 style={{ textAlign: 'center' }}>Login</h3>
            </div>

            <div className="validation-successful">
                {
                    requestResponse.success !== "" ? (
                        <AuthSuccess message={requestResponse.success} />
                    ) : null
                }
            </div>

            <div className="validation-errors">
                {
                    requestResponse.error !== "" ? (
                        <AuthFail error={requestResponse.error} />
                    ) : null
                }
            </div>

            <form>
                <input id="email" placeholder="Email:" type="text" onChange={
                    (e) => setEmail(e.target.value)
                } />

                <input id="password" placeholder="Password: " type="password" onChange={
                    (e) => setPassword(e.target.value)
                } />

                <input id="submit" type="submit" value="Login" onClick={loginUser} />
                <Link to="/register">Don't have an Account? Create an Account.</Link>

            </form>
        </div>
    );
}

export default LoginForm;