import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App/App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <App />
      <Toaster position="top-right" />
    </BrowserRouter>
  </React.StrictMode>
);
