import { useState } from 'react';
import { withRouter } from 'react-router-dom';
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
