import React from 'react';
import './Matchs.css'; // Asegúrate de crear este archivo para estilos

const Home = () => {
    return (
        <div className="home">
            <h1>Bienvenido a Tinder 2.0</h1>
            <div className="card-container">
                <div className="card">
                    <img src="https://via.placeholder.com/150" alt="Usuario" />
                    <h2>Nombre del Usuario</h2>
                    <p>Descripción breve del usuario.</p>
                    <div className="buttons">
                        <button className="like">❤️</button>
                        <button className="dislike">💔</button>
                    </div>
                </div>
                {/* Puedes añadir más tarjetas aquí */}
            </div>
        </div>
    );
};

export default Home;
