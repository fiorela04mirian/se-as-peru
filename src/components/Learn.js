import React from "react";
import { Link } from "react-router-dom";
import "./Learn.css"; // Archivo de estilos CSS para el componente

const categories = [
  {
    name: "Números",
    description: "Aprende los números en lenguaje de señas.",
    route: "/numeros",
  },
  {
    name: "Abecedario",
    description: "Conoce el abecedario en lenguaje de señas.",
    route: "/abecedario",
  },
  {
    name: "Teoría",
    description: "Explora la teoría detrás del lenguaje de señas.",
    route: "/teoria",
  },
  {
    name: "Colores",
    description: "Descubre los colores en lenguaje de señas.",
    route: "/colores",
  },
  {
    name: "Traductor",
    description: "Utiliza nuestro traductor de señas.",
    route: "/traductor",
  },
  {
    name: "Memory Game",
    description: "Juega y aprende con el juego de memoria.",
    route: "/memory-game",
  },
  {
    name: "Relaciones familiares y personales",
    description: "Señas referidas a los miembros de la familia.",
    route: "/relacionesfamiliares",
  },
  {
    name: "Cuerpo humano y primeros auxilios",
    description: "Señas del cuerpo humano y primeros auxilios.",
    route: "/cuerpohumano",
  },
  {
    name: "Prendas de vestir y accesorios",
    description: "Conoce las señas de prendas de vestir y accesorios.",
    route: "/prendasvestir",
  },
  {
    name: "Alimentos",
    description: "Descubre las señas de los alimentos.",
    route: "/alimentos",
  },
  {
    name: "Frutas",
    description: "Señas de diversas frutas.",
    route: "/frutas",
  },
  {
    name: "Verduras",
    description: "Aprende las señas de las verduras.",
    route: "/verduras",
  },
  {
    name: "Bebidas",
    description: "Conoce las señas de diferentes bebidas.",
    route: "/bebidas",
  },
  {
    name: "Adverbios y preposiciones",
    description: "Explora las señas de adverbios y preposiciones.",
    route: "/adverbios-preposiciones",
  },
  {
    name: "Preguntas",
    description: "Aprende cómo hacer preguntas en lenguaje de señas.",
    route: "/preguntas",
  },
  {
    name: "Pronombres personales y signos gramaticales",
    description: "Señas de pronombres personales y signos gramaticales.",
    route: "/pronombres-personales",
  },
  {
    name: "Verbos",
    description: "Conoce las señas de los verbos.",
    route: "/verbos",
  },
  {
    name: "Adjetivos",
    description: "Aprende las señas de los adjetivos.",
    route: "/adjetivos",
  },
  {
    name: "Animales",
    description: "Señas de diferentes animales.",
    route: "/animales",
  },
  {
    name: "Juegos y deportes",
    description: "Explora las señas de juegos y deportes.",
    route: "/juegos-deportes",
  },
  {
    name: "Profesiones y oficios",
    description: "Aprende las señas de diversas profesiones y oficios.",
    route: "/profesiones",
  },
  {
    name: "Países y lugares",
    description: "Señas de países y lugares.",
    route: "/paises-lugares",
  },
  {
    name: "Religión",
    description: "Conoce las señas relacionadas con la religión.",
    route: "/religion",
  },
  {
    name: "Ambientes de la casa y artículos del hogar",
    description: "Señas de ambientes de la casa y artículos del hogar.",
    route: "/ambientes-casa",
  },
  {
    name: "Nociones temporales",
    description: "Aprende las señas de nociones temporales.",
    route: "/nociones-temporales",
  },
  {
    name: "Naturaleza",
    description: "Señas relacionadas con la naturaleza.",
    route: "/naturaleza",
  },
  {
    name: "Colegio y colores",
    description: "Conoce las señas del colegio y colores.",
    route: "/colegio-colores",
  },
  {
    name: "Señas de informática (Nivel Básico)",
    description: "Aprende las señas de informática (nivel básico).",
    route: "/senas-informatica",
  },
];

const Learn = () => {
  return (
    <div className="learn-container">
      <div className="jumbotron">
        <h1 className="display-4">
          Bienvenido a la Sección de Aprendizaje el Vocabulario
        </h1>
        <p className="lead">
          Aquí podrás aprender diferentes aspectos del lenguaje de señas. Es
          importante que este bloque se ajuste siempre a las necesidades
          prácticas de las personas que asisten al curso, ya que la motivación
          es importante. La docente debe tener en cuenta este aspecto para
          introducir las palabras del vocabulario del entorno de los alumnos. El
          documento Lengua de Señas Peruanas ofrece un vocabulario básico que
          contiene el alfabeto manual y 23 categorias:
        </p>
        <hr className="my-4" />
        <p>Selecciona una categoría para comenzar a aprender.</p>
      </div>
      <div className="container mt-4">
        <div className="row">
          {categories.map((category, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{category.name}</h5>
                  <p className="card-text">{category.description}</p>
                  <Link to={category.route} className="btn btn-primary">
                    Aprender más
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Learn;
