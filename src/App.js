import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <PublicRoute path="/signin" component={Signin} />
          <PublicRoute path="/signup" component={Signup} />
          <PrivateRoute path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
