import React from "react";
import ReactDOM from "react-dom/client"; // Updated import for React 18
import App from './App';
import reportWebVitals from './reportWebVitals';
// Removed: import "./styles.css"; (file deleted)
// Removed: import Count from "./Count"; (Count is rendered within App)
// Removed: import Carrousel  from "./Carrousel"; (file deleted)

// The main App component now handles all primary rendering.
// Older commented-out code referencing a local App function,
// Carrousel, and Count directly here has been removed for clarity.

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