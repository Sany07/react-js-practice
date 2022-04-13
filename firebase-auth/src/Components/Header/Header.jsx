import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth);
    navigate("/login");
  };
  return (
    <Navbar bg="light" expand="lg" className="mb-5">
      <Container>
        <Navbar.Brand>
          <Link to="/">Auth RR </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="px-3" to="/about">
              About
            </Link>
          </Nav>
          <Form className="d-flex">
            <Nav>
              {!user ? (
                <>
                  <Link className="px-3" to="/register">
                    Register
                  </Link>
                  <Link to="/login">Login</Link>
                </>
              ) : (
                <>
                  <Navbar>{user.email}</Navbar>
                  <Button className="ms-5" onClick={handleSignOut}>
                    Sign out
                  </Button>
                </>
              )}
            </Nav>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
