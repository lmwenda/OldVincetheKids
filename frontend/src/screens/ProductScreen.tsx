import React from 'react';
import { Col, Row } from "react-bootstrap";

import Product from "../components/Product";
import products from "./Products/products";

import './Products/Products.css';

function ProductScreen(){
    return(
        <div>
            <Row>
                {products.map(product => (
                    <Col id="image" key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col> 
                ))}
            </Row>
        </div>
    );
}

export default ProductScreen;