import { Link } from './AuthNav.styled';

function AuthNav() {
  return (
    <nav>
      <Link to="/register" exact>
        Sign up
      </Link>
      <Link to="/login" exact>
        Log in
      </Link>
    </nav>
  );
}
export default AuthNav;