import { createBrowserRouter, Navigate } from 'react-router-dom';

import App from '../App';
import RequireAuth from '../contexts/Auth/RequireAuth';
import Account from '../pages/Account';
import Error404 from '../pages/Error404';
import Home from '../pages/Home';
import Login from '../pages/Login';
import MyList from '../pages/MyList';
import Search from '../pages/Search';
import Confirmation from '../pages/Signup/Confirmation';
import Plans from '../pages/Signup/Plans';
import Register from '../pages/Signup/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error404 />,
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
        path: '/account',
        element: (
          <RequireAuth>
            <Account />
          </RequireAuth>
        ),
      },
      {
        path: '/mylist',
        element: (
          <RequireAuth>
            <MyList />
          </RequireAuth>
        ),
      },
      {
        path: '/search',
        element: (
          <RequireAuth>
            <Search />
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
