import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

// react 
window.onload = function () {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
};