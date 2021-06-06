import React from 'react';
import { Row, Col, ListGroup, Card } from "react-bootstrap";

// Styles
import './Cart/Cart.css';

// Components
import Message from "../components/Message";

function CartScreen(){

    return(
        <div style={{ margin: '3%' }}>
        <Row>
            <Col md={8} style={{ marginLeft: '5%' }} >
                <h1>Shopping Cart</h1>
                <Message variant='info'>
                    Your Cart is currently empty.
                </Message>
            </Col>

            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Subtotal (0) items</h2>
                            <p style={{ fontWeight: 'bold', fontSize: '1.6rem' }} >
                                £0
                            </p>
                        </ListGroup.Item>
                    </ListGroup>

                    <ListGroup.Item>
                        <button
                            className='checkout'
                        >
                            Proceed To Checkout
                        </button>
                    </ListGroup.Item>


                </Card>
            </Col>
        </Row>
        </div>
    );
}

export default CartScreen;