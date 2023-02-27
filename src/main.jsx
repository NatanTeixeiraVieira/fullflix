import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { ModalContextProvider } from './contexts/Modal/ModalContext';
import router from './routes/router';
import { HeaderContextProvider } from './contexts/Header/HeaderContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeaderContextProvider>
      <ModalContextProvider>
        <RouterProvider router={router} />
      </ModalContextProvider>
    </HeaderContextProvider>
  </React.StrictMode>
);
