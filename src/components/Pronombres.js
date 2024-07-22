import React, { useState, useEffect } from "react";
import { Carousel, FormControl, InputGroup, Card } from "react-bootstrap";
import "./Pronombres.css"; // Archivo de estilos CSS para el componente

const Pronombres = () => {
  const pronombres = ["el", "ellos", "tu", "yo"];

  const [inputValue, setInputValue] = useState("");
  const [filtroPronombres, setFiltroPronombres] = useState([]);
  const [pronombreSeleccionado, setPronombreSeleccionado] = useState(null);

  useEffect(() => {
    // Filtrar los pronombres basados en el valor de entrada
    if (inputValue) {
      const filtro = pronombres.filter((item) =>
        item.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFiltroPronombres(filtro);
    } else {
      setFiltroPronombres([]);
    }
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setPronombreSeleccionado(null); // Limpiar el pronombre seleccionado al cambiar el texto
  };

  const handleSelectPronombre = (pronombre) => {
    setPronombreSeleccionado(pronombre);
    setInputValue(""); // Limpiar el campo de búsqueda
  };

  const chunkArray = (array, chunkSize) => {
    const results = [];
    while (array.length) {
      results.push(array.splice(0, chunkSize));
    }
    return results;
  };

  const chunks = chunkArray([...pronombres], 3);

  return (
    <div className="pronombres-container">
      {/* Carrusel de Imágenes de Pronombres */}
      <div className="container mt-4">
        <Card>
          <Card.Header>
            <h2>Imágenes de Pronombres</h2>
          </Card.Header>
          <Card.Body>
            <Carousel indicators={false} nextLabel="" prevLabel="">
              {chunks.map((chunk, index) => (
                <Carousel.Item key={index}>
                  <div className="d-flex justify-content-around">
                    {chunk.map((pronombre) => (
                      <div key={pronombre} className="p-2">
                        <img
                          className="d-block"
                          src={require(`../components/images/pronombre/${pronombre}.png`)}
                          alt={`Imagen de ${pronombre}`}
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
                <h2>Buscador de Pronombres</h2>
              </Card.Header>
              <Card.Body>
                <InputGroup className="mb-3">
                  <FormControl
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Buscar pronombre"
                  />
                </InputGroup>
                <ul className="list-group">
                  {filtroPronombres.map((pronombre) => (
                    <li
                      key={pronombre}
                      className="list-group-item"
                      onClick={() => handleSelectPronombre(pronombre)}
                      style={{ cursor: "pointer" }}
                    >
                      {pronombre.charAt(0).toUpperCase() + pronombre.slice(1)}
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
                {pronombreSeleccionado ? (
                  <img
                    src={require(`../components/images/pronombre/${pronombreSeleccionado}.png`)}
                    alt={`Imagen de ${pronombreSeleccionado}`}
                    style={{ maxHeight: "300px", objectFit: "contain" }}
                  />
                ) : (
                  <p>Selecciona o escribe un pronombre para ver la imagen.</p>
                )}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pronombres;
