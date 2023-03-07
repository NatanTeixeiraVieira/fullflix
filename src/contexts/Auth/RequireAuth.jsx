import { Navigate } from 'react-router-dom';

export default function RequireAuth({ children }) {
  const userIsLogged = localStorage.getItem('isLogged');
  return userIsLogged ? children : <Navigate to="/login" />;
}
