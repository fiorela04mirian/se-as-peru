import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ toggleTheme, darkMode }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand mx-auto" to="/">
          Hablando con las Manos
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                Acerca de
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/learn">
                Aprender
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/traductor">
                Traductor
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/memory-game">
                Juego de Memoria
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contáctanos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Registrarse
              </Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-toggle" onClick={toggleTheme}>
                {darkMode ? "☀️" : "🌙"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
