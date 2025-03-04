import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Views/App';
import reportWebVitals from './core/reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
