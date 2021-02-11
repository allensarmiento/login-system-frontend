import { useState, useEffect } from 'react';
import { getUserData } from '../auth/user.auth';

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserData()
      .then((userData) => setUser(userData));
  }, []);

  return (
    <div>{user && user.name}, you are logged in!</div>
  );
};

export default Home;
