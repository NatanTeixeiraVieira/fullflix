import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { SignupContextProvider } from './contexts/Signup/SignupContext';
import { ModalContextProvider } from './contexts/Modal/ModalContext';
import { AuthContextProvider } from './contexts/Auth/AuthContext';
import { SearchContextProvider } from './contexts/Search/SearchContext';
import router from './routes/router';
import { RequestMoviesContextProvider } from './contexts/RequestMoviesContext/RequestMoviesContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <SignupContextProvider>
        <RequestMoviesContextProvider>
          <SearchContextProvider>
            <ModalContextProvider>
              <RouterProvider router={router} />
            </ModalContextProvider>
          </SearchContextProvider>
        </RequestMoviesContextProvider>
      </SignupContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
