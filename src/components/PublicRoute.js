import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, loggedIn, ...rest }) => {
  return (
    <Route {...rest} render={(props) => {
      return loggedIn ? <Redirect to="/" /> : <Component {...props} />;
    }} />
  );
};

export default PublicRoute;
