import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import auth from "../../firebase.init";

import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import LoadingSpinner from "../Spinner/LoadingSpinner";

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
  };
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <LoadingSpinner />;
  }
  if (user) {
    return (
      <div>
        <p>Registered User: {console.log(user.user.email)}</p>
      </div>
    );
  }
  return (
    <Container>
      <Row>
        <Col md={6} className="mx-auto">
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter email"
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
