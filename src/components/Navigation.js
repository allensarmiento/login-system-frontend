import { Link, withRouter } from 'react-router-dom';

const Navigation = ({ loggedIn, history }) => {
  const signOut = () => {
    const token = sessionStorage.getItem('token');

    if (token) {
      sessionStorage.removeItem('token');
    }

    history.push('/signin');
  };

  if (loggedIn) {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button onClick={signOut}>
          Sign Out
        </button>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Link to="/signin">
          <button>
            Sign In
          </button>
        </Link>
        <Link to="/signup">
          <button>
            Sign Up
          </button>
        </Link>
      </nav>
    );
  }
};

export default withRouter(Navigation);
