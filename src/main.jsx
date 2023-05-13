import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';

import { AuthContextProvider } from './contexts/Auth/AuthContext';
import { ModalContextProvider } from './contexts/Modal/ModalContext';
import { RequestMoviesContextProvider } from './contexts/RequestMovies/RequestMoviesContext';
import { SearchContextProvider } from './contexts/Search/SearchContext';
import { SignupContextProvider } from './contexts/Signup/SignupContext';

import router from './routes/router';


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
