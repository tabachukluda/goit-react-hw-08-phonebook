import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { StyledNavLink } from './Navigation.styled'; 

function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <StyledNavLink to="/" exact={true.toString()}>
        Home
      </StyledNavLink>

      {isLoggedIn && (
        <StyledNavLink to="/contacts" exact={true.toString()}>
          Contacts
        </StyledNavLink>
      )}
    </nav>
  );
}

export default Navigation;