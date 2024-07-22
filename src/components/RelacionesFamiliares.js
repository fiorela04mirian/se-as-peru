import React, { useState } from "react";
import { Carousel, Card, Button } from "react-bootstrap";
import "./RelacionesFamiliares.css"; // Archivo de estilos CSS para el componente

const RelacionesFamiliares = () => {
  const relaciones = [
    "abuela",
    "tio",
    "abuelo",
    "vecino",
    "adulto",
    "amigo",
    "bebe",
    "cuñado",
    "esposa",
    "esposo",
    "estudiante",
    "familia",
    "hermana",
    "hermano",
    "hija",
    "hijo",
    "hombre",
    "joven",
    "mama",
    "mujer",
    "nieto",
    "niños",
    "papa",
    "persona",
    "primo",
    "sobrina",
    "sobrino",
    "soltera",
    "soltero",
    "tia",
  ];

  const [inputValue, setInputValue] = useState("");
  const [filteredRelaciones, setFilteredRelaciones] = useState([]);
  const [selectedRelacion, setSelectedRelacion] = useState(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    const filtered = relaciones.filter((relacion) =>
      relacion.startsWith(value.toLowerCase())
    );
    setFilteredRelaciones(filtered);
  };

  const handleSelectRelacion = (relacion) => {
    setSelectedRelacion(relacion);
    setInputValue(relacion);
    setFilteredRelaciones([]);
  };

  return (
    <div className="relaciones-container">
      <div className="container mt-4">
        <div className="row">
          {/* Tarjeta de Carrusel */}
          <div className="col-12">
            <Card className="mb-4 relaciones-card">
              <Card.Header className="text-center">
                <h2>Imágenes del Lenguaje de Señas - Relaciones Familiares</h2>
              </Card.Header>
              <Card.Body>
                <Carousel indicators={false} nextLabel="" prevLabel="">
                  {relaciones.map((relacion, index) => (
                    <Carousel.Item key={index}>
                      <div className="d-flex justify-content-around flex-wrap">
                        <div className="p-2">
                          <img
                            className="d-block"
                            src={require(`../components/images/RelacionesFamiliares/${relacion}.png`)}
                            alt={`${relacion} en Lenguaje de Señas`}
                            style={{
                              maxHeight: "300px",
                              objectFit: "contain",
                            }}
                          />
                        </div>
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
                <h2>Práctica - Escribe una Relación Familiar</h2>
              </Card.Header>
              <Card.Body>
                <p>
                  Ingresa una relación familiar para ver cómo se muestra en
                  lenguaje de señas:
                </p>
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Ingresa una relación familiar"
                  className="form-control mb-2"
                />
                <ul className="list-group">
                  {filteredRelaciones.map((relacion, index) => (
                    <li
                      key={index}
                      className="list-group-item"
                      onClick={() => handleSelectRelacion(relacion)}
                    >
                      {relacion}
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </div>

          {/* Tarjeta de Resultado */}
          <div className="col-md-6">
            <Card className="mb-4">
              <Card.Header className="text-center">
                <h2>Resultado</h2>
              </Card.Header>
              <Card.Body>
                {selectedRelacion && (
                  <div className="d-flex flex-wrap justify-content-center">
                    <div className="p-2">
                      <img
                        src={require(`../components/images/RelacionesFamiliares/${selectedRelacion}.png`)}
                        alt={`${selectedRelacion} en Lenguaje de Señas`}
                        style={{ maxHeight: "200px", objectFit: "contain" }}
                      />
                    </div>
                  </div>
                )}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelacionesFamiliares;
