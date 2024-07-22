import React, { useState, useEffect } from "react";
import { Carousel, FormControl, InputGroup, Card } from "react-bootstrap";
import "./Bebidas.css"; // Archivo de estilos CSS para el componente

const Bebidas = () => {
  const bebidas = [
    "agua",
    "chicha",
    "emoliente",
    "te",
    "cafe",
    "chocolate",
    "inka-kola",
    "vino",
    "cerveza",
    "coca-cola",
    "leche",
  ];

  const [inputValue, setInputValue] = useState("");
  const [filtroBebidas, setFiltroBebidas] = useState([]);
  const [bebidaSeleccionada, setBebidaSeleccionada] = useState(null);

  useEffect(() => {
    // Filtrar las bebidas basadas en el valor de entrada
    if (inputValue) {
      const filtro = bebidas.filter((item) =>
        item.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFiltroBebidas(filtro);
    } else {
      setFiltroBebidas([]);
    }
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setBebidaSeleccionada(null); // Limpiar la bebida seleccionada al cambiar el texto
  };

  const handleSelectBebida = (bebida) => {
    setBebidaSeleccionada(bebida);
    setInputValue(""); // Limpiar el campo de búsqueda
  };

  const chunkArray = (array, chunkSize) => {
    const results = [];
    while (array.length) {
      results.push(array.splice(0, chunkSize));
    }
    return results;
  };

  const chunks = chunkArray([...bebidas], 3);

  return (
    <div className="bebidas-container">
      {/* Carrusel de Imágenes de Bebidas */}
      <div className="container mt-4">
        <Card>
          <Card.Header>
            <h2>Imágenes de Bebidas</h2>
          </Card.Header>
          <Card.Body>
            <Carousel indicators={false} nextLabel="" prevLabel="">
              {chunks.map((chunk, index) => (
                <Carousel.Item key={index}>
                  <div className="d-flex justify-content-around">
                    {chunk.map((bebida) => (
                      <div key={bebida} className="p-2">
                        <img
                          className="d-block"
                          src={require(`../components/images/bebidas/${bebida}.png`)}
                          alt={`Imagen de ${bebida}`}
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
                <h2>Buscador de Bebidas</h2>
              </Card.Header>
              <Card.Body>
                <InputGroup className="mb-3">
                  <FormControl
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Buscar bebida"
                  />
                </InputGroup>
                <ul className="list-group">
                  {filtroBebidas.map((bebida) => (
                    <li
                      key={bebida}
                      className="list-group-item"
                      onClick={() => handleSelectBebida(bebida)}
                      style={{ cursor: "pointer" }}
                    >
                      {bebida.charAt(0).toUpperCase() + bebida.slice(1)}
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
                {bebidaSeleccionada ? (
                  <img
                    src={require(`../components/images/bebidas/${bebidaSeleccionada}.png`)}
                    alt={`Imagen de ${bebidaSeleccionada}`}
                    style={{ maxHeight: "300px", objectFit: "contain" }}
                  />
                ) : (
                  <p>Selecciona o escribe una bebida para ver la imagen.</p>
                )}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bebidas;
