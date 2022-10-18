import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgphzK7VqDfqs-Wdkkm0nmIyMWieQ2x8M",
  authDomain: "rugby-clothes-ecommerce.firebaseapp.com",
  projectId: "rugby-clothes-ecommerce",
  storageBucket: "rugby-clothes-ecommerce.appspot.com",
  messagingSenderId: "69825231104",
  appId: "1:69825231104:web:7f296b14ebbb0018971be5"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
