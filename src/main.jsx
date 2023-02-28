import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { ModalContextProvider } from './contexts/Modal/ModalContext';
import router from './routes/router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ModalContextProvider>
      <RouterProvider router={router} />
    </ModalContextProvider>
  </React.StrictMode>
);
