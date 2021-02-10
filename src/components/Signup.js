import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const Signup = ({ history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignup = (event) => {
    event.preventDefault();

    axios
      .post('http://localhost:5000/auth/signup', { name, email, password })
      .then((response) => response.data)
      .then((user) => {
        if (user.id) {
          history.push('/');
        }
      });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit" onClick={onSignup}>Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(Signup);
