import React from 'react';
import { LinkContainer } from "react-router-bootstrap";
import { NavDropdown, Navbar, Nav } from "react-bootstrap";

interface IHeaderProps{
    name: React.ReactChildren | React.ReactChild | null,
    title: React.ReactChildren | React.ReactChild | null,
}

function Header({ title, name }: IHeaderProps){
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

            <Navbar.Brand href="#home">{ title }</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

                <Nav className="mr-auto">

                <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>


                <LinkContainer to="/Shop">
                    <Nav.Link>Shop</Nav.Link>
                </LinkContainer>

                <Nav.Link>Gallery</Nav.Link>

                <NavDropdown title="Extras" id="basic-nav-dropdown">

                    <LinkContainer to={`/Shop/Cart`}>
                        <NavDropdown.Item>Cart(0)</NavDropdown.Item>
                    </LinkContainer>

                    <LinkContainer to="/User/Settings">
                        <NavDropdown.Item>Settings</NavDropdown.Item>
                    </LinkContainer>

                    <NavDropdown.Divider />
                    
                    <LinkContainer to="/User/Signout">
                        <NavDropdown.Item>Sign Out</NavDropdown.Item>
                    </LinkContainer>

                </NavDropdown>

                </Nav>

                <Nav>
                    <Nav.Link>
                        Welcome back <span style={{fontWeight: 'bold', color: '#fff'}}>{name}</span> 
                    </Nav.Link>
                </Nav>

            </Navbar.Collapse>

        </Navbar>
    );
}

export default Header;