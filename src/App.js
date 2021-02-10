import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import axios from 'axios';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const isLoggedIn = () => {
    const token = sessionStorage.getItem('token');
  
    if (!token) return Promise.resolve(false);
  
    return axios
      .post('http://localhost:5000/auth/signin', {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => response.data)
      .then((user) => {
        if (user && user.id) {
          return true;
        }
        return false;
      })
      .catch((error) => {
        return false;
      });
  };

  useEffect(() => {
    setLoading(true);

    isLoggedIn().then((value) => {
      setLoggedIn(value);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Router>
        <Navigation loggedIn={loggedIn} />
        <Switch>
          <PublicRoute path="/signin" component={Signin} loggedIn={loggedIn} />
          <PublicRoute path="/signup" component={Signup} loggedIn={loggedIn} />
          <PrivateRoute path="/" component={Home} loggedIn={loggedIn} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
