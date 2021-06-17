import React from 'react';
import axios from "axios";
import jwt from "jsonwebtoken";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { NavDropdown, Button, Navbar, Nav } from "react-bootstrap";

interface IUser{
    id?: string,
    username?: string
}

// interface IHeaderProps{
//     title: React.ReactChildren | React.ReactChild | null,
// }

function Header(){
    const token: any = localStorage.getItem("token");

    const [ user, setUser] = React.useState<IUser>({ id: '', username: ''})

    React.useEffect(() => {
        if(token){
            const _id: any = jwt.decode(token);
            setUser({ id: _id, username: '' });

            axios.get(`http://localhost:5000/api/user/user/${user.id}`)
                .then(response => {
                    setUser({ username: response.data.username })
                })
                .catch(err => console.log(err));
        }else{
            return;
        }
    }, [setUser, token, user.id])

    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

            <Navbar.Brand href="#home">VincetheKid</Navbar.Brand>
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

                        { 
                            user.id ? (
                                <div>
                                    <LinkContainer to="/user/settings">
                                        <NavDropdown.Item>Settings</NavDropdown.Item>
                                    </LinkContainer>

                                    <NavDropdown.Divider />
                                    
                                    <LinkContainer to="/user/signout">
                                        <NavDropdown.Item>Sign Out</NavDropdown.Item>
                                    </LinkContainer>
                                </div>
                            ) : null
                        }

                    </NavDropdown>

                </Nav>

                {
                    user.id ? (
                        <Nav>
                            <Nav.Link>
                                Welcome back 
                                <span style={{fontWeight: 'bold', color: '#fff'}}>
                                    {user.username}
                                </span> 
                            </Nav.Link>
                        </Nav>
                    ) : (
                        <Nav>
                            <Link to="/login">
                                <Button variant="primary">Login</Button>
                            </Link>
                        </Nav>
                    )
                }

            </Navbar.Collapse>

        </Navbar>
    );
}

export default Header;