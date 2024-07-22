import React, { useState, useEffect } from "react";
import { Carousel, FormControl, InputGroup, Card } from "react-bootstrap";
import "./Adverbios.css"; // Archivo de estilos CSS para el componente

const Adverbios = () => {
  const adverbios = [
    "abajo",
    "afuera",
    "arriba",
    "cerca",
    "de",
    "delante",
    "dentro",
    "detras",
    "encima",
    "entre",
    "ese",
    "junto",
    "si",
    "solamente",
    "solo",
    "siempre",
    "tampoco",
    "verdad",
  ];

  const [inputValue, setInputValue] = useState("");
  const [filtroAdverbios, setFiltroAdverbios] = useState([]);
  const [adverbioSeleccionado, setAdverbioSeleccionado] = useState(null);

  useEffect(() => {
    // Filtrar los adverbios basados en el valor de entrada
    if (inputValue) {
      const filtro = adverbios.filter((item) =>
        item.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFiltroAdverbios(filtro);
    } else {
      setFiltroAdverbios([]);
    }
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setAdverbioSeleccionado(null); // Limpiar el adverbio seleccionado al cambiar el texto
  };

  const handleSelectAdverbio = (adverbio) => {
    setAdverbioSeleccionado(adverbio);
    setInputValue(""); // Limpiar el campo de búsqueda
  };

  const chunkArray = (array, chunkSize) => {
    const results = [];
    while (array.length) {
      results.push(array.splice(0, chunkSize));
    }
    return results;
  };

  const chunks = chunkArray([...adverbios], 3);

  return (
    <div className="adverbios-container">
      {/* Carrusel de Imágenes de Adverbios */}
      <div className="container mt-4">
        <Card>
          <Card.Header>
            <h2>Imágenes de Adverbios</h2>
          </Card.Header>
          <Card.Body>
            <Carousel indicators={false} nextLabel="" prevLabel="">
              {chunks.map((chunk, index) => (
                <Carousel.Item key={index}>
                  <div className="d-flex justify-content-around">
                    {chunk.map((adverbio) => (
                      <div key={adverbio} className="p-2">
                        <img
                          className="d-block"
                          src={require(`../components/images/adverbio/${adverbio}.png`)}
                          alt={`Imagen de ${adverbio}`}
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
                <h2>Buscador de Adverbios</h2>
              </Card.Header>
              <Card.Body>
                <InputGroup className="mb-3">
                  <FormControl
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Buscar adverbio"
                  />
                </InputGroup>
                <ul className="list-group">
                  {filtroAdverbios.map((adverbio) => (
                    <li
                      key={adverbio}
                      className="list-group-item"
                      onClick={() => handleSelectAdverbio(adverbio)}
                      style={{ cursor: "pointer" }}
                    >
                      {adverbio.charAt(0).toUpperCase() + adverbio.slice(1)}
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
                {adverbioSeleccionado ? (
                  <img
                    src={require(`../components/images/adverbio/${adverbioSeleccionado}.png`)}
                    alt={`Imagen de ${adverbioSeleccionado}`}
                    style={{ maxHeight: "300px", objectFit: "contain" }}
                  />
                ) : (
                  <p>Selecciona o escribe un adverbio para ver la imagen.</p>
                )}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adverbios;
