import React, { useState } from "react";
import { Carousel, Card, Button } from "react-bootstrap";
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
      <div className="container mt-4">
        <div className="row">
          {/* Tarjeta de Carrusel */}
          <div className="col-md-6">
            <Card className="mb-4 numeros-card">
              <Card.Header className="text-center">
                <h2>Imágenes del Lenguaje de Señas - Números</h2>
              </Card.Header>
              <Card.Body>
                <Carousel indicators={false} nextLabel="" prevLabel="">
                  {chunks.map((chunk, index) => (
                    <Carousel.Item key={index}>
                      <div className="d-flex justify-content-around flex-wrap">
                        {chunk.map((numero) => (
                          <div key={numero} className="p-2">
                            <img
                              className="d-block"
                              src={require(`../components/images/numeros/${numero}.png`)}
                              alt={`Número ${numero} en Lenguaje de Señas`}
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

          {/* Tarjeta de Práctica */}
          <div className="col-md-6">
            <Card className="mb-4">
              <Card.Header className="text-center">
                <h2>Práctica - Escribe un Número</h2>
              </Card.Header>
              <Card.Body>
                <p>
                  Ingresa un número para ver cómo se muestra en lenguaje de
                  señas:
                </p>
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Ingresa un número"
                  className="form-control mb-2"
                />
                <Button onClick={handleShowImages} className="btn btn-primary">
                  Mostrar Imágenes
                </Button>
                <div className="mt-4 d-flex flex-wrap justify-content-center">
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
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numeros;
