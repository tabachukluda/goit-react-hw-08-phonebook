import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsAuthenticated } from '../redux/auth';

function PublicRoute({ children, restricted = false, redirectTo = '/' }) {
  const getIsAuthenticated = useSelector(state => getIsAuthenticated(state));
  const shouldRedirect = getIsAuthenticated && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
}

PublicRoute.prototype = {
  children: propTypes.element,
  restricted: propTypes.bool,
  redirectTo: propTypes.string,
};

export default PublicRoute;