// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'redux/hooks';

export const PrivateRoute = ({
  component: Component,
  redirectTo = '/',
}) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};