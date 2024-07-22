import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import Header from "./components/Header";
import RelacionesFamiliares from "./components/RelacionesFamiliares";
import PrendasVestir from "./components/PrendasVestir";
import CuerpoHumano from "./components/CuerpoHumano";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
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
      <div className="App">
        <Header toggleTheme={toggleTheme} darkMode={darkMode} />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/learn" component={Learn} />
            <Route path="/abecedario" component={Abecedario} />
            <Route path="/teoria" component={Teoria} />
            <Route path="/colores" component={Colores} />
            <Route path="/numeros" component={Numeros} />
            <Route
              path="/relacionesfamiliares"
              component={RelacionesFamiliares}
            />
            <Route path="/prendasvestir" component={PrendasVestir} />
            <Route path="/cuerpohumano" component={CuerpoHumano} />
            <Route path="/traductor" component={Traductor} />
            <Route path="/memory-game" component={MemoryGame} />
            <Route path="/contact" component={Contact} />
            <Route path="/register" component={Register} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
