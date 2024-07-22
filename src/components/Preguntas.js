import React, { useState, useEffect } from "react";
import { Carousel, FormControl, InputGroup, Card } from "react-bootstrap";
import "./Preguntas.css"; // Archivo de estilos CSS para el componente

const Preguntas = () => {
  const preguntas = [
    "como",
    "cual",
    "cuando",
    "cuantos",
    "de que",
    "de quien",
    "donde",
    "por-que",
    "que",
    "quien",
  ];

  const [inputValue, setInputValue] = useState("");
  const [filtroPreguntas, setFiltroPreguntas] = useState([]);
  const [preguntaSeleccionada, setPreguntaSeleccionada] = useState(null);

  useEffect(() => {
    // Filtrar las preguntas basadas en el valor de entrada
    if (inputValue) {
      const filtro = preguntas.filter((item) =>
        item.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFiltroPreguntas(filtro);
    } else {
      setFiltroPreguntas([]);
    }
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setPreguntaSeleccionada(null); // Limpiar la pregunta seleccionada al cambiar el texto
  };

  const handleSelectPregunta = (pregunta) => {
    setPreguntaSeleccionada(pregunta);
    setInputValue(""); // Limpiar el campo de búsqueda
  };

  const chunkArray = (array, chunkSize) => {
    const results = [];
    while (array.length) {
      results.push(array.splice(0, chunkSize));
    }
    return results;
  };

  const chunks = chunkArray([...preguntas], 3);

  return (
    <div className="preguntas-container">
      {/* Carrusel de Imágenes de Preguntas */}
      <div className="container mt-4">
        <Card>
          <Card.Header>
            <h2>Imágenes de Preguntas</h2>
          </Card.Header>
          <Card.Body>
            <Carousel indicators={false} nextLabel="" prevLabel="">
              {chunks.map((chunk, index) => (
                <Carousel.Item key={index}>
                  <div className="d-flex justify-content-around">
                    {chunk.map((pregunta) => (
                      <div key={pregunta} className="p-2">
                        <img
                          className="d-block"
                          src={require(`../components/images/preguntas/${pregunta}.png`)}
                          alt={`Imagen de ${pregunta}`}
                          style={{ maxHeight: "150px", objectFit: "contain" }}
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

      {/* Sección de Búsqueda y Resultado */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <Card>
              <Card.Header>
                <h2>Buscador de Preguntas</h2>
              </Card.Header>
              <Card.Body>
                <InputGroup className="mb-3">
                  <FormControl
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Buscar pregunta"
                  />
                </InputGroup>
                <ul className="list-group">
                  {filtroPreguntas.map((pregunta) => (
                    <li
                      key={pregunta}
                      className="list-group-item"
                      onClick={() => handleSelectPregunta(pregunta)}
                      style={{ cursor: "pointer" }}
                    >
                      {pregunta.charAt(0).toUpperCase() + pregunta.slice(1)}
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-6">
            <Card>
              <Card.Header>
                <h2>Resultado</h2>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center align-items-center">
                {preguntaSeleccionada ? (
                  <img
                    src={require(`../components/images/preguntas/${preguntaSeleccionada}.png`)}
                    alt={`Imagen de ${preguntaSeleccionada}`}
                    style={{ maxHeight: "300px", objectFit: "contain" }}
                  />
                ) : (
                  <p>Selecciona o escribe una pregunta para ver la imagen.</p>
                )}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preguntas;
