import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { SignupContextProvider } from './contexts/Signup/SignupContext';
import { ModalContextProvider } from './contexts/Modal/ModalContext';
import router from './routes/router';
import { AuthContextProvider } from './contexts/Auth/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <SignupContextProvider>
        <ModalContextProvider>
          <RouterProvider router={router} />
        </ModalContextProvider>
      </SignupContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
