import React from 'react'
import { Toast } from 'react-bootstrap';

import Image from "./Images/Image1.jpg";

interface IToast{
    children: React.ReactChildren | React.ReactChild | null
}

function ToastMessage({ children }: IToast) {
    return (
        <Toast>
            <Toast.Header>
                <img src={Image} className="rounded mr-2" alt="" />
                <strong className="mr-auto">VincetheKid</strong>
                <small>Now</small>
            </Toast.Header>
            <Toast.Body>{children}</Toast.Body>
        </Toast>
    )
}

export default ToastMessage;