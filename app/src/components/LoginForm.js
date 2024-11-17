import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
   <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label style={{ color: 'blue' }}>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label style={{ color: 'blue' }}>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="outline-success" type="submit">Login</Button>
      </Form>
  );
};

export default LoginForm;
