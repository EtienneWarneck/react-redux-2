import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import "bootstrap/dist/css/bootstrap.min.css";
import configureStore from './redux/configureStore';
import { Provider as ProviderRedux } from "react-redux"

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProviderRedux store={store}>
      <App />
    </ProviderRedux>
  </React.StrictMode>
);

