import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { signinUser } from '../auth/user.auth';

const Signin = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const saveTokenInSession = (token) => {
    sessionStorage.setItem('token', token);
  };

  const saveUserId = (id) => {
    sessionStorage.setItem('user', id);
  };

  const onSignIn = (event) => {
    event.preventDefault();

    signinUser({ email, password }).then((data) => {
      const { success, user, token } = data;
      if (success === 'true' && user.id) {
        saveTokenInSession(token);
        saveUserId(user.id);
        history.push('/');
      }
    });
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto' }}>
      <h2>Sign In</h2>
      <Form>
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
        <Button onClick={onSignIn} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default withRouter(Signin);
