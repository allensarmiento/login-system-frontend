import { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
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
