import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const firebase = require('firebase/app');
require('firebase/firestore');
//
firebase.default.initializeApp({
  apiKey: "AIzaSyCpbI7Bql8bbkr1rBapBBCjy--KXjVujqE",
  authDomain: "noteapp-react-395a0.firebaseapp.com",
  projectId: "noteapp-react-395a0",
  storageBucket: "noteapp-react-395a0.appspot.com",
  messagingSenderId: "140990018706",
  appId: "1:140990018706:web:3a90333259a50d18f8624b",
});

ReactDOM.render(
    <App />,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
