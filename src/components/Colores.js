import React from "react";
import { Carousel } from "react-bootstrap";
import "./Colores.css"; // Archivo de estilos CSS para el componente

const Colores = () => {
  return (
    <div className="colores-container">
      <div className="jumbotron">
        <h1 className="display-4">Aprende los Colores en Lenguaje de Señas</h1>
        <p className="lead">
          Bienvenido a nuestra sección de aprendizaje de colores en lenguaje de
          señas.
        </p>
        <hr className="my-4" />
        <p>Explora material teórico, videos educativos y más.</p>
      </div>

      {/* Sección de Material Teórico */}
      <div className="container mt-4">
        <h2>Material Teórico</h2>
        <p>
          Aquí encontrarás una variedad de recursos teóricos sobre colores en
          lenguaje de señas para comenzar tu aprendizaje.
        </p>
        <div className="resource">
          <h3>Introducción a los Colores</h3>
          <p>
            El lenguaje de señas incluye señas específicas para cada color.
            Aprender estas señas te permitirá comunicarte de manera más
            completa.
          </p>
        </div>
        <div className="resource">
          <h3>Uso de los Colores en Señales</h3>
          <p>
            Los colores son una parte importante del lenguaje de señas. Saber
            cómo señalar los colores correctamente te ayudará a describir
            objetos, ropa y más.
          </p>
        </div>
      </div>

      {/* Carrusel de Imágenes de los Colores */}
      <div className="container mt-4">
        <h2>Imágenes del Lenguaje de Señas - Colores</h2>
        <Carousel indicators={false} nextLabel="" prevLabel="">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../components/images/colores/red.jpg")}
              alt="Color Rojo en Lenguaje de Señas"
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
            <Carousel.Caption>
              <h3>Color Rojo</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../components/images/colores/orange.jpg")}
              alt="Color Naranja en Lenguaje de Señas"
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
            <Carousel.Caption>
              <h3>Color Naranja</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../components/images/colores/yellow.jpg")}
              alt="Color Amarillo en Lenguaje de Señas"
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
            <Carousel.Caption>
              <h3>Color Amarillo</h3>
            </Carousel.Caption>
          </Carousel.Item>
          {/* Añade más imágenes según sea necesario */}
        </Carousel>
      </div>

      {/* Enlaces Útiles */}
      <div className="container mt-4 mb-4">
        <h2>Enlaces Útiles</h2>
        <ul>
          <li>
            <a href="https://www.nidcd.nih.gov/health/american-sign-language">
              ¿Qué es el lenguaje de señas?
            </a>
          </li>
          <li>
            <a href="https://www.signingsavvy.com/">
              Diccionario en Línea de Lenguaje de Señas
            </a>
          </li>
          <li>
            <a href="https://www.startasl.com/american-sign-language">
              Curso Gratuito de ASL
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Colores;
