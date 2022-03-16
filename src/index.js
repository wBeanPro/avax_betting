import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DAppProvider, ChainId } from "@usedapp/core";

ReactDOM.render(
  <React.StrictMode>

    <DAppProvider>
      <App />
    </DAppProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
