// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Pets from './components/Pets';
import Contact from './components/Contact';
import Help from './components/Help';
import Footer from './components/Footer';
import Login from './components/Login';
import Matchs from './components/Matchs'
import './App.css';

const App = () => {
    return (
        <Router>
            <div id="root">
                <Navbar />
                <main>
                    <Routes>
                        {/* Ruta de la página principal */}
                        <Route path="/" element={<HeroSection />} />
                        {/* Rutas de las secciones */}
                        <Route path="/about" element={<About />} />
                        <Route path="/pets" element={<Pets />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/help" element={<Help />} />
                        {/* Ruta de la página de inicio de sesión */}
                        <Route path="/login" element={<Login />} />
                        <Route path="/matchs" element={<Matchs/>} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
