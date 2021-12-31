import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (

        <Navbar sticky="top" bg="dark" variant="dark"  collapseOnSelect expand="lg">
          <Container>
            <Navbar.Brand href="/home" className="text-warning">Health Care</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/departments">Departments</Nav.Link>
              <Nav.Link as={Link} to="/about">About Us</Nav.Link>
          {user?.displayName ?
           <Button onClick={logOut} variant="warning">Logout</Button> :
            <Nav.Link as={Link} to="/Login">Login</Nav.Link>}
              <Navbar.Text>
             Signed in as: <a href="#login">{user?.displayName}</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>

  );
};

export default Header;
