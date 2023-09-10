import propTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../redux/auth';

function PrivateRoute({ children, redirectTo = '/' }) {
  const getIsAuthenticated = useSelector(state => getIsAuthenticated(state));

  return getIsAuthenticated ? children : <Navigate to={redirectTo} />;
}

PrivateRoute.prototype = {
  children: propTypes.element,
  redirectTo: propTypes.string,
};

export default PrivateRoute;