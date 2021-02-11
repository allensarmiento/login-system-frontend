import { Link, withRouter } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { isLoggedIn } from '../auth/user.auth';

const Navigation = ({ history }) => {
  const signOut = () => {
    const token = sessionStorage.getItem('token');
    if (token) sessionStorage.removeItem('token');

    const user = sessionStorage.getItem('user');
    if (user) sessionStorage.removeItem('user');

    history.push('/signin');
  };

  if (isLoggedIn()) {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Login System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#" onClick={signOut}>Sign Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  } else {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Login System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/signin">
              <Nav.Link as="span">Sign In</Nav.Link>
            </Link>
            <Link to="/signup">
              <Nav.Link as="span">Sign Up</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
};

export default withRouter(Navigation);
