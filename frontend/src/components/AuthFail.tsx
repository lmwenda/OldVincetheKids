import React, { useState } from "react";
import { Alert } from "react-bootstrap";

interface IAuthValidation{
    error: string | undefined
}

function AuthFail({ error }: IAuthValidation): JSX.Element {
    const [show, setShow] = useState<boolean>(true);

    if(error !== ""){
        if (show) {
            return (
            <Alert variant="danger" 
            onClose={() => {
                setShow(false);
            }}>
                <Alert.Heading>
                    {error}
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

export default AuthFail;