import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ProductPage from './ProductPage'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <ProductPage />
  </React.StrictMode>,
  document.getElementById('root2')
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
