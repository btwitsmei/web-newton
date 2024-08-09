import React from 'react';
import './Temp2023.css';
import bannerImage from '../../assets/images/temp_2023.png';
import logoImage from '../../assets/images/logo.png';
import trophyImage from '../../assets/images/trofeo.png';
import image1 from '../../assets/images/logo_adca.png';
import image2 from '../../assets/images/logo_adecore.png';
import logo from '../../assets/images/logo.png';
import contactImg from '../../assets/images/contacto.png';

const Temp2023 = () => {
    return (
        <main>
            <div className="temp2023">
                <div className="banner">
                    <img src={bannerImage} alt="Banner 2023" className="banner-image" />
                    <div className="overlay2023">
                        <div className="text-arrow-box">
                            <h2>NUESTRO 2023</h2>
                        </div>
                        <div className="arrow-box">
                            <div className="arrow"></div>
                        </div>
                    </div>
                </div>
                
                <div className="container">
                    <div className="content">
                        <div className="text-section">
                            <div className="logo-container">
                                <img src={logoImage} alt="Logo" className="logo-overlay" />
                                <h3>
                                    Este año tuvimos la oportunidad de alcanzar nuestra mejor participación a nivel competitivo, 
                                    logrando más de <strong>20</strong> reconocimientos en torneos escolares, nacionales e internacionales.
                                </h3>
                            </div>
                        </div>

                        <div className="trophy-section">
                            <img src={trophyImage} alt="Trofeo" className="trophy-image" />
                            <div className="additional-images">
                                <img src={image1} alt="Logo 1" className="logo-image" />
                                <img src={image2} alt="Logo 2" className="logo-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
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
    );
}

export default Temp2023;
