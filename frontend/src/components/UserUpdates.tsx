import React from 'react';
import axios from "axios";
import jwt from "jsonwebtoken";
import { Form, Button } from "react-bootstrap";

// Components

import AuthFail from './AuthFail';
import AuthSuccess from "./AuthSuccess";

function UserUpdates() {
    const [ errorMsg, setErrorMsg ] = React.useState<string>("");
    const [ username, setUsername ] = React.useState<string>("");
    const [ password, setPassword ] = React.useState<string>("");
    const [ welcomeMsg, setWelcomeMsg ] = React.useState<string>("");


    // STORAGE

    const token: any = localStorage.getItem('token');
    const _id: any = jwt.decode(token);

    // UPDATE ACCOUNT

    const updateAccount = (e: any) => {
        e.preventDefault();

        const id: string = _id._id;
        
        axios.put(`http://localhost:5000/api/users/me/${id}`, {
            username: username,
            password: password
        })
            .then(() => setWelcomeMsg("Successfully Update Account"))
            .catch(async (err) => {
                try{
                    if (err) {
            
                        setErrorMsg(err.request.response);
                        await new Promise((resolve) => setTimeout(resolve, 3000));
                        setErrorMsg("");
            
                    } else {
                        return false;
                    }
                }catch(err){
                    console.log(err);
                }
            });
    }

    return (
        <div style={{ margin: '100px' }}>
            <h2 style={{textAlign: 'center'}}>Update Account</h2>
            <br />

            <div className="validation-pass">
                {welcomeMsg !== "" ? (
                    <AuthSuccess message={welcomeMsg} />
                ) : null}
            </div>

            <div className="validation-errors">
                {errorMsg !== "" ? (
                    <AuthFail error={errorMsg} />
                ) : null}
            </div>


            <br />

            <Form>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control id="input" type="text"
                    onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control id="input" type="password"
                    onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Button onClick={updateAccount} variant="primary" type="submit">
                    Update Account
                </Button>
            </Form>
        </div>
    )
}

export default UserUpdates;