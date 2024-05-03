import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import { Provider } from 'react-redux';
import { Store } from './Redux/Store/Store';
import RouteAlkye from './Router/RouteAlkye';
import Card from './Card/Card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
<RouteAlkye/>
    </Provider>
 
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
