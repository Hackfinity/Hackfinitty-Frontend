import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/components/styles/style.css';
import store from "./components/Store/store";
import { Provider } from "react-redux";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
); 