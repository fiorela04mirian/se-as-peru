import React, { useState, useEffect } from "react";
import { Carousel, FormControl, InputGroup, Card } from "react-bootstrap";
import "./CuerpoHumano.css"; // Archivo de estilos CSS para el componente

const CuerpoHumano = () => {
  const partes = [
    "barba",
    "bigote",
    "boca",
    "brazo",
    "cabello",
    "cabeza",
    "cadera",
    "cara",
    "ceja",
    "cintura",
    "codo",
    "columna vertebral",
    "corazon",
    "cuello",
    "cuerpo",
    "dedo",
    "diente",
    "dolor",
    "espalda",
    "estomago",
    "fiebre",
    "frente",
    "garganta",
    "gotas",
    "herida",
    "hombro",
    "hospital",
    "inyeccion",
    "labios",
    "lengua",
    "mano",
    "mareos",
    "mejilla",
    "muñeca",
    "operacion",
    "parpado",
    "pestaña",
    "pierna",
    "senos",
    "tos",
    "nariz",
    "ojo",
    "oreja",
    "paperas",
    "pastillas",
    "pecho",
    "pie",
    "piel",
    "resfriado",
    "rodilla",
    "talon",
    "tobillo",
    "uña",
  ];

  const [inputValue, setInputValue] = useState("");
  const [filtroPartes, setFiltroPartes] = useState([]);
  const [parteSeleccionada, setParteSeleccionada] = useState(null);

  useEffect(() => {
    // Filtrar las partes basadas en el valor de entrada
    if (inputValue) {
      const filtro = partes.filter((item) =>
        item.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFiltroPartes(filtro);
    } else {
      setFiltroPartes([]);
    }
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setParteSeleccionada(null); // Limpiar la parte seleccionada al cambiar el texto
  };

  const handleSelectParte = (parte) => {
    setParteSeleccionada(parte);
    setInputValue(""); // Limpiar el campo de búsqueda
  };

  const chunkArray = (array, chunkSize) => {
    const results = [];
    while (array.length) {
      results.push(array.splice(0, chunkSize));
    }
    return results;
  };

  const chunks = chunkArray([...partes], 3);

  return (
    <div className="cuerpo-humano-container">
      {/* Carrusel de Imágenes del Cuerpo Humano */}
      <div className="container mt-4">
        <Card>
          <Card.Header>
            <h2>Imágenes del Cuerpo Humano</h2>
          </Card.Header>
          <Card.Body>
            <Carousel indicators={false} nextLabel="" prevLabel="">
              {chunks.map((chunk, index) => (
                <Carousel.Item key={index}>
                  <div className="d-flex justify-content-around">
                    {chunk.map((parte) => (
                      <div key={parte} className="p-2">
                        <img
                          className="d-block"
                          src={require(`../components/images/CuerpoHumano/${parte}.png`)}
                          alt={`Imagen de ${parte}`}
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
                <h2>Buscador de Partes del Cuerpo</h2>
              </Card.Header>
              <Card.Body>
                <InputGroup className="mb-3">
                  <FormControl
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Buscar parte del cuerpo"
                  />
                </InputGroup>
                <ul className="list-group">
                  {filtroPartes.map((parte) => (
                    <li
                      key={parte}
                      className="list-group-item"
                      onClick={() => handleSelectParte(parte)}
                      style={{ cursor: "pointer" }}
                    >
                      {parte.charAt(0).toUpperCase() + parte.slice(1)}
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
                {parteSeleccionada ? (
                  <img
                    src={require(`../components/images/CuerpoHumano/${parteSeleccionada}.png`)}
                    alt={`Imagen de ${parteSeleccionada}`}
                    style={{ maxHeight: "300px", objectFit: "contain" }}
                  />
                ) : (
                  <p>
                    Selecciona o escribe una parte del cuerpo para ver la
                    imagen.
                  </p>
                )}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuerpoHumano;
