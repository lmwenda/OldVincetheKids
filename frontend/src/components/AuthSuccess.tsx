import React, { useState } from "react";
import { Alert } from "react-bootstrap";

interface IAuthSuccess{
    message: string | undefined
}            

function AuthSuccess({ message }: IAuthSuccess): JSX.Element {
    const [show, setShow] = useState<boolean>(true);

    if(message !== ""){
        if (show) {
            return (
            <Alert variant="success" 
            onClose={() => {
                setShow(false);
            }}>
                <Alert.Heading>
                    {message}
                </Alert.Heading>
            </Alert>
            );
        }
    }

    return(
        <div>

        </div>
    );
}

export default AuthSuccess;