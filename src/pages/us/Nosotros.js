import React from "react";
import './Nosotros.css';

import usImg from '../../assets/images/nosotros.png'; // Imagen de fondo para la sección principal
import contactImg from '../../assets/images/contacto.png'; // Imagen de fondo para la sección de contacto
import logo from '../../assets/images/logo.png'; // Logo de Iguanas

export default function Nosotros() {
    return (
        <div className="nosotros-content">
            <main className="main-content">
                {/* Sección de Imagen Principal */}
                <section className="image-section">
                    <div className="image-container">
                        <img src={usImg} alt="Nosotros" className="carousel-image" />
                        <div className="overlay">
                            <h2>El deporte es un motor de crecimiento personal y profesional.</h2>
                        </div>
                    </div>
                </section>
                <section className="second-section">
  <div className="second-overlay">
    <h2>FILOSOFÍA IGUANAS</h2>
    <p>
    Nuestro objetivo es ayudar a los estudiantes a desarrollar sus destrezas, y creemos que el
    deporte es por excelencia un medio fundamental para transmitir valores educativos.
    </p>
  </div>
  </section>

             

                {/* Sección Nuestro Propósito */}
                <section className="purpose-section">
                    <div className="purpose-content">
                        
                    </div>
                </section>

                {/* Sección Por qué Iguanas */}
                <section className="why-iguanas-section">
                    <div className="why-iguanas-content">
                        
                    </div>
                </section>

                {/* Sección Contáctanos */}
                <section className="contact-section">
                    <div className="contact-background">
                        <img src={contactImg} alt="Contáctanos" />
                    </div>
                    <div className="contact-content">
                        <img src={logo} alt="Iguanas Logo" />
                        <div className="contact-info">
                            <h2>CONTÁCTANOS</h2>
                            <p>G-mail: sports.camp@newton.edu.pe</p>
                            <p>iguana.wellness@newton.edu.pe</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
