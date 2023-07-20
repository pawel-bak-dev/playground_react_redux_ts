import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
// import AppFN from './AppFn.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App color="blue" />
    {/*<AppFN color="red" />*/}
  </React.StrictMode>
);
