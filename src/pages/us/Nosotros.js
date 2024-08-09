import React from "react";
import './Nosotros.css';

import usImg from '../../assets/images/nosotros.png';
import siguenosImage1 from '../../assets/images/siguenos_img1.png';
import siguenosImage2 from '../../assets/images/siguenos_img2.png';
import logo from '../../assets/images/logo.png';
import contactImg from '../../assets/images/contacto.png';


export default function Nosotros() {



    return (
        <div className='content'>
        <div className="homepage">
          <main className="main-content">
            <section className="carrusel">
              <div className="image-container">
                <img src={usImg} alt="Carrusel de imágenes" className="carousel-image" />
                <div className="overlay">
                  <h2>El deporte es un motor de crecimiento personal y profesional.</h2>
                  <button className="about-button">Conócenos</button>
                </div>
              </div>
              </section>

<section className="second-section">
  <div className="second-overlay">
    <h2>FILOSOFÍA IGUANAS</h2>
    <p>
    Nuestro objetivo es ayudar a los etudiantes a
desarrollar sus destrezas, y creemos que el
deporte es por excelencia un medio
fundamental para transmitir valores educativos.
    </p>
  </div>
  </section>
          
          <section className="siguenos">
            <h2>¡SÍGUENOS!</h2>
            <div className="images-container">
              <img src={siguenosImage1} alt="Siguénos Imagen 1" />
              <img src={siguenosImage2} alt="Siguénos Imagen 2" />
            </div>
            <div className="instagram">
              <p>@newtoniguanas</p>
            </div>
            </section>

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

</main>
</div>
</div>
    );
}