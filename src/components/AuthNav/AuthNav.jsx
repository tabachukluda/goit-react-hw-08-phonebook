import { Link } from './AuthNav.styled';

function AuthNav() {
  return (
    <nav>
      <Link to="/register">Sign up</Link>
      <Link to="/login">Log in</Link>
    </nav>
  );
}

export default AuthNav;