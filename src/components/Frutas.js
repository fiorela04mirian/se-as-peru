import React, { useState, useEffect } from "react";
import { Carousel, FormControl, InputGroup, Card } from "react-bootstrap";
import "./Frutas.css"; // Archivo de estilos CSS para el componente

const Frutas = () => {
  const frutas = [
    "ciruela",
    "fresas",
    "coco",
    "limon",
    "mango",
    "manzana",
    "palta",
    "papaya",
    "piña",
    "platano",
    "uvas",
    "durazno",
    "mandarina",
    "naranja",
    "pera",
    "sandia",
  ];

  const [inputValue, setInputValue] = useState("");
  const [filtroFrutas, setFiltroFrutas] = useState([]);
  const [frutaSeleccionada, setFrutaSeleccionada] = useState(null);

  useEffect(() => {
    // Filtrar las frutas basadas en el valor de entrada
    if (inputValue) {
      const filtro = frutas.filter((item) =>
        item.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFiltroFrutas(filtro);
    } else {
      setFiltroFrutas([]);
    }
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setFrutaSeleccionada(null); // Limpiar la fruta seleccionada al cambiar el texto
  };

  const handleSelectFruta = (fruta) => {
    setFrutaSeleccionada(fruta);
    setInputValue(""); // Limpiar el campo de búsqueda
  };

  const chunkArray = (array, chunkSize) => {
    const results = [];
    while (array.length) {
      results.push(array.splice(0, chunkSize));
    }
    return results;
  };

  const chunks = chunkArray([...frutas], 3);

  return (
    <div className="frutas-container">
      {/* Carrusel de Imágenes de Frutas */}
      <div className="container mt-4">
        <Card>
          <Card.Header>
            <h2>Imágenes de Frutas</h2>
          </Card.Header>
          <Card.Body>
            <Carousel indicators={false} nextLabel="" prevLabel="">
              {chunks.map((chunk, index) => (
                <Carousel.Item key={index}>
                  <div className="d-flex justify-content-around">
                    {chunk.map((fruta) => (
                      <div key={fruta} className="p-2">
                        <img
                          className="d-block"
                          src={require(`../components/images/frutas/${fruta}.png`)}
                          alt={`Imagen de ${fruta}`}
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
                <h2>Buscador de Frutas</h2>
              </Card.Header>
              <Card.Body>
                <InputGroup className="mb-3">
                  <FormControl
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Buscar fruta"
                  />
                </InputGroup>
                <ul className="list-group">
                  {filtroFrutas.map((fruta) => (
                    <li
                      key={fruta}
                      className="list-group-item"
                      onClick={() => handleSelectFruta(fruta)}
                      style={{ cursor: "pointer" }}
                    >
                      {fruta.charAt(0).toUpperCase() + fruta.slice(1)}
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
                {frutaSeleccionada ? (
                  <img
                    src={require(`../components/images/frutas/${frutaSeleccionada}.png`)}
                    alt={`Imagen de ${frutaSeleccionada}`}
                    style={{ maxHeight: "300px", objectFit: "contain" }}
                  />
                ) : (
                  <p>Selecciona o escribe una fruta para ver la imagen.</p>
                )}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frutas;
