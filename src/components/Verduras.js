import React, { useState, useEffect } from "react";
import { Carousel, FormControl, InputGroup, Card } from "react-bootstrap";
import "./Verduras.css"; // Archivo de estilos CSS para el componente

const Verduras = () => {
  const verduras = [
    "aji",
    "ajo",
    "apio",
    "camote",
    "cebolla",
    "col",
    "culandro",
    "espinaca",
  ];

  const [inputValue, setInputValue] = useState("");
  const [filtroVerduras, setFiltroVerduras] = useState([]);
  const [verduraSeleccionada, setVerduraSeleccionada] = useState(null);

  useEffect(() => {
    // Filtrar las verduras basadas en el valor de entrada
    if (inputValue) {
      const filtro = verduras.filter((item) =>
        item.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFiltroVerduras(filtro);
    } else {
      setFiltroVerduras([]);
    }
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setVerduraSeleccionada(null); // Limpiar la verdura seleccionada al cambiar el texto
  };

  const handleSelectVerdura = (verdura) => {
    setVerduraSeleccionada(verdura);
    setInputValue(""); // Limpiar el campo de búsqueda
  };

  const chunkArray = (array, chunkSize) => {
    const results = [];
    while (array.length) {
      results.push(array.splice(0, chunkSize));
    }
    return results;
  };

  const chunks = chunkArray([...verduras], 3);

  return (
    <div className="verduras-container">
      {/* Carrusel de Imágenes de Verduras */}
      <div className="container mt-4">
        <Card>
          <Card.Header>
            <h2>Imágenes de Verduras</h2>
          </Card.Header>
          <Card.Body>
            <Carousel indicators={false} nextLabel="" prevLabel="">
              {chunks.map((chunk, index) => (
                <Carousel.Item key={index}>
                  <div className="d-flex justify-content-around">
                    {chunk.map((verdura) => (
                      <div key={verdura} className="p-2">
                        <img
                          className="d-block"
                          src={require(`../components/images/verduras/${verdura}.png`)}
                          alt={`Imagen de ${verdura}`}
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
                <h2>Buscador de Verduras</h2>
              </Card.Header>
              <Card.Body>
                <InputGroup className="mb-3">
                  <FormControl
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Buscar verdura"
                  />
                </InputGroup>
                <ul className="list-group">
                  {filtroVerduras.map((verdura) => (
                    <li
                      key={verdura}
                      className="list-group-item"
                      onClick={() => handleSelectVerdura(verdura)}
                      style={{ cursor: "pointer" }}
                    >
                      {verdura.charAt(0).toUpperCase() + verdura.slice(1)}
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
                {verduraSeleccionada ? (
                  <img
                    src={require(`../components/images/verduras/${verduraSeleccionada}.png`)}
                    alt={`Imagen de ${verduraSeleccionada}`}
                    style={{ maxHeight: "300px", objectFit: "contain" }}
                  />
                ) : (
                  <p>Selecciona o escribe una verdura para ver la imagen.</p>
                )}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verduras;
