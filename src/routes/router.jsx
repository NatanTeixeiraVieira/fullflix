import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import RequireAuth from '../contexts/Auth/RequireAuth';
import Login from '../pages/Login';
import Confirmation from '../pages/Signup/Confirmation';
import Plans from '../pages/Signup/Plans';
import Register from '../pages/Signup/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: (
          <RequireAuth>
            <Home />
          </RequireAuth>
        ),
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Navigate to="/signup/plans" />,
      },
      {
        path: '/signup/plans',
        element: <Plans />,
      },
      {
        path: '/signup/register',
        element: <Register />,
      },
      {
        path: '/signup/confirmation',
        element: <Confirmation />,
      },
    ],
  },
]);

export default router;
