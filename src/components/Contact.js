import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes añadir lógica para enviar los datos a través de un servicio de backend o realizar otras acciones
    console.log(formData);
  };

  return (
    <div className="contact-us-container">
      <h2 className="contact-us-title">Contáctanos</h2>
      <form onSubmit={handleSubmit} className="contact-us-form">
        <div className="form-group">
          <label htmlFor="name">Tu nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Tu correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Asunto:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="form-control"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
