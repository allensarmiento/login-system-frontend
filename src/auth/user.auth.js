import axios from 'axios';

export const signupUser = ({ name, email, password }) => {
  return axios
    .post('http://localhost:4000/auth/signup', { name, email, password })
    .then((response) => response.data)
    .then((user) => user);
};

export const signinUser = ({ email, password }) => {
  return axios
    .post('http://localhost:4000/auth/signin', { email, password })
    .then((response) => response.data)
    .then((data) => data);
};

export const isLoggedIn = () => {
  const token = sessionStorage.getItem('token');

  if (token) {
    return true;
  }
  return false;
};

export const getUserData = () => {
  const token = sessionStorage.getItem('token');

  if (!token) {
    return Promise.resolve(false);
  }

  return axios
    .get(`http://localhost:4000/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
};
