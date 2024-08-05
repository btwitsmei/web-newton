import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/images/logo.png'; // Asegúrate de que la ruta sea correcta

const Header = ({ view }) => {
  return (
    <header>
      <div className="navbar">
        <Link to="/">
          <img src={logo} alt="Newton Iguanas Logo" className="logo" />
        </Link>
        <nav>
          <ul>
            <li><Link to="/">INICIO</Link></li>
            <li><Link to="/nosotros">NOSOTROS</Link></li>
            <li><Link to="/staff">STAFF</Link></li>
            <li>
              <div className="dropdown">
                <button className="dropbtn">TEMPORADAS</button>
                <div className="dropdown-content">
                  <Link to="/2023">2023</Link>
                  <Link to="/2024">2024</Link>
                </div>
              </div>
            </li>
            <li><Link to="/contacto">CONTÁCTANOS</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
