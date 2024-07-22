import React, { useState, useEffect } from "react";
import { Carousel, FormControl, InputGroup, Card } from "react-bootstrap";
import "./PrendasVestir.css"; // Archivo de estilos CSS para el componente

const PrendasVestir = () => {
  const prendas = [
    "anillo",
    "aretes",
    "blusa",
    "calzon",
    "calzoncillo",
    "camisa",
    "cartera",
    "chaleco",
    "chompa",
    "chullo",
    "chalina",
    "corbata",
    "collar",
    "correa",
    "falda",
    "gorro",
    "guantes",
    "maleta",
    "mandil",
    "medias",
    "pantalon",
    "pañuelo",
    "paraguas",
    "pijama",
    "polo",
    "poncho",
    "reloj",
    "saco",
    "short",
    "sombrero",
    "sosten",
    "uniforme",
    "vincha",
    "zapatilla",
    "vestido",
    "zapatos",
  ];

  const [inputValue, setInputValue] = useState("");
  const [filtroPrendas, setFiltroPrendas] = useState([]);
  const [prendaSeleccionada, setPrendaSeleccionada] = useState(null);

  useEffect(() => {
    // Filtrar las prendas basadas en el valor de entrada
    if (inputValue) {
      const filtro = prendas.filter((item) =>
        item.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFiltroPrendas(filtro);
    } else {
      setFiltroPrendas([]);
    }
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setPrendaSeleccionada(null); // Limpiar la prenda seleccionada al cambiar el texto
  };

  const handleSelectPrenda = (prenda) => {
    setPrendaSeleccionada(prenda);
    setInputValue(""); // Limpiar el campo de búsqueda
  };

  const chunkArray = (array, chunkSize) => {
    const results = [];
    while (array.length) {
      results.push(array.splice(0, chunkSize));
    }
    return results;
  };

  const chunks = chunkArray([...prendas], 3);

  return (
    <div className="prendas-container">
      {/* Carrusel de Imágenes de Prendas de Vestir */}
      <div className="container mt-4">
        <Card>
          <Card.Header>
            <h2>Imágenes de Prendas de Vestir</h2>
          </Card.Header>
          <Card.Body>
            <Carousel indicators={false} nextLabel="" prevLabel="">
              {chunks.map((chunk, index) => (
                <Carousel.Item key={index}>
                  <div className="d-flex justify-content-around">
                    {chunk.map((prenda) => (
                      <div key={prenda} className="p-2">
                        <img
                          className="d-block"
                          src={require(`../components/images/PrendasVestir/${prenda}.png`)}
                          alt={`Imagen de ${prenda}`}
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
                <h2>Buscador de Prendas de Vestir</h2>
              </Card.Header>
              <Card.Body>
                <InputGroup className="mb-3">
                  <FormControl
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Buscar prenda"
                  />
                </InputGroup>
                <ul className="list-group">
                  {filtroPrendas.map((prenda) => (
                    <li
                      key={prenda}
                      className="list-group-item"
                      onClick={() => handleSelectPrenda(prenda)}
                      style={{ cursor: "pointer" }}
                    >
                      {prenda.charAt(0).toUpperCase() + prenda.slice(1)}
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
                {prendaSeleccionada ? (
                  <img
                    src={require(`../components/images/PrendasVestir/${prendaSeleccionada}.png`)}
                    alt={`Imagen de ${prendaSeleccionada}`}
                    style={{ maxHeight: "300px", objectFit: "contain" }}
                  />
                ) : (
                  <p>
                    Selecciona o escribe una prenda de vestir para ver la
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

export default PrendasVestir;
