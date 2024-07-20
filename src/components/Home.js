import React from "react";

const Home = () => {
  return (
    <div className="home-container">
      <div className="jumbotron">
        <h1 className="display-4">
          Bienvenido a APRENDIZAJE DE LA LENGUA DE SEÑAS
        </h1>
        <p className="lead">
          Tu plataforma para aprender y traducir lenguaje de señas.
        </p>
        <hr className="my-4" />
        <p>Comienza explorando nuestros recursos:</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="/learn" role="button">
            Aprender Más
          </a>
          <a
            className="btn btn-secondary btn-lg ml-3"
            href="/traductor"
            role="button"
          >
            Traductor de Lenguaje de Señas
          </a>
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>¿Qué es SING LENGUAJE?</h2>
            <p>
              SING LENGUAJE es una plataforma diseñada para facilitar el
              aprendizaje y la traducción del lenguaje de señas. Nuestro
              objetivo es proporcionar herramientas interactivas y recursos
              educativos accesibles para todos.
            </p>
            <p>
              El lenguaje de señas es crucial para la comunicación efectiva con
              personas sordas o con dificultades auditivas. Aprenderlo promueve
              la inclusión y la igualdad de oportunidades.
            </p>
          </div>
          <div className="col-md-6">
            <h2>¿Por qué es importante aprender el lenguaje de señas?</h2>
            <ul>
              <li>Facilita la comunicación inclusiva con personas sordas.</li>
              <li>
                Promueve la comprensión cultural y la empatía hacia la comunidad
                sorda.
              </li>
              <li>
                Amplía las oportunidades educativas y laborales para personas
                sordas.
              </li>
              <li>
                Contribuye a la igualdad de acceso a la información y servicios.
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <h2>Recursos Adicionales</h2>
            <ul>
              <li>
                <a href="#">Vídeos tutoriales</a>
              </li>
              <li>
                <a href="#">Imágenes referenciales</a>
              </li>
              <li>
                <a href="#">Artículos educativos</a>
              </li>
            </ul>
          </div>
          <div className="col-md-12 mt-4">
            <h2>Aprender la lengua de señas</h2>
            <p>
              Aprender la lengua de señas es aprender otra lengua, con la
              diferencia de que para su emisión y recepción se utilizan canales
              diferentes a la audición y el habla articulada. Es un lenguaje que
              se percibe a través de la vista y requiere el uso de las manos
              como articuladores activos, el uso del espacio como lugar de
              articulación (estructura fonológica) y como referencia temporal.
              Para aprenderlo es necesario ejercitar la atención, la percepción
              y la memoria visual, así como la agilidad manual, uso del espacio,
              la expresión facial y corporal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
