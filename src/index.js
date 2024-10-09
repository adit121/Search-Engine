import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { StateContextProvider } from './contexts/StateContextProvider'; // Import the provider

import './index.css'; // Your global styles

ReactDOM.render(
  <StateContextProvider>
    <Router>
      <App />
    </Router>
  </StateContextProvider>,
  document.getElementById('root')
);
