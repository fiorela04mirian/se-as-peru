import React, { useState } from "react";
import { Carousel, Card, Button } from "react-bootstrap";
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
      <div className="container mt-4">
        <div className="row">
          {/* Tarjeta de Carrusel */}
          <div className="col-12">
            <Card className="mb-4 numeros-card">
              <Card.Header className="text-center">
                <h2>Imágenes del Lenguaje de Señas - Abecedario</h2>
              </Card.Header>
              <Card.Body>
                <Carousel indicators={false} nextLabel="" prevLabel="">
                  {chunks.map((chunk, index) => (
                    <Carousel.Item key={index}>
                      <div className="d-flex justify-content-around flex-wrap">
                        {chunk.map((letra) => (
                          <div key={letra} className="p-2">
                            <img
                              className="d-block"
                              src={require(`../components/images/abecedario/${letra}.png`)}
                              alt={`Letra ${letra.toUpperCase()} en Lenguaje de Señas`}
                              style={{
                                maxHeight: "300px",
                                objectFit: "contain",
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Card.Body>
            </Card>
          </div>

          {/* Tarjetas de Práctica y Resultados */}
          <div className="col-md-6">
            <Card className="mb-4">
              <Card.Header className="text-center">
                <h2>Práctica - Escribe tu Nombre</h2>
              </Card.Header>
              <Card.Body>
                <p>
                  Ingresa tu nombre para ver cómo se forma en lenguaje de señas:
                </p>
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Ingresa tu nombre"
                  className="form-control mb-2"
                />
                <Button onClick={handleShowImages} className="btn btn-primary">
                  Mostrar Imágenes
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6">
            <Card className="mb-4">
              <Card.Header className="text-center">
                <h2>Resultados</h2>
              </Card.Header>
              <Card.Body>
                <div className="d-flex flex-wrap justify-content-center">
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
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
