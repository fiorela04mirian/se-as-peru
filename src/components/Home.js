// src/components/Home.js
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Hablando con las Manos</h1>
        <p>Bienvenido a nuestra guía de lenguaje de señas peruano</p>
      </header>
      <section className="home-content">
        <div className="home-card">
          <h2>¿Qué es el lenguaje de señas?</h2>
          <p>
            El lenguaje de señas es una forma de comunicación que utiliza
            movimientos de las manos, gestos y expresiones faciales para
            transmitir mensajes. Es una lengua completa y rica en matices.
          </p>
        </div>
        <div className="home-card">
          <h2>Aprende los fundamentos</h2>
          <p>
            Explora nuestra guía para aprender los conceptos básicos y empezar a
            comunicarte usando el lenguaje de señas. Desde el alfabeto hasta
            frases útiles.
          </p>
        </div>
        <div className="home-card">
          <h2>Recursos adicionales</h2>
          <p>
            Accede a videos, tutoriales y más recursos para mejorar tus
            habilidades en el lenguaje de señas. Encuentra ejercicios prácticos
            y consejos de expertos.
          </p>
        </div>
        <div className="home-card">
          <h2>Importancia del lenguaje de señas</h2>
          <p>
            El lenguaje de señas es esencial para la inclusión y accesibilidad
            de las personas con discapacidad auditiva. Promueve la igualdad de
            oportunidades y facilita la comunicación en diferentes contextos,
            desde la educación hasta el entorno laboral.
          </p>
        </div>
        <div className="home-card">
          <h2>Beneficios del aprendizaje</h2>
          <p>
            Aprender lenguaje de señas no solo mejora la comunicación con la
            comunidad sorda, sino que también enriquece tu capacidad de
            comprender y adaptarte a la diversidad. Desarrolla habilidades
            cognitivas y emocionales, y te conecta con una rica cultura.
          </p>
        </div>
        <div className="home-card">
          <h2>Historias de éxito</h2>
          <p>
            Conoce a personas que han transformado su vida y la de otros al
            aprender lenguaje de señas. Sus testimonios destacan cómo esta
            habilidad ha abierto puertas y generado un impacto positivo en sus
            comunidades.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
