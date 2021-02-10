import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => {
  return (
    <Route {...rest} render={(props) => {
      return loggedIn ? <Component {...props} /> : <Redirect to="/signin" />;
    }} />
  );
};

export default PrivateRoute;
