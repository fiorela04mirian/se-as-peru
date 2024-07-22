import React, { useState, useEffect } from "react";
import { FormControl, InputGroup, Card } from "react-bootstrap";
import "./Traductor.css"; // Archivo de estilos CSS para el componente

const Traductor = () => {
  // Lista de categorías y sus palabras
  const categorias = {
    adverbios: [
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
    ],
    profesiones: [
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
    ],
    frutas: [
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
    ],
    // Añadir aquí las demás categorías con sus palabras correspondientes...
  };

  const [inputValue, setInputValue] = useState("");
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    const palabras = inputValue.split(" ");
    const imagenesEncontradas = [];

    palabras.forEach((palabra) => {
      for (const [categoria, palabrasCategoria] of Object.entries(categorias)) {
        if (palabrasCategoria.includes(palabra.toLowerCase())) {
          imagenesEncontradas.push({
            palabra,
            src: require(`../components/images/${categoria}/${palabra.toLowerCase()}.png`),
          });
          break;
        }
      }
    });

    setImagenes(imagenesEncontradas);
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="traductor-container">
      <div className="container mt-4">
        <Card>
          <Card.Header>
            <h2>Traductor de Lenguaje de Señas</h2>
          </Card.Header>
          <Card.Body>
            <InputGroup className="mb-3">
              <FormControl
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Escribe aquí..."
              />
            </InputGroup>
            <div className="imagenes-container">
              {imagenes.map((img, index) => (
                <div key={index} className="p-2">
                  <img
                    src={img.src}
                    alt={img.palabra}
                    style={{ maxHeight: "150px", objectFit: "contain" }}
                  />
                  <p>{img.palabra}</p>
                </div>
              ))}
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Traductor;
