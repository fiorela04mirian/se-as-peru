import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// Asegúrate de que el nombre del componente sea correcto

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
