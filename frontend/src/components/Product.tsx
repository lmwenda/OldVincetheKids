import React from 'react';
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// Styles
import './Styles/Product.css';

interface ProductTypes{
    _id: number;
    title: string;
    description: string;
    image: string;
    price: number; 
    countInStock: number;
}

interface IProduct{
    product: ProductTypes
}

function Product({ product }: IProduct){
    return(
        <Card id="product" className="my-4 p-3 rounded">
            <Link to={`/item/${product._id}`}> 
                <Card.Img id="images" src={product.image} />
            </Link>

            <Card.Body>
                <Link to={`/item/${product._id}`}>
                    <Card.Title>
                        <strong id="title" style={{color: '#000', textDecoration: 'none'}}>
                            {product.title}
                        </strong>
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