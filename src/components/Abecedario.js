import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Abecedario.css"; // Archivo de estilos CSS para el componente

const Learn = () => {
  const letras = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const [inputValue, setInputValue] = useState("");
  const [letraImagenes, setLetraImagenes] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

  const handleShowImages = () => {
    const inputLetras = inputValue
      .split("")
      .map((char) => (char === " " ? " " : letras.includes(char) ? char : null))
      .filter((n) => n !== null);
    setLetraImagenes(inputLetras);
  };

  const chunkArray = (array, chunkSize) => {
    const results = [];
    while (array.length) {
      results.push(array.splice(0, chunkSize));
    }
    return results;
  };

  const chunks = chunkArray([...letras], 3);

  return (
    <div className="learn-container">
      <div className="jumbotron">
        <h1 className="display-4">Aprende Lenguaje de Señas</h1>
        <p className="lead">
          Bienvenido a nuestra sección de aprendizaje de lenguaje de señas.
        </p>
        <hr className="my-4" />
        <p>Explora material teórico, videos educativos y más.</p>
      </div>

      {/* Sección de Material Teórico */}
      <div className="container mt-4">
        <h2>Material Teórico</h2>
        <p>
          Aquí encontrarás una variedad de recursos teóricos sobre lenguaje de
          señas para comenzar tu aprendizaje.
        </p>
        <div className="resource">
          <h3>Introducción al Lenguaje de Señas</h3>
          <p>
            El lenguaje de señas es un sistema de comunicación visual y gestual
            utilizado por la comunidad sorda y con problemas de audición.
            Aprender lenguaje de señas no solo facilita la comunicación, sino
            que también promueve la inclusión y el entendimiento cultural.
          </p>
        </div>
        <div className="resource">
          <h3>Gramática y Estructura</h3>
          <p>
            La gramática del lenguaje de señas incluye la configuración de las
            manos, movimientos, ubicación y expresiones faciales. Aprender la
            estructura del lenguaje de señas es fundamental para comunicarse de
            manera efectiva.
          </p>
        </div>
        <div className="resource">
          <h3>Historia y Cultura</h3>
          <p>
            Conocer la historia y la cultura de la comunidad sorda es
            fundamental para comprender mejor el lenguaje de señas y su impacto
            en la sociedad.
          </p>
        </div>
        <div className="resource">
          <h3>Recursos Adicionales</h3>
          <p>
            Explora más recursos educativos y libros digitales sobre lenguaje de
            señas para ampliar tu conocimiento.
          </p>
        </div>
      </div>

      {/* Carrusel de Imágenes del Abecedario */}
      <div className="container mt-4">
        <h2>Imágenes del Lenguaje de Señas - Abecedario</h2>
        <Carousel indicators={false} nextLabel="" prevLabel="">
          {chunks.map((chunk, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex justify-content-around">
                {chunk.map((letra) => (
                  <div key={letra} className="p-2">
                    <img
                      className="d-block"
                      src={require(`../components/images/abecedario/${letra}.png`)}
                      alt={`Letra ${letra.toUpperCase()} en Lenguaje de Señas`}
                      style={{ maxHeight: "150px", objectFit: "contain" }}
                    />
                    <Carousel.Caption>
                      <h3>Letra {letra.toUpperCase()}</h3>
                    </Carousel.Caption>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Sección de Práctica */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <h2>Práctica - Escribe tu Nombre</h2>
            <p>
              Ingresa tu nombre para ver cómo se forma en lenguaje de señas:
            </p>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Ingresa tu nombre"
              className="form-control"
            />
            <button onClick={handleShowImages} className="btn btn-primary mt-2">
              Mostrar Imágenes
            </button>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className="mt-4 d-flex flex-wrap">
              {letraImagenes.map((letra, index) => (
                <div key={index} className="p-2">
                  {letra === " " ? (
                    <div style={{ width: "50px" }}></div>
                  ) : (
                    <img
                      src={require(`../components/images/abecedario/${letra}.png`)}
                      alt={`Letra ${letra.toUpperCase()} en Lenguaje de Señas`}
                      style={{ maxHeight: "200px", objectFit: "contain" }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
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

export default Learn;
