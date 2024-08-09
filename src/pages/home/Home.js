import React from "react";
//import { useNavigate } from "react-router-dom";
import './Home.css';

import homeImg from '../../assets/images/home1.png';
import siguenosImage1 from '../../assets/images/siguenos_img1.png';
import siguenosImage2 from '../../assets/images/siguenos_img2.png';
import logo from '../../assets/images/logo.png';
import contactImg from '../../assets/images/contacto.png';
import nosotrosIcon from "../../assets/images/nosotros_icon.png";
import staffIcon from "../../assets/images/staff_icon.png"
import tempIcon from "../../assets/images/temp_icon.png"
import contactIcon from "../../assets/images/contact_icon.png"


export default function Home() {

    //const navigate = useNavigate();

    return (
        <div className='content'>
        <div className="homepage">
          <main className="main-content">
            <section className="carrusel">
              <div className="image-container">
                <img src={homeImg} alt="Carrusel de imágenes" className="carousel-image" />
                <div className="overlay">
                  <h2>Rompemos barreras, superamos expectativas.</h2><br/>

                  <a href="/nosotros" class="button" className="about-button">
           
                  Sobre nosotros
        </a>
                  
                </div>
              </div>
              </section>
              <div class="button-bar">
        <a href="/nosotros" class="button">
            <img src={nosotrosIcon} alt="Nosotros"/>
            Nosotros
        </a>
        <a href="/staff" class="button">
            <img src={staffIcon} alt="Staff"/>
            Staff
        </a>
        <a href="/2024" class="button">
            <img src={tempIcon} alt="Temporadas"/>
            Temporadas
        </a>
        <a href="/contacto" class="button">
            <img src={contactIcon} alt="Contacto"/>
            Contacto
        </a>
    </div>

<section className="second-section">
  <div className="second-overlay">
    <h2>FILOSOFÍA IGUANAS</h2>
    <p>
      Alineamos metodología deportiva con el desarrollo integral del ser humano,
      para así formar niñas, niños y jóvenes con valores y en constante evolución deportiva.
    </p>
  </div>
  </section>
          
          <section className="siguenos">
            <h2>¡SÍGUENOS!</h2>
            <div className="images-container">
              <img src={siguenosImage1} alt="Siguénos Imagen 1" /></div>
              <br/>
              <div className="images-container">
              <img src={siguenosImage2} alt="Siguénos Imagen 2" />
            </div><br/>
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