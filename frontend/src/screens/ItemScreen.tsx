import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup } from "react-bootstrap";

// Styles
import './Item/Item.css';

// Components && Resources
import products from "./Products/products";

// type IProduct = {
//     _id: number,
//     title: string,
//     description: string,
//     image: string,
//     price: string,
//     countInStock: number
// }

function Item(props: any){
    const product: any = products.find((p) => p._id === props.match.params.id);

    function AddToCart(){
        
    }

    return(
        <div style={{marginLeft: '5%'}}>
            <Link to="/Shop" className="btn btn-light my-3">Go Back</Link>
            <Row>
                <Col md={6} lg={6}>
                    <Image src={product.image} alt={""} id="picture" fluid />
                </Col>

                <Col id="passage" md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>

                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h3>{product.title}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            {product.description}
                        </ListGroup.Item>

                        <ListGroup.Item style={{fontWeight: 'bold'}}>
                            <p style={product.countInStock <= 5 ? {color: 'red'} : {}}>
                                Status: 
                                {product.countInStock > 0 ? ` There is only ${product.countInStock} left in stock.` : 'Out of Stock'}
                            </p>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h3>Price: {product.price}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <button className="cart" onClick={AddToCart}><i className="fas fa-shopping-cart"></i> Add to Cart</button>
                            <button className="wishlist">Add to Wishlist</button>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
    </div>
    );
}

export default Item;
