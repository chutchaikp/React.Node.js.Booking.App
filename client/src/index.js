import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { SearchContextProvider } from './context/SearchContext';
import { AuthContextProvider } from './context/AuthContext'
// import App from './App2'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <AuthContextProvider>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
    </AuthContextProvider>
  </StrictMode>
);
