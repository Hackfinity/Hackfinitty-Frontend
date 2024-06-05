/* import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/components/styles/style.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
); */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorBoundary from '../ErrorBoundary';

ReactDOM.render(
  <ErrorBoundary>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorBoundary>,
  document.getElementById('root')
);
