import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ModalContextProvider } from './contexts/Modal/ModalContext';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ModalContextProvider>
      <App />
    </ModalContextProvider>
  </React.StrictMode>
);
