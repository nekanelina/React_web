import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import env from "react-dotenv";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProductContextProvider } from './context/ProductContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductContextProvider>
      <GoogleOAuthProvider clientId={env.GOOGLE_CLIENT_ID}>
        <App />
      </GoogleOAuthProvider>
    </ProductContextProvider>
  </React.StrictMode>
);

reportWebVitals();
