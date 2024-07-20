import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Learn from "./components/Learn";
import Abecedario from "./components/Abecedario";
import Teoria from "./components/Teoria";
import Colores from "./components/Colores";
import Numeros from "./components/Numeros";
import Traductor from "./components/Traductor";
import MemoryGame from "./components/MemoryGame";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedUserName = localStorage.getItem("username");
    if (savedUserName) {
      setUserName(savedUserName);
    }
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? "dark-theme" : "light-theme";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <nav
          className={`navbar navbar-expand-lg ${
            darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
          } fixed-top`}
        >
          <div className="container">
            <a className="navbar-brand" href="#">
              Hablando con las Manos
            </a>
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
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Learn
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link className="dropdown-item" to="/learn/abecedario">
                      Abecedario
                    </Link>
                    <Link className="dropdown-item" to="/learn/teoria">
                      Teoría
                    </Link>
                    <Link className="dropdown-item" to="/learn/colores">
                      Colores
                    </Link>
                    <Link className="dropdown-item" to="/learn/numeros">
                      Números
                    </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/memorygame">
                    Juegos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </ul>
              <span className="navbar-text mr-3">
                {userName ? `Welcome, ${userName}` : ""}
              </span>
              <button className="dark-mode-toggle" onClick={toggleTheme}>
                <span className="toggle-text">
                  {darkMode ? "LIGHT MODE" : "DARK MODE"}
                </span>
                <span className="toggle-icon"></span>
              </button>
            </div>
          </div>
        </nav>

        <div className="container flex-grow-1 mt-5 pt-4">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/learn" exact component={Learn} />
            <Route path="/learn/abecedario" component={Abecedario} />
            <Route path="/learn/teoria" component={Teoria} />
            <Route path="/learn/colores" component={Colores} />
            <Route path="/learn/numeros" component={Numeros} />
            <Route path="/traductor" component={Traductor} />
            <Route path="/memorygame" component={MemoryGame} />
            <Route path="/contact" component={Contact} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
