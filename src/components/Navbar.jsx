// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link
import './Navbar.css';
import logo from '../imagenes/logo1.webp'; // Asegúrate de importar tu logo

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="navbar-title">
                <div className="navbar-logo-container">
                    <img src={logo} alt="Logo" className="navbar-logo" />
                </div>
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                    Tinder 2.0 para Mascotas
                </Link>
            </h1>
            <ul className="navbar-menu">
                <li>
                    <Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>Sobre Nosotros</Link>
                </li>
                <li>
                    <Link to="/pets" style={{ textDecoration: 'none', color: 'white' }}>Mascotas</Link>
                </li>
                <li>
                    <Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}>Contacto</Link>
                </li>
                <li>
                    <Link to="/help" style={{ textDecoration: 'none', color: 'white' }}>Ayuda</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
