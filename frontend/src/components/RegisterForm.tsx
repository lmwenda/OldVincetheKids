import React from "react";
import { Link, useHistory } from "react-router-dom";
import axios, { AxiosError } from "axios";

import './Styles/RegisterForm.css';
import AuthSuccess from "./AuthSuccess";
import AuthFail from "./AuthFail";

interface ResponseState{
    success?: string,
    error?: string
}

function RegisterForm(props: any){

    /* eslint-disable @typescript-eslint/no-unused-vars */
    const history = useHistory();

    const [ email, setEmail ] = React.useState<string>("");
    const [ username, setUsername ] = React.useState<string>("");
    const [ password, setPassword ] = React.useState<string>("");
    const [ requestResponse, setRequestResponse ] = React.useState<ResponseState>({ success: '', error: '' })

    const registerUser = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();

        // Backend User Post Register
        axios.post("http://localhost:5000/api/users/register", {
            email: email,
            username: username,
            password: password
        })
            .then(async response => {
                console.log(response);

                setRequestResponse({ success: 'Successfully Created an Account.' });
                await new Promise(resolve => setTimeout(resolve, 3000));
                setRequestResponse({ success: "", error: "" });

                history.push('/login');
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
        <div className="register-form">

            <div id="title">
                <h3 style={{ textAlign: 'center' }}>Register an Account</h3>
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

                <input id="username" placeholder="Username:" type="text" onChange={
                    (e) => setUsername(e.target.value)
                } />

                <input id="password" placeholder="Password: " type="password" onChange={
                    (e) => setPassword(e.target.value)
                } />

                <input id="submit" type="submit" value="Register Account" onClick={registerUser} />
                <Link to="/login">Already have an Account? Login.</Link>

            </form>
        </div>
    );
}

export default RegisterForm;