import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { signupUser } from '../auth/user.auth';

const Signup = ({ history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignup = (event) => {
    event.preventDefault();
    
    signupUser({ name, email, password }).then((user) => {
      if (user.id) history.push('/');
    })
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto' }}>
      <h2>Register</h2>
      <Form>
        <Form.Group controlId="formName">
          <Form.Control
            type="text"
            placeholder="Name"
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Control
            type="email"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>
        <Button onClick={onSignup} variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default withRouter(Signup);
