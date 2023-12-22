import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { Amplify } from 'aws-amplify';
import awsmobile from './aws-exports.js';
Amplify.configure(awsmobile);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
