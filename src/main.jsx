import React from 'react';
import ReactDOM from 'react-dom/client'; // Asegúrate de usar 'react-dom/client' en React 18
import './index.css'; // Asegúrate de que este archivo esté importado
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
