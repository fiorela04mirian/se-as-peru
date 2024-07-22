import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h5>Información de Contacto</h5>
            <p>Universidad Nacional de Moquegua</p>
            <p>Dirección: Av. Simón Bolívar s/n, Moquegua</p>
            <p>Teléfono: +51 123 456 789</p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h5>Redes Sociales</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://www.facebook.com/unam.pe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/unam_pe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/unam-pe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/unam.pe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <h5>Enlaces Útiles</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Política de Privacidad</a>
              </li>
              <li>
                <a href="#">Términos de Servicio</a>
              </li>
              <li>
                <a href="#">Acerca de Nosotros</a>
              </li>
              <li>
                <a href="#">Contáctanos</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12 text-center">
            <p>
              &copy; {new Date().getFullYear()} Universidad Nacional de Moquegua
              - Curso IHC
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
