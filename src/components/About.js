import React from "react";
import { Carousel } from "react-bootstrap";
import "./About.css"; // Archivo de estilos CSS para el componente

const About = () => {
  return (
    <div className="about-container">
      <div className="jumbotron">
        <h1 className="display-4">Acerca de SING LENGUAJE</h1>
        <p className="lead">
          Plataforma dedicada al aprendizaje y traducción del lenguaje de señas.
        </p>
        <hr className="my-4" />
        <p>
          SING LENGUAJE es una iniciativa educativa desarrollada para promover
          la inclusión y facilitar la comunicación entre personas sordas y
          oyentes a través del aprendizaje del lenguaje de señas.
        </p>
        <p>
          La plataforma ofrece herramientas interactivas y recursos educativos
          que permiten a los usuarios aprender, practicar y mejorar sus
          habilidades en el lenguaje de señas de manera accesible y efectiva.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="features-title text-center">
              Características Principales
            </h2>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <Carousel indicators={false} nextLabel="" prevLabel="">
              <Carousel.Item>
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Aprendizaje Interactivo</h3>
                    <p className="card-text">
                      Cursos y lecciones diseñados para facilitar el aprendizaje
                      del lenguaje de señas de manera práctica y efectiva.
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Traductor en Tiempo Real</h3>
                    <p className="card-text">
                      Herramienta para la traducción automática del lenguaje de
                      señas utilizando tecnologías avanzadas de reconocimiento.
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Recursos Educativos</h3>
                    <p className="card-text">
                      Vídeos instructivos, imágenes referenciales y artículos
                      educativos para apoyar el aprendizaje continuo.
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Comunidad</h3>
                    <p className="card-text">
                      Espacios para compartir experiencias, consejos y recursos
                      entre los usuarios de la plataforma.
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Compromiso Social</h3>
                    <p className="card-text">
                      Colaboración con organizaciones y eventos para promover la
                      conciencia y la inclusión de las personas sordas.
                    </p>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Equipo de Desarrollo</h2>
                <p className="card-text">
                  El equipo de desarrollo de SING LENGUAJE está formado por
                  profesionales apasionados por la inclusión y la educación
                  accesible. Trabajamos para mejorar continuamente la plataforma
                  y proporcionar una experiencia enriquecedora para todos
                  nuestros usuarios.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">¡Únete a Nosotros!</h2>
                <p className="card-text">
                  Únete a nuestra comunidad y sé parte del cambio. Juntos
                  podemos crear un mundo más inclusivo y accesible para todos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
