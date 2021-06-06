import React from "react";

import { Container, Row, Col } from "react-bootstrap";

function Footer(props: any){
    return(
        <footer>
            <Container>
                <Row>
                   <Col className="text-center py-3 bottom">Copyright &copy;{props.title}</Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;