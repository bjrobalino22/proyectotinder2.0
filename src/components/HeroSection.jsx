// src/components/HeroSection.jsx
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <h1>Tinder 2.0 para Mascotas</h1>
                <p>
                    Nuestra plataforma ayuda a encontrar la pareja perfecta para tu amigo peludo. 
                    Conecta, comparte y crea momentos inolvidables entre mascotas que buscan un nuevo compañero de aventuras.
                </p>
                <button 
                    className="cta-button" 
                    onClick={() => window.location.href = '/matchs'}
                >
                    Comienza ahora
                </button>
            </div>

            <div className="features-container">
                <h2>Características Destacadas</h2>
                <div className="feature">
                    <h3>Emparejamientos Personalizados</h3>
                    <p>Encuentra la mejor coincidencia para tu mascota según su personalidad y preferencias.</p>
                </div>
                <div className="feature">
                    <h3>Conexión Segura y Privada</h3>
                    <p>Tu información se mantiene segura mientras conectas con otros amantes de mascotas.</p>
                </div>
                <div className="feature">
                    <h3>Red Social para Amantes de Mascotas</h3>
                    <p>Únete a una comunidad de dueños de mascotas y comparte experiencias.</p>
                </div>
                {/* Agrega más características aquí si lo deseas */}
            </div>
        </div>
    );
};

export default HeroSection;
