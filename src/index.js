import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/global.css';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from '../src/routes/routes'
import { Analytics } from '@vercel/analytics/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainRoutes />
      <Analytics />
    </BrowserRouter>
  </React.StrictMode>
);
