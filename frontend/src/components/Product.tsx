import React from 'react';
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// Styles
import './Styles/Product.css';

function Product({ product }: any){
    return(
        <Card id="product" className="my-4 p-3 rounded">
            <Link to={`/item/${product._id}`}> 
                <Card.Img id="images" src={product.image} />
            </Link>

            <Card.Body>
            <Link to={`/item/${product._id}`}>
                <Card.Title>
                    <strong id="title" style={{color: '#000'}}>{product.title}</strong>
                </Card.Title>
            </Link>

            <Card.Text as="h3">
                {product.price}
            </Card.Text>

            </Card.Body>
        </Card>
    );
}

export default Product;