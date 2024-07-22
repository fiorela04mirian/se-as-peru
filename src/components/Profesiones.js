import React, { useState, useEffect } from "react";
import { Carousel, FormControl, InputGroup, Card } from "react-bootstrap";
import "./Profesiones.css"; // Archivo de estilos CSS para el componente

const Profesiones = () => {
  const profesiones = [
    "abogado",
    "dentista",
    "director",
    "doctor",
    "enfermera",
    "ingeniero",
    "juez",
    "policia",
    "presidente",
    "profesora",
  ];

  const [inputValue, setInputValue] = useState("");
  const [filtroProfesiones, setFiltroProfesiones] = useState([]);
  const [profesionSeleccionada, setProfesionSeleccionada] = useState(null);

  useEffect(() => {
    // Filtrar las profesiones basadas en el valor de entrada
    if (inputValue) {
      const filtro = profesiones.filter((item) =>
        item.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFiltroProfesiones(filtro);
    } else {
      setFiltroProfesiones([]);
    }
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setProfesionSeleccionada(null); // Limpiar la profesion seleccionada al cambiar el texto
  };

  const handleSelectProfesion = (profesion) => {
    setProfesionSeleccionada(profesion);
    setInputValue(""); // Limpiar el campo de búsqueda
  };

  const chunkArray = (array, chunkSize) => {
    const results = [];
    while (array.length) {
      results.push(array.splice(0, chunkSize));
    }
    return results;
  };

  const chunks = chunkArray([...profesiones], 3);

  return (
    <div className="profesiones-container">
      {/* Carrusel de Imágenes de Profesiones */}
      <div className="container mt-4">
        <Card>
          <Card.Header>
            <h2>Imágenes de Profesiones</h2>
          </Card.Header>
          <Card.Body>
            <Carousel indicators={false} nextLabel="" prevLabel="">
              {chunks.map((chunk, index) => (
                <Carousel.Item key={index}>
                  <div className="d-flex justify-content-around">
                    {chunk.map((profesion) => (
                      <div key={profesion} className="p-2">
                        <img
                          className="d-block"
                          src={require(`../components/images/profesiones/${profesion}.png`)}
                          alt={`Imagen de ${profesion}`}
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
                <h2>Buscador de Profesiones</h2>
              </Card.Header>
              <Card.Body>
                <InputGroup className="mb-3">
                  <FormControl
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Buscar profesión"
                  />
                </InputGroup>
                <ul className="list-group">
                  {filtroProfesiones.map((profesion) => (
                    <li
                      key={profesion}
                      className="list-group-item"
                      onClick={() => handleSelectProfesion(profesion)}
                      style={{ cursor: "pointer" }}
                    >
                      {profesion.charAt(0).toUpperCase() + profesion.slice(1)}
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
                {profesionSeleccionada ? (
                  <img
                    src={require(`../components/images/profesiones/${profesionSeleccionada}.png`)}
                    alt={`Imagen de ${profesionSeleccionada}`}
                    style={{ maxHeight: "300px", objectFit: "contain" }}
                  />
                ) : (
                  <p>Selecciona o escribe una profesión para ver la imagen.</p>
                )}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profesiones;
