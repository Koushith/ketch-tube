import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks';

export const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { isLoggedIn } = useAuth();
  console.log('logged in?', isLoggedIn);
  console.log('location from req', location);
  return <>{isLoggedIn ? children : <Navigate to='/login' state={{ from: location }} replace />}</>;
};
