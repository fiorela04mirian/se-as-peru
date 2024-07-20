import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Numeros.css"; // Archivo de estilos CSS para el componente

const Numeros = () => {
  const numeros = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "100",
    "1000",
    "1000000",
  ];

  const [inputValue, setInputValue] = useState("");
  const [numeroImagenes, setNumeroImagenes] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleShowImages = () => {
    const inputNumeros = inputValue
      .split("")
      .map((char) =>
        char === " " ? " " : numeros.includes(char) ? char : null
      )
      .filter((n) => n !== null);
    setNumeroImagenes(inputNumeros);
  };

  const chunkArray = (array, chunkSize) => {
    const results = [];
    while (array.length) {
      results.push(array.splice(0, chunkSize));
    }
    return results;
  };

  const chunks = chunkArray([...numeros], 3);

  return (
    <div className="numeros-container">
      <div className="jumbotron">
        <h1 className="display-4">Aprende los Números en Lenguaje de Señas</h1>
        <p className="lead">
          Bienvenido a nuestra sección de aprendizaje de números en lenguaje de
          señas.
        </p>
        <hr className="my-4" />
        <p>Explora material teórico, videos educativos y más.</p>
      </div>

      {/* Sección de Material Teórico */}
      <div className="container mt-4">
        <h2>Material Teórico</h2>
        <p>
          Aquí encontrarás una variedad de recursos teóricos sobre números en
          lenguaje de señas para comenzar tu aprendizaje.
        </p>
        <div className="resource">
          <h3>Introducción a los Números</h3>
          <p>
            El lenguaje de señas incluye señas específicas para cada número.
            Aprender estas señas te permitirá comunicarte de manera más
            completa.
          </p>
        </div>
        <div className="resource">
          <h3>Uso de los Números en Señales</h3>
          <p>
            Los números son una parte importante del lenguaje de señas. Saber
            cómo señalar los números correctamente te ayudará a comunicar
            cantidades, fechas y más.
          </p>
        </div>
      </div>

      {/* Carrusel de Imágenes de los Números */}
      <div className="container mt-4">
        <h2>Imágenes del Lenguaje de Señas - Números</h2>
        <Carousel indicators={false} nextLabel="" prevLabel="">
          {chunks.map((chunk, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex justify-content-around">
                {chunk.map((numero) => (
                  <div key={numero} className="p-2">
                    <img
                      className="d-block"
                      src={require(`../components/images/numeros/${numero}.png`)}
                      alt={`Número ${numero} en Lenguaje de Señas`}
                      style={{ maxHeight: "150px", objectFit: "contain" }}
                    />
                    <Carousel.Caption>
                      <h3>Número {numero}</h3>
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
            <h2>Práctica - Escribe un Número</h2>
            <p>
              Ingresa un número para ver cómo se muestra en lenguaje de señas:
            </p>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Ingresa un número"
              className="form-control"
            />
            <button onClick={handleShowImages} className="btn btn-primary mt-2">
              Mostrar Imágenes
            </button>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className="mt-4 d-flex flex-wrap">
              {numeroImagenes.map((numero, index) => (
                <div key={index} className="p-2">
                  <img
                    src={require(`../components/images/numeros/${numero}.png`)}
                    alt={`Número ${numero} en Lenguaje de Señas`}
                    style={{ maxHeight: "200px", objectFit: "contain" }}
                  />
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

export default Numeros;
