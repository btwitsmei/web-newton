import React from 'react';
import './Contact.css';
import logo from '../../assets/images/logo.png';
import contactImg from '../../assets/images/contacto.png';

const Contact = () => {
  return (
    <section className="contact">
    <div className="background-image">
      <img src={contactImg} alt="Contact Background" />
    </div>
    <div className="contact-content">
      <img src={logo} alt="Iguanas Logo" />
      <div className="contact-info">
        <h2>CONTACTO</h2>
        <p>G-mail: sports.camp@newton.edu.pe</p>
        <p>iguana.wellness@newton.edu.pe</p>
      </div>
    </div>
  </section>
  );
};

export default Contact;
