import React from 'react';
import { BiSolidCart } from "react-icons/bi";
import { BiSolidReceipt } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";

import logo from "../assets/images/logo.png";
import "./Header.css";

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo-container">
            <img src={logo} alt="Logo Iguanas" className="logo" />
            <div className="logo-text">
              <span>NEWTON</span>
              <span>IGUANAS</span>
            </div>
          </div>
          <ul className="nav-links">
            <li><a href="#inicio">INICIO</a></li>
            <li><a href="#nosotros">NOSOTROS</a></li>
            <li><a href="#staff">STAFF</a></li>
            <li className="dropdown">
              <a href="#temporadas" className="dropbtn">TEMPORADAS</a>
              <div className="dropdown-content">
                <a href="#2023">2023</a>
                <a href="#2024">2024</a>
              </div>
            </li>
            <li><a href="#contactanos">CONTÁCTANOS</a></li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;