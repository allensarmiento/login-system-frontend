import { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

const Signin = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const saveTokenInSession = (token) => {
    sessionStorage.setItem('token', token);
  };

  const onSignIn = (event) => {
    event.preventDefault();

    axios
      .post('http://localhost:5000/auth/signin', { email, password })
      .then((response) => response.data)
      .then((data) => {
        const { success, user, token } = data;
        if (success === 'true' && user.id) {
          saveTokenInSession(token);
          console.log('pushing history')
          history.push('/');
        }
      });
  };

  return (
    <div>
      <form>
        <input
          type="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit" onClick={onSignIn}>Sign In</button>
      </form>
      <Link to="/signup"><button>Register</button></Link>
    </div>
  );
};

export default withRouter(Signin);
