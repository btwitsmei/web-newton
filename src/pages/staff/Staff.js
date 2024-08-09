import React from "react";
import './Staff.css';

import staffImg from '../../assets/images/staff.png';
import logo from '../../assets/images/logo.png';
import contactImg from '../../assets/images/contacto.png';


export default function Staff() {



    return (
   
        <div className="homepage">
          <main className="main-content">
            <section className="staff">
              <div className="image-container">
                <img src={staffImg} alt="Carrusel de imágenes" className="carousel-image" />
                <div className="overlay">
                  <h2>El deporte es un medio fundamental para transmitir valores.</h2>
                  <br/>

                  <a href="/2023" class="button" className="about-button">
           
                  Conocenos
        </a>
                </div>
              </div>
              </section>

              <section className="jefa-section">
                    <div className="jefa-content">
                        
                    </div>
                </section>

                <section className="torneos-section">
                    <div className="torneos-content">
                        
                    </div>
                </section>
          
                <section className="caa-section">
                    <div className="caa-content">
                        
                    </div>
                </section>

                <section className="abd-section">
                    <div className="abd-content">
                        
                    </div>
                </section>
                <section className="df-section">
                    <div className="df-content">
                        
                    </div>
                </section>

                <section className="fg-section">
                    <div className="fg-content">
                        
                    </div>
                </section>

                <section className="nrt-section">
                    <div className="nrt-content">
                        
                    </div>
                </section>
                <section className="tv-section">
                    <div className="tv-content">
                        
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

    );
}