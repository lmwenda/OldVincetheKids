import React from 'react'
import { Alert } from 'react-bootstrap';

interface IMessage{
    variant: string,
    children: React.ReactChildren | React.ReactChild | null
}

function Message({ variant, children }: IMessage) {
    return (
        <Alert variant={variant} style={{ width: '50%' }}>
            {children}
        </Alert>
    )
}

export default Message;