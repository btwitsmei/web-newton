import React from 'react';
import './Temp2023.css';
import bannerImage from '../../assets/images/temp_2023.png';
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
            </div>

            <section className="trofeo-section">
                    <div className="trofeo-content">
                        
                    </div>
                </section>

                <section className="one-section">
                    <div className="one-content">
                        
                    </div>
                </section>
            
                <section className="two-section">
                    <div className="two-content">
                        
                    </div>
                </section>

                <section className="tre-section">
                    <div className="tre-content">
                        
                    </div>
                </section>

                <section className="four-section">
                    <div className="four-content">
                        
                    </div>
                </section>

                <section className="cinc-section">
                    <div className="cinc-content">
                        
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
    );
}

export default Temp2023;
