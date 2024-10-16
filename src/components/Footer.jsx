// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <p>Bienvenido a Tinder 2.0 para Mascotas, la plataforma perfecta para encontrar a tu compañero peludo ideal.</p>
            <p>© 2024 Todos los derechos reservados Avashi´kol & BJM</p>
            <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>
        </div>
    );
};

export default Footer;
